import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../images/bg/breadcrumb_bg.jpg";
import shape1 from "../../images/shape/br_shape1.png";
import shape2 from "../../images/shape/br_shape2.png";

import touristPageImage from "../../images/manzilTravel/top-banner.png";
import contactUsImage from "../../images/manzilTravel/contactUs.jpg";
import faqImage from "../../images/manzilTravel/faq.jpg";

import parallaxImage from "../../images/manzilTravel/logoManzilTravels.png";

const PageTitle = (props) => {
  const backgroundImage =
    props.pageTitle === "Tourist Visa"
      ? touristPageImage
      : props.pageTitle == "Contact"
      ? contactUsImage
      : props.pageTitle == "FAQ’s"
      ? faqImage
      : Bg;

  return (
    <section
      className="breadcrumb pos-rel bg_img"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="breadcrumb__content">
          <h2 className="breadcrumb__title">{props.pageTitle}</h2>
          <ul className="breadcrumb__list clearfix">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{props.pagesub}</li>
          </ul>
        </div>
      </div>
      <div className="breadcrumb__circle">
        <img
          className="big"
          src={parallaxImage}
          style={{ height: "11em" }}
          data-parallax='{"y" : 100, "scale" : 0.1}'
          alt="Parallax"
        />

        {/* <span className="big" data-parallax='{"y" : 100, "scale" : 0.1}'></span> 
                <span className="small" data-parallax='{"y" : 100, "scale" : 0.1}'></span> */}
      </div>
      <div className="breadcrumb__shape">
        <div className="shape shape--1">
          <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
            <img src={shape1} alt="" />
          </div>
        </div>
        <div className="shape shape--2">
          <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
            <img src={shape2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
