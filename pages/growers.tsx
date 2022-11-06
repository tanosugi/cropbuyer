import { Authenticator } from "@aws-amplify/ui-react";
import Center from "layout/center";
import Layout from "layout/layout";
import { useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "styles/modalStyle";
import {
  AddButton,
  EditGrowerView,
  GrowerCardViewCollection,
} from "ui-components";

const Growers = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [growerToEdit, setGrowerToEdit] = useState();
  return (
    <Authenticator>
      <Layout>
        <Center>
          <AddButton
            overrides={{
              AddButton: {
                onClick: () => setModalToOpen("AddGrowerView"),
              },
            }}
          />
          <Modal isOpen={modalToOpen == "AddGrowerView"} style={modalStyle}>
            <Center>
              <EditGrowerView
                overrides={{
                  "Edit Grower": { children: "Create Grower" },
                  Button34682738: { isDisabled: true },
                }}
              />
            </Center>
          </Modal>
          <GrowerCardViewCollection
            overrideItems={({ item, index }) => ({
              overrides: {
                "Frame 7": {
                  onClick: () => {
                    setModalToOpen("EditGrowerView");
                    setGrowerToEdit(item);
                  },
                },
              },
            })}
          />
          <Modal isOpen={modalToOpen == "EditGrowerView"} style={modalStyle}>
            <Center>
              <EditGrowerView
                grower={growerToEdit}
                overrides={{
                  Button34682734: { isDisabled: true },
                }}
              />
            </Center>
          </Modal>
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default Growers;