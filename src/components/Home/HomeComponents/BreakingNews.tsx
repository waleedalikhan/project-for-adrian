import React, { useState, useEffect } from "react";
import Link from "next/link";
import NewsSlider from "@/components/Global/NewsSlider";

interface BreakingNewsInterface {
  id: number;
  headline: string;
  newsPath: string;
}

interface BreakingNewsSliderInterface {
  id: number;
  img: string;
}

type Props = {
  breakingNews: BreakingNewsInterface[];
};

const BreakingNews: React.FC<Props> = ({ breakingNews }) => {
  const [breakingNewsSlider, setBreakingNewsSlider] = useState<
    BreakingNewsSliderInterface[]
  >([
    {
      id: 1,
      img: "https://picsum.photos/430/200",
    },
    {
      id: 2,
      img: "https://picsum.photos/430/200",
    },
    {
      id: 3,
      img: "https://picsum.photos/430/200",
    },
    {
      id: 4,
      img: "https://picsum.photos/430/200",
    },
    {
      id: 5,
      img: "https://picsum.photos/430/200",
    },
    {
      id: 6,
      img: "https://picsum.photos/430/200",
    },
  ]);

  const renderBreakingNews = breakingNews.map(
    (news: BreakingNewsInterface, index: number) => {
      if (index < breakingNews.length - 1 && index === 0) {
        return (
          <React.Fragment key={news.id}>
            <div className="h-full w-1/4 pr-4 py-4 flex items-center border-r-2 border-gray-300">
              <Link href={news.newsPath}>
                <a className="font-merriWeather text-sm">{news.headline}</a>
              </Link>
            </div>
          </React.Fragment>
        );
      } else if (index < breakingNews.length - 1) {
        return (
          <React.Fragment key={news.id}>
            <div className="h-full w-1/4 p-4 flex items-center border-r-2 border-gray-300">
              <Link href={news.newsPath}>
                <a className="font-merriWeather text-sm">{news.headline}</a>
              </Link>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={news.id}>
            <div className="h-full w-1/4 p-4 flex items-center">
              <Link href={news.newsPath}>
                <a className="font-merriWeather text-sm">{news.headline}</a>
              </Link>
            </div>
          </React.Fragment>
        );
      }
    }
  );

  useEffect(() => {
    setBreakingNewsSlider(breakingNewsSlider);
  }, []);

  return (
    <>
      <div className="w-full md:block hidden">
        <p className="font-workSans">Edicion en Espanol</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300 my-4 md:block hidden"></div>
      <div className="w-full lg:block hidden">
        <button className="bg-button px-8 py-2 outline-none focus:outline-none text-white font-merriWeather">
          Breaking
        </button>
      </div>
      <div className="w-full">
        <div className="w-full h-28 lg:flex hidden">{renderBreakingNews}</div>
      </div>
      <div className="w-full md:hidden block mt-10 mb-2">
        <p className="text-xs">Edicion en Espanol</p>
      </div>
      <div className="w-full my-6">
        <NewsSlider breakingNewsData={breakingNewsSlider} />
      </div>
      <div className="h-0.5 bg-gray-300 w-full md:mt-3 mb-6"></div>
    </>
  );
};

export default BreakingNews;
