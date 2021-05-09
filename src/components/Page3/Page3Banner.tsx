import React from "react";

type Props = {
  bannerTitle: string;
  bannerHeadlineDesktop: string;
  bannerHeadlineMobile: string;
  bannerSubtitle: string;
  bannerImg: string;
};

const Page3Banner: React.FC<Props> = ({
  bannerTitle,
  bannerHeadlineDesktop,
  bannerHeadlineMobile,
  bannerSubtitle,
  bannerImg,
}) => {
  return (
    <>
      <section>
        <div className="flex flex-wrap h-full">
          <div className="w-full bg-black md:px-10 px-4 md:py-20 pt-16 text-center md:order-first order-last">
            <p className="text-white font-workSans md:text-base text-sm">
              {bannerTitle}
            </p>
            <p className="text-white md:block hidden text-5xl font-workSans font-semibold my-10">
              {bannerHeadlineDesktop}
            </p>
            <p className="text-white md:hidden block text-xl font-workSans font-semibold my-10">
              {bannerHeadlineMobile}
              
            </p>
            <p className="text-white font-workSans text-sm font-semibold md:block hidden">
              {bannerSubtitle}
            </p>
          </div>
          <div className="w-full">
            <img src={bannerImg} alt="" className="md:block hidden" />
            <img
              src="https://picsum.photos/2200/1300"
              alt=""
              className="md:hidden block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page3Banner;
