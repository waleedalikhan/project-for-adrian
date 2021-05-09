import React from "react";
import cn from "classnames";

type Props = {
  authorImg: string;
  authorName: string;
  authorComment: string;
  classNames?: string;
};

const AuthorTestimonial: React.FC<Props> = ({
  authorImg,
  authorName,
  authorComment,
  classNames,
}) => {
  return (
    <>
      <div
        className={cn(
          "w-full mx-auto flex items-start xl:px-0 px-4",
          classNames
        )}
      >
        <div className="md:w-24 w-14">
          <img src={authorImg} alt="" className="rounded-full" />
        </div>
        <div className="flex-1 md:mt-6 mt-3 md:pl-6 pl-3">
          <p className="font-workSans font-semibold md:text-2xl">
            {authorName}
          </p>
          <div className="h-0.5 w-full bg-black my-2"></div>
          <p className="font-merriWeather md:text-base text-xss text-gray-500">
            {authorComment}
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthorTestimonial;
