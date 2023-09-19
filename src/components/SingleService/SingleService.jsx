/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import services from "../../localJson/service";
import PageTitle from "../PageTitle/PageTitle";

export default function SingleService() {

  let { id } = useParams();
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    const foundService = services.find((service) => service.id === Number(id));
    setSingleService(foundService)
  }, [id]);
  const {name, image, des} = singleService || {};
  
  return (
    <>
      <PageTitle title={name} pageLinkName={name} />
      <div className="page-content" id="Top">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 mb-6 mb-lg-0 order-lg-1 ps-lg-5">
                <div className="service-item">
                  <div className="service-image mb-5">
                    <img src={image} className="img-fluid" alt={name} />
                  </div>
                  <p className="mb-5">{des}</p>
                  <h3>How we works?</h3>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <ul className="list-unstyled list-icon">
                        <li>
                          <i className="las la-check-circle"></i>Your Business
                          Skills But Never Stop Improving.
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Tactics That
                          Can Help Your Business Grow.
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Fast-Track Your
                          business
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>A Strategic
                          Path of True Investment
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Listening Your
                          Needs for IT Strategy
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Solutions
                          Tailored to Your Needs
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled list-icon">
                        <li>
                          <i className="las la-check-circle"></i>Your Business
                          Skills But Never Stop Improving.
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Tactics That
                          Can Help Your Business Grow.
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Fast-Track Your
                          business
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>A Strategic
                          Path of True Investment
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Listening Your
                          Needs for IT Strategy
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>Solutions
                          Tailored to Your Needs
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-lg-4 col-md-6">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          <i className="flaticon flaticon-graphic-design"></i>
                          <span className="feature-number">01</span>
                        </div>
                        <div className="featured-desc">
                          <div className="featured-title">
                            <h5>Analysis</h5>
                          </div>
                          <p>
                            There are many variations variations of passages of
                            Lorem Ipsum available.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          <i className="flaticon flaticon-brand"></i>
                          <span className="feature-number">02</span>
                        </div>
                        <div className="featured-desc">
                          <div className="featured-title">
                            <h5>Strategy</h5>
                          </div>
                          <p>
                            There are many variations variations of passages of
                            Lorem Ipsum available.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                      <div className="featured-item style-2">
                        <div className="featured-icon">
                          <i className="flaticon flaticon-content-management"></i>
                          <span className="feature-number">03</span>
                        </div>
                        <div className="featured-desc">
                          <div className="featured-title">
                            <h5>Performance</h5>
                          </div>
                          <p>
                            There are many variations variations of passages of
                            Lorem Ipsum available.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion" id="accordion">
                    <div className="accordion-item bg-transparent mb-4">
                      <h3 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button shadow-none mb-0 bg-transparent"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          1. Why Choose Us For Starbiz?
                        </button>
                      </h3>
                      <div
                        id="collapse1"
                        className="accordion-collapse border-0 collapse show"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          For the incapable bliss of present souls like mine. I
                          am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents. I should be incapable…
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent mb-4">
                      <h3 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button shadow-none mb-0 bg-transparent collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          2. What Are Your Terms And Conditions?
                        </button>
                      </h3>
                      <div
                        id="collapse2"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          For the incapable bliss of present souls like mine. I
                          am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents. I should be incapable…
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent mb-4">
                      <h3 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button shadow-none mb-0 bg-transparent collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          3. Prioritize the features your customers need
                        </button>
                      </h3>
                      <div
                        id="collapse3"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          For the incapable bliss of present souls like mine. I
                          am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents. I should be incapable…
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent mb-4">
                      <h3 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button shadow-none mb-0 bg-transparent collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          4. How to Purchase Extend Licence of this Product?
                        </button>
                      </h3>
                      <div
                        id="collapse4"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          For the incapable bliss of present souls like mine. I
                          am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents. I should be incapable…
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent">
                      <h3 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button shadow-none mb-0 bg-transparent collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          5. How to Manage your Own Dashboard?
                        </button>
                      </h3>
                      <div
                        id="collapse5"
                        className="accordion-collapse border-0 collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          For the incapable bliss of present souls like mine. I
                          am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents. I should be incapable…
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="service-widget widget widget_nav_menu">
                  <ul id="menu-services-menu" className="menu mb-0">
                    <li className="menu-item current-menu-item">
                      <Link to={`/service/1`} >UI/UX Experience</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={`/service/5`}>ERP System</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={`/service/2`}>Mobile Development</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={`/service/6`}>
                        CMS System
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to={`/service/3`}>Website Development</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={`/service/4`}>Business Strategy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
