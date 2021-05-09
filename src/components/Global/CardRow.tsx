import React from "react";
import CardModule from "@/components/Global/CardModule";
import VerticalAd from "@/components/Global/VerticalAd";

interface CardModuleInterface {
  id: string | number;
  cardLink: string;
  cardImg: string;
  cardHeadline: string;
  cardAuthor: string;
  cardDate: string;
  cardCountry: string;
}

type Props = {
  cardData: CardModuleInterface[];
};

const CardRow: React.FC<Props> = ({ cardData }) => {
  const renderCardNews = cardData.map((item: CardModuleInterface) => {
    return (
      <React.Fragment key={item.id}>
        <div className="lg:w-1/3 w-full xl:pr-0 lg:pr-4 pr-0 lg:my-0 my-4">
          <CardModule
            cardLink={item.cardLink}
            cardImg={item.cardImg}
            cardHeadline={item.cardHeadline}
            cardAuthor={item.cardAuthor}
            cardDate={item.cardDate}
            cardCountry={item.cardCountry}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap">
        {renderCardNews}
        <VerticalAd classNames="h-56 lg:w-1/4 w-full" />
      </div>
    </>
  );
};

export default CardRow;
