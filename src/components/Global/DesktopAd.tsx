import React from "react";
import cn from "classnames";

type Props = {
  className?: string;
};

const DesktopAd: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn("bg-red-500 w-2/3 mx-auto", className)}></div>
    </>
  );
};

export default DesktopAd;
