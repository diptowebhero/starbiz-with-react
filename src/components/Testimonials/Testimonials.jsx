import testimonialImg2 from "../../assets/images/testimonial/002.jpg";
import testimonialImg from "../../assets/images/testimonial/01.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <>
      <section className="bg-dark-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                navigation
                slidesPerView={1}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  450: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {" "}
                <SwiperSlide>
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
                          Look no further, this is the company to go with. What
                          a pleasure it is to deal with friendly, professional
                          individuals who take pride in their work. I highly
                          recommend PixelFusion Look no further, this is the
                          company to go with.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                          Look no further, this is the company to go with. What
                          a pleasure it is to deal with friendly, professional
                          individuals who take pride in their work. I highly
                          recommend PixelFusion Look no further, this is the
                          company to go with.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
