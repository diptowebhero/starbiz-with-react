import { Link } from "react-router-dom";
import ErrorImg from "./../assets/images/404.png";
import Animate from "../Animate";
export default function ErrorPage() {
  return (
    <Animate>
    <section className="p-0 vh-100">
      <div className="container h-100">
        <div className="row justify-content-center text-center h-100 align-items-center">
          <div className="col-lg-7">
            <img className="img-fluid mb-5" src={ErrorImg} alt="ErrorImg" />
            <div>
              <h2>Oops! Page Not Found</h2>
              <h6 className="mb-5">
                You’re either misspelling the URL or requesting a page that&#39;s no
                longer here.
              </h6>
              <Link to="/" className="primary-btn">
                <span>Back To Home Page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Animate>
  );
}
