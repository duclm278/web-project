import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BannerCarouselComp from "../../components/CarouselComponents/BannerCarouselComp/BannerCarouselComp";
import CourseCarouselComp from "../../components/CarouselComponents/CourseCarouselComp/CourseCarouselComp";
import TrustedByBest from "../../components/HomePageComponents/TrustedByBest/TrustedByBest";
import { useAuthContext } from "../../hooks/useAuthContext";
import { coursesData } from "../../fakedata/fakedata";
import courseService from "../../services/course";
import enrollService from "../../services/enroll";
import Layout from "../Layout/Layout";
import css from "./HomePage.module.css";
import "./index.css";

const HomePage = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState([]);
  const [joinedCourses, setJoinedCourses] = useState([]);

  useEffect(() => {
    const token = user?.token;

    const fetchCourses = async () => {
      try {
        const courses = await courseService.getAll();
        setCourses(courses);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchJoinedCourses = async () => {
      try {
        const courses = await enrollService.getAll(token);
        setJoinedCourses(courses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
    fetchJoinedCourses();
  }, [user?.token]);

  return (
    <Layout className="homepage">
      <div className={css.ma}>
        <div className={css.banner}>
          <BannerCarouselComp autoplay={true} autoplaySpeed={5000} />
        </div>
        {joinedCourses.length > 0 && (
          <div className={css.m1}>
            <CourseCarouselComp
              ttl="Your courses"
              coursesData={joinedCourses}
            />
          </div>
        )}
        <div className={css.m1}>
          <CourseCarouselComp
            ttl="Students are viewing"
            coursesData={courses}
          />
        </div>
      </div>
      <TrustedByBest />
    </Layout>
  );
};

export default HomePage;
