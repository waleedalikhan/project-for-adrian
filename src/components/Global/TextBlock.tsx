import React from "react";
import cn from "classnames";

type Props = {
  text: string;
  classNames?: string;
};

const TextBlock: React.FC<Props> = ({ text, classNames }) => {
  return (
    <>
      <div
        className={cn(
          "w-full mx-auto",
          classNames
        )}
      >
        <p className="font-merriWeather md:text-xl mb-8 text-gray-800">{text}</p>
      </div>
    </>
  );
};

export default TextBlock;
