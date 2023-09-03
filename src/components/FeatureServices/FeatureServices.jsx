import { Link } from "react-router-dom";

export default function FeatureServices() {
  return (
    <>
      <section className='pt-0'>
        <div className='container'>
          <div className='row justify-content-center text-center mb-5'>
            <div className='col-lg-8 col-md-12'>
              <div className='theme-title'>
                <h6>Our Services</h6>
                <h2>Creative Digital Solution</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div
                className='owl-carousel'
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
