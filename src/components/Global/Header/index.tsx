import React, { useState, useEffect } from "react";
import Link from "next/link";
import SidebarLinks from "@/components/Global/Header/SidebarLinks";
import cn from "classnames";
import mockLinks from "@/components/Global/Header/mockLinks";
import HeaderSearchBar from "@/components/Global/Header/HeaderSearchBar";

interface SidebarInnerLinksInterface {
  id: string | number;
  linkTitle: string;
  lintPath: string;
}

interface SidebarLinksInterface {
  id: string | number;
  title: string;
  links: SidebarInnerLinksInterface[];
}

const Header: React.FC = () => {
  const [sidebarLinks, setSidebarLinks] =
    useState<SidebarLinksInterface[]>(mockLinks);

  let [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible((sidebarVisible = !sidebarVisible));
  };

  useEffect(() => {
    setSidebarLinks(sidebarLinks);
  }, []);

  return (
    <>
      <header className="h-14 bg-black flex items-center md:px-10 px-6 fixed top-0 w-full z-50">
        <div className="w-1/3">
          <button
            className="bg-transparent outline-none focus:outline-none"
            onClick={toggleSidebar}
          >
            <span
              className={cn("bg-white h-0.5 w-8 block cool-transition", {
                "crossline-one": sidebarVisible,
              })}
            ></span>
            <span
              className={cn("bg-white h-0.5 w-8 my-1.5 block cool-transition", {
                "opacity-0": sidebarVisible,
              })}
            ></span>
            <span
              className={cn("bg-white h-0.5 w-8 block cool-transition", {
                "crossline-two": sidebarVisible,
              })}
            ></span>
          </button>
        </div>
        <div className="w-1/3 flex justify-center">
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
        <div className="w-1/3 flex justify-end">
          <HeaderSearchBar />
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
      <SidebarLinks isOpen={sidebarVisible} sidebarLinks={sidebarLinks} />
    </>
  );
};

export default Header;
