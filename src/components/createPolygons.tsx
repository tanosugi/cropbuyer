import { DataStore } from "aws-amplify";
import { Farm } from "models";
import { useEffect, useState } from "react";

import { InfoWindow, Marker, Polygon } from "@react-google-maps/api";
import { FC, ReactElement } from "react";
import { poligonOptions } from "styles/mapstyles";
import { FarmDetailView } from "ui-components";
import { polygonStrToCenterLatLng, polygonStrToLatLng } from "utils/maputil";

const CreatePolygons: FC<{
  polygons: string[];
}> = ({ polygons }): ReactElement => {
  const [idMouseOvered, setIdMouseOvered] = useState("");
  const [polygons2, setPolygons2] = useState([]);
  const [farms, setFarms] = useState<Farm[]>();
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm);
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarms(respFarm);
    }
  };
  useEffect(() => {
    fetchFarm();
  }, []);
  return (
    <>
      {farms?.map((item: Farm) => {
        const paths = polygonStrToLatLng(item?.polygonString || "");
        // console.log("item.name:", item.name);
        const onMouseOver = () => {
          setIdMouseOvered(item.id);
        };
        return (
          <>
            <Polygon
              draggable={true}
              editable={true}
              key={item?.polygonString}
              // onLoad={onLoadPolygon}
              onMouseMove={(e) => {
                console.log("item.name:", item.name, e.latLng);
              }}
              onMouseOver={() => setIdMouseOvered(item.id)}
              paths={paths}
              options={poligonOptions}
            />
            {item.id == idMouseOvered && (
              <InfoWindow
                position={polygonStrToCenterLatLng(item?.polygonString || "")}
              >
                <FarmDetailView farm={item} />
              </InfoWindow>
            )}
            <Marker
              position={polygonStrToCenterLatLng(item?.polygonString || "")}
              onMouseOver={() => setIdMouseOvered(item.id)}
              opacity={0.1}
            />
          </>
        );
      })}
    </>
  );
};

export default CreatePolygons;
export const createPolygonComponents = () => {};
