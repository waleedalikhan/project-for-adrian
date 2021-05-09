import React from "react";

const RTLSidebar: React.FC = ({ children }) => {
  return (
    <>
      <div className="xl:w-1/3 w-5/12 lg:flex hidden flex-wrap md:pb-36 pb-10 lg:pr-4">
        {children}
      </div>
    </>
  );
};

export default RTLSidebar;
