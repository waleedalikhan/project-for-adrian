import React from "react";
import SmallModule from "@/components/Global/SmallModule";
import LargeModule from "@/components/Global/LargeModule";
import Module from "@/components/Global/Module";
import LTRSidebar from "@/components/Global/LTRSection/LTRSidebar";
import cn from "classnames";

interface MainNewsInterface {
  id: string | number;
  newsImgDesktop: string;
  newsImgMobile: string;
  newsLink: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface SmallModuleNewInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

interface SidebarNewsInterface {
  id: string | number;
  newsLink: string;
  newsImg: string;
  newsHeadline?: string;
  newsAuthor: string;
  newsDate: string;
  newsCountry: string;
}

type Props = {
  title: string;
  titleLineColor: string;
  mainNews: MainNewsInterface;
  smallModuleNewsFirstCol: SmallModuleNewInterface[];
  smallModuleNewsSecondCol: SmallModuleNewInterface[];
  siderbarNews: SidebarNewsInterface[];
  hasBannerOverlay?: boolean;
};

const LTRSection: React.FC<Props> = ({
  title,
  titleLineColor,
  mainNews,
  smallModuleNewsFirstCol,
  smallModuleNewsSecondCol,
  siderbarNews,
  hasBannerOverlay = false,
}) => {
  const renderSiderbarNews = siderbarNews.map((news: SidebarNewsInterface) => {
    return (
      <React.Fragment key={news.id}>
        <Module
          moduleLink={news.newsLink}
          moduleImg={news.newsImg}
          moduleHeadline={news.newsHeadline}
          moduleMetadata={news.newsAuthor}
          moduleDate={news.newsDate}
          moduleCountry={news.newsCountry}
        />
      </React.Fragment>
    );
  });

  const renderSmallModuleNewsFirstCol = smallModuleNewsFirstCol.map(
    (news: SmallModuleNewInterface) => {
      return (
        <React.Fragment key={news.id}>
          <SmallModule
            moduleLink={news.newsLink}
            moduleImg={news.newsImg}
            moduleHeadline={news.newsHeadline}
            moduleMetadata={news.newsAuthor}
            moduleDate={news.newsDate}
            moduleCountry={news.newsCountry}
            className="mb-6"
          />
        </React.Fragment>
      );
    }
  );

  const renderSmallModuleNewsSecondCol = smallModuleNewsSecondCol.map(
    (news: SmallModuleNewInterface) => {
      return (
        <React.Fragment key={news.id}>
          <SmallModule
            moduleLink={news.newsLink}
            moduleImg={news.newsImg}
            moduleHeadline={news.newsHeadline}
            moduleMetadata={news.newsAuthor}
            moduleDate={news.newsDate}
            moduleCountry={news.newsCountry}
            className="mb-6"
          />
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <section className="mt-5">
        <div className="w-full pt-6 pb-3 mb-3 xl:px-0 px-4">
          <div className="container mx-auto">
            <div className="flex items-end">
              <div className="w-auto mr-3">
                <h1 className="font-workSans font-bold md:text-5xl text-2xl">
                  {title}
                </h1>
              </div>
              <div className={cn("flex-1 h-0.5 mb-3", titleLineColor)}></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-start">
            <div className="xl:w-2/3 lg:w-7/12 w-full md:border-r-2 xl:px-0 px-4">
              <div className="w-full">
                <LargeModule
                  moduleLink={mainNews.newsLink}
                  moduleImgDesktop={mainNews.newsImgDesktop}
                  moduleImgMobile={mainNews.newsImgMobile}
                  moduleHeadline={mainNews.newsHeadline}
                  moduleMetadata={mainNews.newsAuthor}
                  moduleDate={mainNews.newsDate}
                  moduleCountry={mainNews.newsCountry}
                  hasOverlay={hasBannerOverlay}
                />
                <div className="w-full pr-4 pl-2 mb-4">
                  <div className="h-0.5 bg-gray-300 w-full"></div>
                </div>
                <div className="w-full lg:flex hidden flex-wrap">
                  <div className="lg:w-1/2 lg:border-r">
                    {renderSmallModuleNewsFirstCol}
                  </div>
                  <div className="lg:w-1/2 pl-4">
                    {renderSmallModuleNewsSecondCol}
                  </div>
                </div>
                <div className="lg:hidden flex flex-wrap">
                  <div className="w-full module">
                    <div className="module__txt font-merriWeather md:text-2xl">
                      <h2>
                        <a href="#">
                          Jornada Notarial 2021: ¿sabias que puedes ahorrar
                          hasta 35 mil pesos en escrituracion?
                        </a>
                      </h2>
                    </div>
                    <div className="module__metadata text-xs font-workSans mt-3">
                      Por <span className="font-bold">Staff</span> | marzo 24,
                      2021
                      <p className="font-workSans font-bold text-xs mt-3">
                        en Mexico
                      </p>
                    </div>
                  </div>
                  <div className="module w-full my-10">
                    <div className="module__txt font-merriWeather md:text-2xl">
                      <h2>
                        <a href="#">
                          Conoce dos diferentes vehiculos de inversion que han
                          ganado mucha popu-laridad en los mercados financieros:
                          los Futuros y...
                        </a>
                      </h2>
                    </div>
                    <div className="module__metadata text-xs font-workSans mt-3">
                      Por <span className="font-bold">Staff</span> | marzo 24,
                      2021
                      <p className="font-bold mt-3">en Mexico</p>
                    </div>
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
            <LTRSidebar>{renderSiderbarNews}</LTRSidebar>
          </div>
        </div>
      </section>
    </>
  );
};

export default LTRSection;
