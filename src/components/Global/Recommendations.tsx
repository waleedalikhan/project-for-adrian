import React from "react";

interface RecommendationsInterface {
  id: string | number;
  img: string;
  title: string;
  link: string;
}

type Props = {
  recommendationData: RecommendationsInterface[];
};

const Recommendations: React.FC<Props> = ({ recommendationData }) => {
  const renderRecommendations = recommendationData.map(
    (rec: RecommendationsInterface) => {
      return (
        <React.Fragment key={rec.id}>
          <div className="w-full flex items-start border-b border-black pb-2 mb-4">
            <img src={rec.img} alt="" />
            <p className="font-workSans text-xl flex-1 pl-10">
              {rec.title}
            </p>
            <button className="outline-none focus:outline-none bg-transparent text-gray-500">
              <a href={rec.link}>
                <i className="fas fa-chevron-right"></i>
              </a>
            </button>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="w-full md:flex hidden flex-wrap">
        <div className="w-full my-4">
          <h1 className="font-workSans text-3xl">Recomendados</h1>
        </div>
        {renderRecommendations}
      </div>
    </>
  );
};

export default Recommendations;
