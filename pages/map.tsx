import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import CreateAutocomplete from "components/createAutocomplete";
import CreateDrawingManager from "components/createDrawingManager";
import CreatePictureInfoWindows from "components/createPictureInfoWindows";
import CreatePolygons from "components/createPolygons";
import Layout from "layout/layout";
import { useEffect, useState } from "react";
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
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  const mapOnLoad = async (mapInstance: google.maps.Map) => {
    addTiltRotateControl(mapInstance);
  };

  return (
    isLoaded && (
      <Authenticator>
        <Flex height="95vh" direction="column" gap="0" margin="0">
          <Layout>
            <MapControlView
              overrides={{
                SwitchField35313346: {
                  value: isShowFarmInfo,
                  onChange: (
                    event: React.ChangeEventHandler<HTMLInputElement>
                  ) => {
                    setIsShowFarmInfo(!isShowFarmInfo);
                    // console.log("isShowFarmInfo:", isShowFarmInfo);
                  },
                },
                SwitchField35313347: {
                  value: isShowPictures,
                  onChange: (e: React.ChangeEventHandler<HTMLInputElement>) => {
                    setIsShowPictures(!isShowPictures);
                    // console.log("isShowPictures:", isShowPictures);
                  },
                },
                SwitchField35313348: {
                  value: isYearly,
                  onChange: (e: React.ChangeEventHandler<HTMLInputElement>) => {
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
                  onChange: (value: number) => {
                    setYearToShow(value);
                    // console.log("yearToShow:", yearToShow);
                  },
                },
              }}
            />
            <View grow={1} height="100px">
              <GoogleMap
                onLoad={mapOnLoad}
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={15}
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
