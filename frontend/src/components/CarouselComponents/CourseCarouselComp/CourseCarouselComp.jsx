import { Link } from "react-router-dom";
import Slider from "react-slick";

import backIcon from "/icons/back.png";
import nextIcon from "/icons/next.png";

import CourseCard from "../../Cards/CourseCard/CourseCard";

import ArrowsComp from "../ArrowComp/ArrowsComp";

import css from "./CourseCarouselComp.module.css";

const CourseCarouselComp = (props) => {
  const {
    ttl,
    link = null,
    linkTxt = "",
    speed,
    autoplay,
    autoplaySpeed,
    coursesData,
  } = props;
  const settings = {
    // Update to left not center
    dots: false,
    infinite: false,
    speed: speed || 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: autoplay || false,
    autoplaySpeed: autoplaySpeed || 5000,
    lazyLoad: true,
    nextArrow: <ArrowsComp img={nextIcon} />,
    prevArrow: <ArrowsComp img={backIcon} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={css.scrollBox}>
      {ttl ? (
        <h2 className={css.ttl} style={{ marginBottom: "1rem" }}>
          {ttl}
          <Link className={css.linkTxt} to={link}>
            {linkTxt}
          </Link>
        </h2>
      ) : null}

      {coursesData?.length > 0 && (
        <Slider {...settings}>
          {coursesData?.map((item, id) => {
            return <CourseCard key={item?.id || item?._id || id} data={item} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default CourseCarouselComp;
