import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import team01 from "../../assets/images/team/01.jpg";
import team02 from "../../assets/images/team/02.jpg";
import team03 from "../../assets/images/team/03.jpg";
import team04 from "../../assets/images/team/04.jpg";
import team05 from "../../assets/images/team/05.jpg";

const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 30,
  autoplay: true,
  // dots: true,
  // dotsEach: false,
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

export default function Team() {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row justify-content-center text-center mb-5'>
            <div className='col-lg-8 col-md-12'>
              <div className='theme-title'>
                <h6>Expert Team Member</h6>
                <h2>We Do Awesome Services For Our Client</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <OwlCarousel
                className='owl-carousel owl-theme'
                loop
                margin={10}
                nav
                {...options}>
                <div className='item'>
                  <div className='team-member'>
                    <h4>
                      <Link to=''>Romi Jensen</Link>
                    </h4>
                    <span>Developer</span>
                    <ul className='team-social-icon list-inline'>
                      <li>
                        <Link to=''>
                          <i className='la la-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-dribbble'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-twitter'></i>
                        </Link>
                      </li>
                    </ul>
                    <div className='team-images'>
                      <img src={team01} className='img-fluid' alt='' />
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='team-member'>
                    <h4>
                      <Link to=''>Armani Wild</Link>
                    </h4>
                    <span>Technical Director</span>
                    <ul className='team-social-icon list-inline'>
                      <li>
                        <Link to=''>
                          <i className='la la-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-dribbble'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-twitter'></i>
                        </Link>
                      </li>
                    </ul>
                    <div className='team-images'>
                      <img src={team02} className='img-fluid' alt='' />
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='team-member'>
                    <h4>
                      <Link to=''>Melan Smith</Link>
                    </h4>
                    <span>Designer</span>
                    <ul className='team-social-icon list-inline'>
                      <li>
                        <Link to=''>
                          <i className='la la-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-dribbble'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-twitter'></i>
                        </Link>
                      </li>
                    </ul>
                    <div className='team-images'>
                      <img src={team03} className='img-fluid' alt='' />
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='team-member'>
                    <h4>
                      <Link to=''>Woakes Lion</Link>
                    </h4>
                    <span>Web Designer</span>
                    <ul className='team-social-icon list-inline'>
                      <li>
                        <Link to=''>
                          <i className='la la-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-dribbble'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-twitter'></i>
                        </Link>
                      </li>
                    </ul>
                    <div className='team-images'>
                      <img src={team04} className='img-fluid' alt='' />
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='team-member'>
                    <h4>
                      <Link to=''>Romi Jensen</Link>
                    </h4>
                    <span>Developer</span>
                    <ul className='team-social-icon list-inline'>
                      <li>
                        <Link to=''>
                          <i className='la la-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-dribbble'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <i className='la la-twitter'></i>
                        </Link>
                      </li>
                    </ul>
                    <div className='team-images'>
                      <img src={team05} className='img-fluid' alt='' />
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
