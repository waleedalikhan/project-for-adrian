import React from "react";

type Props = {
  ad: string;
};

const BannerAd: React.FC<Props> = ({ ad }) => {
  return (
    <>
      <section className="container mx-auto mt-6 mb-14 md:block hidden">
        <div className="flex">
          <div className="lg:w-2/3 md:w-3/4 w-full h-44 mx-auto">
            <img src={ad} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAd;
