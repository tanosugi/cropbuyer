import { Authenticator } from "@aws-amplify/ui-react";
import Center from "layout/center";
import Layout from "layout/layout";
import { useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "styles/modalStyle";
import { AddButton, CropCardViewCollection, EditCropView } from "ui-components";

const Crops = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [cropToEdit, setCropToEdit] = useState();
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
