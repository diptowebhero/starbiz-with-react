import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import $ from 'jquery';
//Owl Carousel Settings
const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 30,
  autoplay: true,
  dots: true,
  dotsEach: false,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: true,
  navText: [
    '<span class="las la-long-arrow-alt-left"><span>',
    '<span class="las la-long-arrow-alt-right"></span>',
  ],

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
export default function FeatureServices() {
  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8 col-md-12">
              <div className="theme-title">
                <h6>Our Services</h6>
                <h2>Creative Digital Solution</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={10}
                nav
                {...options}
              >
                <div className="item">
                  <div className="service-item style-3">
                    <div className="service-icon">
                      <i
                        aria-hidden="true"
                        className="flaticon-mobile-application"
                      ></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        <Link to="">Mobile Application</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Seo Marketing
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Web Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Brand Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Digital Production
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Creative Direction
                        </li>
                      </ul>
                      <Link className="rounded-button" to="">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item style-3">
                    <div className="service-icon">
                      <i className="flaticon-boost"></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        <Link to="">Business Strategy</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Seo Marketing
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Web Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Brand Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Digital Production
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Creative Direction
                        </li>
                      </ul>
                      <Link className="rounded-button" to="">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item style-3">
                    <div className="service-icon">
                      <i className="flaticon-content-marketing"></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        <Link to="">ERP System</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Seo Marketing
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Web Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Brand Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Digital Production
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Creative Direction
                        </li>
                      </ul>
                      <Link className="rounded-button" to="">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item style-3">
                    <div className="service-icon">
                      <i className="flaticon-social-media"></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        <Link to="">UI/UX Design</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Seo Marketing
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Web Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Brand Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Digital Production
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Creative Direction
                        </li>
                      </ul>
                      <Link className="rounded-button" to="">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item style-3">
                    <div className="service-icon">
                      <i className="flaticon-software-development"></i>
                    </div>
                    <div className="service-desc">
                      <h4>
                        <Link to="">Web Application</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Seo Marketing
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Web Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Brand Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Digital Production
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Creative Direction
                        </li>
                      </ul>
                      <Link className="rounded-button" to="">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            {/* <div className='col'>
              <div
                className='owl-carouse'
                data-items='3'
                data-xxl-items='3'
                data-xl-items='3'
                data-lg-items='2'
                data-md-items='2'
                data-sm-items='1'
                data-margin='30'
                data-autoplay='true'>
                <div className='item'>
                  <div className='service-item style-3'>
                    <div className='service-icon'>
                      <i
                        aria-hidden='true'
                        className='flaticon-mobile-application'></i>
                    </div>
                    <div className='service-desc'>
                      <h4>
                        <Link to=''>Mobile Application</Link>
                      </h4>
                      <ul className='list-unstyled'>
                        <li>
                          <i className='flaticon-forward'></i>Seo Marketing
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Web Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Brand Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Digital Production
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Creative Direction
                        </li>
                      </ul>
                      <Link className='rounded-button' to=''>
                        <i className='flaticon-forward'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='service-item style-3'>
                    <div className='service-icon'>
                      <i className='flaticon-boost'></i>
                    </div>
                    <div className='service-desc'>
                      <h4>
                        <Link to=''>Business Strategy</Link>
                      </h4>
                      <ul className='list-unstyled'>
                        <li>
                          <i className='flaticon-forward'></i>Seo Marketing
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Web Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Brand Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Digital Production
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Creative Direction
                        </li>
                      </ul>
                      <Link className='rounded-button' to=''>
                        <i className='flaticon-forward'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='service-item style-3'>
                    <div className='service-icon'>
                      <i className='flaticon-content-marketing'></i>
                    </div>
                    <div className='service-desc'>
                      <h4>
                        <Link to=''>ERP System</Link>
                      </h4>
                      <ul className='list-unstyled'>
                        <li>
                          <i className='flaticon-forward'></i>Seo Marketing
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Web Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Brand Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Digital Production
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Creative Direction
                        </li>
                      </ul>
                      <Link className='rounded-button' to=''>
                        <i className='flaticon-forward'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='service-item style-3'>
                    <div className='service-icon'>
                      <i className='flaticon-social-media'></i>
                    </div>
                    <div className='service-desc'>
                      <h4>
                        <Link to=''>UI/UX Design</Link>
                      </h4>
                      <ul className='list-unstyled'>
                        <li>
                          <i className='flaticon-forward'></i>Seo Marketing
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Web Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Brand Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Digital Production
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Creative Direction
                        </li>
                      </ul>
                      <Link className='rounded-button' to=''>
                        <i className='flaticon-forward'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='service-item style-3'>
                    <div className='service-icon'>
                      <i className='flaticon-software-development'></i>
                    </div>
                    <div className='service-desc'>
                      <h4>
                        <Link to=''>Web Application</Link>
                      </h4>
                      <ul className='list-unstyled'>
                        <li>
                          <i className='flaticon-forward'></i>Seo Marketing
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Web Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Brand Design
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Digital Production
                        </li>
                        <li>
                          <i className='flaticon-forward'></i>Creative Direction
                        </li>
                      </ul>
                      <Link className='rounded-button' to=''>
                        <i className='flaticon-forward'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
