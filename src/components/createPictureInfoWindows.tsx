// import { Image } from "@aws-amplify/ui-react";
// import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { InfoWindow } from "@react-google-maps/api";
import { DataStore } from "aws-amplify";
import { Picture } from "models";
import { ReactElement, useEffect, useState } from "react";

const CreatePictureInfoWindows = (): ReactElement => {
  const [pictures, setPictures] = useState<Picture[]>();
  const loadPictures = async () => {
    const respPictures = await DataStore.query(Picture);
    console.log("respPictures:", respPictures);
    // console.log("listPictures:", listPictures);
    setPictures(respPictures);
  };
  useEffect(() => {
    // get the users current location on intial login
    loadPictures();
  }, []);
  return (
    <>
      {pictures &&
        pictures.map((picture: Picture) => {
          console.log("picture.s3KeyResized:", picture.s3KeyResized);
          return (
            <InfoWindow
              key={picture.s3KeyResized}
              position={{ lat: picture.lat || 0, lng: picture.lng || 0 }}
              options={{ maxWidth: 250 }}
            >
              {/* <>{"abc"}</> */}

              {/* <View height="100px"> */}
              {/* {"abc"} */}
              <AmplifyS3Image
                style={{ height: "100px" }}
                imgKey={picture.s3KeyResized || ""}
                // style={{ width: "10px", height: "10px" }}
              />
              {/* </View> */}
            </InfoWindow>
          );
        })}
    </>
    //      {pictures.map((picture) =>
    // (
    //           <>
    //             {"abc"}{console.log('picture.s3KeyResized:', picture.s3KeyResized);}
    //             {/* <AmplifyS3Image
    //               key={picture.s3KeyResized}
    //               maxWidth="100px"
    //               maxHeight="100px"
    //             /> */}
    //             {/* <Image
    //             src={picture.name}
    //             alt={undefined}
    //             maxWidth="100px"
    //             maxHeight="100px"
    //           /> */}
    //           </>
    //         </InfoWindow>)
    //         )}
    //     </>
    //   )
  );
};

export default CreatePictureInfoWindows;
