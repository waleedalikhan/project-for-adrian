import React, { useState, useEffect } from "react";
import Layout from "@/components/Layouts";
import RowModule from "@/components/Global/RowModule";
import DesktopAd from "@/components/Global/DesktopAd";

interface SuggestionInterface {
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

const Custom404: React.FC = () => {
  const [suggestions, setSuggestions] = useState<SuggestionInterface[]>([
    {
      id: 1,
      moduleLink: "#",
      moduleImgSmall: "https://picsum.photos/500/250",
      moduleImgLarge: "https://picsum.photos/300/150",
      moduleTitle:
        "Caída de Bitcoin borra 100 mil mdd de su valor en 24 horas; ¿Cuánto durará el baño de sangre?",
      moduleSubTitle:
        "Caída de Bitcoin borra 100 mil mdd de su valor en 24 horas; ¿Cuánto durará el baño de sangre?",
      moduleAuthor: "Staff",
      moduleDate: "marzo 24, 2021",
      moduleCountry: "en Mexico",
      moduleDelivered: "ECONOMÍA Y FINANZAS",
    },
    {
      id: 2,
      moduleLink: "#",
      moduleImgSmall: "https://picsum.photos/500/250",
      moduleImgLarge: "https://picsum.photos/300/150",
      moduleTitle:
        "El bitcoin puede prosperar como reserva de valor: Scaramucci de SkyBridge",
      moduleSubTitle:
        "El bitcoin puede prosperar como reserva de valor: Scaramucci de SkyBridge",
      moduleAuthor: "Staff",
      moduleDate: "marzo 24, 2021",
      moduleCountry: "en Mexico",
      moduleDelivered: "ACTUALIDAD",
    },
    {
      id: 3,
      moduleLink: "#",
      moduleImgSmall: "https://picsum.photos/500/250",
      moduleImgLarge: "https://picsum.photos/300/150",
      moduleTitle:
        "¿Tienes bitcoins? Ahora ya puedes comprar un auto de Tesla con esta criptomoneda",
      moduleSubTitle:
        "¿Tienes bitcoins? Ahora ya puedes comprar un auto de Tesla con esta criptomoneda",
      moduleAuthor: "Staff",
      moduleDate: "marzo 24, 2021",
      moduleCountry: "en Mexico",
      moduleDelivered: "NEGOCIOS",
    },
    {
      id: 4,
      moduleLink: "#",
      moduleImgSmall: "https://picsum.photos/500/250",
      moduleImgLarge: "https://picsum.photos/300/150",
      moduleTitle:
        "Bitcoin, Tesla, GameStop y otras señales de que la recuperación de mercados será las más rápida de la historia",
      moduleSubTitle:
        "Bitcoin, Tesla, GameStop y otras señales de que la recuperación de mercados será las más rápida de la historia",
      moduleAuthor: "Staff",
      moduleDate: "marzo 24, 2021",
      moduleCountry: "en Mexico",
      moduleDelivered: "ECONOMÍA Y FINANZAS",
    },
  ]);

  useEffect(() => {
    setSuggestions(suggestions);
  }, []);

  const renderSuggestions = suggestions.map(
    (suggestion: SuggestionInterface) => {
      return (
        <React.Fragment key={suggestion.id}>
          <RowModule
            moduleTitle={suggestion.moduleTitle}
            moduleSubTitle={suggestion.moduleSubTitle}
            moduleDelivered={suggestion.moduleDelivered}
            moduleAuthor={suggestion.moduleAuthor}
            moduleImgLarge={suggestion.moduleImgLarge}
            moduleImgSmall={suggestion.moduleImgSmall}
            moduleDate={suggestion.moduleDate}
            moduleCountry={suggestion.moduleCountry}
            moduleLink={suggestion.moduleLink}
            classNames="mt-6"
          />
        </React.Fragment>
      );
    }
  );

  return (
    <Layout title="404 page not found">
      <section className="xl:px-0 px-4 md:my-28 my-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full mb-20">
              <img
                src="/images/error-404.png"
                alt=""
                className="lg:w-1/3 mx-auto"
              />
            </div>
            <div className="w-full">
              <div className="border border-black px-10 h-36 text-center lg:w-7/12 w-full mx-auto relative flex flex-wrap items-center justify-center">
                <h1 className="text-blue-medium md:text-5xl text-xl font-workSans z-20 bg-gray-50 px-6 py-4 -mt-20">
                  Error 404
                </h1>
                <p className="font-workSans md:text-lg text-gray-500 -mt-16">
                  Lo sentimos, la página que buscas no ha sido encontrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto xl:px-0 px-4">{renderSuggestions}</div>
      <div className="w-full bg-red-50 md:flex hidden h-56 py-4">
        <DesktopAd className="w-2/3 mx-auto" />
      </div>
    </Layout>
  );
};

export default Custom404;
