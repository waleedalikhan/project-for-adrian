import React from "react";

type Props = {
  moduleImg: string;
  moduleLink: string;
  moduleHeadline: string;
  moduleAuthor: string;
  moduleDate: string;
  moduleCountry: string;
};

const HeaderModule: React.FC<Props> = ({
  moduleImg,
  moduleLink,
  moduleHeadline,
  moduleAuthor,
  moduleDate,
  moduleCountry,
}) => {
  return (
    <>
      <a href={moduleLink}>
        <div className="flex items-start space-x-4">
          <div>
            <img src={moduleImg} alt="" />
          </div>
          <div>
            <h1 className="font-merriWeather text-white font-bold">
              {moduleHeadline}
            </h1>
            <p className="font-workSans text-xs text-white font-bold my-2">
              {moduleAuthor}
            </p>
            <p className="font-workSans text-white text-xs mb-2">
              {moduleDate}
            </p>
            <p className="font-workSans text-white text-xs">{moduleCountry}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default HeaderModule;
