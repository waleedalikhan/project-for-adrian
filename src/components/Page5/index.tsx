import React, { useState, useEffect } from "react";
import HeroText from "@/components/Global/HeroText";
import VerticalAd from "@/components/Global/VerticalAd";
import AuthorTestimonial from "@/components/Global/AuthorTestimonial";
import TextBlock from "@/components/Global/TextBlock";

interface HeroTextInterface {
  bannerSubtitle: string;
  bannerTitle: string;
  bannerAuthor: string;
  bannerDate: string;
  bannerCountry: string;
}

const Page5: React.FC = () => {
  const [bannerText, setBannerText] = useState<HeroTextInterface>({
    bannerSubtitle: "ELECCIÓN DE LOS EDITORES",
    bannerTitle:
      "¿Qué pasará con el comercio electrónico cuando finalmente se pueda domar al virus?",
    bannerAuthor: "Staff",
    bannerDate: "marzo 24, 2021",
    bannerCountry: "en México",
  });

  useEffect(() => {
    setBannerText(bannerText);
  }, []);

  return (
    <>
      <div className="mb-16 md:mt-16 mt-10 xl:px-0 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-start">
            <div className="lg:w-7/12 w-full flex flex-wrap">
              <HeroText
                bannerTitle={bannerText.bannerTitle}
                bannerSubtitle={bannerText.bannerSubtitle}
                bannerAuthor={bannerText.bannerAuthor}
                bannerDate={bannerText.bannerDate}
                bannerCountry={bannerText.bannerCountry}
              />
              <AuthorTestimonial
                authorImg="https://picsum.photos/200"
                authorName="Santiago Naranjo"
                authorComment="Presidente VTEX.Ingeniero financiero, experto en comercio electrónico y retail, coin más de 10 años de experiencia liderando la creación y expansión de marcas existosas, tanti físicas como digitales."
                classNames="my-14"
              />
              <div className="w-full">
                <img src="https://picsum.photos/800/500" alt="" />
              </div>
              <TextBlock
                text="Cómo cancelar sus préstamos estudiantiles Si no es uno de los 72,000 prestatarios de préstamos para estudiantes, pero compartió una experiencia similar con su colegio o universidad, es posible que pueda obtener la cancelación de sus préstamos federales para estudiantes bajo la defensa del prestatario para la condonación del pago de préstamos para estudiantes. Así es cómo:"
                classNames="mt-8"
              />
              <TextBlock text="Cómo cancelar sus préstamos estudiantiles Si no es uno de los 72,000 prestatarios de préstamos para estudiantes, pero compartió una experiencia similar con su colegio o universidad, es posible que pueda obtener la cancelación de sus préstamos federales para estudiantes bajo la defensa del prestatario para la condonación del pago de préstamos para estudiantes. Así es cómo:" />
              <TextBlock text="Cómo cancelar sus préstamos estudiantiles Si no es uno de los 72,000 prestatarios de préstamos para estudiantes, pero compartió una experiencia similar con su colegio o universidad, es posible que pueda obtener la cancelación de sus préstamos federales para estudiantes bajo la defensa del prestatario para la condonación del pago de préstamos para estudiantes. Así es cómo:" />
              <TextBlock text="Cómo cancelar sus préstamos estudiantiles Si no es uno de los 72,000 prestatarios de préstamos para estudiantes, pero compartió una experiencia similar con su colegio o universidad, es posible que pueda obtener la cancelación de sus préstamos federales para estudiantes bajo la defensa del prestatario para la condonación del pago de préstamos para estudiantes. Así es cómo:" />
              <TextBlock text="Cómo cancelar sus préstamos estudiantiles Si no es uno de los 72,000 prestatarios de préstamos para estudiantes, pero compartió una experiencia similar con su colegio o universidad, es posible que pueda obtener la cancelación de sus préstamos federales para estudiantes bajo la defensa del prestatario para la condonación del pago de préstamos para estudiantes. Así es cómo:" />
              <AuthorTestimonial
                authorImg="https://picsum.photos/200"
                authorName="Santiago Naranjo"
                authorComment="Presidente VTEX.Ingeniero financiero, experto en comercio electrónico y retail, coin más de 10 años de experiencia liderando la creación y expansión de marcas existosas, tanti físicas como digitales."
                classNames="my-14"
              />
            </div>
            <div className="w-1/3 ml-auto lg:block hidden flex-wrap">
              <VerticalAd classNames="h-700px mb-20 w-2/3" />
              <VerticalAd classNames="h-700px w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
