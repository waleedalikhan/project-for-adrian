import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderModule from "@/components/Global/HeaderModule";

interface HeaderModuleInterface {
  id: string | number;
  moduleImg: string;
  moduleLink: string;
  moduleHeadline: string;
  moduleAuthor: string;
  moduleDate: string;
  moduleCountry: string;
}

const Header: React.FC = () => {
  const [headerModules, setHeaderModules] = useState<HeaderModuleInterface[]>([
    {
      id: 1,
      moduleImg: "https://picsum.photos/600/300",
      moduleLink: "#",
      moduleHeadline: "CDMX pasa a semáforo amarillo por primera vez en la pan",
      moduleAuthor: "Por Forbes Staff",
      moduleDate: "mayo 7, 2021",
      moduleCountry: "En Ciudad de Mexico",
    },
    {
      id: 2,
      moduleImg: "https://picsum.photos/600/300",
      moduleLink: "#",
      moduleHeadline:
        "NASA alerta: México vive una de las peores sequías desde 2011",
      moduleAuthor: "Por Carlos Fernandez de lara",
      moduleDate: "mayo 7, 2021",
      moduleCountry: "En Actualidad",
    },
    {
      id: 3,
      moduleImg: "https://picsum.photos/600/300",
      moduleLink: "#",
      moduleHeadline:
        "Me solidarizo, no me tomo fotos, dice AMLO sobre suausencia en Tlahuac",
      moduleAuthor: "Por Emmanual Carrille",
      moduleDate: "mayo 7, 2021",
      moduleCountry: "En Forbes Politica",
    },
  ]);

  useEffect(() => {
    setHeaderModules(headerModules);
  }, []);

  const renderHeaderNews = headerModules.map((news: HeaderModuleInterface) => {
    return (
      <React.Fragment key={news.id}>
        <div className="w-1/3">
          <HeaderModule
            moduleLink={news.moduleLink}
            moduleImg={news.moduleImg}
            moduleHeadline={news.moduleHeadline}
            moduleAuthor={news.moduleAuthor}
            moduleDate={news.moduleDate}
            moduleCountry={news.moduleCountry}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <header className="h-14 bg-black flex items-center px-5">
        <div>
          <a href="#">
            <span className="bg-white h-1 w-8 block"></span>
            <span className="bg-white h-1 w-8 my-1 block"></span>
            <span className="bg-white h-1 w-8 block"></span>
          </a>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/">
            <a href="/">
              <img
                src="/images/logo.svg"
                alt="Forbes en español"
                className="w-1/3 my-4 mx-auto"
              />
            </a>
          </Link>
          {/* <h1 className="text-4xl uppercase text-white font-sans">logo</h1> */}
        </div>
        <div>
          <Link href="/search">
            <a>
              <i
                aria-hidden="true"
                className="fas fa-search text-white text-2xl"
              ></i>
            </a>
          </Link>
        </div>
      </header>
      <nav className="w-full lg:hidden flex justify-center">
        <ul className="xl:w-nav-width lg:w-1/2 md:w-2/3 w-full bg-nav flex justify-evenly pb-3 p-2 md:rounded-b-2xl">
          <li>
            <Link href="/Mexico">
              <a className="uppercase text-white font-workSans font-medium md:text-sm text-xss truncate cursor-pointer">
                México
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Colombia">
              <a className="uppercase text-white font-workSans font-medium md:text-sm text-xss truncate cursor-pointer">
                Colombia
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Peru">
              <a className="uppercase text-white font-workSans font-medium md:text-sm text-xss truncate cursor-pointer">
                Perú
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Centroamerica">
              <a className="uppercase text-white font-workSans font-medium md:text-sm text-xss truncate cursor-pointer">
                Centroamerica
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Chile">
              <a className="uppercase text-white font-workSans font-medium md:text-sm text-xss truncate cursor-pointer">
                Chile
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="lg:flex hidden bg-nav py-5">
        <div className="container mx-auto">
          <div className="flex justify-center">{renderHeaderNews}</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
