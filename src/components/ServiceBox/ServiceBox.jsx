import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ServiceBox({ service }) {

  console.log(service);
  return (
    <div className="col-xl-4 mb-5">
      <div className="service-item style-3">
        <div className="service-icon">
          <i className="flaticon-mobile-application"></i>
        </div>
        <div className="service-desc">
          <h4>
            <Link to={`/service/${service.id}`}>{service.name}</Link>
          </h4>
          <ul className="list-unstyled">
            <li>
              <i className="flaticon-forward"></i>{service.featureOne}
            </li>
            <li>
              <i className="flaticon-forward"></i>{service.featureTwo}
            </li>
            <li>
              <i className="flaticon-forward"></i>{service.featureThree}
            </li>
            <li>
              <i className="flaticon-forward"></i>{service.featureFour}
            </li>
            <li>
              <i className="flaticon-forward"></i>{service.featureFive}
            </li>
          </ul>
          <Link className="rounded-button" to={`/service/${service.id}`}>
            <i className="flaticon-forward"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
