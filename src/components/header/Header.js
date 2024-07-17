import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icon/n_pad.svg";
import icon2 from "../../images/icon/time.svg";
import icon3 from "../../images/icon/location.svg";
import icon4 from "../../images/icon/search.svg";
import icon5 from "../../images/icon/us_flag.png";
import icon6 from "../../images/icon/arrow_down.svg";
import logo from "./logoManzilTravels.png";
// import logo from "../../images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Header = (props) => {
  const [searchActive, setSearchState] = useState(false);
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ position: "absolute", zIndex: 99999 }}>
      <FloatingWhatsApp
            phoneNumber="+44 7947 478899"
            accountName="Manzil Travels"
            chatMessage={`Hey there ! I am your travel agent. How May I help you ?`}
            notification
            style={{ height: "100%" }}
            allowEsc
          />
        </div>
    <header className="site-header header-style-one">
      <div className="header__top-wrap gray-bg">
        <div className="container" style={{marginTop:"-0.5em", marginBottom:"-0.5em"}}>
          <div className="header__top ul_li_between">
            <div className="header__top-cta">
              <img src={icon1} alt="" />
              <span>Help Desk :</span> +44 7947 478899
            </div>
            <ul className="header__top-info ul_li">
              <li>
                <img src={icon2} alt="" />
                Monday - Friday 09:00 am - 06:00 Pm
              </li>
              <li>
                <img src={icon3} alt="" />
                66 Birchfield Road, Northampton, United Kingdom
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`header__wrap stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        
        <div className="container">
          <div className="header__inner ul_li_between">
            <div className="header__logo">
              <Link onClick={ClickHandler} to="/">
                <img height={100} width={100} src={logo} alt="Manzil Consultancy" />
                
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  {/* To add childern use this class ---- menu-item-has-children -----*/}
                  <li className="active">
                    <Link onClick={ClickHandler} to="/">
                      <span>Home</span>
                    </Link>
                    {/* <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/">
                          <span>Immigration</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/home-studient-visa">
                          <span>Studient Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/home-travel-agency">
                          <span>Travel Agency</span>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/">
                      <span>Services</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service-single/Tourist-Visa"
                        >
                          <span>Tourist Visa</span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service-single/Residence-Visa"
                        >
                          <span>Residence Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service-single/Working-Visa"
                        >
                          <span>Working Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service-single/Commercial-Visa"
                        >
                          <span>Commercial Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/service-single/Student-Visa"
                        >
                          <span>Student Visa</span>
                        </Link>
                      </li> */}
                   
                      
                    </ul>
                  </li>
                  
                 
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/">
                      <span>Country</span>
                    </Link>
                    <ul className="submenu">
                      
                    <li>
                        <Link
                          onClick={ClickHandler}
                          to="/country-single/Belgium"
                        >
                          <span>Schengen Visa</span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/country-single/Australia"
                        >
                          <span>Australia</span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/country-single/Canada"
                        >
                          <span>Canada</span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/country-single/USA"
                        >
                          <span>USA</span>
                        </Link>
                      </li>

                    </ul>
                  </li>

                  {/* <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} to="/">
                      <span>Blog</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} to="/blog">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          to="/blog-single/Cultural-adjustment-thriving-in-a-new-country"
                        >
                          <span>Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                   <li>
                    <Link onClick={ClickHandler} to="/faq">
                      <span>FAQs</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="xb-hamburger-menu">
              <div className="xb-nav-mobile">
                <div
                  className="xb-nav-mobile-button"
                  onClick={() => setMobailState(!mobailActive)}
                >
                  <i className="fal fa-bars"></i>
                </div>
              </div>
            </div>
            {/* <ul className="header__action ul_li">
              <li>
                <span
                  className="header__search header-search-btn"
                  onClick={() => setSearchState(!searchActive)}
                >
                  <img src={icon4} alt="" />
                  Search
                </span>
              </li>
              <li>
                <div className="header__language">
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/" className="lang-btn">
                        <div className="flag">
                          <img src={icon5} alt="" />
                        </div>
                        English
                        <div className="arrow_down">
                          <img src={icon6} alt="" />
                        </div>
                      </Link>
                      <ul className="lang_sub_list">
                        <li>
                          <Link onClick={ClickHandler} to="/">
                            English
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/">
                            Arabic
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/">
                            Bangla
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <div className="xb-header-wrap">
        <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
          <div className="xb-header-menu-scroll">
            <div
              className="xb-menu-close xb-hide-xl xb-close"
              onClick={() => setMobailState(!mobailActive)}
            ></div>
            <div className="xb-logo-mobile xb-hide-xl">
              <Link onClick={ClickHandler} to="/" rel="home">
                <img src={logo} alt="Manzil Consultancy" />
                {/* <h5>Manzil Travel</h5> */}
              </Link>
            </div>
            <div className="xb-header-mobile-search xb-hide-xl">
              {/* <form role="search" onSubmit={SubmitHandler}>
                <input
                  type="text"
                  placeholder="Search..."
                  name="s"
                  className="search-field"
                />
                <button type="submit" className="search-submit"></button>
              </form> */}
            </div>
            <nav className="xb-header-nav">
              <MobileMenu />
            </nav>
          </div>
        </div>
        <div
          className="xb-header-menu-backdrop"
          onClick={() => setMobailState(false)}
        ></div>
      </div>

      <div
        className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}
      >
        <div
          className="xb-search-close xb-close"
          onClick={() => setSearchState(!searchActive)}
        ></div>
        <div className="header-search-container">
          <form role="search" className="search-form" onSubmit={SubmitHandler}>
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
            />
          </form>
        </div>
      </div>
      <div className={`body-overlay ${searchActive ? "active" : ""}`}></div>
    </header>
    </div>
  );
};

export default Header;
