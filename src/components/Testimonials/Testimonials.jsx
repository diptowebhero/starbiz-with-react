import testimonialImg2 from "../../assets/images/testimonial/002.jpg";
import testimonialImg from "../../assets/images/testimonial/01.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 30,
  autoplay: true,
  dots: false,
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
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
};
export default function Testimonials() {
  return (
    <>
      <section className="bg-dark-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <OwlCarousel
                OwlCarousel
                className="owl-carousel owl-theme no-pb"
                loop
                margin={10}
                nav
                {...options}
              >
                {" "}
                <div className="item">
                  <div className="testimonial style-1">
                    <div className="testimonial-img">
                      <img
                        className="img-fluid"
                        src={testimonialImg}
                        alt="Image"
                      />
                      <div className="testimonial-caption">
                        <h5>Steven White</h5>
                        <span>CEO</span>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-quote">
                        <i className="flaticon flaticon-quotes"></i>
                      </div>
                      <p>
                        Look no further, this is the company to go with. What a
                        pleasure it is to deal with friendly, professional
                        individuals who take pride in their work. I highly
                        recommend Starbiz Look no further, this is the company
                        to go with.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial style-1">
                    <div className="testimonial-img">
                      <img
                        className="img-fluid"
                        src={testimonialImg2}
                        alt="Image"
                      />
                      <div className="testimonial-caption">
                        <h5>Maria Bella</h5>
                        <span>Manager</span>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-quote">
                        <i className="flaticon flaticon-quotes"></i>
                      </div>
                      <p>
                        Look no further, this is the company to go with. What a
                        pleasure it is to deal with friendly, professional
                        individuals who take pride in their work. I highly
                        recommend Starbiz Look no further, this is the company
                        to go with.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
