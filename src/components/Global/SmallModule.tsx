import React from "react";
import cn from "classnames";

type Props = {
  moduleLink: string;
  moduleImg: string;
  moduleHeadline: string;
  moduleMetadata: string;
  moduleDate: string;
  moduleCountry: string;
  className?: string;
};

const SmallModule: React.FC<Props> = ({
  moduleLink,
  moduleImg,
  moduleHeadline,
  moduleMetadata,
  moduleDate,
  moduleCountry,
  className,
}) => {
  return (
    <>
      <div className={cn("module flex", className)}>
        <figure className="module__img">
          <a href={moduleLink}>
            <img src={moduleImg} alt="" />
          </a>
        </figure>
        <div className="xl:px-8 px-4">
          <div className="font-merriWeather">
            <h2>
              <a href={moduleLink}>{moduleHeadline}</a>
            </h2>
          </div>
          <div className="module__metadata text-xs font-workSans mt-3">
            <span className="font-bold">{moduleMetadata}</span> | {moduleDate}
            <p className="font-bold mt-3">{moduleCountry}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallModule;
