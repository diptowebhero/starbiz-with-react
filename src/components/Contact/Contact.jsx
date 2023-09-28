

const Contact = () => {
  return (
    <>
      <section>
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-6 mb-6 mb-lg-0 contact-info">
        <div>
          <div className="row mb-3">
            <div className="col-md-6">
              <h5>Our Address</h5>
              <p>3482 Irving Road, 8th Floor, Ironton, Ohio</p>
              <p>3482 Irving Road, 8th Floor, Ironton, Ohio</p>
            </div>
            <div className="col-md-6">
              <h5>Emails</h5>
              <p>
                <a href="mailto:themeht23@gmail.com">
                  PixelFusion@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:themeht23@gmail.com">
                  infocompany@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Phone Number</h5>
              <p>
                <a href="tel:+912345678900">740-533-2559</a>
              </p>
              <p>
                <a href="tel:+912345678900">740-533-2558</a>
              </p>
            </div>
            <div className="col-md-6">
              <h5>Follow Us</h5>
              <ul className="list-inline p-0 m-0 social-icons social-colored">
                <li className="social-facebook">
                  <a href="#">
                    <i className="la la-facebook" />
                  </a>
                </li>
                <li className="social-twitter">
                  <a href="#">
                    <i className="la la-twitter" />
                  </a>
                </li>
                <li className="social-instagram">
                  <a href="#">
                    <i className="la la-instagram" />
                  </a>
                </li>
                <li className="social-linkedin">
                  <a href="#">
                    <i className="la la-linkedin" />
                  </a>
                </li>
                <li className="social-dribbble">
                  <a href="#">
                    <i className="la la-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 ps-lg-10">
        <div className="bg-dark-2 p-5 rounded">
          <div className="theme-title ">
            <h6>Contact Us</h6>
            <h2>Drop A Message!</h2>
          </div>
          <form id="contact-form" method="post" action="https://themeht.com/template/PixelFusion/php/contact.php">
            <div className="messages" />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <input id="form_name" type="text" name="name" placeholder="First Name" required="required" data-error="Name is required." />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <input id="form_name2" type="text" name="name" placeholder="Last Name" required="required" data-error="Name is required." />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <input id="form_email" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required." />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <input id="form_phone" type="tel" name="phone" placeholder="Phone" required="required" data-error="Phone is required" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <select className="form-selec" aria-label="Default select example">
                    <option >Open this select menu</option>
                    <option value="{1}">One</option>
                    <option value="{2}">Two</option>
                    <option value="{3}">Three</option>
                  </select>
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-5">
                  <input id="form_subject" type="text" name="subject" placeholder="Subject" required="required" data-error="Subject is required." />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea id="form_message" name="message" className="h-auto" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
              <div className="help-block with-errors" />
            </div>
            <div className="mt-5">
              <button className="primary-btn">Send Messages</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
