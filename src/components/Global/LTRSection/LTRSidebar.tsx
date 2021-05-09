import React from "react";

const LTRSidebar: React.FC = ({ children }) => {
  return (
    <>
      <div className="xl:w-1/3 w-5/12 lg:flex hidden flex-wrap md:pb-36 pb-10 xl:pl-4 lg:px-4">
        {children}
      </div>
    </>
  );
};

export default LTRSidebar;
