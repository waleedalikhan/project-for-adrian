import React from "react";
import ReactPlayer from "react-player/lazy";

type Props = {
  videoUrl: string;
};

const LargeVideoModule: React.FC<Props> = ({ videoUrl }) => {
  return (
    <>
      <ReactPlayer
        controls
        url={videoUrl}
        light
        width="100%"
        height="553px"
      />
    </>
  );
};

export default LargeVideoModule;
