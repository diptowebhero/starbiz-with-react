export default function TopNav() {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col d-flex align-items-center justify-content-between'>
              <div className='topbar-link'>
                <ul className='list-inline'>
                  <li>
                    <i className='flaticon flaticon-calendar'></i>
                    <span>Monday - Friday 10:00 am to 5:00 pm</span>
                  </li>
                  <li>
                    <i className='flaticon flaticon-location'></i>
                    <span>3482 Irving Road, 8th Floor, Ironton, Ohio, USA</span>
                  </li>
                  <li>
                    <i className='flaticon-chat'></i>
                    <a href='mailto:info@example.com'>info@example.com</a>
                  </li>
                </ul>
              </div>
              <div className='d-flex align-items-center'>
                <div className='search-icon me-3'>
                  <a id='search' href='javascript:void(0)'>
                    <i className='las la-search'></i>
                  </a>
                </div>
                <div className='social-icons'>
                  <ul className='list-inline'>
                    <li>
                      <a href='#'>
                        <i className='lab la-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lab la-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lab la-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lab la-linkedin-in'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
