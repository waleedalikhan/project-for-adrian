import React from "react";

const Quote: React.FC = () => {
  return (
    <>
      <div className="w-full font-workSans font-medium text-gray-400 uppercase md:hidden block mt-10 text-center text-2xl">
        cita del <br /> dia
      </div>
      <div className="lg:h-44 bg-black w-full relative flex flex-wrap items-center py-6 px-4 md:mt-20 mt-3">
        <div className="lg:absolute xl:top-8 top-4 xl:left-12 left-4 lg:w-auto w-full text-center lg:mb-0 mb-3">
          <i className="fas fa-quote-left text-5xl text-gray-700"></i>
        </div>
        <div className="w-full text-center lg:-mb-10">
          <p className="font-bold text-white md:text-2xl text-xl font-workSans mx-auto">
            ''Creo que siempre nos estamos convirtiendo en la mujer que queremos
            ser''
          </p>
          <p className="text-white my-3 font-bold font-workSans md:text-base text-sm">
            Cleo Wade, escritora y activista
          </p>
          <p className="text-gray-600 uppercase font-workSans tracking-wider text-xs">
            compartir
          </p>
        </div>
      </div>
    </>
  );
};

export default Quote;
