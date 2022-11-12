import { Image } from "@aws-amplify/ui-react";
import { InfoWindow } from "@react-google-maps/api";
import { DataStore, Storage } from "aws-amplify";
import exifr from "exifr";
import { Picture } from "models";
import { ReactElement, useEffect, useState } from "react";

const CreatePictureInfoWindows = (): ReactElement => {
  const [urls, setUrls] = useState<string[]>([]);
  const [pictures, setPictures] = useState<
    { name: string; lat: number; lng: number }[]
  >([]);
  const loadLatLngFromPicture = async () => {
    console.log("urls in loadLatLngFromPicture:", urls);
    const pictureNames = ["./rf1.jpg", "./rf2.jpg", "./rf3.jpg"];
    await urls.forEach(async (pictureName: string) => {
      const resp = await fetch(pictureName);
      console.log("resp:", resp);
      const respBlob = await resp.blob();
      console.log("respBlob:", respBlob);
      const pictureFile = await new File([respBlob], "image.jpg");
      console.log("pictureFile:", pictureFile);
      console.log("pictureName:", pictureName);
      const { latitude: lat, longitude: lng } = await exifr.gps(pictureFile);
      console.log("lat,lng:", lat, lng);
      let { CreateDate } = await exifr.parse(pictureFile, {
        pick: ["CreateDate"],
      });
      console.log(
        "CreateDate:",
        CreateDate.getFullYear(),
        CreateDate.toLocaleDateString()
      );
      // await console.log("lat,lng:", lat, lng);
      await setPictures((prevPicture) => {
        console.log("prevPicture:", prevPicture);
        return [...prevPicture, { name: pictureName, lat: lat, lng: lng }];
      });
      // await console.log("pictures:", pictures);
    });
    // await console.log("pictures all:", pictures);
  };
  const loadPictures = async () => {
    const listPictures = await Storage.list("uploaded/");
    const respPictures = await DataStore.query(Picture);
    console.log("respPictures:", respPictures);
    // console.log("listPictures:", listPictures);
    const retUrls = await Promise.all(
      listPictures.map(async (item) => await Storage.get(item.key || ""))
    );
    // console.log("retUrls:", retUrls);
    await setUrls(retUrls);
    await console.log("urls:", urls);
  };
  useEffect(() => {
    // get the users current location on intial login
    loadPictures();
    console.log("urls:", urls);
  }, []);
  useEffect(() => {
    loadLatLngFromPicture();
  }, [urls]);
  return (
    pictures && (
      <>
        {pictures.map((picture) => (
          <InfoWindow
            key={picture.name}
            position={{ lat: picture.lat, lng: picture.lng }}
            options={{ maxWidth: 250 }}
          >
            <Image
              src={picture.name}
              alt={undefined}
              maxWidth="100px"
              maxHeight="100px"
            />
          </InfoWindow>
        ))}
      </>
    )
  );
};

export default CreatePictureInfoWindows;
