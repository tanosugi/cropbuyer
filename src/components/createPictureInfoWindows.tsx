import { Image } from "@aws-amplify/ui-react";
import { InfoWindow } from "@react-google-maps/api";
import { Storage } from "aws-amplify";
import exifr from "exifr";
import { ReactElement, useEffect, useState } from "react";

const CreatePictureInfoWindows = (): ReactElement => {
  const [pictures, setPictures] = useState<
    { name: string; lat: number; lng: number }[]
  >([]);
  const loadLatLngFromPicture = async () => {
    const pictureNames = ["./rf1.jpg", "./rf2.jpg", "./rf3.jpg"];
    await pictureNames.forEach(async (pictureName: string) => {
      let { latitude: lat, longitude: lng } = await exifr.gps(pictureName);
      let { CreateDate } = await exifr.parse(pictureName, {
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
  useEffect(() => {
    // get the users current location on intial login
    loadLatLngFromPicture();
    Storage.list("uploaded/") // for listing ALL files without prefix, pass '' instead
      .then((result) => console.log(result));
  }, []);
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
