import React, { useEffect, useState } from "react";
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
  const [videoWidth, setVideoWidth] = useState<string>("200px");
  const [videoHeight, setVideoHeight] = useState<string>("120px");

  useEffect(() => {
    if (window.innerWidth > 768) {
      setVideoWidth("200px");
      setVideoHeight("120px");
    } else {
      setVideoWidth("150px");
      setVideoHeight("100px");
    }

    document.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setVideoWidth("200px");
        setVideoHeight("120px");
      } else {
        setVideoWidth("150px");
        setVideoHeight("100px");
      }
    });

    return document.removeEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setVideoWidth("200px");
        setVideoHeight("100px");
      } else {
        setVideoWidth("150px");
        setVideoHeight("100px");
      }
    });
  }, []);

  return (
    <>
      <div className="module w-full flex border-b py-6 items-start">
        <div className="md:w-1/2 w-auto cursor-pointer relative">
          <ReactPlayer
            url={videoUrl}
            controls
            light
            width={videoWidth}
            height={videoHeight}
          />
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
