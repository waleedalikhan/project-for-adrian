import React, { useState, useEffect } from "react";
import Slider from "react-slick";

interface BreakingNewsSliderInterface {
  id: number;
  img: string;
}

type Props = {
  breakingNewsData: BreakingNewsSliderInterface[];
};

const NewsSlider: React.FC<Props> = ({ breakingNewsData }) => {
  const [sliderSettings, setSliderSettings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 6000
  });

  useEffect(() => {
    setSliderSettings(sliderSettings);
  }, []);

  const renderNewsSlider = breakingNewsData.map(
    (news: BreakingNewsSliderInterface) => {
      return (
        <React.Fragment key={news.id}>
          <div className="flex justify-center">
            <img src={news.img} alt="" />
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <Slider {...sliderSettings}>{renderNewsSlider}</Slider>
    </>
  );
};

export default NewsSlider;
