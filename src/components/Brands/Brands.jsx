import client1 from "./../../assets/images/client/01.png";
import client2 from "./../../assets/images/client/02.png";
import client3 from "./../../assets/images/client/03.png";
import client4 from "./../../assets/images/client/04.png";
import client5 from "./../../assets/images/client/05.png";
import client6 from "./../../assets/images/client/06.png";
export default function Brands() {
  return (
    <section className="bg-dark-2 text-center py-7">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="owl-carousel no-pb"
              data-center="true"
              data-dots="false"
              data-items="5"
              data-xxl-items="5"
              data-xl-items="5"
              data-lg-items="4"
              data-md-items="3"
              data-sm-items="2"
              data-autoplay="true"
            >
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client1}
                    className="img-fluid d-inline"
                    alt="client1"
                  />
                </div>
              </div>
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client2}
                    className="img-fluid d-inline"
                    alt="client1"
                  />
                </div>
              </div>
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client3}
                    className="img-fluid d-inline"
                    alt="client1"
                  />
                </div>
              </div>
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client4}
                    className="img-fluid d-inline"
                    alt="client4"
                  />
                </div>
              </div>
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client5}
                    className="img-fluid d-inline"
                    alt="client5"
                  />
                </div>
              </div>
              <div className="item">
                <div className="client-logo">
                  <img
                    src={client6}
                    className="img-fluid d-inline"
                    alt="client6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
