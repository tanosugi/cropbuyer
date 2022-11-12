import { DataStore } from "aws-amplify";
import { Farm, Record } from "models";
import { useEffect, useState } from "react";

import { InfoWindow, Marker, Polygon } from "@react-google-maps/api";
import { FC, ReactElement } from "react";
import { poligonOptionsBasic } from "styles/mapstyles";
import { FarmInfoWindowView } from "ui-components";
import { polygonStrToCenterLatLng, polygonStrToLatLng } from "utils/maputil";

const CreatePolygons: FC<{
  isShowFarmInfo: boolean;
  isYearly: boolean;
  yearToShow: number;
}> = ({ isShowFarmInfo, isYearly, yearToShow }): ReactElement => {
  const [idMouseOvered, setIdMouseOvered] = useState("");
  const [farms, setFarms] = useState<Farm[]>();
  const [records, setRecords] = useState<Record[]>([]);
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm);
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarms(respFarm);
    }
  };
  // const fetchRecord = async () => {
  //   const respRecords = await DataStore.query(
  //     Record,
  //     isYearly ? (r) => r.year("eq", yearToShow) : Predicates.ALL
  //   );
  //   await console.log("respRecords:", respRecords);
  //   if (respRecords) {
  //     await setRecords(respRecords);
  //   }
  // };
  useEffect(() => {
    fetchFarm();
  }, []);
  // useEffect(() => {
  //   fetchRecord();
  // }, [isYearly, yearToShow]);
  // useEffect()
  return (
    <>
      {farms?.map((item: Farm) => {
        // const respRecords = await DataStore.query(Record, (r) =>
        //   r.year("eq", yearToShow).farmName("eq", item?.name || "")
        // );
        const poligonOptions = {
          fillColor: "orange",
          fillOpacity: 0.5,
          strokeColor: "orange",
          ...poligonOptionsBasic,
        };
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
              key={`${item?.polygonString}-Polygon`}
              paths={paths}
              options={poligonOptions}
            />
            {(item.id == idMouseOvered || isShowFarmInfo) && (
              <InfoWindow
                // key={`${item?.polygonString}-InfoWindow`}
                position={polygonStrToCenterLatLng(item?.polygonString || "")}
              >
                <FarmInfoWindowView farm={item} />
              </InfoWindow>
            )}
            <Marker
              // key={`${item?.polygonString}-Marker`}
              position={polygonStrToCenterLatLng(item?.polygonString || "")}
              onMouseOver={() => setIdMouseOvered(item.id)}
              onClick={() => setIdMouseOvered(item.id)}
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
