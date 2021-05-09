import React from "react";

const SearchBar: React.FC = () => {
  return (
    <>
      <div className="flex items-center border-b-2 border-black py-2">
        <div className="flex items-center flex-1">
          <div className="md:mr-3 mr-2 md:mt-1">
            <i className="fas fa-search md:text-3xl text-sm"></i>
          </div>
          <input
            type="text"
            placeholder="Bitcoin"
            className="bg-transparent outline-none focus:outline-none md:text-5xl text-xl font-workSans flex-1 text-black placeholder-black"
          />
        </div>
        <div>
          <button className="flex items-center font-workSans outline-none focus:outline-none bg-transparent md:text-xl text-gray-500">
            <span>Buscar</span>
            <i className="fas fa-chevron-right mt-1 text-base mx-3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
