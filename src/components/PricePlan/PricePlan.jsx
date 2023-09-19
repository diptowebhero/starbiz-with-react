export default function PricePlan() {
    return(
        <>
        <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="theme-title ">
                <h6>Pricing Plan</h6>
                <h3>It Help You To Choose Prices To Maximize</h3>
              </div>
            </div>
            <div className="col-12 col-lg-8 ps-lg-8 mt-5 mt-lg-0">
              <div className="price-table mb-5">
                <div>
                  <div className="price-title">
                    <h4 className="">Starter</h4>
                  </div>
                  <div className="price-value">
                    <h2>$99 <span>/Mo</span>
                    </h2>
                  </div>
                  <a className="primary-btn" href="#">Get Started</a>
                </div>
                <div className="price-list">
                  <ul className="list-unstyled">
                    <li>
                      <i className="las la-check-circle"></i> Upto 5 design revisions
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> Unlimited Site licenses
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> Static Website
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> 10gb Web Storage
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> 24/7 Customer Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-table">
                <div>
                  <div className="price-title">
                    <h4 className="">Professional</h4>
                  </div>
                  <div className="price-value">
                    <h2>$199 <span>/Mo</span>
                    </h2>
                  </div>
                  <a className="primary-btn" href="#">Get Started</a>
                </div>
                <div className="price-list">
                  <ul className="list-unstyled">
                    <li>
                      <i className="las la-check-circle"></i> Upto 15 design revisions
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> Unlimited Site licenses
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> Fullstack Website
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> 30gb Web Storage
                    </li>
                    <li>
                      <i className="las la-check-circle"></i> 24/7 Customer Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}