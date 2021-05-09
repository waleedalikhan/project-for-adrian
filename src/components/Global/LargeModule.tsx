import React from "react";
import cn from "classnames";

type Props = {
  moduleLink: string;
  moduleImgDesktop: string;
  moduleImgMobile: string;
  moduleHeadline: string;
  moduleMetadata: string;
  moduleDate: string;
  moduleCountry: string;
  className?: string;
};

const LargeModule: React.FC<Props> = ({
  moduleLink,
  moduleImgDesktop,
  moduleImgMobile,
  moduleHeadline,
  moduleMetadata,
  moduleDate,
  moduleCountry,
  className,
}) => {
  return (
    <>
      <div className={cn("module w-full md:pr-3 md:mb-4 mb-2", className)}>
        <figure className="module__img">
          <a href={moduleLink}>
            <img
              src={moduleImgDesktop}
              alt=""
              className="w-full md:block hidden"
            />
            <img
              src={moduleImgMobile}
              alt=""
              className="w-full md:hidden block"
            />
          </a>
        </figure>
        <div className="module__txt font-merriWeather md:text-2xl text-xl text-center my-3 font-medium w-2/3 mx-auto md:block hidden">
          <h2>
            <a href={moduleLink}>{moduleHeadline}</a>
          </h2>
        </div>
        <div className="module__metadata text-center text-xs font-workSans md:mt-0 mt-4">
          <span className="font-bold">{moduleMetadata}</span> | {moduleDate}
          <p className="font-workSans text-center fonxt-bold text-xs mt-3">
            {moduleCountry}
          </p>
        </div>
      </div>
    </>
  );
};

export default LargeModule;
