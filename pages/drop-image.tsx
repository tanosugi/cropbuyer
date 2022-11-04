import { S3ProviderListOutput, Storage } from "@aws-amplify/storage";
import { AmplifyS3Album } from "@aws-amplify/ui-react/legacy";
import * as CSS from "csstype";
import { useCallback, useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

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
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log("acceptedFiles:", acceptedFiles);
    uploadImage(acceptedFiles[0]);
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

export default DropImage;
