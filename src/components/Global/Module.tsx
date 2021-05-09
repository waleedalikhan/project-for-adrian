import React from "react";

type Props = {
  moduleLink: string;
  moduleImg: string;
  moduleHeadline?: string;
  moduleMetadata: string;
  moduleDate: string;
  moduleCountry: string;
};

const Module: React.FC<Props> = ({
  moduleLink,
  moduleImg,
  moduleHeadline,
  moduleMetadata,
  moduleDate,
  moduleCountry,
}) => {
  return (
    <>
      <div className="module w-full mb-20">
        <figure className="module__img">
          <a href={moduleLink}>
            <img src={moduleImg} alt="" className="w-full" />
          </a>
        </figure>
        <div className="module__txt font-merriWeather text-lg mt-5">
          <h2>
            <a href={moduleLink}>{moduleHeadline}</a>
          </h2>
        </div>
        <div className="module__metadata text-xs font-workSans mt-3">
          <span className="font-bold">{moduleMetadata}</span> | {moduleDate}
          <p className="font-bold mt-3">{moduleCountry}</p>
        </div>
      </div>
    </>
  );
};

export default Module;
