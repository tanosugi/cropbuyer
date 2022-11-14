import { InfoWindow, Marker, Polygon } from "@react-google-maps/api";
import {
  FarmAndRecord,
  useQueryFarmAndRecordArray,
} from "hooks/useQueryFarmAndRecordArray";
import { FC, ReactElement, useState } from "react";
import { poligonOptionsBasic } from "styles/mapstyles";
import { FarmInfoWindowView } from "ui-components";
import { polygonStrToCenterLatLng, polygonStrToLatLng } from "utils/maputil";

const CreatePolygons: FC<{
  isShowFarmInfo: boolean;
  isYearly: boolean;
  yearToShow: number;
}> = ({ isShowFarmInfo, isYearly, yearToShow }): ReactElement => {
  const [idMouseOvered, setIdMouseOvered] = useState("");
  const { farmAndRecordArray, dictCrops } = useQueryFarmAndRecordArray(
    isYearly,
    yearToShow
  );
  // console.log("farmAndRecordArray:", farmAndRecordArray);
  // console.log("dictCrops:", dictCrops);
  return (
    <>
      {farmAndRecordArray &&
        farmAndRecordArray?.map((farmAndRecord: FarmAndRecord) => {
          // console.log("dictCrops:", dictCrops);
          const farm = farmAndRecord.farm;
          // console.log("farm?.name,record:", farm?.name, record);
          console.log(
            "farmAndRecord?.record?.cropName,dictCrops:",
            farmAndRecord?.record?.cropName,
            dictCrops
          );
          let color;
          if (!isYearly) {
            color = "black";
          } else if (
            farmAndRecord?.record?.cropName &&
            dictCrops &&
            farmAndRecord?.record?.cropName in dictCrops
          ) {
            color = dictCrops[farmAndRecord?.record?.cropName] || "pink";
          }
          let opacity = 0;
          if (isYearly) {
            opacity = Math.min(
              1,
              (farmAndRecord?.record?.statusRating || opacity) * 0.2
            );
          } else {
            opacity = 0;
          }
          console.log("color:", color);
          const poligonOptions = {
            fillColor: color,
            fillOpacity: opacity,
            strokeColor: color,
            ...poligonOptionsBasic,
          };
          const paths = polygonStrToLatLng(farm?.polygonString || "");
          // console.log("farm.name:", farm.name);
          const onMouseOver = () => {
            setIdMouseOvered(farm.id);
          };
          return (
            <>
              <Polygon
                draggable={true}
                editable={true}
                key={`${farm?.polygonString}-Polygon`}
                paths={paths}
                options={poligonOptions}
              />
              {(farm.id == idMouseOvered || isShowFarmInfo) && (
                <InfoWindow
                  // key={`${farm?.polygonString}-InfoWindow`}
                  position={polygonStrToCenterLatLng(farm?.polygonString || "")}
                >
                  <FarmInfoWindowView farm={farm} />
                </InfoWindow>
              )}
              <Marker
                // key={`${farm?.polygonString}-Marker`}
                position={polygonStrToCenterLatLng(farm?.polygonString || "")}
                onMouseOver={() => setIdMouseOvered(farm.id)}
                onClick={() => setIdMouseOvered(farm.id)}
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
