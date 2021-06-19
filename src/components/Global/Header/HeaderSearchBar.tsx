import React, { useState } from "react";
import cn from "classnames";

const HeaderSearchBar: React.FC = () => {
  let [searchVisible, setSearchVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center overflow-x-hidden cursor-pointer">
        <button
          className="bg-transparent outline-none focus:outline-none"
          onClick={() => setSearchVisible(true)}
        >
          <i
            aria-hidden="true"
            className="fas fa-search text-white text-2xl"
          ></i>
        </button>
        <div
          className={cn("flex cool-transition", {
            "-mr-72": !searchVisible,
            "mr-0": searchVisible,
          })}
        >
          <input
            type="text"
            className="w-56 h-8 rounded ml-4 outline-none focus:outline-none ring-0 ring-offset-transparent focus:ring-0 focus:ring-offset-transparent px-4"
            placeholder="Buscar"
          />
          <button
            className="bg-transparent outline-none focus:outline-none mx-3"
            onClick={() => setSearchVisible(false)}
          >
            <span className="bg-white h-0.5 w-7 block crossline-one"></span>
            <span className="bg-white h-0.5 w-7 my-1.5 block opacity-0 cool-transition"></span>
            <span className="bg-white h-0.5 w-7 block crossline-two"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderSearchBar;
