import { Storage } from "@aws-amplify/storage";
import { Authenticator } from "@aws-amplify/ui-react";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { DataStore } from "aws-amplify";
import config from "aws-exports";
import exifr from "exifr";
import useQueryPictures from "hooks/useQueryPictures";
import Layout from "layout/layout";
import { Picture } from "models";
import { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";
import { dropzoneActive, dropzoneStyles } from "styles/dropzoneStyles";
import { dataURIToBlob } from "utils/dataURIToBlob";

const AddImages = () => {
  const { pictures } = useQueryPictures();
  const uploadImage = async (file: FileWithPath, fileName: string) => {
    const result = await Storage.put(fileName, file);
  };
  const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach(async (acceptedFile: FileWithPath) => {
      const fileName = acceptedFile.name;
      const resizedBlob = dataURIToBlob(await resizeFile(acceptedFile));
      let resizedFile = new File([resizedBlob], acceptedFile.name);
      await uploadImage(acceptedFile, "raw/" + fileName);
      await uploadImage(resizedFile, "resized/" + fileName);
      const respExifrGps = await exifr.gps(acceptedFile);
      if (respExifrGps?.latitude && respExifrGps?.longitude) {
        const { latitude: lat, longitude: lng } = respExifrGps;
      }
      const respExifrParse = await exifr.parse(acceptedFile, {
        pick: ["CreateDate"],
      });
      if (respExifrParse?.CreateDate) {
        const { CreateDate } = respExifrParse;
      }
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
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Authenticator>
      <Layout>
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
            <p>Drag & Drop Picture or Click Here to Upload</p>
          </div>
          {/* <AmplifyS3Album path={"resized/"} picker={false} /> */}
          {pictures?.map((picture) => (
            <AmplifyS3Image
              key={picture?.s3KeyResized || ""}
              imgKey={picture?.s3KeyResized || ""}
            />
          ))}
        </section>
      </Layout>
    </Authenticator>
  );
};

const resizeFile = (file: File) =>
  new Promise<string>((resolve) => {
    Resizer.imageFileResizer(
      file,
      100,
      100,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(String(uri));
      },
      "base64"
    );
  });

export default AddImages;
