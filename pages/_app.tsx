import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {/* <Script
        src={
          "https://maps.googleapis.com/maps/api/js?key=" +
          String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY) +
          "&v=beta&libraries=marker,places,drawing&callback=initMap"
        }
        strategy="beforeInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded &&  */}
      <Component {...pageProps} />
      // }
    </>
  );
}

export default MyApp;
