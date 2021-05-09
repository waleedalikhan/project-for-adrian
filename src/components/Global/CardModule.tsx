import React from "react";

type Props = {
  cardLink: string;
  cardImg: string;
  cardHeadline: string;
  cardAuthor: string;
  cardDate: string;
  cardCountry: string;
};

const CardModule: React.FC<Props> = ({
  cardLink,
  cardImg,
  cardHeadline,
  cardAuthor,
  cardDate,
  cardCountry,
}) => {
  return (
    <>
      <div className="module">
        <figure className="module__img">
          <a href={cardLink}>
            <img src={cardImg} alt="" />
          </a>
        </figure>
        <div className="module__txt my-3 font-merriWeather">
          <h2>
            <a href={cardLink}>{cardHeadline}</a>
          </h2>
        </div>
        <div className="module__metadata text-xs font-workSans mt-3">
          Por <span className="font-bold">{cardAuthor}</span> | {cardDate}
          <p className="font-bold mt-3">{cardCountry}</p>
        </div>
      </div>
    </>
  );
};

export default CardModule;
