import React from "react";

interface RelatedPostInterface {
  postId: string | number;
  postLink: string;
  postTitle: string;
}

type Props = {
  posts: RelatedPostInterface[];
};

const RelatedPosts: React.FC<Props> = ({ posts }) => {
  const renderRelatedPosts = posts.map(
    (post: RelatedPostInterface, index: number) => {
      return (
        <React.Fragment key={post.postId}>
          <div className="w-full flex items-center border-b border-black my-2">
            <p className="font-merriWeather font-bold md:text-lg cursor-pointer">
              <span className="font-workSans text-gray-500 font-bold mr-1">
                0{index + 1}.
              </span>
              <a href={post.postLink}>{post.postTitle}</a>
            </p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full my-12">
          <h1 className="font-workSans text-2xl font-bold">Relacionados</h1>
        </div>
        {renderRelatedPosts}
      </div>
    </>
  );
};

export default RelatedPosts;
