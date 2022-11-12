import { Storage } from "@aws-amplify/storage";
import { AmplifyS3Album } from "@aws-amplify/ui-react/legacy";
import { DataStore } from "aws-amplify";
import config from "aws-exports";
import exifr from "exifr";
import { Picture } from "models";
import { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";
import { dropzoneActive, dropzoneStyles } from "styles/dropzoneStyles";
import { dataURIToBlob } from "utils/dataURIToBlob";

const DropImage = () => {
  const uploadImage = async (file: FileWithPath, fileName: string) => {
    const result = await Storage.put(fileName, file);
    // console.log("result:", result);
  };
  const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach(async (acceptedFile: FileWithPath) => {
      const fileName = acceptedFile.name;
      const resizedBlob = dataURIToBlob(await resizeFile(acceptedFile));
      let resizedFile = new File([resizedBlob], acceptedFile.name);
      // console.log("acceptedFiles:", acceptedFiles);
      // console.log("resizedFile:", resizedFile);
      await uploadImage(acceptedFile, "raw/" + fileName);
      await uploadImage(resizedFile, "resized/" + fileName);
      const respExifrGps = await exifr.gps(acceptedFile);
      // console.log("respExifrGps:", respExifrGps);
      if (respExifrGps?.latitude && respExifrGps?.longitude) {
        const { latitude: lat, longitude: lng } = respExifrGps;
        // console.log("lat,lng:", lat, lng);
      }
      const respExifrParse = await exifr.parse(acceptedFile, {
        pick: ["CreateDate"],
      });
      if (respExifrParse?.CreateDate) {
        const { CreateDate } = respExifrParse;
        // console.log(
        //   "CreateDate:",
        //   CreateDate.getFullYear(),
        //   CreateDate.toLocaleDateString(),
        //   CreateDate
        // );
      }
      // const picture = new Picture({});
      console.log(
        "respExifrParse?.CreateDate.toISOString():",
        respExifrParse?.CreateDate.toISOString()
      );
      const picture = new Picture({
        s3KeyRaw: `raw/${fileName}`,
        s3KeyResized: `resized/${fileName}`,
        urlRaw: `https://${config.aws_user_files_s3_bucket}.s3.${config.aws_user_files_s3_bucket_region}.amazonaws.com/public/raw/${fileName}`,
        urlResized: `https://${config.aws_user_files_s3_bucket}.s3.${config.aws_user_files_s3_bucket_region}.amazonaws.com/public/resized/${fileName}`,
        lat: respExifrGps?.latitude,
        lng: respExifrGps?.longitude,
        createDate: respExifrParse?.CreateDate.toISOString(),
        createYear: respExifrParse?.CreateDate?.getFullYear(),
      });
      console.log("picture:", picture);
      await DataStore.save(picture);
    });
    // console.log("respExifrParse:", respExifrParse);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <section className="container">
      <div
        {...getRootProps()}
        style={
          isDragActive
            ? { ...dropzoneStyles, ...dropzoneActive }
            : dropzoneStyles
        }
      >
        <input {...getInputProps()} />
        <p>ここに</p>
      </div>
      <AmplifyS3Album path={"/"} />
    </section>
  );
};

const resizeFile = (file: File) =>
  new Promise<string>((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(String(uri));
      },
      "base64"
    );
  });

export default DropImage;
