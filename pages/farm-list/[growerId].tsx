import { Authenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import Center from "layout/center";
import Layout from "layout/layout";
import { Farm, Grower } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FarmCardViewCollection, GrowerDetailView } from "ui-components";

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
  return (
    <Authenticator>
      <Layout>
        <Center>
          {grower && <GrowerDetailView grower={grower} />}
          {farms && <FarmCardViewCollection items={farms} />}
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default FarmList;
