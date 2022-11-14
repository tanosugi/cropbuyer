import { Authenticator } from "@aws-amplify/ui-react";
import Center from "layout/center";
import Layout from "layout/layout";
import { useRouter } from "next/router";
import { Fetures, HeroSmallView } from "ui-components";

const LandingPage = () => {
  const router = useRouter();
  return (
    <Authenticator>
      <Layout>
        <Center>
          <HeroSmallView
            overrides={{ Button: { onClick: () => router.push("/map") } }}
          />
          <Fetures
            overrides={{
              Button35493448: { onClick: () => router.push("/map") },
              Button35493452: { onClick: () => router.push("/map") },
              Button35493456: { onClick: () => router.push("/add-images") },
              Button35493460: { onClick: () => router.push("/map") },
              Button35493464: { onClick: () => router.push("/growers") },
            }}
          />
        </Center>
      </Layout>
    </Authenticator>
  );
};

export default LandingPage;
