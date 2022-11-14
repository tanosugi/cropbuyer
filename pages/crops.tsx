import { Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "styles/modalStyle";
import { AddButton, CropCardViewCollection, EditCropView } from "ui-components";

const Crops = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [cropToEdit, setCropToEdit] = useState();
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
  return (
    <Authenticator>
      <Layout>
        <Center>
          <AddButton
            overrides={{
              AddButton: {
                onClick: () => setModalToOpen("AddCropView"),
              },
            }}
          />
          <Modal isOpen={modalToOpen == "AddCropView"} style={modalStyle}>
            <Center>
              <EditCropView
                overrides={{
                  "Edit Crop": { children: "Create Crop" },
                  Button34704546: { isDisabled: true },
                  Icon: { onClick: () => setModalToOpen("") },
                }}
              />
            </Center>
          </Modal>
          <CropCardViewCollection
            overrideItems={({ item, index }) => ({
              overrides: {
                "Frame 36": {
                  onClick: () => {
                    setModalToOpen("EditCropView");
                    setCropToEdit(item);
                  },
                },
              },
            })}
          />
          <Modal isOpen={modalToOpen == "EditCropView"} style={modalStyle}>
            <Center>
              <EditCropView
                crop={cropToEdit}
                overrides={{
                  Button34704545: { isDisabled: true },
                  Icon: { onClick: () => setModalToOpen("") },
                }}
              />
            </Center>
          </Modal>
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default Crops;
