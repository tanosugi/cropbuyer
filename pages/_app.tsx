import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "aws-exports";
import type { AppProps } from "next/app";
import { useState } from "react";
import { studioTheme } from "ui-components";

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AmplifyProvider theme={studioTheme}>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </AmplifyProvider>
  );
}

export default MyApp;
