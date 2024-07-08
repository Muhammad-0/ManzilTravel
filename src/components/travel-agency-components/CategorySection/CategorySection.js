import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'


const CategorySection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="category pos-rel pb-90">
            <div className="sec-title sec-title--travel text-center mb-15">
                <span className="subtitle">Tour Categories</span>
                <h2>Select a Tour Category</h2>
            </div>
            <div className="xb-category-slider swiper-container">
                <Slider {...settings}>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                                    <path d="M29.7151 17.63L22.2151 7.13C22.0894 6.95167 21.9263 6.80291 21.7372 6.6941C21.548 6.58529 21.3375 6.51905 21.1201 6.5C20.9028 6.48204 20.6843 6.51165 20.4796 6.58678C20.275 6.6619 20.0891 6.78074 19.9351 6.935L16.8301 10.055L11.8051 1.25C11.6645 1.02872 11.4723 0.844872 11.245 0.714238C11.0177 0.583603 10.7621 0.510087 10.5001 0.5C10.2328 0.501947 9.9709 0.575282 9.74146 0.712417C9.51202 0.849552 9.3234 1.04551 9.1951 1.28L0.195103 17.78C0.0634501 18.008 -0.00585938 18.2667 -0.00585938 18.53C-0.00585938 18.7933 0.0634501 19.052 0.195103 19.28C0.331017 19.5033 0.522941 19.6873 0.751849 19.8136C0.980757 19.9398 1.2387 20.0041 1.5001 20H28.5001C28.7749 19.9987 29.0441 19.922 29.2783 19.7781C29.5125 19.6343 29.7026 19.4289 29.828 19.1843C29.9534 18.9398 30.0092 18.6655 29.9892 18.3913C29.9693 18.1172 29.8745 17.8539 29.7151 17.63Z" fill="#FFBD0F" />
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Adventure Hills</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0_2210_2060)">
                                        <path d="M24.6666 21.4252H17.5421V12.0108H20.5617C20.5275 9.44221 20.0457 6.82824 19.2275 4.79611C18.473 2.922 17.4904 1.75781 16.6632 1.75781C15.8359 1.75781 14.8533 2.922 14.0988 4.79611C13.2807 6.82818 12.7989 9.44221 12.7646 12.0108H15.7843V21.4252H10.1352L7.55506 18.8452C5.70568 16.9958 2.69662 16.9958 0.847303 18.8452C0.68248 19.01 0.589844 19.2336 0.589844 19.4666C0.589844 19.6997 0.68248 19.9233 0.847303 20.0881L7.19764 26.4384C7.18434 26.4717 7.17227 26.5057 7.16284 26.5413L6.54064 28.8964C6.41665 29.3656 6.69661 29.8466 7.16589 29.9706C7.24112 29.9905 7.31665 30 7.39094 30C7.78018 30 8.13602 29.7394 8.24014 29.3453L8.84728 27.0471H25.8247V29.1209C25.8247 29.6063 26.2182 29.9998 26.7036 29.9998C27.189 29.9998 27.5825 29.6063 27.5825 29.1209V27.0472H28.5308C29.0161 27.0472 29.4097 26.6537 29.4097 26.1683C29.4097 23.553 27.282 21.4252 24.6666 21.4252Z" fill="#897CB5" />
                                        <path d="M20.8581 4.13962C21.7567 6.37149 22.2849 9.22458 22.3196 12.0108H26.9161C27.4015 12.0108 27.795 11.6173 27.795 11.1319C27.795 4.99379 22.8013 0 16.6631 0C18.2936 0 19.7834 1.47016 20.8581 4.13962Z" fill="#897CB5" />
                                        <path d="M12.4682 4.13962C13.5429 1.47016 15.0327 0 16.6632 0C10.525 0 5.53125 4.99379 5.53125 11.1319C5.53125 11.6173 5.92476 12.0108 6.41015 12.0108H11.0066C11.0414 9.22463 11.5696 6.37155 12.4682 4.13962Z" fill="#897CB5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2210_2060">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Beach Tour</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <g clipPath="url(#clip0_2210_2070)">
                                        <path d="M27.0642 9.6798C26.5267 9.56232 25.9958 9.90266 25.8783 10.4401C25.8632 10.5099 25.4956 11.9056 24.9603 13.9316L23.9829 13.5296L21.8446 12.6504C21.0982 12.3449 21.0497 11.7015 21.1002 11.3064C21.1706 10.7585 21.1354 10.1987 20.9541 9.67608C20.5769 8.58901 19.7461 7.65666 18.6803 7.12409C18.3485 6.98795 18.1167 6.91192 17.977 6.87121C19.4299 7.04154 20.7805 6.05209 21.0399 4.59414L21.2631 3.27246C21.5313 1.75919 20.5255 0.31366 19.0085 0.0434526C17.4946 -0.225692 16.0499 0.783351 15.7808 2.29788L15.5576 3.61956C15.3182 4.96655 16.091 6.25802 17.3306 6.71615C17.138 6.68441 16.9483 6.66847 16.7624 6.66847C14.9482 6.66847 13.4952 8.12609 13.1658 9.93832L11.418 17.7975C14.9669 18.4403 18.0878 19.0062 19.0554 19.1814L19.2433 18.0087L18.6171 17.8918C16.5532 17.506 15.1613 15.5749 15.4482 13.495L15.7729 11.1416C15.848 10.5964 16.3507 10.2159 16.8959 10.2909C17.441 10.366 17.8216 10.8687 17.7465 11.4139L17.4218 13.7673C17.2803 14.7919 17.9663 15.7436 18.983 15.9335C20.1118 16.1366 20.4945 16.3139 24.1167 17.1219C23.4751 19.5475 22.7549 22.2688 22.132 24.6241C21.8701 24.0887 21.7492 23.9354 20.6886 22.3361C20.2867 21.7301 19.655 21.3142 18.9394 21.1845L10.9978 19.7459L8.48902 31.7389C8.32526 32.9283 9.25169 34 10.4659 34C11.4408 34 12.2728 33.2961 12.4335 32.3352L15.0214 22.4925L17.3144 25.1275C18.3563 26.3248 18.9666 27.8369 19.0476 29.422L19.1917 32.2628C19.2407 33.2341 20.044 34 21.0219 34C22.0339 34 22.8547 33.1806 22.8547 32.1699V29.694L26.1077 17.3699C26.61 17.2186 27.0225 16.816 27.1611 16.2715C27.2967 15.7387 27.1379 15.1958 26.7804 14.8216L27.8245 10.8657C27.9421 10.3283 27.6017 9.7974 27.0642 9.6798Z" fill="#FE6C3F" />
                                        <path d="M9.47363 17.3654L10.987 10.5581L7.19656 9.7373L7.18062 9.81434L6.19715 14.6115C5.95344 15.7796 6.72972 16.9092 7.90047 17.1064L9.4723 17.3714C9.47297 17.3694 9.47297 17.3674 9.47363 17.3654Z" fill="#FE6C3F" />
                                        <path d="M13.3702 5.89025L11.8873 5.61002C10.8979 5.42275 9.89184 5.62795 9.05445 6.18775C8.4475 6.5935 7.97867 7.15197 7.68848 7.80475L11.459 8.62154C11.8429 7.51787 12.5155 6.57623 13.3702 5.89025Z" fill="#FE6C3F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2210_2070">
                                            <rect width="34" height="34" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Hiking High</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0_2210_2089)">
                                        <path d="M22.2085 20.0845C21.9976 20.3546 21.7797 20.6278 21.5548 20.9041C19.0354 23.9993 16.5603 26.3632 16.4562 26.4623L15 27.8492L13.5437 26.4622C13.4394 26.3629 10.9598 23.9933 8.44527 20.9041C8.22041 20.6278 8.00255 20.3546 7.79163 20.0845C5.26768 21.0523 3.2373 22.5968 3.2373 24.5096C3.2373 26.1214 4.56311 27.5689 6.97038 28.5856C9.12999 29.4976 11.9817 29.9998 15.0001 29.9998C18.0185 29.9998 20.8702 29.4976 23.0298 28.5856C25.4372 27.5689 26.763 26.1214 26.763 24.5096C26.763 22.5968 24.7325 21.0523 22.2085 20.0845Z" fill="#03CB99" />
                                        <path d="M15.1051 11.4793L17.4385 9.33868C17.6546 9.14042 17.7772 8.86971 17.7835 8.57637C17.7898 8.28304 17.6791 8.00732 17.4716 7.79995L17.4715 7.79989C17.2703 7.59862 17.0027 7.48779 16.7181 7.48779C16.4335 7.48779 16.1658 7.59862 15.9645 7.79989L15.102 8.66271L14.2463 7.80701C14.0452 7.60592 13.7778 7.49515 13.4934 7.49515C13.2091 7.49515 12.9417 7.60592 12.7406 7.80701C12.5332 8.01444 12.4225 8.2901 12.429 8.58331C12.4354 8.87647 12.5581 9.14706 12.7744 9.34507L15.1051 11.4793Z" fill="#03CB99" />
                                        <path d="M9.84905 19.7617C12.292 22.763 14.6911 25.0556 14.792 25.1517L15.0001 25.3498L15.2082 25.1517C15.3091 25.0556 17.7035 22.7688 20.1511 19.7617C23.4123 15.7554 25.136 12.4268 25.136 10.1359C25.136 4.5469 20.5891 0 15.0001 0C9.41116 0 4.86426 4.5469 4.86426 10.1359C4.86426 12.4268 6.58796 15.7553 9.84905 19.7617ZM11.4607 6.5272C12.0036 5.9842 12.7255 5.6852 13.4934 5.6852C14.0745 5.6852 14.6293 5.85648 15.1001 6.1751C15.5734 5.85171 16.1323 5.67784 16.718 5.67784C17.4861 5.67784 18.2083 5.9769 18.7514 6.52008C19.3111 7.07978 19.61 7.82387 19.5929 8.61537C19.5759 9.40675 19.2452 10.1374 18.662 10.6725L15.1062 13.9345L11.5519 10.6801C10.9679 10.1454 10.6367 9.4149 10.6193 8.62321C10.6019 7.83153 10.9007 7.08714 11.4607 6.5272Z" fill="#03CB99" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2210_2089">
                                            <rect width="30" height="30" fill="#03CB99" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Romantic Place</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path d="M9.71273 28.5582C8.90817 29.1769 7.91369 29.5598 6.82248 29.5598C4.1928 29.5598 2.05296 27.42 2.05296 24.7903C2.05296 22.1601 4.1928 20.0202 6.82248 20.0202C8.80719 20.0202 10.5094 21.2405 11.227 22.9686L12.7206 21.4196C11.5444 19.3667 9.35789 17.9673 6.82248 17.9673C3.05394 17.9673 0 21.0219 0 24.7903C0 28.5582 3.05394 31.6128 6.82248 31.6128C8.5955 31.6128 10.1952 30.9198 11.4088 29.8105C10.9431 29.6542 10.5013 29.4062 10.1238 29.0427C9.96803 28.8922 9.83363 28.7278 9.71273 28.5582Z" fill="#FFBD0F" />
                                    <path d="M20.0725 18.0194L16.4598 15.9211C18.0709 14.9127 17.4735 15.2861 19.0847 14.2777L19.034 14.791C18.947 15.6645 19.5908 16.4638 20.4012 16.6281C20.4206 16.632 26.7432 17.7067 26.9738 17.7067C27.7951 17.7067 28.5202 17.1132 28.6591 16.2759C28.8141 15.3437 28.184 14.4628 27.2518 14.3085L22.5971 13.5352L22.8185 11.314C23.0416 9.89458 23.1385 9.44951 22.6085 8.60271L21.9422 7.53751C21.0815 6.1628 19.2665 5.74244 17.8885 6.6052L10.5963 11.1708C8.80525 12.2922 7.93181 14.6567 9.39402 16.396C9.96526 17.0757 15.5193 20.4888 15.5193 20.4888L11.0211 25.1546C10.2339 25.9706 10.2573 27.2704 11.0739 28.057C11.4722 28.4411 11.9855 28.6323 12.4987 28.6323C13.0367 28.6323 13.574 28.4225 13.9763 28.0041L20.5188 21.2192C21.4418 20.2641 21.2253 18.689 20.0725 18.0194Z" fill="#FFBD0F" />
                                    <path d="M27.7364 8.69962C29.3357 7.69789 29.8202 5.59009 28.819 3.99158C27.818 2.3917 25.7102 1.9072 24.1111 2.90831C22.5125 3.90943 22.028 6.01647 23.0285 7.61498C24.0294 9.21494 26.1373 9.70012 27.7364 8.69962Z" fill="#FFBD0F" />
                                    <path d="M27.177 17.9673C23.3692 17.9673 20.3545 21.1089 20.3545 24.7903C20.3545 28.5582 23.4086 31.6128 27.177 31.6128C30.9447 31.6128 33.9995 28.5582 33.9995 24.7903C33.9995 21.0219 30.9447 17.9673 27.177 17.9673ZM27.177 29.5598C24.5473 29.5598 22.4075 27.42 22.4075 24.7903C22.4075 22.1601 24.5474 20.0202 27.177 20.0202C29.8067 20.0202 31.9466 22.1601 31.9466 24.7903C31.9466 27.42 29.8067 29.5598 27.177 29.5598Z" fill="#FFBD0F" />
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Ridding Tour</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M9.88547 24.1211L9.48129 12.7539H4.26838L3.86426 24.1211H9.88547Z" fill="#0091FF" />
                                    <path d="M20.5184 12.7539L20.1143 24.1211H26.1355L25.7313 12.7539H20.5184Z" fill="#0091FF" />
                                    <path d="M12.3934 12.7539L11.9893 24.1211H18.0105L17.6063 12.7539H12.3934Z" fill="#0091FF" />
                                    <path d="M1.875 30H28.125V25.8789H1.875V30Z" fill="#0091FF" />
                                    <path d="M1.875 9.24777V10.9961H28.125V9.24777L15 0.00384808L1.875 9.24777ZM11.875 5.99611H18.125V7.75393H11.875V5.99611Z" fill="#0091FF" />
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Cultural Place</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path d="M32.8737 32.3679H31.8707C31.8143 32.3679 31.7603 32.3455 31.7204 32.3056C31.6806 32.2658 31.6582 32.2117 31.6582 32.1554C31.6582 32.099 31.6806 32.045 31.7204 32.0051C31.7603 31.9653 31.8143 31.9429 31.8707 31.9429H32.8737C32.9301 31.9429 32.9841 31.9653 33.024 32.0051C33.0638 32.045 33.0862 32.099 33.0862 32.1554C33.0862 32.2117 33.0638 32.2658 33.024 32.3056C32.9841 32.3455 32.9301 32.3679 32.8737 32.3679Z" fill="#00CC99" />
                                    <path d="M22.6612 5.50382C22.6759 5.54358 22.678 5.58687 22.6674 5.62789C22.6567 5.66891 22.6338 5.70569 22.6017 5.73332C22.5979 5.73676 22.5936 5.73962 22.5889 5.74182C22.0568 6.14409 21.4073 6.36058 20.7402 6.35807C20.104 6.34926 19.4818 6.17022 18.9382 5.83957C18.3881 5.48937 17.7399 5.32547 17.0894 5.37207V16.9873H21.7984V32.1556C21.798 32.2282 21.811 32.3002 21.8367 32.3681H19.9114V27.6208C19.9246 27.2431 19.8615 26.8666 19.726 26.5138C19.5906 26.161 19.3854 25.8391 19.1229 25.5672C18.8603 25.2954 18.5457 25.0792 18.1978 24.9316C17.8499 24.7839 17.4759 24.7078 17.0979 24.7078C16.72 24.7078 16.346 24.7839 15.9981 24.9316C15.6502 25.0792 15.3356 25.2954 15.073 25.5672C14.8105 25.8391 14.6053 26.161 14.4698 26.5138C14.3344 26.8666 14.2713 27.2431 14.2844 27.6208V32.3681H12.3252C12.3509 32.3002 12.3639 32.2282 12.3634 32.1556V16.9873H16.6644V1.86582C16.6632 1.83326 16.6698 1.80087 16.6836 1.77135C16.6973 1.74183 16.718 1.71602 16.7437 1.69607C16.7695 1.67612 16.7997 1.66261 16.8317 1.65665C16.8637 1.6507 16.8967 1.65247 16.9279 1.66182C17.7052 1.57533 18.4889 1.75513 19.1507 2.17182C19.6187 2.48477 20.1705 2.64862 20.7334 2.6418C21.2963 2.63497 21.844 2.45778 22.3042 2.13357L22.3084 2.12932C22.3127 2.12082 22.3169 2.11657 22.3212 2.11657C22.3398 2.09988 22.3615 2.08689 22.3849 2.07832C22.4081 2.06998 22.4326 2.06567 22.4572 2.06557H22.4614C22.4801 2.06663 22.4986 2.06948 22.5167 2.07407C22.5337 2.08257 22.5507 2.09107 22.5719 2.09957C22.5762 2.09957 22.5762 2.09957 22.5804 2.10382C22.5928 2.11406 22.6042 2.12544 22.6144 2.13782C22.6296 2.14941 22.6401 2.16597 22.6442 2.18457C22.6483 2.18831 22.6516 2.19291 22.6538 2.19805C22.656 2.20318 22.6571 2.20873 22.6569 2.21432C22.6653 2.23455 22.6696 2.2562 22.6697 2.27807C22.6711 2.29828 22.6682 2.31855 22.6612 2.33757C22.6573 2.35105 22.6516 2.36392 22.6442 2.37582C22.6399 2.38432 22.6399 2.38857 22.6357 2.39282L21.4712 4.19907L22.6187 5.43157L22.6229 5.43582C22.6272 5.44007 22.6272 5.44432 22.6314 5.44857C22.6438 5.46553 22.6539 5.48413 22.6612 5.50382Z" fill="#00CC99" />
                                    <path d="M33.1505 8.74229V13.7913C33.1505 13.8476 33.1281 13.9017 33.0882 13.9415C33.0484 13.9814 32.9943 14.0038 32.938 14.0038H21.0465C20.9901 14.0038 20.9361 13.9814 20.8962 13.9415C20.8564 13.9017 20.834 13.8476 20.834 13.7913V8.74229C20.834 8.68593 20.8564 8.63188 20.8962 8.59202C20.9361 8.55217 20.9901 8.52979 21.0465 8.52979H23.4775C23.5338 8.52979 23.5879 8.55217 23.6277 8.59202C23.6676 8.63188 23.69 8.68593 23.69 8.74229V10.7525H25.5217V8.74229C25.5217 8.68593 25.5441 8.63188 25.584 8.59202C25.6238 8.55217 25.6779 8.52979 25.7342 8.52979H28.1652C28.2216 8.52979 28.2756 8.55217 28.3155 8.59202C28.3553 8.63188 28.3777 8.68593 28.3777 8.74229V10.7525H30.2945V8.74229C30.2945 8.68593 30.3169 8.63188 30.3567 8.59202C30.3966 8.55217 30.4506 8.52979 30.507 8.52979H32.938C32.9943 8.52979 33.0484 8.55217 33.0882 8.59202C33.1281 8.63188 33.1505 8.68593 33.1505 8.74229Z" fill="#00CC99" />
                                    <path d="M13.1661 8.74229V13.7913C13.1661 13.8476 13.1437 13.9017 13.1039 13.9415C13.064 13.9814 13.01 14.0038 12.9536 14.0038H1.06211C1.00575 14.0038 0.951701 13.9814 0.911849 13.9415C0.871998 13.9017 0.849609 13.8476 0.849609 13.7913V8.74229C0.849609 8.68593 0.871998 8.63188 0.911849 8.59202C0.951701 8.55217 1.00575 8.52979 1.06211 8.52979H3.49311C3.54947 8.52979 3.60352 8.55217 3.64337 8.59202C3.68322 8.63188 3.70561 8.68593 3.70561 8.74229V10.931H5.53736V8.74229C5.53736 8.68593 5.55975 8.63188 5.5996 8.59202C5.63945 8.55217 5.6935 8.52979 5.74986 8.52979H8.18086C8.23722 8.52979 8.29127 8.55217 8.33112 8.59202C8.37097 8.63188 8.39336 8.68593 8.39336 8.74229V10.931H10.3101V8.74229C10.3101 8.68593 10.3325 8.63188 10.3723 8.59202C10.4122 8.55217 10.4663 8.52979 10.5226 8.52979H12.9536C13.01 8.52979 13.064 8.55217 13.1039 8.59202C13.1437 8.63188 13.1661 8.68593 13.1661 8.74229Z" fill="#00CC99" />
                                    <path d="M22.6141 2.13327V2.13752C22.6038 2.12514 22.5925 2.11375 22.5801 2.10352C22.5924 2.1122 22.6038 2.12217 22.6141 2.13327Z" fill="#00CC99" />
                                    <path d="M28.5259 19.8821C28.5259 19.465 28.3602 19.065 28.0653 18.7701C27.7704 18.4752 27.3704 18.3096 26.9534 18.3096C26.5363 18.3096 26.1363 18.4752 25.8414 18.7701C25.5465 19.065 25.3809 19.465 25.3809 19.8821V22.3347H28.5259V19.8821Z" fill="#00CC99" />
                                    <path d="M22.2236 14.4287V32.1555C22.2236 32.2118 22.246 32.2659 22.2859 32.3057C22.3257 32.3456 22.3798 32.368 22.4361 32.368H31.8711C31.9275 32.368 31.9815 32.3456 32.0214 32.3057C32.0612 32.2659 32.0836 32.2118 32.0836 32.1555V14.4287H22.2236ZM29.3551 22.7587H24.3911C24.3348 22.7587 24.2807 22.7363 24.2409 22.6965C24.201 22.6566 24.1786 22.6026 24.1786 22.5462C24.1795 22.4901 24.2022 22.4366 24.2418 22.3969C24.2815 22.3573 24.335 22.3346 24.3911 22.3337H24.9564V19.8815C24.9564 19.3517 25.1668 18.8436 25.5414 18.469C25.916 18.0944 26.4241 17.884 26.9539 17.884C27.4837 17.884 27.9917 18.0944 28.3663 18.469C28.7409 18.8436 28.9514 19.3517 28.9514 19.8815V22.3337H29.3551C29.4115 22.3337 29.4655 22.3561 29.5054 22.3959C29.5452 22.4358 29.5676 22.4899 29.5676 22.5462C29.5676 22.6026 29.5452 22.6566 29.5054 22.6965C29.4655 22.7363 29.4115 22.7587 29.3551 22.7587Z" fill="#00CC99" />
                                    <path d="M8.4575 19.8821C8.4575 19.465 8.29183 19.065 7.99693 18.7701C7.70202 18.4752 7.30205 18.3096 6.885 18.3096C6.46795 18.3096 6.06798 18.4752 5.77307 18.7701C5.47817 19.065 5.3125 19.465 5.3125 19.8821V22.3347H8.4575V19.8821Z" fill="#00CC99" />
                                    <path d="M2.07395 14.4287V31.943H1.2877C1.23134 31.943 1.17729 31.9653 1.13744 32.0052C1.09758 32.0451 1.0752 32.0991 1.0752 32.1555C1.0752 32.2118 1.09758 32.2659 1.13744 32.3057C1.17729 32.3456 1.23134 32.368 1.2877 32.368H11.7257C11.7821 32.368 11.8361 32.3456 11.876 32.3057C11.9158 32.2659 11.9382 32.2118 11.9382 32.1555V14.4287H2.07395ZM9.2862 22.7587H4.3222C4.26584 22.7587 4.21179 22.7363 4.17194 22.6965C4.13208 22.6566 4.1097 22.6026 4.1097 22.5462C4.11057 22.4901 4.13324 22.4366 4.1729 22.3969C4.21257 22.3573 4.26611 22.3346 4.3222 22.3337H4.88745V19.8815C4.88745 19.3517 5.0979 18.8436 5.4725 18.469C5.8471 18.0944 6.35518 17.884 6.88495 17.884C7.41472 17.884 7.92279 18.0944 8.29739 18.469C8.67199 18.8436 8.88244 19.3517 8.88244 19.8815V22.3337H9.2862C9.34255 22.3337 9.3966 22.3561 9.43646 22.3959C9.47631 22.4358 9.4987 22.4899 9.4987 22.5462C9.4987 22.6026 9.47631 22.6566 9.43646 22.6965C9.3966 22.7363 9.34255 22.7587 9.2862 22.7587Z" fill="#00CC99" />
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Legacy Place</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon color-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0_2210_2089)">
                                        <path d="M22.2085 20.0845C21.9976 20.3546 21.7797 20.6278 21.5548 20.9041C19.0354 23.9993 16.5603 26.3632 16.4562 26.4623L15 27.8492L13.5437 26.4622C13.4394 26.3629 10.9598 23.9933 8.44527 20.9041C8.22041 20.6278 8.00255 20.3546 7.79163 20.0845C5.26768 21.0523 3.2373 22.5968 3.2373 24.5096C3.2373 26.1214 4.56311 27.5689 6.97038 28.5856C9.12999 29.4976 11.9817 29.9998 15.0001 29.9998C18.0185 29.9998 20.8702 29.4976 23.0298 28.5856C25.4372 27.5689 26.763 26.1214 26.763 24.5096C26.763 22.5968 24.7325 21.0523 22.2085 20.0845Z" fill="#03CB99" />
                                        <path d="M15.1051 11.4793L17.4385 9.33868C17.6546 9.14042 17.7772 8.86971 17.7835 8.57637C17.7898 8.28304 17.6791 8.00732 17.4716 7.79995L17.4715 7.79989C17.2703 7.59862 17.0027 7.48779 16.7181 7.48779C16.4335 7.48779 16.1658 7.59862 15.9645 7.79989L15.102 8.66271L14.2463 7.80701C14.0452 7.60592 13.7778 7.49515 13.4934 7.49515C13.2091 7.49515 12.9417 7.60592 12.7406 7.80701C12.5332 8.01444 12.4225 8.2901 12.429 8.58331C12.4354 8.87647 12.5581 9.14706 12.7744 9.34507L15.1051 11.4793Z" fill="#03CB99" />
                                        <path d="M9.84905 19.7617C12.292 22.763 14.6911 25.0556 14.792 25.1517L15.0001 25.3498L15.2082 25.1517C15.3091 25.0556 17.7035 22.7688 20.1511 19.7617C23.4123 15.7554 25.136 12.4268 25.136 10.1359C25.136 4.5469 20.5891 0 15.0001 0C9.41116 0 4.86426 4.5469 4.86426 10.1359C4.86426 12.4268 6.58796 15.7553 9.84905 19.7617ZM11.4607 6.5272C12.0036 5.9842 12.7255 5.6852 13.4934 5.6852C14.0745 5.6852 14.6293 5.85648 15.1001 6.1751C15.5734 5.85171 16.1323 5.67784 16.718 5.67784C17.4861 5.67784 18.2083 5.9769 18.7514 6.52008C19.3111 7.07978 19.61 7.82387 19.5929 8.61537C19.5759 9.40675 19.2452 10.1374 18.662 10.6725L15.1062 13.9345L11.5519 10.6801C10.9679 10.1454 10.6367 9.4149 10.6193 8.62321C10.6019 7.83153 10.9007 7.08714 11.4607 6.5272Z" fill="#03CB99" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2210_2089">
                                            <rect width="30" height="30" fill="#03CB99" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Romantic Place</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                    <div className="xb-category">
                        <div className="xb-item--inner">
                            <div className="xb-item--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path d="M9.71273 28.5582C8.90817 29.1769 7.91369 29.5598 6.82248 29.5598C4.1928 29.5598 2.05296 27.42 2.05296 24.7903C2.05296 22.1601 4.1928 20.0202 6.82248 20.0202C8.80719 20.0202 10.5094 21.2405 11.227 22.9686L12.7206 21.4196C11.5444 19.3667 9.35789 17.9673 6.82248 17.9673C3.05394 17.9673 0 21.0219 0 24.7903C0 28.5582 3.05394 31.6128 6.82248 31.6128C8.5955 31.6128 10.1952 30.9198 11.4088 29.8105C10.9431 29.6542 10.5013 29.4062 10.1238 29.0427C9.96803 28.8922 9.83363 28.7278 9.71273 28.5582Z" fill="#FFBD0F" />
                                    <path d="M20.0725 18.0194L16.4598 15.9211C18.0709 14.9127 17.4735 15.2861 19.0847 14.2777L19.034 14.791C18.947 15.6645 19.5908 16.4638 20.4012 16.6281C20.4206 16.632 26.7432 17.7067 26.9738 17.7067C27.7951 17.7067 28.5202 17.1132 28.6591 16.2759C28.8141 15.3437 28.184 14.4628 27.2518 14.3085L22.5971 13.5352L22.8185 11.314C23.0416 9.89458 23.1385 9.44951 22.6085 8.60271L21.9422 7.53751C21.0815 6.1628 19.2665 5.74244 17.8885 6.6052L10.5963 11.1708C8.80525 12.2922 7.93181 14.6567 9.39402 16.396C9.96526 17.0757 15.5193 20.4888 15.5193 20.4888L11.0211 25.1546C10.2339 25.9706 10.2573 27.2704 11.0739 28.057C11.4722 28.4411 11.9855 28.6323 12.4987 28.6323C13.0367 28.6323 13.574 28.4225 13.9763 28.0041L20.5188 21.2192C21.4418 20.2641 21.2253 18.689 20.0725 18.0194Z" fill="#FFBD0F" />
                                    <path d="M27.7364 8.69962C29.3357 7.69789 29.8202 5.59009 28.819 3.99158C27.818 2.3917 25.7102 1.9072 24.1111 2.90831C22.5125 3.90943 22.028 6.01647 23.0285 7.61498C24.0294 9.21494 26.1373 9.70012 27.7364 8.69962Z" fill="#FFBD0F" />
                                    <path d="M27.177 17.9673C23.3692 17.9673 20.3545 21.1089 20.3545 24.7903C20.3545 28.5582 23.4086 31.6128 27.177 31.6128C30.9447 31.6128 33.9995 28.5582 33.9995 24.7903C33.9995 21.0219 30.9447 17.9673 27.177 17.9673ZM27.177 29.5598C24.5473 29.5598 22.4075 27.42 22.4075 24.7903C22.4075 22.1601 24.5474 20.0202 27.177 20.0202C29.8067 20.0202 31.9466 22.1601 31.9466 24.7903C31.9466 27.42 29.8067 29.5598 27.177 29.5598Z" fill="#FFBD0F" />
                                </svg>
                            </div>
                            <h3 className="xb-item--title">Ridding Tour</h3>
                            <Link className="xb-item--link" to="/home-travel-agency"></Link>
                        </div>
                    </div>
                </Slider>
            </div>
            <h2 className="xb-strock-text-cat xb-strock-text">Pick Tour Categories</h2>
        </section>
    );
}

export default CategorySection;