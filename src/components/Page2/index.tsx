import React, { useState, useEffect } from "react";
import LTRSection from "@/components/Global/LTRSection";
import CardRow from "@/components/Global/CardRow";
import DesktopAd from "@/components/Global/DesktopAd";
import Page2Table from "@/components/Page2/Page2Table";
import { tableData } from "@/mock/page2tableData";

interface LTRMainNewsInterface {
  id: string | number;
  newsImgDesktop: string;
  newsImgMobile: string;
  newsLink: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface LTRSmallModuleNewInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface LTRSidebarNewsInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline?: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface CardModuleInterface {
  id: string | number;
  cardLink: string;
  cardImg: string;
  cardHeadline: string;
  cardAuthor: string;
  cardDate: string;
  cardCountry: string;
}

interface TableDataInterface {
  id: string | number;
  moduleLink: string;
  moduleImgLarge: string;
  moduleImgSmall: string;
  moduleDelivered: string;
  moduleTitle: string;
  moduleSubTitle: string;
  moduleAuthor: string;
  moduleDate: string;
  moduleCountry: string;
}

const Page2: React.FC = () => {
  const [ltrMainNewsData, setLtrMainNewsData] = useState<LTRMainNewsInterface>({
    id: 1,
    newsImgDesktop: "https://picsum.photos/600/250",
    newsImgMobile: "https://picsum.photos/600/350",
    newsLink: "#",
    newsHeadline:
      "¿Tienes bitcoins? Ahora ya puedes comprar un auto de Tesla con esta criptomoneda",
    newsAuthor: "Dawn Chmielewski",
    newsDate: "marzo 24, 2021",
    newsCountry: "en México",
  });

  const [ltrSmallNewsDataOne, setLtrSmallNewsDataOne] = useState<
    LTRSmallModuleNewInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline:
        "Conoce dos diferentes vehículos de inversión que han ganado mucha...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 2,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline:
        "No existe victoria sin sacrificio. En el ajedrez y en la economía es aplicable.",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);
  const [ltrSmallNewsDataTwo, setLtrSmallNewsDataTwo] = useState<
    LTRSmallModuleNewInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline:
        "Todos tenemos un potencial financiero oculto queno conocemos...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 2,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline:
        "Todos tenemos un potencial financiero oculto queno conocemos... ",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);

  const [ltrSidebarNews, setLtrSidebarNews] = useState<
    LTRSidebarNewsInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/300/150",
      newsHeadline:
        "Conoce la historia de Sophia Amoruso ganando y perdiendo dinero en el mundo de la ropa y los accesorios. Hay algo que ap... ",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/300/150",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);
  const [cardData, setCardData] = useState<CardModuleInterface[]>([
    {
      id: 1,
      cardLink: "#",
      cardHeadline: "Difunden video de Clara Luz Flores junto a líder de NXIVM",
      cardImg: "https://picsum.photos/400/200",
      cardAuthor: "Staff",
      cardDate: "marzo 24, 2021",
      cardCountry: "en Mexico",
    },
    {
      id: 2,
      cardLink: "#",
      cardHeadline:
        "No, Kanye West no es la persona negra másrica de Estados Unidos, y este es el motivo",
      cardImg: "https://picsum.photos/400/200",
      cardAuthor: "Staff",
      cardDate: "marzo 24, 2021",
      cardCountry: "en Mexico",
    },
  ]);

  const [tableInfo, setTableInfo] = useState<TableDataInterface[]>(tableData);

  useEffect(() => {
    setLtrMainNewsData(ltrMainNewsData);
    setLtrSmallNewsDataOne(ltrSmallNewsDataOne);
    setLtrSmallNewsDataTwo(ltrSmallNewsDataTwo);
    setLtrSidebarNews(ltrSidebarNews);
    setCardData(cardData);
    setTableInfo(tableInfo);
  }, []);

  return (
    <>
      <LTRSection
        title="Negocios"
        titleLineColor="bg-blue-light"
        mainNews={ltrMainNewsData}
        smallModuleNewsFirstCol={ltrSmallNewsDataOne}
        smallModuleNewsSecondCol={ltrSmallNewsDataTwo}
        siderbarNews={ltrSidebarNews}
        hasBannerOverlay={true}
      />
      <div className="container mx-auto xl:px-0 px-4">
        <CardRow cardData={cardData} />
        <div className="h-1 bg-blue w-full md:hidden block mt-4"></div>
      </div>
      <DesktopAd className="h-32 my-20" />
      <Page2Table tableData={tableInfo} />
    </>
  );
};

export default Page2;
