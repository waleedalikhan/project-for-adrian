import React, { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts";
import BannerAd from "@/components/Home/HomeComponents/BannerAd";
import BreakingNews from "@/components/Home/HomeComponents/BreakingNews";
import MainBanner from "@/components/Home/HomeComponents/MainBanner";
import LTRSection from "@/components/Global/LTRSection";
import RTLSection from "@/components/Global/RTLSection";
import VideoSection from "@/components/Global/VideoSection";
import DesktopAd from "@/components/Global/DesktopAd";

interface BreakingNewInterface {
  id: number;
  headline: string;
  newsPath: string;
}

interface BannerCardInterface {
  id: number;
  img: string;
  cardHeadline: string;
  cardAuthor: string;
  cardDate: string;
  cardCountry: string;
}

interface SidebarModuleData {
  id: number | string;
  img: string;
  title: string;
  deliveredTime: string;
}

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

interface RTLMainNewsInterface {
  id: string | number;
  newsImgDesktop: string;
  newsImgMobile: string;
  newsLink: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface RTLSmallModuleNewInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface RTLSidebarNewsInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline?: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

const Home: React.FC = () => {
  const [breakingNews, setBreakingNews] = useState<BreakingNewInterface[]>([
    {
      id: 1,
      headline: "This is a breaking news...",
      newsPath: "/",
    },
    {
      id: 2,
      headline: "This is another breaking news...",
      newsPath: "/",
    },
    {
      id: 3,
      headline: "This is another breaking news...",
      newsPath: "/",
    },
    {
      id: 4,
      headline: "This is another breaking news...",
      newsPath: "/",
    },
  ]);
  const [bannerCardData, setBannerCardData] = useState<BannerCardInterface[]>([
    {
      id: 1,
      img: "https://picsum.photos/400/200",
      cardHeadline:
        "Bitcoin, Tesla, GameStop y otras senales de que la recuperacion de mercados sera la mas rapida de la historia",
      cardAuthor: "Por Staff",
      cardDate: "marzo 24, 2021",
      cardCountry: "en Mexico",
    },
    {
      id: 2,
      img: "https://picsum.photos/400/200",
      cardHeadline:
        "Bitcoin, Tesla, GameStop y otras senales de que la recuperacion de mercados sera la mas rapida de la historia",
      cardAuthor: "Por Staff",
      cardDate: "marzo 24, 2021",
      cardCountry: "en Mexico",
    },
  ]);
  const [sidebarCardData, setSidebarCardData] = useState<SidebarModuleData[]>([
    {
      id: 1,
      img: "https://picsum.photos/100",
      title:
        "AMLO asegure que ''todos'' los mi-grantes en Mexico seran vacunados",
      deliveredTime: "Hace 6 horas",
    },
    {
      id: 2,
      img: "https://picsum.photos/100",
      title: "El principe Harry trabajara en una startup de salud mental",
      deliveredTime: "Hace 6 horas",
    },
    {
      id: 3,
      img: "https://picsum.photos/100",
      title: "Peso cae 1.15%; BMW retrocede por bajos precios del petroleo",
      deliveredTime: "Hace 6 horas",
    },
    {
      id: 4,
      img: "https://picsum.photos/100",
      title:
        "Nuevo acuerdo entre Mexico y la Union Europea estara listo a fina-les de 2021",
      deliveredTime: "Hace 6 horas",
    },
  ]);

  const [ltrMainNewsData, setLtrMainNewsData] = useState<LTRMainNewsInterface>({
    id: 1,
    newsImgDesktop: "https://picsum.photos/600/250",
    newsImgMobile: "https://picsum.photos/600/350",
    newsLink: "#",
    newsHeadline:
      "Jornada Notarial 2021: ¿sabías que puedes ahorrar hasta 35 mil pesos en escrituración?",
    newsAuthor: "Por Staff",
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
  const [rtlMainNewsData, setRtlMainNewsData] = useState<RTLMainNewsInterface>({
    id: 1,
    newsImgDesktop: "https://picsum.photos/600/250",
    newsImgMobile: "https://picsum.photos/600/350",
    newsLink: "#",
    newsHeadline: "Esto es Nissan. Reinvención de la ingeniería automotriz",
    newsAuthor: "Por Staff",
    newsDate: "marzo 24, 2021",
    newsCountry: "en México",
  });
  const [rtlSmallNewsDataOne, setRtlSmallNewsDataOne] = useState<
    RTLSmallModuleNewInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline: "10 datos que debes saber sobre la vacuna...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 2,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline: "10 datos que debes saber sobre la vacuna...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);
  const [rtlSmallNewsDataTwo, setRtlSmallNewsDataTwo] = useState<
    RTLSmallModuleNewInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline: "10 datos que debes saber sobre la vacuna...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 2,
      newsLink: "#",
      newsImg: "https://picsum.photos/200",
      newsHeadline: "10 datos que debes saber sobre la vacuna...",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);
  const [rtlSidebarNews, setRtlSidebarNews] = useState<
    RTLSidebarNewsInterface[]
  >([
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/300/150",
      newsHeadline:
        "Dispositivos vanguardistas reconocidos por facilitar nuestro estilo de vida ",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
    {
      id: 1,
      newsLink: "#",
      newsImg: "https://picsum.photos/300/150",
      newsHeadline: "Hábitos saludables: benéficos para tu estilo de vida ",
      newsAuthor: "Por Staff",
      newsDate: "marzo 24, 2021",
      newsCountry: "en México",
    },
  ]);
  const [largeVideoLink, setLargeVideoLink] = useState<string>(
    "https://www.youtube.com/watch?v=Lqr6JUysERQ&ab_channel=BBCNews"
  );
  const [smallVideoLink1, setSmallVideoLink1] = useState<string>(
    "https://www.youtube.com/watch?v=dQivl4oneOA&ab_channel=BBCNews"
  );
  const [smallVideoLink2, setSmallVideoLink2] = useState<string>(
    "https://www.youtube.com/watch?v=wITv6J-hy5k&ab_channel=BBC"
  );
  const [smallVideoLink3, setSmallVideoLink3] = useState<string>(
    "https://www.youtube.com/watch?v=kBHZiXUDV6A&ab_channel=TheEconomist"
  );

  useEffect(() => {
    setBreakingNews(breakingNews);
    setBannerCardData(bannerCardData);
    setSidebarCardData(sidebarCardData);
    setLtrMainNewsData(ltrMainNewsData);
    setLtrSmallNewsDataOne(ltrSmallNewsDataOne);
    setLtrSmallNewsDataTwo(ltrSmallNewsDataTwo);
    setLtrSidebarNews(ltrSidebarNews);
    setRtlMainNewsData(rtlMainNewsData);
    setRtlSmallNewsDataOne(rtlSmallNewsDataOne);
    setRtlSmallNewsDataTwo(rtlSmallNewsDataTwo);
    setRtlSidebarNews(rtlSidebarNews);
    setLargeVideoLink(largeVideoLink);
    setSmallVideoLink1(smallVideoLink1);
    setSmallVideoLink2(smallVideoLink2);
    setSmallVideoLink3(smallVideoLink3);
  }, []);

  return (
    <DefaultLayout title="Global News | Mexico">
      <BannerAd ad="https://picsum.photos/2000/400" />
      <div className="container mx-auto xl:px-0 px-4">
        <BreakingNews breakingNews={breakingNews} />
        <MainBanner
          mainBannerImg="https://picsum.photos/600/350"
          mainBannerHeading="Morena no ha dado la mitad de su presupuesto para vacunas como lo prometio"
          mainBannerHeadingSm="AstraZeneca dice que se prepararia para solicitar una
          autorizacion de emergencia para el uso de le vacuna en los
          Estados Unidos"
          mainBannerAuthor="Por Staff"
          mainBannerDate="marzo 24, 2021"
          mainBannerCountry="en Mexico"
          bannerCardData={bannerCardData}
          sidebarData={sidebarCardData}
        />
        <LTRSection
          title="Dinero"
          titleLineColor="bg-green"
          mainNews={ltrMainNewsData}
          smallModuleNewsFirstCol={ltrSmallNewsDataOne}
          smallModuleNewsSecondCol={ltrSmallNewsDataTwo}
          siderbarNews={ltrSidebarNews}
        />
        <VideoSection
          largeVideoUrl={largeVideoLink}
          smallVideoUrl1={smallVideoLink1}
          smallVideoUrl2={smallVideoLink2}
          smallVideoUrl3={smallVideoLink3}
        />
        <RTLSection
          title="Estilo de vida"
          titleLineColor="bg-maroon"
          mainNews={rtlMainNewsData}
          smallModuleNewsFirstCol={rtlSmallNewsDataOne}
          smallModuleNewsSecondCol={rtlSmallNewsDataTwo}
          siderbarNews={rtlSidebarNews}
        />
        <DesktopAd className="lg:block hidden h-32" />
        <LTRSection
          title="Negocios"
          titleLineColor="bg-brown"
          mainNews={ltrMainNewsData}
          smallModuleNewsFirstCol={ltrSmallNewsDataOne}
          smallModuleNewsSecondCol={ltrSmallNewsDataTwo}
          siderbarNews={ltrSidebarNews}
        />
        <DesktopAd className="h-48 -mt-10 mb-5" />
        <RTLSection
          title="Tech Future"
          titleLineColor="bg-blue-dark"
          mainNews={rtlMainNewsData}
          smallModuleNewsFirstCol={rtlSmallNewsDataOne}
          smallModuleNewsSecondCol={rtlSmallNewsDataTwo}
          siderbarNews={rtlSidebarNews}
        />
        <LTRSection
          title="Política"
          titleLineColor="bg-blue-light"
          mainNews={ltrMainNewsData}
          smallModuleNewsFirstCol={ltrSmallNewsDataOne}
          smallModuleNewsSecondCol={ltrSmallNewsDataTwo}
          siderbarNews={ltrSidebarNews}
        />
        <RTLSection
          title="Economía y Finanzas"
          titleLineColor="bg-orange"
          mainNews={rtlMainNewsData}
          smallModuleNewsFirstCol={rtlSmallNewsDataOne}
          smallModuleNewsSecondCol={rtlSmallNewsDataTwo}
          siderbarNews={rtlSidebarNews}
        />
      </div>
    </DefaultLayout>
  );
};

export default Home;
