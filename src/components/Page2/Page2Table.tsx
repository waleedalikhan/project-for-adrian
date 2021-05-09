import React from "react";
import RowModule from "@/components/Global/RowModule";
import VerticalAd from "@/components/Global/VerticalAd";

interface TableDataInterface {
  id: string | number;
  moduleLink: string;
  moduleImgLarge: string;
  moduleImgSmall: string;
  moduleDelivered: string;
  moduleTitle: string;
  moduleSubTitle: string;
  moduleAuthor: string;
  moduleDate: string;
  moduleCountry: string;
}

type Props = {
  tableData: TableDataInterface[];
};

const Page2Table: React.FC<Props> = ({ tableData }) => {
  const renderTableData = tableData.map((data: TableDataInterface) => {
    return (
      <React.Fragment key={data.id}>
        <RowModule
          moduleLink={data.moduleLink}
          moduleTitle={data.moduleTitle}
          moduleSubTitle={data.moduleSubTitle}
          moduleImgLarge={data.moduleImgLarge}
          moduleImgSmall={data.moduleImgSmall}
          moduleAuthor={data.moduleAuthor}
          moduleDelivered={data.moduleDelivered}
          moduleDate={data.moduleDate}
          moduleCountry={data.moduleCountry}
        />
      </React.Fragment>
    );
  });

  return (
    <>
      <section className="mb-16 xl:px-0 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-start">
            <div className="lg:w-2/3 w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:block hidden">
                  <h1 className="font-workSans text-gray-500 font-semibold text-lg">
                    Más de <span className="text-blue-light">Negocios</span>
                  </h1>
                  <div className="w-full h-0.5 bg-blue-light my-2"></div>
                </div>
                {renderTableData}
              </div>
            </div>
            <div className="w-1/3 lg:flex flex-wrap hidden items-start">
              <VerticalAd classNames="h-700px w-2/3 mb-20" />
              <VerticalAd classNames="h-700px w-2/3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2Table;
