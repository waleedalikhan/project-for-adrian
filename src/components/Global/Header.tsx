import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
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
      <nav className="w-full flex justify-center">
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
    </>
  );
};

export default Header;
