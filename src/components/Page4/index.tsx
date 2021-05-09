import React, { useState, useEffect } from "react";
import Page4Banner from "@/components/Page4/Page4Banner";
import AuthorTestimonial from "@/components/Global/AuthorTestimonial";
import TextBlock from "@/components/Global/TextBlock";
import VerticalAd from "@/components/Global/VerticalAd";
import RelatedPosts from "@/components/Global/RelatedPosts";

interface RelatedPostInterface {
  postId: string | number;
  postLink: string;
  postTitle: string;
}

const Page4: React.FC = () => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPostInterface[]>([
    {
      postId: 1,
      postLink: "#",
      postTitle: "LOREM IPSUM DOLOR SIT AMET",
    },
    {
      postId: 2,
      postLink: "#",
      postTitle: "CONSECTETUER ADIPISCING",
    },
    {
      postId: 3,
      postLink: "#",
      postTitle:
        ". SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA",
    },
    {
      postId: 4,
      postLink: "#",
      postTitle:
        "UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL",
    },
  ]);

  useEffect(() => {
    setRelatedPosts(relatedPosts);
  }, []);

  return (
    <>
      <Page4Banner />
      <div className="container mx-auto xl:px-0 px-4 my-10">
        <div className="flex flex-wrap items-start">
          <div className="lg:w-7/12 mx-auto w-full flex flex-wrap">
            <AuthorTestimonial
              authorImg="https://picsum.photos/200"
              authorName="Santiago Naranjo"
              authorComment="Presidente VTEX.Ingeniero financiero, experto en comercio electrónico y retail, coin más de 10 años de experiencia liderando la creación y expansión de marcas existosas, tanti físicas como digitales."
              classNames="mb-14"
            />
            <TextBlock text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." />
            <TextBlock text="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. " />
            <img src="https://picsum.photos/700/500" alt="" className="mb-10" />
            <TextBlock text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi." />
            <TextBlock
              text="Lorem ipsum dolor sit amet"
              classNames="text-red"
            />
            <TextBlock text="Acons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat." />
            <TextBlock text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, " />
            <div className="md:hidden block h-56 bg-blue"></div>
            <img src="https://picsum.photos/700/500" alt="" className="my-10" />
            <TextBlock text="sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. " />
            <TextBlock text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis." />
            <TextBlock text="Evero eros et accumsan" classNames="text-red" />
            <TextBlock text="Let iusto odio dignissim qui blandit praesent luptatum zzril elenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. " />
            <TextBlock text="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat." />
            <img src="https://picsum.photos/700/500" alt="" className="my-10" />
            <TextBlock
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"
              classNames="border-b border-black pb-10"
            />
            <RelatedPosts posts={relatedPosts} />
          </div>
          <div className="w-1/3 lg:block hidden">
            <VerticalAd classNames="h-700px mb-20" />
            <VerticalAd classNames="h-700px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
