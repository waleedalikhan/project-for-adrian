import React, { useEffect } from "react";
import Home from "@/components/Home";

const Index: React.FC = () => {
  // const https = axios();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://forb-all.dreamsengine.dev/wp-json/dreams/api/posts",
        { mode: "no-cors" }
      );

      console.log(res);
    };

    getData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default Index;
