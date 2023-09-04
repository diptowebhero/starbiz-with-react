/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PageBanner({ currentPageName }) {
  return (
    <>
      <section className='page-title contactPageBg'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-8'>
              <div className='theme-breadcrumb-box'>
                {/* <h1>Contact Us</h1> */}
                <h1>{currentPageName}</h1>
                <nav aria-label='breadcrumb' className='page-breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>
                        <i className='las la-home me-1'></i>Home
                      </Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      {/* Contact Us */}
                      {currentPageName}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
