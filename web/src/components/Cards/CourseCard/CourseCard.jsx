import { Link } from "react-router-dom";

import css from "./CourseCard.module.css";

const CourseCard = (props) => {
  let path = "/";
  let img = "";
  let ttl = "";
  let authDet = "";
  let prc = 0;
  let stars = {};
  let noOfRats = 0;
  if (props?.data) {
    path = props.data.path || `/course/${props.data._id}`;
    img = props.data.img || props.data.coverImage;
    ttl = props.data.ttl || props.data.name;
    authDet = props.data.authDet || props.data.description;
    prc = props.data.prc || props.data.price;
    stars = props.data.stars;
    noOfRats = props.data.noOfRats;
  }

  const extraCss = props.extraCss;

  let totalRating = (
    (1 * stars?.a + 2 * stars?.b + 3 * stars?.c + 4 * stars?.d + 5 * stars?.e) /
      stars?.a +
    stars?.b +
    stars?.c +
    stars?.d +
    stars?.e
  ).toFixed(2);

  return (
    <>
      <div className={css.outerDiv} id={props.id} style={extraCss}>
        <Link className={css.innerDiv} to={path}>
          <div className={css.imgBox}>
            <img src={img} alt="course thumbnail" className={css.courseImg} />
          </div>
          <div className={css.cardBdy}>
            <div className={css.ttl}>{ttl}</div>
            <div
              className={css.authDet}
              style={{
                // height: "2rem",
                // lineHeight: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              {authDet}
            </div>
            {totalRating && noOfRats && (
              <div className={css.stats}>
                <div className={css.rat1}>{totalRating}</div>
                <div className={css.rat2}>{totalRating}</div>
                <div className={css.noOfRats}>({noOfRats})</div>
              </div>
            )}
            {prc ? (
              <div className={css.prc}>
                <span className={css.newPrc}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(prc)}
                </span>
              </div>
            ) : (
              <div className={css.prc} style={{ marginTop: "0.5rem" }}>
                <span className={css.newPrc}>Go to course</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
