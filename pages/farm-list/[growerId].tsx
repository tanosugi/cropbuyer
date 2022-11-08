import { Authenticator } from "@aws-amplify/ui-react";
import { GoogleMap, Polygon, useLoadScript } from "@react-google-maps/api";
import { DataStore } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { Farm, Grower } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FarmCardViewCollection, GrowerDetailView } from "ui-components";
import {
  polygonStrToCenterLatLng,
  polygonStrToLatLng,
  polygonToZoom,
} from "utils/maputil";

const FarmList = () => {
  const [grower, setGrower] = useState<Grower>();
  const [farms, setFarms] = useState<Farm[]>();
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
          {grower && <GrowerDetailView grower={grower} />}
          {farms && (
            <FarmCardViewCollection
              items={farms}
              overrideItems={({ item, index }) => ({
                rectangle1: isLoaded && (
                  <>
                    <GoogleMap
                      mapContainerStyle={{ height: "112px", width: "112px" }}
                      center={polygonStrToCenterLatLng(
                        // "35,35;35,20;20,20;20,35;"
                        item.polygonString
                      )}
                      zoom={polygonToZoom(item.polygonString)}
                      // zoom={6}
                      options={{ disableDefaultUI: true }}
                      mapTypeId={"satellite"}
                    >
                      <Polygon
                        path={polygonStrToLatLng(item.polygonString)}
                        // path={[
                        //   { lat: 35, lng: 25 },
                        //   { lat: 35.1, lng: 25 },
                        //   { lat: 35.1, lng: 25.1 },
                        // ]}
                      />
                    </GoogleMap>
                  </>
                ),
              })}
            />
          )}
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default FarmList;
