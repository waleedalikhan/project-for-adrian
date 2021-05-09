import React, { useState, useEffect } from "react";
import BannerAd from "@/components/Home/HomeComponents/BannerAd";
import SearchBar from "@/components/Search/SearchBar";
import VerticalAd from "@/components/Global/VerticalAd";
import RowModule from "@/components/Global/RowModule";
import Recommendations from "@/components/Global/Recommendations";
import DesktopAd from "@/components/Global/DesktopAd";

interface SearchSuggestionInterface {
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

interface RecommendationsInterface {
  id: string | number;
  img: string;
  title: string;
  link: string;
}

const Search: React.FC = () => {
  const [searchSuggestions, setSearchSuggestions] = useState<
    SearchSuggestionInterface[]
  >([
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
  const [recommendations, setRecommendations] = useState<
    RecommendationsInterface[]
  >([
    {
      id: 1,
      img: "https://picsum.photos/100/60",
      title: "¿Tu deuda con Infonavit sube y sube? Mira cómo solucionarlo",
      link: "#",
    },
    {
      id: 2,
      img: "https://picsum.photos/100/60",
      title: "Esfuerzos por desbloquear Canal de Suez aumentan",
      link: "#",
    },
    {
      id: 3,
      img: "https://picsum.photos/100/60",
      title: "Conacyt lanza convocatoria para beca Madres mexicanas 2021",
      link: "#",
    },
    {
      id: 4,
      img: "https://picsum.photos/100/60",
      title: "Fotogalería: La importancia del Canal de Suez",
      link: "#",
    },
  ]);

  useEffect(() => {
    setSearchSuggestions(searchSuggestions);
    setRecommendations(recommendations);
  }, []);

  const renderSearchSuggestions = searchSuggestions.map(
    (suggestion: SearchSuggestionInterface) => {
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
    <>
      <BannerAd ad="https://picsum.photos/2000/400" />
      <div className="container mx-auto xl:px-0 px-4 my-20">
        <div className="flex flex-wrap items-start">
          <div className="lg:w-2/3 w-full">
            <SearchBar />
            {renderSearchSuggestions}
            <div className="w-full flex justify-center items-center my-20">
              <button className="px-8 py-4 border-black border-2 bg-transparent outline-none focus:outline-none">
                Más artículos
              </button>
            </div>
            <Recommendations recommendationData={recommendations} />
          </div>
          <div className="w-1/3 lg:block hidden">
            <VerticalAd classNames="w-2/3 h-700px" />
          </div>
        </div>
      </div>
      <div className="w-full bg-red-50 md:flex hidden h-56 py-4">
        <DesktopAd className="w-2/3 mx-auto" />
      </div>
    </>
  );
};

export default Search;
