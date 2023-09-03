import { Link } from "react-router-dom";
import portfolioImg from "../../assets/images/portfolio/06.jpg";
import portfolioImg2 from "../../assets/images/portfolio/07.jpg";
import portfolioImg3 from "../../assets/images/portfolio/08.jpg";
import portfolioImg4 from "../../assets/images/portfolio/09.jpg";
import portfolioImg5 from "../../assets/images/portfolio/10.jpg";

export default function PrevWork() {
  return (
    <>
      <section className='pt-0'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-3 text-center'>
              <div className='round-text'>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100%'
                  height='100%'
                  viewBox='0 0 180 180'
                  enableBackground='new 0 0 180 180'
                  xmlSpace='preserve'>
                  <defs>
                    <path
                      id='circlePath'
                      d='M 90, 90 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '></path>
                  </defs>
                  <circle cx='90' cy='90' r='75' fill='none'></circle>
                  <g>
                    <use xlinkHref='#circlePath' fill='none'></use>
                    <text>
                      <textPath xlinkHref='#circlePath'>
                        Since 1980 • Since 1980 • Since 1980 •
                      </textPath>
                    </text>
                  </g>
                </svg>
                <div className='text-btn-icon'>
                  <i aria-hidden='true' className='flaticon flaticon-award'></i>
                </div>
              </div>
              <div className='theme-title'>
                <h2>We’ve Done Lot’s of Work</h2>
              </div>
            </div>
            <div className='col-lg-9'>
              <div
                className='owl-carousel'
                data-items='4'
                data-xxl-items='4'
                data-xl-items='3'
                data-lg-items='2'
                data-md-items='2'
                data-sm-items='1'
                data-margin='10'
                data-autoplay='true'>
                <div className='item'>
                  <div className='portfolio-item style-3'>
                    <div className='portfolio-image'>
                      <img src={portfolioImg} className='img-fluid' alt='' />
                    </div>
                    <div className='portfolio-desc'>
                      <div className='portfolio-cat'>
                        <Link to='' rel='tag'>
                          Development
                        </Link>
                      </div>
                      <h4>
                        <Link to=''>Web Development</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='portfolio-item style-3'>
                    <div className='portfolio-image'>
                      <img src={portfolioImg2} className='img-fluid' alt='' />
                    </div>
                    <div className='portfolio-desc'>
                      <div className='portfolio-cat'>
                        <Link to='' rel='tag'>
                          Development
                        </Link>
                      </div>
                      <h4>
                        <Link to=''>Mobile App</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='portfolio-item style-3'>
                    <div className='portfolio-image'>
                      <img src={portfolioImg3} className='img-fluid' alt='' />
                    </div>
                    <div className='portfolio-desc'>
                      <div className='portfolio-cat'>
                        <Link to='' rel='tag'>
                          Design
                        </Link>
                      </div>
                      <h4>
                        <Link to=''>UI/UX Design</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='portfolio-item style-3'>
                    <div className='portfolio-image'>
                      <img src={portfolioImg4} className='img-fluid' alt='' />
                    </div>
                    <div className='portfolio-desc'>
                      <div className='portfolio-cat'>
                        <Link to='' rel='tag'>
                          Management
                        </Link>
                      </div>
                      <h4>
                        <Link to=''>ERP</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='portfolio-item style-3'>
                    <div className='portfolio-image'>
                      <img src={portfolioImg5} className='img-fluid' alt='' />
                    </div>
                    <div className='portfolio-desc'>
                      <div className='portfolio-cat'>
                        <Link to='' rel='tag'>
                          Management
                        </Link>
                      </div>
                      <h4>
                        <Link to=''>CMS </Link>
                      </h4>
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
