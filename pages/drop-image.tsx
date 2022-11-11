import { S3ProviderListOutput, Storage } from "@aws-amplify/storage";
import { AmplifyS3Album } from "@aws-amplify/ui-react/legacy";
import * as CSS from "csstype";
import { useCallback, useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";

const DropImage = () => {
  const [photoList, setPhotoList] = useState<S3ProviderListOutput>([]);
  useEffect(() => {
    updateList();
  }, []);
  const updateList = async () => {
    // const list = await Storage.list("photos/");
    // Storage.list("uploaded/").then((result) => console.log("result", result));
    const list = await Storage.list("uploaded/");
    await setPhotoList(list);
  };
  const uploadImage = async (file: FileWithPath) => {
    const result = await Storage.put("uploaded/" + file.name, file);
    console.log("result:", result);
  };
  const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
    const resizedBlob = dataURIToBlob(await resizeFile(acceptedFiles[0]));
    var resizedFile = new File(
      [resizedBlob],
      "resized_" + acceptedFiles[0].name
    );
    console.log("acceptedFiles:", acceptedFiles);
    console.log("resizedFile:", resizedFile);
    await uploadImage(acceptedFiles[0]);
    await uploadImage(resizedFile);
    // const { latitude: lat, longitude: lng } = await exifr.gps(acceptedFiles[0]);
    // console.log("lat,lng:", lat, lng);
    // let { CreateDate } = await exifr.parse(acceptedFiles[0], {
    //   pick: ["CreateDate"],
    // });
    // console.log(
    //   "CreateDate:",
    //   CreateDate.getFullYear(),
    //   CreateDate.toLocaleDateString()
    // );
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const files = acceptedFiles.map((file: FileWithPath) => {
    console.log("file:", file);
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });
  console.log("photoList:", photoList);
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

const dropzoneStyles: CSS.Properties = {
  border: "dashed 3px #eee",
  borderRadius: "5%",
  paddingTop: "30px",
  textAlign: "center",
  width: "100px",
  height: "100px",
};

const dropzoneActive = {
  border: "dashed 3px green",
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
const dataURIToBlob = (dataURI: string) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};
export default DropImage;
