import { Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
                  Icon: { onClick: () => setModalToOpen("") },
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
                    console.log("EditGrowerView");
                  },
                },
                "Frame 32": {
                  onClick: () => {
                    router.push(`/farm-list/${item.id}`);
                    console.log(
                      "`/farm-list/${item.id}`:",
                      `/farm-list/${item.id}`
                    );
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

export default Growers;
