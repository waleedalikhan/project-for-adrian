import React, { useState, useEffect } from "react";
import Page3Banner from "@/components/Page3/Page3Banner";
import AuthorTestimonial from "@/components/Global/AuthorTestimonial";
import TextBlock from "@/components/Global/TextBlock";
import DesktopAd from "@/components/Global/DesktopAd";

const Page3: React.FC = () => {
  const [text, setText] = useState<string[]>([
    "El fabricante de automóviles eléctricos había dicho el mes pasado que había comprado 1.500 millones de dólares en bitcoins y que pronto los aceptaría como forma de pago para los coches.",
    "El bitcoin, la mayor moneda digital del mundo, subió más de un 4% tras el tuit de Musk y cotizaba por última vez en 56.429 dólares.",
    "Musk dijo que el bitcoin pagado a Tesla no se convertiría en moneda tradicional, pero dio pocos detalles sobre cómo se procesarían los pagos. La compañía está usando un “software interno y de código abierto”, dijo.",
    "Sigue la información de los Negocios en nuestra sección especializada",
    "La mayoría de las empresas convencionales que permiten a los clientes pagar con bitcoin, como AT&T Inc y Microsoft Corp , suelen usar procesadores de pago especializados que convierten la criptodivisa en, por ejemplo, dólares y envían la suma a la empresa.",
    "Al igual que otras criptodivisas, el bitcoin sigue siendo poco usado para el comercio en las principales economías, obstaculizado por su volatilidad y el procesamiento relativamente costoso y lento.",
    "Musk, que publica regularmente comentarios en Twitter sobre las criptodivisas, criticó el mes pasado el dinero en efectivo convencional, diciendo que cuando “tiene un interés real negativo, sólo un tonto no miraría a otra parte”.",
    "Tras la inversión de Tesla en bitcoin, empresas como Mastercard Inc y ank of New York Mellon Corp han adoptado el activo emergente, lo que ha alentado las predicciones de que el bitcoin y otras criptodivisas se convertirán en parte habitual de las carteras de inversión.",
    "Tesla añadió recientemente “Technoking of Tesla” a la lista de títulos oficiales de Musk.",
    "Síguenos en Google Noticias para mantenerte siempre informado",
  ]);

  useEffect(() => {
    setText(text);
  }, []);

  const renderTextBlocks = text.map((item: string, index: number) => {
    return (
      <React.Fragment key={index}>
        <TextBlock text={item} classNames="my-2 lg:w-2/3 md:w-3/4" />
      </React.Fragment>
    );
  });

  return (
    <>
      <Page3Banner
        bannerTitle="ELECCIÓN DE LOS EDITORES"
        bannerHeadlineDesktop="¿Tienes bitcoins? Ahora ya puedes comprar un auto de Tesla con esta criptomoneda"
        bannerHeadlineMobile="El príncipe Harry y Meghan Markle seleccionan al ejecutivo de cine
              independiente para dirigir Archewell"
        bannerSubtitle="22 de marzo de 2021,10:02 am EST| 1,725 visualizaciones"
        bannerImg="https://picsum.photos/2200/800"
      />
      <div className="container mx-auto my-14">
        <div className="flex flex-wrap">
          <AuthorTestimonial
            authorImg="https://picsum.photos/200"
            authorName="Santiago Naranjo"
            authorComment="Presidente VTEX.Ingeniero financiero, experto en comercio electrónico y retail, coin más de 10 años de experiencia liderando la creación y expansión de marcas existosas, tanti físicas como digitales."
            classNames="mb-14 lg:w-2/3 md:w-3/4 "
          />
          {renderTextBlocks}
        </div>
      </div>
      <div className="w-full bg-red-50 md:flex hidden h-56 py-4">
        <DesktopAd className="w-2/3" />
      </div>
      <div className="w-full bg-gray-50 md:flex hidden h-56 py-4">
        <DesktopAd className="w-3/4" />
      </div>
    </>
  );
};

export default Page3;
