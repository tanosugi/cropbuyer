// import { Image } from "@aws-amplify/ui-react";
// import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { InfoWindow } from "@react-google-maps/api";
import { DataStore, Predicates } from "aws-amplify";
import { Picture } from "models";
import { FC, ReactElement, useEffect, useState } from "react";

const CreatePictureInfoWindows: FC<{
  isYearly: boolean;
  yearToShow: number;
}> = ({ isYearly, yearToShow }): ReactElement => {
  const [pictures, setPictures] = useState<Picture[]>();
  const loadPictures = async () => {
    const respPictures = await DataStore.query(
      Picture,
      isYearly ? (p) => p.createYear("eq", yearToShow) : Predicates.ALL
    );
    // await console.log("respPictures:", respPictures);
    // console.log("listPictures:", listPictures);
    await setPictures(respPictures);
  };
  useEffect(() => {
    // get the users current location on intial login
    loadPictures();
    const subscription = DataStore.observe(Picture).subscribe(loadPictures);
    return () => subscription.unsubscribe();
    // console.log("yearToShow:", yearToShow);
  }, [isYearly, yearToShow]);
  return (
    <>
      {pictures &&
        pictures.map((picture: Picture) => {
          // console.log("picture.s3KeyResized:", picture.s3KeyResized);
          // console.log(
          //   "!isYearly || yearToShow == picture?.createYear:",
          //   picture?.s3KeyRaw,
          //   !isYearly || yearToShow == picture?.createYear
          // );
          return !isYearly || yearToShow == picture?.createYear ? (
            <InfoWindow
              key={picture.s3KeyResized}
              position={{ lat: picture.lat || 0, lng: picture.lng || 0 }}
              options={{ maxWidth: 250 }}
            >
              <AmplifyS3Image
                style={{ height: "100px" }}
                imgKey={picture.s3KeyResized || ""}
              />
              {/* </View> */}
            </InfoWindow>
          ) : (
            <></>
          );
        })}
    </>
  );
};

export default CreatePictureInfoWindows;
