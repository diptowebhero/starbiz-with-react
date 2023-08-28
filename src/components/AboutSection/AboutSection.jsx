import about07 from "./../../assets/images/about/07.jpg";

export default function AboutSection() {
  return (
    <section className="about-section pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 position-relative">
            <img
              className="img-fluid rounded-circle"
              src={about07}
              alt="about07"
            />
          </div>
          <div className="col-12 col-lg-6 ps-lg-5 mt-5 mt-lg-0">
            <div className="theme-title ">
              <h6>About Us</h6>
              <h2>We&rsquo;re Creative Agency Since 1980</h2>
              <p>
                Starbiz discovering the source behind the ubiquitous filler
                text. In seeing a sample of lorem ipsum, his interest was piqued
                by consectetur Starbiz discovering the source behind the
                ubiquitous filler text
              </p>
            </div>
            <div className="row my-4">
              <div className="col-md-6">
                <ul className="list-unstyled list-icon">
                  <li>
                    <i className="las la-check-circle"></i> Creative Agency
                    Website
                  </li>
                  <li>
                    <i className="las la-check-circle"></i> Built With Elementor
                  </li>
                  <li>
                    <i className="las la-check-circle"></i> We Develop Digital
                    Strategy
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled list-icon">
                  <li>
                    <i className="las la-check-circle"></i> Creative Agency
                    Website
                  </li>
                  <li>
                    <i className="las la-check-circle"></i> Built With Elementor
                  </li>
                  <li>
                    <i className="las la-check-circle"></i> We Develop Digital
                    Strategy
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="rounded-button">
              <i className="flaticon-forward"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
