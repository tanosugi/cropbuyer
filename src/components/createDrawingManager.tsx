import { DrawingManager, Polygon } from "@react-google-maps/api";
import Center from "layout/center";
import { Farm } from "models";
import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import Modal from "react-modal";
import { poligonOptions } from "styles/mapstyles";
import { modalStyle } from "styles/modalStyle";
import { EditFarmView } from "ui-components";
import { polygonStrToLatLng } from "utils/maputil";

const CreateDrawingManager: FC<{
  polygons: string[];
  setPolygons: Dispatch<SetStateAction<string[]>>;
}> = ({ polygons, setPolygons }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [polygonString, setPolygonString] = useState("");
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
    setPolygonString(coordStr);
    setModalToOpen("EditFarmView");
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
      <Modal isOpen={modalToOpen == "EditFarmView"} style={modalStyle}>
        <Center>
          <EditFarmView
            farm={new Farm({ polygonString: polygonString })}
            overrides={{
              "Edit Farm": { children: "Create Farm" },
              Button34704491: { isDisabled: true },
            }}
          />
        </Center>
      </Modal>
    </>
  );
};

export default CreateDrawingManager;
