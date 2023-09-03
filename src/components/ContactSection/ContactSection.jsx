
export default function ContactSection() {
  return (
    <>
      <section className="contactSecBg" data-overlay="9">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="elementor-widget-contact-btn text-center position-relative">
                <h2>Let&#39;s Work Together</h2>
                <div className="round-text">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 180 180"
                    enableBackground="new 0 0 180 180"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 90, 90 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      ></path>
                    </defs>
                    <circle cx="90" cy="90" r="75" fill="none"></circle>
                    <g>
                      <use fill="none"></use>
                      <text>
                        <textPath>Get In Touch • Get In Touch •</textPath>
                      </text>
                    </g>
                  </svg>
                  <a className="contact-btn text-btn-icon" href="contact.html">
                    <i aria-hidden="true" className="flaticon-forward"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
