import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// import { Link } from "react-router-dom";
import FeatureSlider from "./FeatureSlider";

//Owl Carousel Settings
// const options = {
//   loop: true,
//   center: true,
//   items: 3,
//   margin: 30,
//   autoplay: true,
//   dots: true,
//   dotsEach: false,
//   autoplayTimeout: 8500,
//   smartSpeed: 450,
//   nav: true,
//   navText: [
//     '<span class="las la-long-arrow-alt-left"><span>',
//     '<span class="las la-long-arrow-alt-right"></span>',
//   ],

//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     768: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// };
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
              {/* <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={10}
                nav
                
                // {...options}
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
                        <Link to="/service/2">Mobile Application</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>App Performance
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Offline Access
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>User-Friendly UI
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Security Measures
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Cross-Platform
                          Compatibility
                        </li>
                      </ul>
                      <Link className="rounded-button" to="/service/2">
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
                        <Link to="/service/4">Business Strategy</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Market Analysis
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Competitive Edge
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Goal Alignment
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Tactical Planning
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Risk Management
                        </li>
                      </ul>
                      <Link className="rounded-button" to="/service/4">
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
                        <Link to="/service/5">ERP System</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Integrated Modules
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Real-time Data
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Customizable
                          Dashboards
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Workflow
                          Automation
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Scalability
                          Options
                        </li>
                      </ul>
                      <Link className="rounded-button" to="/service/5">
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
                        <Link to="/service/1">UI/UX Experience</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>Intuitive
                          Navigation
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Visual Appeal
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Seamless
                          Interactions
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Responsive Design
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>User-Centric
                        </li>
                      </ul>
                      <Link className="rounded-button" to="/service/1">
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
                        <Link to="/service/3">Web Application</Link>
                      </h4>
                      <ul className="list-unstyled">
                        <li>
                          <i className="flaticon-forward"></i>User Experience
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>SEO Optimization
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Content Management
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Scalability
                          Options
                        </li>
                        <li>
                          <i className="flaticon-forward"></i>Responsive Design
                        </li>
                      </ul>
                      <Link className="rounded-button" to="/service/3">
                        <i className="flaticon-forward"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel> */}
               <FeatureSlider/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
