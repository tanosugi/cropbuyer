import { Grid, Image, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import {
  Autocomplete,
  DrawingManager,
  GoogleMap,
  InfoWindow,
  Polygon,
  useLoadScript,
} from "@react-google-maps/api";
import exifr from "exifr";
import { useEffect, useState } from "react";

const libraries = ["places", "drawing", "marker"];
const id = ["6e120bcd575d29f7"];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const polygonStrToLatLng = (polygonStr: string) => {
  // console.log("polygonStr:", polygonStr);
  const latAndLngArray = polygonStr.split(";");
  // console.log("latAndLngArray:", latAndLngArray);
  let ret: { lat: number; lng: number }[] = [];
  latAndLngArray.forEach((item: string) => {
    if (item == "") {
      return;
    }
    const latAndLng = item.split(",");
    // console.log("latAndLng:", latAndLng);
    ret.push({ lat: parseFloat(latAndLng[0]), lng: parseFloat(latAndLng[1]) });
  });
  // console.log("ret:", ret);
  return ret;
};

export default function Create() {
  const [pictures, setPictures] = useState<
    { name: string; lat: number; lng: number }[]
  >([]);
  const [polygons, setPolygons] = useState([
    "25.774,-80.19;18.466,-66.118;32.321,-64.757;25.774,-80.19;",
  ]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [map, setMap] = useState();
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete>();
  const onLoad = (autoC: google.maps.places.Autocomplete) =>
    setAutocomplete(autoC);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY),
    libraries: libraries,
    mapIds: id,
    v: "beta",
  });
  const onPlaceChanged = () => {
    // console.log("autocomplete:", autocomplete);
    const lat = autocomplete?.getPlace()?.geometry?.location?.lat() || 0;
    const lng = autocomplete?.getPlace()?.geometry?.location?.lng() || 0;
    setCoordinates({ lat, lng });
  };
  const loadLatLngFromPicture = async () => {
    let { latitude: lat, longitude: lng } = await exifr.gps("./rf1.jpg");
    console.log("lat,lng:", lat, lng);
    await setPictures([{ name: "./rf1.jpg", lat: lat, lng: lng }]);
    await console.log("pictures:", pictures);
  };
  useEffect(() => {
    // get the users current location on intial login
    loadLatLngFromPicture();
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log("{ latitude, longitude }:", { latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  const onLoadDrawingManager = (drawingManager) => {
    console.log(drawingManager);
  };

  // const onLoadPolygon = (polygon) => {
  //   console.log("onLoadPolygon: ", polygon);
  // };
  const onPolygonComplete = (polygon) => {
    console.log(polygon);
    var coordStr = "";
    for (var i = 0; i < polygon.getPath().getLength(); i++) {
      coordStr += polygon.getPath().getAt(i).toUrlValue(6) + ";";
    }
    // console.log(coordStr);
    setPolygons([...polygons, coordStr]);
    // console.log("polygons:", polygons);
  };
  const createPolygonComponents = () => {
    // console.log("polygons:", polygons);
    const ret = polygons.map((item: string) => {
      const paths = polygonStrToLatLng(item);
      // console.log("paths:", paths);
      return (
        <Polygon
          // onLoad={onLoadPolygon}
          paths={paths}
          options={options}
        />
      );
    });
    // console.log("createPolygonComponents ret:", ret);
    return ret;
  };
  const mapOnLoad = async (mapInstance: google.maps.Map) => {
    const buttons: [string, string, number, google.maps.ControlPosition][] = [
      ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
      ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
      ["Tilt Down", "tilt", 20, google.maps.ControlPosition.BOTTOM_CENTER],
      ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
    ];

    buttons.forEach(([text, mode, amount, position]) => {
      const controlDiv = document.createElement("div");
      const controlUI = document.createElement("button");

      controlUI.classList.add("ui-button");
      controlUI.innerText = `${text}`;
      controlUI.addEventListener("click", () => {
        adjustMap(mode, amount);
      });
      controlDiv.appendChild(controlUI);
      mapInstance.controls[position].push(controlDiv);
    });

    const adjustMap = function (mode: string, amount: number) {
      switch (mode) {
        case "tilt":
          mapInstance.setTilt(mapInstance.getTilt()! + amount);
          break;
        case "rotate":
          mapInstance.setHeading(mapInstance.getHeading()! + amount);
          break;
        default:
          break;
      }
    };
  };
  // const paths = [
  //   { lat: 25.774, lng: -80.19 },
  //   { lat: 18.466, lng: -66.118 },
  //   { lat: 32.321, lng: -64.757 },
  //   { lat: 25.774, lng: -80.19 },
  // ];

  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };
  return (
    isLoaded && (
      <Grid
        templateColumns="1fr"
        templateRows={{ base: "repeat(2, 100vh)", large: "repeat(1, 100vh)" }}
      >
        <View>
          <GoogleMap
            onLoad={mapOnLoad}
            mapContainerStyle={containerStyle}
            center={coordinates}
            // zoom={15}
            zoom={1}
            options={{ mapId: "caf2a1c5ecc8005e" }}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-120px",
                }}
              />
            </Autocomplete>
            {createPolygonComponents()}
            <DrawingManager
              onLoad={onLoadDrawingManager}
              onPolygonComplete={onPolygonComplete}
              options={{
                drawingControl: true,
                drawingControlOptions: {
                  position: google.maps.ControlPosition.TOP_RIGHT,
                  drawingModes: [google.maps.drawing.OverlayType.POLYGON],
                },
              }}
            />
            {pictures && (
              <InfoWindow
                position={{ lat: pictures[0].lat, lng: pictures[0].lng }}
                options={{ maxWidth: 250 }}
              >
                <Image src={pictures[0].name} alt={undefined} width="20px" />
              </InfoWindow>
            )}
          </GoogleMap>
        </View>
      </Grid>
    )
  );
}
