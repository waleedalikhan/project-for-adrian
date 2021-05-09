import React from "react";
import ReactPlayer from "react-player/lazy";

type Props = {
  videoUrl: string;
  videoHeadline: string;
  videoHeadlineLink: string;
};

const SmallVideoModule: React.FC<Props> = ({
  videoUrl,
  videoHeadline,
  videoHeadlineLink,
}) => {
  return (
    <>
      <div className="module w-full flex border-b py-6 items-start">
        <div className="md:w-1/2 w-auto cursor-pointer relative">
          <ReactPlayer url={videoUrl} controls light width="200px" height="120px" />
        </div>
        <div className="module__txt px-4 md:w-1/2">
          <h2 className="font-merriWeather md:text-lg text-sm">
            <a href={videoHeadlineLink}>{videoHeadline}</a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SmallVideoModule;
