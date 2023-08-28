import Logo from "./../../assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="header">
      <div id="header-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="index.html">
                  <img className="img-fluid" src={Logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler ht-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className="line line1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058">
                    </path>
                    <path className="line line2" d="M 20,50 H 80"></path>
                    <path className="line line3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942">
                    </path>
                  </svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team.html">Team</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team-single.html">Team Single</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="error-404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="ui-ux-experience.html">UI/UX Experience</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="digital-marketing.html">Digital Marketing</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="mobile-development.html">Mobile Development</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="social-media-marketing.html">Social Media Marketing</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="website-development.html">Website Development</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="business-strategy.html">Business Strategy</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Portfolio</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="portfolio-style-1.html">Portfolio Style One</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="portfolio-single.html">Portfolio Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blogs</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="blog-style-1.html">Blog Style One</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="right-nav align-items-center d-flex justify-content-end">
                  <div className="header-number">
                    <i className="flaticon-phone-call"></i>
                    <div>
                      <span>Call Us:</span>
                      <a href="tel:+91-234-567-8900">+91-234-567-8900</a>
                    </div>
                  </div>
                  <a className="primary-btn" href="#">Get It Now </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
