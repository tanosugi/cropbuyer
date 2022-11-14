import { Authenticator } from "@aws-amplify/ui-react";
import { GoogleMap, Polygon, useLoadScript } from "@react-google-maps/api";
import { DataStore, Hub } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { Farm, Grower } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "styles/modalStyle";
import {
  EditFarmView,
  FarmCardViewCollection,
  GrowerDetailView,
} from "ui-components";
import {
  polygonStrToCenterLatLng,
  polygonStrToLatLng,
  polygonToZoom,
} from "utils/maputil";

const FarmList = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [grower, setGrower] = useState<Grower>();
  const [farms, setFarms] = useState<Farm[]>();
  const [farmToEdit, setFarmToEdit] = useState<Farm>();
  const router = useRouter();
  const { growerId } = router.query;
  const fetchGrower = async () => {
    const respGrower = await DataStore.query(Grower, String(growerId));
    await console.log("respGrower:", respGrower);
    if (respGrower) {
      setGrower(respGrower);
    }
  };
  const fetchFarm = async (growerName: string) => {
    const respFarm = await DataStore.query(Farm, (f) =>
      f.growerName("eq", growerName)
    );
    await console.log("respFarm:", respFarm);
    if (respFarm) {
      setFarms(respFarm);
    }
  };
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
  useEffect(() => {
    fetchGrower();
  }, [growerId]);
  useEffect(() => {
    grower?.name && fetchFarm(grower.name);
  }, [grower]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY),
    libraries: ["places", "drawing"],
    mapIds: [String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID)],
  });
  return (
    <Authenticator>
      <Layout>
        <Center>
          {grower && (
            <GrowerDetailView
              grower={grower}
              overrides={{
                "close-circle": { onClick: () => router.push("/growers") },
              }}
            />
          )}
          {farms && (
            <FarmCardViewCollection
              items={farms}
              overrideItems={({ item, index }) => ({
                overrides: {
                  "Frame 36": {
                    onClick: () => {
                      setModalToOpen("EditFarmView");
                      setFarmToEdit(item);
                    },
                  },
                  "Frame 25": {
                    onClick: () => router.push(`/record-list/${item.id}`),
                  },
                },
                rectangle1: isLoaded && (
                  <>
                    <GoogleMap
                      mapContainerStyle={{ height: "112px", width: "112px" }}
                      center={polygonStrToCenterLatLng(item.polygonString)}
                      zoom={polygonToZoom(item.polygonString)}
                      options={{ disableDefaultUI: true }}
                      mapTypeId={"satellite"}
                    >
                      <Polygon path={polygonStrToLatLng(item.polygonString)} />
                    </GoogleMap>
                  </>
                ),
              })}
            />
          )}
          <Modal isOpen={modalToOpen == "EditFarmView"} style={modalStyle}>
            <Center>
              <EditFarmView
                farm={farmToEdit}
                overrides={{
                  Button35463353: { isDisabled: true },
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

export default FarmList;
