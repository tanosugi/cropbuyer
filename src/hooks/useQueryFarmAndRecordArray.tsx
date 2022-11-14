import { DataStore, SortDirection } from "aws-amplify";
import { Crop, Farm, Record } from "models";
import { useEffect, useState } from "react";

export interface FarmAndRecord {
  farm: Farm;
  record: Record;
}
export interface DictCropNameToColor {
  [cropName: string]: string;
}

export const useQueryFarmAndRecordArray = (
  isYearly: boolean,
  yearToShow: number
) => {
  const [farms, setFarms] = useState<Farm[]>();
  const [dictCrops, setDictCrops] = useState<DictCropNameToColor>();
  const [farmAndRecordArray, setFarmAndRecordArray] = useState<FarmAndRecord[]>(
    []
  );
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm);
    // await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarms(respFarm);
    }
  };
  const fetchCrop = async () => {
    await setDictCrops({});
    const respCrop = await DataStore.query(Crop);
    // await console.log("respCrop:", respCrop);
    if (respCrop) {
      respCrop.forEach((crop: Crop) => {
        // console.log("crop:", crop, crop.name, crop.polygonColor);
        crop?.name &&
          crop?.polygonColor &&
          setDictCrops((prevDictCrop: DictCropNameToColor) => ({
            ...prevDictCrop,
            [crop.name]: crop.polygonColor,
          }));
      });
    }
  };
  useEffect(() => {
    fetchFarm();
    fetchCrop();
    const subscriptionFarm = DataStore.observe(Farm).subscribe(fetchFarm);
    const subscriptionCrop = DataStore.observe(Crop).subscribe(fetchCrop);
    return () => {
      subscriptionFarm.unsubscribe();
      subscriptionCrop.unsubscribe();
    };
  }, []);
  const fetchFarmAndRecord = async () => {
    // console.log("fetchFarmAndRecord");
    await setFarmAndRecordArray([]);
    const respFarmAndRecordArray =
      farms &&
      (await Promise.all(
        farms.map(async (farm) => {
          const respRecords = await DataStore.query(
            Record,
            isYearly
              ? (r) => r.year("eq", yearToShow).farmName("eq", farm?.name || "")
              : (r) => r.farmName("eq", farm?.name || ""),
            { sort: (s) => s.year(SortDirection.DESCENDING) }
          );
          // console.log("respRecords:", respRecords);
          return {
            farm: farm,
            record:
              respRecords && respRecords.length > 0
                ? respRecords[0]
                : new Record({}),
          };
        })
      ));
    setFarmAndRecordArray(
      respFarmAndRecordArray || [{ farm: new Farm({}), record: new Record({}) }]
    );
  };
  useEffect(() => {
    fetchFarmAndRecord();
    const subscription =
      DataStore.observe(Record).subscribe(fetchFarmAndRecord);
    return () => subscription.unsubscribe();
  }, [farms, isYearly, yearToShow]);
  return { farmAndRecordArray, dictCrops };
};
