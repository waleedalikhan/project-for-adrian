import React from "react";

interface SidebarModuleData {
  id: number | string;
  img: string;
  title: string;
  deliveredTime: string;
}

type Props = {
  title: string;
  sidebarCardData: SidebarModuleData[];
};

const MainBannerSidebar: React.FC<Props> = ({ title, sidebarCardData }) => {
  const renderSidebarNews = sidebarCardData.map((news: SidebarModuleData) => {
    return (
      <React.Fragment key={news.id}>
        <div className="w-full flex items-start px-6 mb-10">
          <img src={news.img} alt="" />
          <div className="md:px-8 px-4">
            <p className="font-merriWeather md:text-1xl md:mb-1 -mb-2">
              {news.title}
            </p>
            <span className="text-gray-500 md:text-xs text-xss font-mono">
              {news.deliveredTime}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="xl:w-1/3 lg:w-5/12 w-full flex flex-wrap bg-white pt-6 md:pb-36 pb-10 lg:mt-0 mt-10">
        <div className="w-full">
          <h1 className="font-semibold font-workSans text-3xl text-center mb-6">
            {title}
          </h1>
        </div>
        {renderSidebarNews}
      </div>
    </>
  );
};

export default MainBannerSidebar;
