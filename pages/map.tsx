import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import CreateAutocomplete from "components/createAutocomplete";
import CreateDrawingManager from "components/createDrawingManager";
import CreatePictureInfoWindows from "components/createPictureInfoWindows";
import CreatePolygons from "components/createPolygons";
import Layout from "layout/layout";
import React, { useEffect, useState } from "react";
import { MapControlView } from "ui-components";
import { addTiltRotateControl } from "utils/addTiltRotateControl";
const containerStyle = {
  height: "100%",
  width: "100%",
};
const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places", "drawing"];
// const libraries = ["places", "drawing"];
const MyComponent = () => {
  const [isShowFarmInfo, setIsShowFarmInfo] = useState(true);
  const [isShowPictures, setIsShowPictures] = useState(true);
  const [isYearly, setIsYearly] = useState(false);
  const [yearToShow, setYearToShow] = useState<number>(2022);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [polygons, setPolygons] = useState([
    "25.774,-80.19;18.466,-66.118;32.321,-64.757;25.774,-80.19;",
  ]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY),
    libraries: libraries,
    mapIds: [String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID)],
  });
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     setCoordinates({ lat: latitude, lng: longitude });
    //   }
    // );
    setCoordinates({ lat: 39.824632, lng: 140.072084 });
  }, []);
  const mapOnLoad = async (mapInstance: google.maps.Map) => {
    // const mapOnLoad = async (mapInstance) => {
    addTiltRotateControl(mapInstance);
  };
  const onChangeSliderField: any = (value: number) => {
    // onChange: (value) => {
    setYearToShow(value);
    return;
    // console.log("yearToShow:", yearToShow);
  };
  return (
    isLoaded && (
      <Authenticator>
        <Flex height="95vh" direction="column" gap="0" margin="0">
          <Layout>
            <MapControlView
              overrides={{
                SwitchField35313346: {
                  isChecked: isShowFarmInfo,
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    // onChange: (event) => {
                    setIsShowFarmInfo(!isShowFarmInfo);
                    return;
                    // console.log("isShowFarmInfo:", isShowFarmInfo);
                  },
                },
                SwitchField35313347: {
                  isChecked: isShowPictures,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    // onChange: (e) => {
                    setIsShowPictures(!isShowPictures);
                    // console.log("isShowPictures:", isShowPictures);
                  },
                },
                SwitchField35313348: {
                  isChecked: isYearly,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    // onChange: (e) => {
                    setIsYearly(!isYearly);
                    // console.log("isYearly:", isYearly);
                  },
                },
                SliderField: {
                  isDisabled: !isYearly,
                  isValueHidden: !isYearly,
                  value: yearToShow,
                  min: 2015,
                  max: 2023,
                  onChange: onChangeSliderField,
                },
              }}
            />
            <View grow={1} height="100px">
              <GoogleMap
                onLoad={mapOnLoad}
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={15}
                mapTypeId="satellite"
                options={{
                  mapId: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID),
                }}
              >
                <CreateAutocomplete setCoordinates={setCoordinates} />
                <CreateDrawingManager
                  polygons={polygons}
                  setPolygons={setPolygons}
                />
                <CreatePolygons
                  isShowFarmInfo={isShowFarmInfo}
                  isYearly={isYearly}
                  yearToShow={yearToShow}
                />
                {isShowPictures && (
                  <CreatePictureInfoWindows
                    isYearly={isYearly}
                    yearToShow={yearToShow}
                  />
                )}
              </GoogleMap>
            </View>
          </Layout>
        </Flex>
      </Authenticator>
    )
  );
};

export default MyComponent;
