// TestimonialsSlider3 ( added with v2.0.0 )

// import node module libraries
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

// import data files
import { TestimonialsList } from "data/testimonials/TestimonialsList";
import CourseBundleTeacherCard from "./CourseBundleTeacherCard";
import CourseBundleTeachersData from "data/testimonials/CourseBundleTeachersData";

const CourseBundleTeachersSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Slider {...settings} className="testimonials">
        {CourseBundleTeachersData.slice(0, 3).map((item, index) => (
          <div className="item p-2" key={item.id}>
            <CourseBundleTeacherCard key={index} item={item} />
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

// Specifies the default values for props
CourseBundleTeachersSlider.defaultProps = {
  recommended: false,
  popular: false,
  trending: false,
};

// Typechecking With PropTypes
CourseBundleTeachersSlider.propTypes = {
  recommended: PropTypes.bool,
  popular: PropTypes.bool,
  trending: PropTypes.bool,
};

export default CourseBundleTeachersSlider;
