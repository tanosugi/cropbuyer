import { DataStore } from "aws-amplify";
import { Farm } from "models";
import { useEffect, useState } from "react";

import { Polygon } from "@react-google-maps/api";
import { FC, ReactElement } from "react";
import { poligonOptions } from "styles/mapstyles";
import { polygonStrToLatLng } from "utils/maputil";

const CreatePolygons: FC<{
  polygons: string[];
}> = ({ polygons }): ReactElement => {
  // console.log("polygons:", polygons);
  const [polygons2, setPolygons2] = useState([]);
  const [farms, setFarms] = useState<Farm[]>();
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm);
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarms(respFarm);
    }
    // var respPolygons = [];
    // (respFarm &&
    //   respFarm?.forEach((item: Farm) => {
    //     respPolygons.push(String(item.polygonString));
    //   })) || [""];
    // console.log("respPolygons:", respPolygons);
    // setPolygons2(...respPolygons);
  };
  useEffect(() => {
    fetchFarm();
  }, []);
  return (
    <>
      {/* {polygons.map((item: string) => { */}
      {farms?.map((item: Farm) => {
        const paths = polygonStrToLatLng(item?.polygonString || "");
        // console.log("paths:", paths);
        return (
          <Polygon
            key={item?.polygonString}
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
