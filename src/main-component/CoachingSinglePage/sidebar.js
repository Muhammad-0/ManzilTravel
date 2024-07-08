import React from 'react';
import { Link } from 'react-router-dom'
import Coaching from '../../api/coaching'
import sicon from '../../images/icon/arrow_up.svg'
import sicon2 from '../../images/icon/pdf.svg'
import sicon3 from '../../images/icon/b_icon.png'
import Bg from '../../images/bg/b_bg.jpg'


const ServiceSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="sidebar-widget">
            <div className="widget">
                <ul className="widget-category list-unstyled">
                    {Coaching.slice(0, 8).map((coaching, Pitem) => (
                        <li key={Pitem}>
                            {coaching.title ?
                                <Link onClick={ClickHandler} to={`/coaching-single/${coaching.slug}`}>{coaching.title}<span><img src={sicon} alt="" /></span></Link>
                                : ''}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="widget">
                <h3>Downloads</h3>
                <ul className="widget-download ul_li_between list-unstyled">
                    <li>
                        <Link onClick={ClickHandler} to="/contact">
                            <div className="xb-download">
                                <div className="xb-item--inner">
                                    <div className="xb-item--icon">
                                        <img src={sicon2} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">TOEFL <br /> Application Form</h4>
                                    <div className="xb-item--size">
                                        3.9 KB
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/contact">
                            <div className="xb-download">
                                <div className="xb-item--inner">
                                    <div className="xb-item--icon">
                                        <img src={sicon2} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">Terms & <br /> Conditions</h4>
                                    <div className="xb-item--size">
                                        3.9 KB
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                <img className="mb-40" src={sicon3} alt="" />
                <h4>Assured Approval – <br /> Guaranteed</h4>
                <Link onClick={ClickHandler} className="thm-btn" to="/contact">Get in Touch</Link>
            </div>
        </div>
    )

}

export default ServiceSidebar;
