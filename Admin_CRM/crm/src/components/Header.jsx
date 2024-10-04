import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const renderLogo = (src, alt, height) => (
    <img src={src} alt={alt} height={height} />
  );

  const renderLanguageOption = (lang, imgSrc) => (
    <Dropdown.Item>
      <img src={imgSrc} alt={lang} className="me-1" height="12" />
      <span className="align-middle">{lang}</span>
    </Dropdown.Item>
  );

  return (
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div className="navbar-header d-flex justify-content-between">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <span className="logo logo-dark">
                <span className="logo-sm">{renderLogo("./public/images/logo.svg", "", 22)}</span>
                <span className="logo-lg">{renderLogo("./public/images/logo-dark.png", "", 17)}</span>
              </span>
              <span className="logo logo-light">
                <span className="logo-sm">{renderLogo("./public/images/logo-light.svg", "", 22)}</span>
                <span className="logo-lg">{renderLogo("./public/images/logo-light.png", "", 19)}</span>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div className="d-flex">
            {/* Language Dropdown */}
            <div className="d-inline-block">
              <button
                className="btn header-item waves-effect"
                onClick={() => setOpenLanguage(!openLanguage)}
              >
                <img id="header-lang-img" src="./public/images/flags/us.jpg" alt="Header Language" height="16" />
              </button>

              <div className={`dropdown-menu ${openLanguage ? 'show' : ''}`}>
                {renderLanguageOption("English", "./public/images/flags/us.jpg")}
                {renderLanguageOption("Spanish", "./public/images/flags/spain.jpg")}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="d-inline-block">
              <button
                className="btn header-item waves-effect"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="./public/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">Henry</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>

              <div className={`dropdown-menu ${openProfile ? 'show' : ''}`}>
                <Dropdown.Item>
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>
                  <span>Profile</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                  <span>Logout</span>
                </Dropdown.Item>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
