import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ContactSection from '../../components/ContactSection';
import Services from '../../api/service'
import FunFactSection from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection';
import CountrySection from '../../components/CountrySection/CountrySection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';

const ServicePage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Services'} pagesub={'Service'} />
            <section className="service pt-120 pb-135">
                <div className="container">
                    <div className="sec-title text-center mb-60">
                        <h2 className="wow skewIn">Easy study <span>abroad</span></h2>
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                        {Services.slice(0, 7).map((service, srv) => (
                            <div className={`col-lg-4 col-md-6 mt-30 ${service.none}`} key={srv}>
                                {service.title ?
                                    <div className="xb-service">
                                        <div className="xb-item--inner">
                                            <div className={`xb-item--icon mb-50 ${service.iconColor}`}>
                                                <img src={service.sIcon} alt="" />
                                            </div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-20"><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link>
                                                </h3>
                                                <div className="xb-item--description">
                                                    {service.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <FunFactSection />
            <PartnerSection />
            <CountrySection pClass={'pt-0'}/>
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
