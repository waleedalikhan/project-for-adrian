import React from "react";
import MobileAd from "@/components/Global/MobileAd";

type Props = {
  leftTitle?: string;
  centerTitle?: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedinLink: string;
  youtubeLink: string;
};

const SocialMediaRow: React.FC<Props> = ({
  leftTitle,
  centerTitle,
  facebookLink,
  twitterLink,
  instagramLink,
  linkedinLink,
  youtubeLink,
}) => {
  return (
    <>
      <div className="w-full flex lg:flex-nowrap flex-wrap items-center my-4 border-t-2 lg:border-b-2 py-3">
        <div className="lg:w-auto w-full lg:text-left text-center">
          <p className="uppercase text-xs tracking-wider font-workSans font-bold text-gray-400">
            {leftTitle}
          </p>
        </div>
        <div className="flex justify-center lg:flex-1 w-full lg:my-0 my-4">
          <p className="font-merriWeather font-semibold text-gray-700">
            {centerTitle}
          </p>
        </div>
        <div className="lg:w-auto w-full lg:block flex justify-center">
          <ul className="flex items-center">
            <li className="mr-12">
              <a href={facebookLink} className="cursor-pointer">
                <i className="fab fa-facebook-f text-lg text-gray-500"></i>
              </a>
            </li>
            <li className="mr-12">
              <a href={twitterLink} className="cursor-pointer">
                <i className="fab fa-twitter text-lg text-gray-500"></i>
              </a>
            </li>
            <li className="mr-12">
              <a href={instagramLink} className="cursor-pointer">
                <i className="fab fa-instagram text-lg text-gray-500"></i>
              </a>
            </li>
            <li className="mr-12">
              <a href={linkedinLink} className="cursor-pointer">
                <i className="fab fa-linkedin-in text-lg text-gray-500"></i>
              </a>
            </li>
            <li className="mr-8">
              <a href={youtubeLink} className="cursor-pointer">
                <i className="fab fa-youtube text-lg text-gray-500"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <MobileAd />
    </>
  );
};

export default SocialMediaRow;
