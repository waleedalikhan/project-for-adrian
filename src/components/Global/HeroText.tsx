import React from "react";

type Props = {
  bannerSubtitle: string;
  bannerTitle: string;
  bannerAuthor: string;
  bannerDate: string;
  bannerCountry: string;
};

const HeroText: React.FC<Props> = ({
  bannerSubtitle,
  bannerTitle,
  bannerAuthor,
  bannerDate,
  bannerCountry,
}) => {
  return (
    <>
      <div className="w-full text-center">
        <p className="font-workSans font-medium md:text-base text-sm">
          {bannerSubtitle}
        </p>
        <p className="font-workSans font-bold xl:text-5xl md:text-4xl text-xl my-4 md:leading-tight">
          {bannerTitle}
        </p>
        <p className="text-xs font-workSans my-3">
          Por <span className="font-bold">{bannerAuthor}</span> | {bannerDate}
        </p>
        <p className="font-workSans font-bold text-xs">{bannerCountry}</p>
      </div>
    </>
  );
};

export default HeroText;
