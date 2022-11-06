import { Authenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
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

const RecordList = () => {
  const [farm, setFarm] = useState<Farm>();
  const [records, setRecords] = useState<Record[]>();
  const [modalToOpen, setModalToOpen] = useState("");
  const [recordToEdit, setRecordToEdit] = useState();
  const router = useRouter();
  const { farmId } = router.query;
  const fetchFarm = async () => {
    const respFarm = await DataStore.query(Farm, String(farmId));
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarm(respFarm);
    }
  };
  const fetchRecord = async (farmName: string) => {
    const respRecord = await DataStore.query(Record, (r) =>
      r.farmName("eq", farmName)
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
  return (
    <Authenticator>
      <Layout>
        <div>RecordList {farmId}</div>
        {farm && <FarmDetailView farm={farm} />}
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
              record={new Record({ farmName: farm?.name })}
              overrides={{
                "Edit Record": { children: "Create Crop" },
                Button34704601: { isDisabled: true },
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

            <Modal isOpen={modalToOpen == "EditRecordView"} style={modalStyle}>
              <Center>
                <EditRecordView
                  record={recordToEdit}
                  overrides={{
                    Button34704600: { isDisabled: true },
                  }}
                />
              </Center>
            </Modal>
          </>
        )}
      </Layout>
    </Authenticator>
  );
};

export default RecordList;
