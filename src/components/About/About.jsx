/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import aboutUsImg2 from "../../assets/images/about/04.jpg";
import services03 from "../../assets/images/services/003.jpg";
import services01 from "../../assets/images/services/01.jpg";
import services02 from "../../assets/images/services/03.jpg";
import services05 from "../../assets/images/services/04.jpg";
import services04 from "../../assets/images/services/05.jpg";
import services from "../../localJson/service";

export default function About() {

  let { id } = useParams();
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    const foundService = services.find((service) => service.id === Number(id));
    setSingleService(foundService)
  }, [id]);
  const {name} = singleService || {};

  return (
    <>
      <section className='about-section' id="Top">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 position-relative'>
              <div className='row'>
                <div className='col-md-6 mt-10'></div>
                <div className='col-md-6'>
                  <img src={aboutUsImg2} className='img-fluid rounded' alt='' />
                  <Link to='' className='white-btn mt-4'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 ps-lg-5 mt-5 mt-lg-0'>
              <div className='theme-title '>
                <h6>About Us</h6>
                <h2>Refreshingly Unique Company About</h2>
                <p>
                  PixelFusion discovering the source behind the ubiquitous
                  filler text. In seeing a sample of lorem ipsum, his interest
                  was piqued by consectetur PixelFusion discovering the source
                  behind the ubiquitous filler text
                </p>
              </div>
              <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                  <div className='counter style-2 bg-dark-2 text-center p-5'>
                    <div className='counter-icon'>
                      <i className='flaticon-award'></i>
                    </div>
                    <div className='counter-desc'>
                      <span className='count-number' data-count='23'>
                        23
                      </span>
                      <span>k</span>
                    </div>
                    <h6>Award Winning</h6>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='theme-progress-bar mb-4'>
                    <h4>Business Success</h4>
                    <div className='progress' data-value='92'>
                      <div className='progress-bar'>
                        <div className='progress-parcent'>
                          <span>92</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='theme-progress-bar'>
                    <h4>Year Of Work</h4>
                    <div className='progress' data-value='98'>
                      <div className='progress-bar'>
                        <div className='progress-parcent'>
                          <span>98</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='featured-item style-2'>
                <div className='featured-icon'>
                  <i className='flaticon flaticon-graphic-design'></i>
                  <span className='feature-number'>01</span>
                </div>
                <div className='featured-desc'>
                  <div className='featured-title'>
                    <h5>Quality Web Designing</h5>
                  </div>
                  <p>
                    There are many variations variations of passages of Lorem
                    Ipsum available.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
              <div className='featured-item style-2'>
                <div className='featured-icon'>
                  <i className='flaticon flaticon-brand'></i>
                  <span className='feature-number'>02</span>
                </div>
                <div className='featured-desc'>
                  <div className='featured-title'>
                    <h5>Award Winning Company</h5>
                  </div>
                  <p>
                    There are many variations variations of passages of Lorem
                    Ipsum available.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
              <div className='featured-item style-2'>
                <div className='featured-icon'>
                  <i className='flaticon flaticon-content-management'></i>
                  <span className='feature-number'>03</span>
                </div>
                <div className='featured-desc'>
                  <div className='featured-title'>
                    <h5>Website Development</h5>
                  </div>
                  <p>
                    There are many variations variations of passages of Lorem
                    Ipsum available.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
              <div className='featured-item style-2'>
                <div className='featured-icon'>
                  <i className='flaticon flaticon-seo-2'></i>
                  <span className='feature-number'>04</span>
                </div>
                <div className='featured-desc'>
                  <div className='featured-title'>
                    <h5>Seo & Content Writing</h5>
                  </div>
                  <p>
                    There are many variations variations of passages of Lorem
                    Ipsum available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row justify-content-center text-center mb-5'>
            <div className='col-lg-8 col-md-12'>
              <div className='theme-title'>
                <h6>Our Services</h6>
                <h2>Giving Your Business Some Great Ideas</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='service-list'>
                <div className='service-item style-1'>
                  <div className='service-image'>
                    <img
                      src={services01}
                      className='img-fluid'
                      alt=''
                      decoding='async'
                    />
                  </div>
                  <div className='service-desc'>
                    <div className='service-title'>
                      <h4>
                      <Link to={`/service/2`}>Mobile Development</Link>
                      </h4>
                    </div>
                    <p>
                      Design professionals, there’s a bit of controversy
                      surrounding the filler text
                    </p>
                    <Link className='rounded-button' to={`/service/2`}>
                      <i className='flaticon-forward'></i>
                    </Link>
                  </div>
                </div>
                <div className='service-item style-1'>
                  <div className='service-image'>
                    <img src={services02} className='img-fluid' alt='' />
                  </div>
                  <div className='service-desc'>
                    <div className='service-title'>
                      <h4>
                        <Link to={`/service/4`}>Business Strategy</Link>
                      </h4>
                    </div>
                    <p>
                      Design professionals, there’s a bit of controversy
                      surrounding the filler text
                    </p>
                    <Link className='rounded-button'to={`/service/4`}>
                      <i className='flaticon-forward'></i>
                    </Link>
                  </div>
                </div>
                <div className='service-item style-1 active'>
                  <div className='service-image'>
                    <img src={services03} className='img-fluid' alt='' />
                  </div>
                  <div className='service-desc'>
                    <div className='service-title'>
                      <h4>
                        <Link to={`/service/6`}>CMS System</Link>
                      </h4>
                    </div>
                    <p>
                      Design professionals, there’s a bit of controversy
                      surrounding the filler text
                    </p>
                    <Link className='rounded-button' to={`/service/6`}>
                      <i className='flaticon-forward'></i>
                    </Link>
                  </div>
                </div>
                <div className='service-item style-1'>
                  <div className='service-image'>
                    <img src={services04} className='img-fluid' alt='' />
                  </div>
                  <div className='service-desc'>
                    <div className='service-title'>
                      <h4>
                        <Link to={`/service/5`}>ERP System</Link>
                      </h4>
                    </div>
                    <p>
                      Design professionals, there’s a bit of controversy
                      surrounding the filler text
                    </p>
                    <Link className='rounded-button' to={`/service/5`}>
                      <i className='flaticon-forward'></i>
                    </Link>
                  </div>
                </div>
                <div className='service-item style-1'>
                  <div className='service-image'>
                    <img src={services05} className='img-fluid' alt='' />
                  </div>
                  <div className='service-desc'>
                    <div className='service-title'>
                      <h4>
                        <Link to={`/service/3`}>Website Development</Link>
                      </h4>
                    </div>
                    <p>
                      Design professionals, there’s a bit of controversy
                      surrounding the filler text
                    </p>
                    <Link className='rounded-button' to={`/service/3`}>
                      <i className='flaticon-forward'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
