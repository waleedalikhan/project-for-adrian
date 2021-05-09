import React from "react";
import MainBannerSidebar from "@/components/Home/HomeComponents/MainBannerSidebar";
import Quote from "@/components/Global/Quote";
import SocialMediaRow from "@/components/Global/SocialMediaRow";

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

type Props = {
  mainBannerImg: string;
  mainBannerHeading: string;
  mainBannerHeadingSm: string;
  mainBannerAuthor: string;
  mainBannerDate: string;
  mainBannerCountry: string;
  bannerCardData: BannerCardInterface[];
  sidebarData: SidebarModuleData[];
};

const MainBanner: React.FC<Props> = ({
  mainBannerImg,
  mainBannerHeading,
  mainBannerHeadingSm,
  mainBannerAuthor,
  mainBannerDate,
  mainBannerCountry,
  bannerCardData,
  sidebarData,
}) => {
  const renderCardData = bannerCardData.map((card: BannerCardInterface) => {
    return (
      <React.Fragment key={card.id}>
        <div className="lg:w-1/2 lg:pr-4 lg:mb-0 mb-5">
          <div className="module w-full">
            <figure className="module__img">
              <a href="#">
                <img src={card.img} alt="" />
              </a>
            </figure>
            <p className="md:hidden block text-gray-500 font-workSans font-medium uppercase mt-5 mb-4">
              forbes
            </p>
            <div className="module__txt font-merriWeather text-lg md:mt-5 mb-6">
              <h2>
                <a href="#">{card.cardHeadline}</a>
              </h2>
            </div>
            <div className="module__metadata text-xs font-workSans">
              <span className="font-bold">{card.cardAuthor}</span> |{" "}
              {card.cardDate}
              <p className="font-workSans font-bold text-xs mt-3">
                {card.cardCountry}
              </p>
            </div>
            <p></p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="xl:w-2/3 lg:w-7/12 w-full">
          <div className="w-full lg:pr-2">
            <div className="module w-full md:pr-3 md:border-r-2 md:pb-10 mb-4">
              <figure className="module__img">
                <a href="#">
                  <img
                    src={mainBannerImg}
                    alt=""
                    className="w-full md:block hidden"
                  />
                  <img
                    src={mainBannerImg}
                    alt=""
                    className="w-full md:hidden block"
                  />
                </a>
              </figure>
              <div className="module__txt font-merriWeather md:text-3xl text-xl text-center md:mt-6 mt-3 mb-8 font-semibold">
                <h2>
                  <a href="#">{mainBannerHeading}</a>
                </h2>
              </div>
              <div className="module-metadata text-center text-xs font-workSans">
                <span className="font-bold">{mainBannerAuthor}</span> |{" "}
                {mainBannerDate}{" "}
                <span className="font-workSans text-center font-bold text-xs mt-3 block">
                  {mainBannerCountry}
                </span>
              </div>
            </div>
            <div className="w-full md:hidden block my-5 text-center">
              <p className="font-merriWeather">{mainBannerHeadingSm}</p>
            </div>
            <div className="w-full flex flex-wrap lg:pr-4">
              {renderCardData}
              <div className="w-full md:hidden flex flex-wrap bg-white py-10 mt-5 px-4">
                <div className="w-full flex justify-center">
                  <button className="bg-button font-merriWeather text-white text-xs px-5 py-1">
                    Rotura
                  </button>
                </div>
                <div className="w-full my-4 border-b-2">
                  <span className="text-gray-400 font-semibold text-sm font-workSans">
                    1 hora antes
                  </span>
                  <p className="font-merriWeather my-4">
                    Estados unidos y la Union Europea golpean a China con
                    sanciones por el...
                  </p>
                </div>
                <div className="w-full mb-4 border-b-2">
                  <span className="text-gray-400 font-semibold text-sm font-workSans">
                    Hace 2 horas
                  </span>
                  <p className="font-merriWeather my-4">
                    La confianza europea en la inyeccion Covid-19 de AstraZeneca
                    se desploma...
                  </p>
                </div>
                <div className="w-full mb-4">
                  <span className="text-gray-400 font-semibold text-sm font-workSans">
                    Hace 2 horas
                  </span>
                  <p className="font-merriWeather my-4">
                    Trump respalda al republicano de Geor-gia que investiga sus
                    esfuerzos para...
                  </p>
                </div>
                <div className="w-full">
                  <button className="bg-transparent outline-none focus:outline-none text-sm text-gray-500 font-bold font-workSans flex items-center">
                    <span className="mr-2">Mostrar mas</span>
                    <i className="fas fa-arrow-right text-xs mt-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainBannerSidebar
          title="Ultimas noticias"
          sidebarCardData={sidebarData}
        />
        <Quote />
        <SocialMediaRow
          leftTitle="redes sociales de forbes"
          centerTitle="Alimentando tu pienso con exito"
          facebookLink="#"
          twitterLink="#"
          instagramLink="#"
          linkedinLink="#"
          youtubeLink="#"
        />
      </div>
    </>
  );
};

export default MainBanner;
