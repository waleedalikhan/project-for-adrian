import React from "react";
import Head from "next/head";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

type Props = {
  title?: string;
};

const DefaultLayout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div className="overflow-x-hidden">
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Header />

    {children}

    <Footer />
  </div>
);

export default DefaultLayout;
