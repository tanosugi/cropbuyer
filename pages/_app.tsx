import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Amplify } from "aws-amplify";
import config from "aws-exports";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "styles/globals.css";
import { studioTheme } from "ui-components";
import { GoogleAnalytics } from "utils/gtag";

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // only initialize when in the browser
    if (typeof window !== "undefined") {
      LogRocket.init("oheadl/cropbuyer-main");
      // plugins should also only be initialized when in the browser
      setupLogRocketReact(LogRocket);
    }
    Sentry.init({
      dsn: "https://a4b6773ba91046819e81fc7b6c092ae3@o497625.ingest.sentry.io/4504103799422976",
      integrations: [new BrowserTracing()],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
      beforeSend(event) {
        const logRocketSession = LogRocket.sessionURL;
        if (logRocketSession !== null && event?.extra != undefined) {
          event.extra["LogRocket"] = logRocketSession;
          return event;
        } else {
          return event;
        }
      },
    });
  }, []);

  return (
    <Sentry.ErrorBoundary>
      <AmplifyProvider theme={studioTheme}>
        <Authenticator.Provider>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </Authenticator.Provider>
      </AmplifyProvider>
    </Sentry.ErrorBoundary>
  );
}

export default MyApp;
