import Animate from "../../Animate";
import FeatureSlider from "./FeatureSlider";

export default function FeatureServices() {
  return (
    <>
      <Animate>
        <section className="pt-0">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8 col-md-12">
                <div className="theme-title">
                  <h6>Our Services</h6>
                  <h2>Creative Digital Solution</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FeatureSlider />
              </div>
            </div>
          </div>
        </section>
      </Animate>
    </>
  );
}
