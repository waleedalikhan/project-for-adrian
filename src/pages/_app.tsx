import React from "react";
import { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import "@/styles/slick-slider.css";
import "@/styles/index.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
};

export default App;
