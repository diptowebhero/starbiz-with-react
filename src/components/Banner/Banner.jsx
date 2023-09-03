import { Link } from "react-router-dom";
import about06 from "../../assets/images/about/001.jpeg";
import aboutImg from "./../../assets/images/about/07.jpg";

export default function Banner() {
  return (
    <section>
      <div className='container-fluid px-5'>
        <div className='row align-items-center'>
          <div className='col-lg-3 col-12 text-center'>
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
            <img
              className='img-fluid rounded-5 w-[600px] h-[600px] '
              src={aboutImg}
              alt=''
            />
          </div>
          <div className='col-lg-5 col-12 px-lg-10 my-5 my-lg-0'>
            <h1>Creative Agency With Solid Design</h1>
            <p className='my-5'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences
            </p>

            <Link to='contact' className='primary-btn'>
              {" "}
              Let&lsquo;s Talk With Us
            </Link>
            <div className='text-end'>
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
                        Creative Agency • Business Agency •
                      </textPath>
                    </text>
                  </g>
                </svg>
                <div className='text-btn-icon'>
                  <i aria-hidden='true' className='flaticon flaticon-brand'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-12'>
            <img className='img-fluid rounded-5' src={about06} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
