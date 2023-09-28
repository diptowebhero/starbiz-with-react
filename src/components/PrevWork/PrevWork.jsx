import { Link } from "react-router-dom";
import portfolioImg from "../../assets/images/portfolio/06.jpg";
import portfolioImg2 from "../../assets/images/portfolio/07.jpg";
import portfolioImg3 from "../../assets/images/portfolio/08.jpg";
import portfolioImg4 from "../../assets/images/portfolio/09.jpg";
import portfolioImg5 from "../../assets/images/portfolio/10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function PrevWork() {
  return (
    <>
      
        <section className="pt-0">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 text-center">
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
                      <use xlinkHref="#circlePath" fill="none"></use>
                      <text>
                        <textPath xlinkHref="#circlePath">
                          Since 1980 • Since 1980 • Since 1980 •
                        </textPath>
                      </text>
                    </g>
                  </svg>
                  <div className="text-btn-icon">
                    <i
                      aria-hidden="true"
                      className="flaticon flaticon-award"
                    ></i>
                  </div>
                </div>
                <div className="theme-title">
                  <h2>We’ve Done Lot’s of Work</h2>
                </div>
              </div>
              <div className="col-lg-9">
              <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        navigation
        spaceBetween={50}
        slidesPerView={3}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
              <SwiperSlide><div className="item">
                  <div className="portfolio-item style-3">
                    <div className="portfolio-image">
                      <img src={portfolioImg} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-desc">
                      <div className="portfolio-cat">
                        <Link to="/service/3" rel="tag">
                          Development
                        </Link>
                      </div>
                      <h4>
                        <Link to="/service/3">Web Development</Link>
                      </h4>
                    </div>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide><div className="item">
                  <div className="portfolio-item style-3">
                    <div className="portfolio-image">
                      <img src={portfolioImg2} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-desc">
                      <div className="portfolio-cat">
                        <Link to="/service/2" rel="tag">
                          Development
                        </Link>
                      </div>
                      <h4>
                        <Link to="/service/2">Mobile App</Link>
                      </h4>
                    </div>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide><div className="item">
                  <div className="portfolio-item style-3">
                    <div className="portfolio-image">
                      <img src={portfolioImg3} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-desc">
                      <div className="portfolio-cat">
                        <Link to="/service/1" rel="tag">
                          Design
                        </Link>
                      </div>
                      <h4>
                        <Link to="/service/1">UI/UX Experience</Link>
                      </h4>
                    </div>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide><div className="item">
                  <div className="portfolio-item style-3">
                    <div className="portfolio-image">
                      <img src={portfolioImg4} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-desc">
                      <div className="portfolio-cat">
                        <Link to="/service/5" rel="tag">
                          Management
                        </Link>
                      </div>
                      <h4>
                        <Link to="/service/5">ERP System</Link>
                      </h4>
                    </div>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide><div className="item">
                  <div className="portfolio-item style-3">
                    <div className="portfolio-image">
                      <img src={portfolioImg5} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-desc">
                      <div className="portfolio-cat">
                        <Link to="/service/6" rel="tag">
                          Management
                        </Link>
                      </div>
                      <h4>
                        <Link to="/service/6">CMS System</Link>
                      </h4>
                    </div>
                  </div>
                </div></SwiperSlide>

                </Swiper>
                
            
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}
