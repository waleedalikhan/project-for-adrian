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
  hasOverlay?: boolean;
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
  hasOverlay = false,
  className,
}) => {
  return (
    <>
      {hasOverlay ? (
        <div className="module w-full md:pr-4 md:mb-4 mb-2 relative">
          <figure className="module__img">
            <a href={moduleLink}>
              <div className="absolute inset-0 md:pr-4">
                <div className="bg-black opacity-20 w-full h-full"></div>
              </div>
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
          <div className="module__txt">
            <h2>
              <a href={moduleLink}>
                <div className="text-white absolute bottom-6">
                  <p className="font-merriWeather md:text-2xl text-center my-3 font-medium md:w-2/3 w-3/4 mx-auto">
                    {moduleHeadline}
                  </p>
                  <p className="text-center text-xs font-workSans md:mt-0 mt-4 font-medium">
                    Por {moduleMetadata}
                  </p>
                </div>
              </a>
            </h2>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default LargeModule;
