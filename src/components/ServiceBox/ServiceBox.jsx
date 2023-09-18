import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ServiceBox({ service }) {
  return (
    <div className="col-xl-4 mb-5">
      <div className="service-item style-3">
        <div className="service-icon">
          <i className="flaticon-mobile-application"></i>
        </div>
        <div className="service-desc">
          <h4>
            <a href="mobile-development.html">{service.name}</a>
          </h4>
          <ul className="list-unstyled">
            <li>
              <i className="flaticon-forward"></i>Seo Marketing
            </li>
            <li>
              <i className="flaticon-forward"></i>Web Design
            </li>
            <li>
              <i className="flaticon-forward"></i>Brand Design
            </li>
            <li>
              <i className="flaticon-forward"></i>Digital Production
            </li>
            <li>
              <i className="flaticon-forward"></i>Creative Direction
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
