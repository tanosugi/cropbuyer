import { Authenticator } from "@aws-amplify/ui-react";
import Layout from "layout/layout";

const LandingPage = () => {
  return (
    <Authenticator>
      <Layout>
        <div>LandingPage</div>
      </Layout>
    </Authenticator>
  );
};

export default LandingPage;
