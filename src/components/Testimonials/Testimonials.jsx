import testimonialImg2 from "../../assets/images/testimonial/002.jpg";
import testimonialImg from "../../assets/images/testimonial/01.jpg";

export default function Testimonials() {
  return (
    <>
      <section className='bg-dark-2'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div
                className='owl-carousel no-pb'
                data-dots='false'
                data-nav='true'
                data-items='1'
                data-autoplay='true'>
                <div className='item'>
                  <div className='testimonial style-1'>
                    <div className='testimonial-img'>
                      <img
                        className='img-fluid'
                        src={testimonialImg}
                        alt='Image'
                      />
                      <div className='testimonial-caption'>
                        <h5>Steven White</h5>
                        <span>CEO</span>
                      </div>
                    </div>
                    <div className='testimonial-content'>
                      <div className='testimonial-quote'>
                        <i className='flaticon flaticon-quotes'></i>
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
                <div className='item'>
                  <div className='testimonial style-1'>
                    <div className='testimonial-img'>
                      <img
                        className='img-fluid'
                        src={testimonialImg2}
                        alt='Image'
                      />
                      <div className='testimonial-caption'>
                        <h5>Maria Bella</h5>
                        <span>Manager</span>
                      </div>
                    </div>
                    <div className='testimonial-content'>
                      <div className='testimonial-quote'>
                        <i className='flaticon flaticon-quotes'></i>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
