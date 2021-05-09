import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-footer w-full pt-6 md:px-10 px-5 md:pb-20 pb-10">
        <div className="flex flex-wrap">
          <div className="w-full flex md:justify-end justify-center mt-5 mb-8">
            <ul className="flex items-center">
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fab fa-twitter font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fab fa-pinterest font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer md:mr-10 mr-5">
                <a href="#" className="text-white">
                  <i className="fas fa-wifi font-bold md:text-2xl"></i>
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#" className="text-white">
                  <i className="fab fa-youtube font-bold md:text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full border-b border-white border-t py-4 flex md:flex-nowrap flex-wrap justify-evenly">
            <div className="md:w-auto w-full md:text-left text-center">
              <a
                href="#"
                className="text-white font-workSans font-light md:text-xl text-sm"
              >
                Directorio
              </a>
            </div>
            <div className="md:w-auto w-full md:text-left text-center">
              <a
                href="#"
                className="text-white font-workSans font-light md:text-xl text-sm"
              >
                Media Kit
              </a>
            </div>
            <div className="md:w-auto w-full md:text-left text-center">
              <a
                href="#"
                className="text-white font-workSans font-light md:text-xl text-sm"
              >
                Aviso de Privacidad
              </a>
            </div>
            <div className="md:w-auto w-full md:text-left text-center">
              <a
                href="#"
                className="text-white font-workSans font-light md:text-xl text-sm"
              >
                Declaracion de Accesibilidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
