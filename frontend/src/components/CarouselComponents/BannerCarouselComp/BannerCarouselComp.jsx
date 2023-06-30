import Slider from "react-slick";

import { bannerData } from "../../../fakedata/fakedata";
import BannerComp from "../../HomePageComponents/BannerComp/BannerComp";
import ArrowsComp from "../ArrowComp/ArrowsComp";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

const BannerCarouselComp = ({ speed, autoplay, autoplaySpeed }) => {
  const settings = {
    infinite: true,
    speed: speed || 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay || false,
    autoplaySpeed: autoplaySpeed || 5000,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
  };
  return (
    <>
      {bannerData?.length > 0 && (
        <Slider {...settings}>
          {bannerData?.map((item, id) => {
            return <BannerComp bannerData={item} key={id} />;
          })}
        </Slider>
      )}
    </>
  );
};

export default BannerCarouselComp;
