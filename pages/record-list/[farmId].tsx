import { Authenticator } from "@aws-amplify/ui-react";
import { GoogleMap, Polygon, useLoadScript } from "@react-google-maps/api";
import { DataStore, Hub, SortDirection } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { Farm, Record } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "styles/modalStyle";
import {
  AddButton,
  EditRecordView,
  FarmDetailView,
  RecordCardViewCollection,
} from "ui-components";
import {
  polygonStrToCenterLatLng,
  polygonStrToLatLng,
  polygonToZoom,
} from "utils/maputil";

const RecordList = () => {
  const [farm, setFarm] = useState<Farm>();
  const [records, setRecords] = useState<Record[]>();
  const [modalToOpen, setModalToOpen] = useState("");
  const [recordToEdit, setRecordToEdit] = useState();
  const router = useRouter();
  useEffect(() => {
    Hub.listen("ui", ({ payload }) => {
      if (
        payload.event === "actions:datastore:create:finished" ||
        payload.event === "actions:datastore:update:finished"
      ) {
        setModalToOpen("");
      }
    });
  }, []);
  const { farmId } = router.query;
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm, String(farmId));
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarm(respFarm);
    }
  };
  const fetchRecord = async (farmName: string) => {
    const respRecord = await DataStore.query(
      Record,
      (r) => r.farmName("eq", farmName),
      { sort: (s) => s.year(SortDirection.DESCENDING) }
    );
    await console.log("respRecord:", respRecord);
    if (respRecord) {
      setRecords(respRecord);
    }
  };
  useEffect(() => {
    fetchFarm();
  }, [farmId]);
  useEffect(() => {
    farm?.name && fetchRecord(farm.name);
    const subscription = DataStore.observe(Record).subscribe(() =>
      fetchRecord(String(farm?.name))
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [farm]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY),
    libraries: ["places", "drawing"],
    mapIds: [String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID)],
  });
  return (
    isLoaded && (
      <Authenticator>
        <Layout>
          <Center>
            {farm && (
              <FarmDetailView
                farm={farm}
                overrides={{
                  "close-circle": {
                    onClick: () => {
                      router.push("/growers");
                    },
                  },
                }}
                rectangle2={
                  <GoogleMap
                    mapContainerStyle={{ height: "112px", width: "112px" }}
                    center={polygonStrToCenterLatLng(farm?.polygonString || "")}
                    zoom={polygonToZoom(farm?.polygonString || "")}
                    options={{ disableDefaultUI: true }}
                    mapTypeId={"satellite"}
                  >
                    <Polygon
                      path={polygonStrToLatLng(farm?.polygonString || "")}
                    />
                  </GoogleMap>
                }
              />
            )}
            <AddButton
              overrides={{
                AddButton: {
                  onClick: () => setModalToOpen("AddRecordView"),
                },
              }}
            />
            <Modal isOpen={modalToOpen == "AddRecordView"} style={modalStyle}>
              <Center>
                <EditRecordView
                  record={
                    new Record({
                      farmName: farm?.name,
                      image_url:
                        "https://images.unsplash.com/photo-1652407782575-3f5805f9d220?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmljZS1jcm9wfHx8fHx8MTY2ODQwNjcyOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
                    })
                  }
                  overrides={{
                    "Edit Record": { children: "Create Crop" },
                    Button34704601: { isDisabled: true },
                    Icon: { onClick: () => setModalToOpen("") },
                  }}
                />
              </Center>
            </Modal>
            {records && (
              <>
                <RecordCardViewCollection
                  items={records}
                  overrideItems={({ item, index }) => ({
                    overrides: {
                      "Frame 7": {
                        onClick: () => {
                          setModalToOpen("EditRecordView");
                          setRecordToEdit(item);
                        },
                      },
                    },
                  })}
                />

                <Modal
                  isOpen={modalToOpen == "EditRecordView"}
                  style={modalStyle}
                >
                  <Center>
                    <EditRecordView
                      record={recordToEdit}
                      overrides={{
                        Button34704600: { isDisabled: true },
                        Icon: { onClick: () => setModalToOpen("") },
                      }}
                    />
                  </Center>
                </Modal>
              </>
            )}
          </Center>
        </Layout>
      </Authenticator>
    )
  );
};

export default RecordList;
