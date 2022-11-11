import { Storage } from "@aws-amplify/storage";
import { AmplifyS3Album } from "@aws-amplify/ui-react/legacy";
import { DataStore } from "aws-amplify";
import exifr from "exifr";
import { Picture } from "models";
import { config } from "process";
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
      const resizedBlob = dataURIToBlob(await resizeFile(acceptedFile));
      let resizedFile = new File([resizedBlob], acceptedFile.name);
      // console.log("acceptedFiles:", acceptedFiles);
      // console.log("resizedFile:", resizedFile);
      await uploadImage(acceptedFile, "raw/" + acceptedFile.name);
      await uploadImage(resizedFile, "resized/" + resizedFile.name);
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
      await DataStore.save(
        new Picture({
          s3KeyRaw: ,
          s3KeyResized: "",
          urlRaw: config?.aws_app,
          urlResized: "",
          lat: respExifrGps.latitude,
          lng: respExifrGps.longitude,
          createDate: respExifrParse?.CreateDate,
          createYear: respExifrParse?.CreateDate?.getFullYear(),
        })
      );
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
      <AmplifyS3Album path={"uploaded/"} />
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
