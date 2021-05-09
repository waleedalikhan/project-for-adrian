import React from "react";

const Page4Banner: React.FC = () => {
  return (
    <>
      <section
        className="md:h-screen flex items-center py-10 xl:px-0 px-4"
        style={{
          backgroundImage: `url(https://picsum.photos/3000)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:w-2/3 md:w-3/4 w-11/12 mx-auto relative flex flex-wrap justify-center pt-20 pb-10">
          <div className="absolute bg-black opacity-60 inset-0 w-full h-full"></div>
          <div className="w-3/4 relative">
            <img
              src="/images/forbes-logo.png"
              alt=""
              className="md:w-1/5 w-1/2 mx-auto mb-3"
            />
            <p
              className="font-workSans md:text-2xl text-xl text-white font-semibold text-center mb-10 truncate"
              style={{ letterSpacing: "5px" }}
            >
              POST PANDEMIA
            </p>
            <p className="text-white font-workSans font-semibold lg:text-7xl md:text-5xl text-3xl text-center mb-10 lg:leading-snug md:leading-snug leading-snug">
              Lo que sigue para Moderna Post-Covid-19
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page4Banner;
