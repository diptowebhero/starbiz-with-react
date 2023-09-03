// import Logo from "./../../assets/images/logo.png";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='primary-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mt-5 mt-lg-0'>
              <a className='footer-logo d-inline-block logo mb-5'>
                {/* <img className="img-fluid" src={Logo} alt="Logo Img"/> */}
                <h2>Agency</h2>
              </a>
              <div className='footer-cntct'>
                <ul className='media-icon list-unstyled'>
                  <li>
                    <i className='flaticon-location'></i>
                    <p className='mb-0'>
                      3482 Irving Road, 8th Floor, Ironton, Ohio, USA
                    </p>
                  </li>
                  <li>
                    <i className='flaticon-chat'></i>
                    <a href='mailto:info@example.com'>info@example.com</a>
                  </li>
                  <li>
                    <i className='flaticon-phone-call'></i>
                    <a href='tel:+912345678900'>740-533-2559</a>
                  </li>
                  <li>
                    <i className='flaticon-calendar'></i>
                    <p className='mb-0'>Monday - Friday 10:00 am to 5:00 pm</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h5 className='mb-4'>Our Services</h5>
              <ul className='list-unstyled mb-0 footer-menu'>
                <li className='mb-3'>
                  <a href='#'>UI/UX Experience</a>
                </li>
                <li className='mb-3'>
                  <a href='#'>Digital Marketing</a>
                </li>
                <li className='mb-3'>
                  <a href='#'>Mobile Development</a>
                </li>
                <li className='mb-3'>
                  <a href='#'>Social Media Marketing</a>
                </li>
                <li className='mb-3'>
                  <a href='#'>Website Development</a>
                </li>
                <li>
                  <a href='#'>Business Strategy</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-6 mt-5 mt-md-0'>
              <h5 className='mb-4'>Useful Link</h5>
              <ul className='list-unstyled mb-0 footer-menu'>
                <li className='mb-3'>
                  <a href='#'>About Us</a>
                </li>
                <li className='mb-3'>
                  <a href='#'>Contact</a>
                </li>
                <li className='mb-3'>Price Table</li>
                <li className='mb-3'>Our Blogs</li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
              <h5 className='mb-4'>Newsletter</h5>
              <div className='subscribe-form'>
                <form id='mc-form'>
                  <input
                    type='email'
                    value=''
                    name='EMAIL'
                    className='email form-control'
                    id='mc-email'
                    placeholder='Enter your email address'
                    required=''
                  />
                  <div className='primary-btn mt-3'>
                    <input
                      className='subscribe-btn'
                      type='submit'
                      name='subscribe'
                      value='Subscribe Now'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='secondary-footer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-12'>
              {" "}
              Copyright 2022 Agency by{" "}
              <u>
                <a className='text-theme' href='#'>
                  WeDevLoopers
                </a>
              </u>{" "}
              | All Rights Reserved{" "}
            </div>
            <div className='col-lg-4 col-md-8 text-lg-end mt-3 mt-lg-0'>
              <ul className='list-inline p-0 m-0 social-icons footer-social'>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='la la-facebook'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='la la-dribbble'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='la la-instagram'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='la la-twitter'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='la la-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
