import { Authenticator, Grid, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import CreateAutocomplete from "components/createAutocomplete";
import CreateDrawingManager from "components/createDrawingManager";
import CreatePictureInfoWindows from "components/createPictureInfoWindows";
import CreatePolygons from "components/createPolygons";
import Layout from "layout/layout";
import { useEffect, useState } from "react";
import { addTiltRotateControl } from "utils/addTiltRotateControl";
const containerStyle = {
  height: "90vh",
  width: "100%",
};
const MyComponent = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [polygons, setPolygons] = useState([
    "25.774,-80.19;18.466,-66.118;32.321,-64.757;25.774,-80.19;",
  ]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY),
    libraries: ["places", "drawing"],
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
        <Layout>
          <Grid templateColumns="1fr" templateRows="100vh">
            <View>
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
                <CreatePolygons polygons={polygons} />
                <CreatePictureInfoWindows />
              </GoogleMap>
            </View>
          </Grid>
        </Layout>
      </Authenticator>
    )
  );
};

export default MyComponent;
