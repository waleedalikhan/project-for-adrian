import React from "react";
import cn from "classnames";

type Props = {
  moduleLink: string;
  moduleImgLarge: string;
  moduleImgSmall: string;
  moduleDelivered: string;
  moduleTitle: string;
  moduleSubTitle: string;
  moduleAuthor: string;
  moduleDate: string;
  moduleCountry: string;
  classNames?: string;
};

const RowModule: React.FC<Props> = ({
  moduleLink,
  moduleImgLarge,
  moduleImgSmall,
  moduleDelivered,
  moduleTitle,
  moduleSubTitle,
  moduleAuthor,
  moduleDate,
  moduleCountry,
  classNames,
}) => {
  return (
    <>
      <a href={moduleLink}>
        <div
          className={cn(
            "module w-full flex flex-wrap items-start border-b pb-6 mb-6",
            classNames
          )}
        >
          <div className="lg:w-2/3 lg:pr-6">
            <p className="text-xs font-workSans font-semibold text-gray-500 mb-3">
              {moduleDelivered}
            </p>
            <div className="module__txt font-merriWeather text-xl mb-3">
              <h2>
                <a href={moduleLink}>{moduleTitle}</a>
              </h2>
            </div>
            <p className="font-merriWeather mb-3 lg:block hidden">
              {moduleSubTitle}
            </p>
            <div className="module__metadata text-xs font-workSans mt-3">
              Por <span className="font-bold">{moduleAuthor}</span> |{" "}
              {moduleDate}
              <p className="font-bold mt-3">{moduleCountry}</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:order-last order-first lg:my-0 my-4 flex justify-end">
            <figure className="module__img">
              <a href={moduleLink}>
                <img src={moduleImgLarge} alt="" className="md:block hidden" />
                <img src={moduleImgSmall} alt="" className="md:hidden block" />
              </a>
            </figure>
          </div>
        </div>
      </a>
    </>
  );
};

export default RowModule;
