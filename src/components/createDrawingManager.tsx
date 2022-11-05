import { DrawingManager, Polygon } from "@react-google-maps/api";
import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { poligonOptions } from "styles/mapstyles";
import { polygonStrToLatLng } from "utils/maputil";

const CreateDrawingManager: FC<{
  polygons: string[];
  setPolygons: Dispatch<SetStateAction<string[]>>;
}> = ({ polygons, setPolygons }): ReactElement => {
  const onLoadDrawingManager = (
    drawingManager: google.maps.drawing.DrawingManager
  ) => {
    console.log(drawingManager);
  };
  const onPolygonComplete = (polygon: google.maps.Polygon) => {
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
          key={item}
          // onLoad={onLoadPolygon}
          paths={paths}
          options={poligonOptions}
        />
      );
    });
    // console.log("createPolygonComponents ret:", ret);
    return ret;
  };
  return (
    <>
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
    </>
  );
};

export default CreateDrawingManager;
