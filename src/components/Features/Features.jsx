import aboutImg from "./../../assets/images/about/071.jpg";
const Features = () => {
  return (
    <>
      <section className='pb-14 about-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='featured-item style-1'>
                    <div className='featured-icon'>
                      <i
                        aria-hidden='true'
                        className='flaticon flaticon-statistics'></i>
                    </div>
                    <div className='featured-description'>
                      <div className='featured-title'>
                        <h5>Marketing</h5>
                      </div>
                      <p>
                        Spend less time writing a plan and more time building
                        your business..
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='featured-item style-1'>
                    <div className='featured-icon'>
                      <i
                        aria-hidden='true'
                        className='flaticon flaticon-idea'></i>
                    </div>
                    <div className='featured-description'>
                      <div className='featured-title'>
                        <h5>Creative Design</h5>
                      </div>
                      <p>
                        Spend less time writing a plan and more time building
                        your business..
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='featured-item style-1'>
                    <div className='featured-icon'>
                      <i
                        aria-hidden='true'
                        className='flaticon flaticon-rocket-launch'></i>
                    </div>
                    <div className='featured-description'>
                      <div className='featured-title'>
                        <h5>SEO Friendly</h5>
                      </div>
                      <p>
                        Spend less time writing a plan and more time building
                        your business..
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='featured-item style-1'>
                    <div className='featured-icon'>
                      <i
                        aria-hidden='true'
                        className='flaticon flaticon-announcement'></i>
                    </div>
                    <div className='featured-description'>
                      <div className='featured-title'>
                        <h5>24/7 Support</h5>
                      </div>
                      <p>
                        Spend less time writing a plan and more time building
                        your business..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 position-relative'>
              <img
                src={aboutImg}
                className='img-fluid rounded img-filter'
                alt=''
              />
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
                        Watch Video Now • Watch Video Now •
                      </textPath>
                    </text>
                  </g>
                </svg>
                <a
                  className='video-popup text-btn-icon popup-youtube'
                  href='https://www.youtube.com/watch?v=ooXO4LInMW0'>
                  <i className='las la-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
