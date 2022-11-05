import { Polygon } from "@react-google-maps/api";
import { FC, ReactElement } from "react";
import { poligonOptions } from "styles/mapstyles";
import { polygonStrToLatLng } from "utils/maputil";

const CreatePolygons: FC<{
  polygons: string[];
}> = ({ polygons }): ReactElement => {
  // console.log("polygons:", polygons);
  return (
    <>
      {polygons.map((item: string) => {
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
      })}
    </>
  );
};

export default CreatePolygons;
export const createPolygonComponents = () => {};
