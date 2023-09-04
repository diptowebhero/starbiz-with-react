import { Link } from "react-router-dom";
import team01 from "../../assets/images/team/01.jpg";
import team02 from "../../assets/images/team/02.jpg";
import team03 from "../../assets/images/team/03.jpg";
import team04 from "../../assets/images/team/04.jpg";
import team05 from "../../assets/images/team/05.jpg";

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
              <div
                className='owl-carousel'
                data-dots='false'
                data-nav='true'
                data-items='4'
                data-xxl-items='4'
                data-xl-items='4'
                data-lg-items='3'
                data-md-items='2'
                data-sm-items='1'
                data-margin='30'
                data-autoplay='true'>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
