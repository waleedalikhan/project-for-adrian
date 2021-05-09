import React from "react";
import cn from "classnames";

type Props = {
  classNames?: string;
};

const VerticalAd: React.FC<Props> = ({ classNames }) => {
  return (
    <>
      <div
        className={cn("mx-auto bg-purple", classNames)}
      >
      </div>
    </>
  );
};

export default VerticalAd;
