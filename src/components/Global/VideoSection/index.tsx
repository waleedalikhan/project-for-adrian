import React from "react";
import LargeVideoModule from "@/components/Global/VideoSection/LargeVideoModule";
import SmallVideoModule from "@/components/Global/VideoSection/SmallVideoModule";

type Props = {
  largeVideoUrl: string;
  smallVideoUrl1: string;
  smallVideoUrl2: string;
  smallVideoUrl3: string;
};

const VideoSection: React.FC<Props> = ({
  largeVideoUrl,
  smallVideoUrl1,
  smallVideoUrl2,
  smallVideoUrl3,
}) => {
  return (
    <>
      <section className="lg:-mt-20 mt-10">
        <div className="container mx-auto">
          <div className="flex items-end mb-4 xl:px-0 px-4">
            <div className="w-auto mr-5">
              <h1 className="font-workSans font-bold md:text-5xl text-2xl">
                Video
              </h1>
            </div>
            <div className="flex-1 h-0.5 bg-purple mb-3"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="module xl:w-2/3 lg:w-7/12 w-full relative xl:pl-0 lg:pl-4 pl-0 h-full">
              <LargeVideoModule videoUrl={largeVideoUrl} />
            </div>
            <div className="w-full lg:hidden block my-8 xl:px-0 px-4">
              <p className="font-merriWeather text-2xl">
                'Checo' Perez y sy llegada a Red Bull, Olimpo Gourmet y mas...
              </p>
            </div>
            <div className="xl:w-1/3 lg:w-5/12 w-full flex flex-wrap h-full xl:px-0 xl:pl-6 px-4">
              <div className="w-full h-full mb-5">
                <button className="bg-purple outline-none focus:outline-none py-1 lg:w-1/2 w-auto font-workSans font-medium uppercase text-white text-sm lg:px-0 px-10">
                  mas para ver
                </button>
              </div>
              <SmallVideoModule
                videoHeadline="'Checo' Perez y su llegada a Red Bull, Olimpico Gourmet y
                      mas..."
                videoHeadlineLink="#"
                videoUrl={smallVideoUrl1}
              />
              <SmallVideoModule
                videoHeadline="'Checo' Perez y su llegada a Red Bull, Olimpico Gourmet y
                      mas..."
                videoHeadlineLink="#"
                videoUrl={smallVideoUrl2}
              />
              <SmallVideoModule
                videoHeadline="'Checo' Perez y su llegada a Red Bull, Olimpico Gourmet y
                      mas..."
                videoHeadlineLink="#"
                videoUrl={smallVideoUrl3}
              />
            </div>
            <div className="w-full flex justify-end pr-5 mt-2">
              <button className="bg-transparent outline-none focus:outline-none flex items-center text-xs font-workSans font-semibold text-gray-500">
                <span className="mr-1">Ver todo</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-1 bg-maroon-dark w-full md:hidden block my-5"></div>
    </>
  );
};

export default VideoSection;
