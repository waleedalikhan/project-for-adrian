import React from "react";
import cn from "classnames";

interface SidebarInnerLinksInterface {
  id: string | number;
  linkTitle: string;
  lintPath: string;
}

interface SidebarLinksInterface {
  id: string | number;
  title: string;
  links: SidebarInnerLinksInterface[];
}

type Props = {
  isOpen: boolean;
  sidebarLinks: SidebarLinksInterface[];
};

const SidebarLinks: React.FC<Props> = ({ isOpen, sidebarLinks }) => {
  const renderSidebarLinks = sidebarLinks.map((link: SidebarLinksInterface) => {
    return (
      <React.Fragment key={link.id}>
        <div className="flex flex-wrap mb-6">
          <div className="w-full mb-5">
            <h1 className="text-white text-lg font-merriWeather font-bold">
              {link.title}
            </h1>
          </div>
          <div className="w-full pl-5 flex flex-wrap">
            {link.links.map((innerLink: SidebarInnerLinksInterface) => {
              return (
                <React.Fragment key={innerLink.id}>
                  <div className="w-full mb-3">
                    <a
                      href={innerLink.lintPath}
                      className="text-sm text-white font-merriWeather font-light"
                    >
                      {innerLink.linkTitle}
                    </a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div
        className={cn(
          "max-h-screen overflow-y-auto bg-sidebar-color fixed px-6 py-10 bottom-0 top-14 z-40 md:w-310 w-full cool-transition",
          {
            "-left-full": !isOpen,
            "left-0": isOpen,
          }
        )}
      >
        {renderSidebarLinks}
      </div>
    </>
  );
};

export default SidebarLinks;
