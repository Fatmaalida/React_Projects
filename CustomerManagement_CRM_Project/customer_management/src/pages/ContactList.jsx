// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function ContactList() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Smarthr - Bootstrap Admin Template"
          />
          <meta
            name="keywords"
            content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
          />
          <meta
            name="author"
            content="Dreamstechnologies - Bootstrap Admin Template"
          />
          <title>Contacts - HRMS admin template</title>

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="./public/img/favicon.png"
          />
          <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
          <link
            rel="stylesheet"
            href="./public/plugins/fontawesome/css/fontawesome.min.css"
          />
          <link
            rel="stylesheet"
            href="./public/plugins/fontawesome/css/all.min.css"
          />
          <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
          <link rel="stylesheet" href="./public/css/material.css" />
          <link
            rel="stylesheet"
            href="./public/plugins/daterangepicker/daterangepicker.css"
          />
          <link
            rel="stylesheet"
            href="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css"
          />
          <link
            rel="stylesheet"
            href="./public/css/dataTables.bootstrap4.min.css"
          />
          <link
            rel="stylesheet"
            href="./public/css/bootstrap-datetimepicker.min.css"
          />
          <link rel="stylesheet" href="./public/css/select2.min.css" />
          <link rel="stylesheet" href="./public/css/style.css" />

          <script
            data-cfasync="false"
            src="./public/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>

          <script
            src="./public/js/jquery-3.7.1.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/bootstrap.bundle.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/jquery.slimscroll.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/jquery.dataTables.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/dataTables.bootstrap4.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/moment.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/bootstrap-datetimepicker.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/plugins/daterangepicker/daterangepicker.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/select2.min.js"
            type="text/javascript"
          ></script>
          <script src="./public/js/layout.js" type="text/javascript"></script>
          <script
            src="./public/js/theme-settings.js"
            type="text/javascript"
          ></script>
          <script
            src="./public/js/greedynav.js"
            type="text/javascript"
          ></script>
          <script src="./public/js/app.js" type="text/javascript"></script>
          <script
            src="../public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
            data-cf-settings="1725c22436c6643ebe8b2c2b-|49"
            defer
          ></script>
        </Helmet>
      </HelmetProvider>

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h3 className="page-title">Contact</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Contact</li>
                </ul>
              </div>
              <div className="col-md-8 float-end ms-auto">
                <div className="d-flex title-head">
                  <div className="view-icons">
                    <a href="#" className="grid-view btn btn-link">
                      <i className="las la-redo-alt"></i>
                    </a>
                    <a
                      href="#"
                      className="list-view btn btn-link"
                      id="collapse-header"
                    >
                      <i className="las la-expand-arrows-alt"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="list-view btn btn-link"
                      id="filter_search"
                    >
                      <i className="las la-filter"></i>
                    </a>
                  </div>
                  <div className="form-sort">
                    <a
                      href="javascript:void(0);"
                      className="list-view btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#export"
                    >
                      <i className="las la-file-export"></i>Export
                    </a>
                  </div>
                  <a
                    href="#"
                    className="btn add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_contact"
                  >
                    <i className="la la-plus-circle"></i> Add Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-filelds" id="filter_inputs">
            <div className="row filter-row">
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Contact Name</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Email</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Phone Number</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus focused">
                  <input
                    type="text"
                    className="form-control  date-range bookingrange"
                  />
                  <label className="focus-label">From - To Date</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus select-focus">
                  <select className="select floating">
                    <option>--Select--</option>
                    <option>Germany</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>India</option>
                    <option>China</option>
                  </select>
                  <label className="focus-label">Location</label>
                </div>
              </div>
              <div className="col-xl-2">
                <a href="#" className="btn btn-success w-100">
                  {" "}
                  Search{" "}
                </a>
              </div>
            </div>
          </div>
          <hr />

          <div className="filter-section">
            <ul>
              <li>
                <div className="view-icons">
                  <a
                    href="contact-list.html"
                    className="list-view btn btn-link active"
                  >
                    <i className="las la-list"></i>
                  </a>
                  <a
                    href="contact-grid.html"
                    className="grid-view btn btn-link"
                  >
                    <i className="las la-th"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="form-sort">
                  <i className="las la-sort-alpha-up-alt"></i>
                  <select className="select">
                    <option>Sort By Alphabet</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                    <option>Recently Viewed</option>
                    <option>Recently Added</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="form-sorts dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle"
                    id="table-filter"
                  >
                    <i className="las la-filter me-2"></i>Filter
                  </a>
                  <div className="filter-dropdown-menu">
                    <div className="filter-set-view">
                      <div className="filter-set-head">
                        <h4>Filter</h4>
                      </div>
                      <div className="accordion" id="accordionExample">
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Rating<i className="las la-angle-right"></i>
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse show"
                            id="collapseOne"
                            data-bs-parent="#accordionExample"
                          >
                            <ul>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" checked />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="rating">
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <span>5.0</span>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="rating">
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star"></i>
                                  <span>4.0</span>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="rating">
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <span>3.0</span>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="rating">
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <span>2.0</span>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="rating">
                                  <i className="fa fa-star filled"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <span>1.0</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Owner<i className="las la-angle-right"></i>
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse"
                            id="collapseTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <ul>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" checked />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Hendry</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Guillory</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Jami</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Theresa</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Espinosa</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Tags<i className="las la-angle-right"></i>
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse"
                            id="collapseThree"
                            data-bs-parent="#accordionExample"
                          >
                            <ul>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" checked />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Promotion</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Rated</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Rejected</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Collab</h5>
                                </div>
                              </li>
                              <li>
                                <div className="filter-checks">
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks"></span>
                                  </label>
                                </div>
                                <div className="collapse-inside-text">
                                  <h5>Calls</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filter-reset-btns">
                        <a href="#" className="btn btn-light">
                          Reset
                        </a>
                        <a href="#" className="btn btn-primary">
                          Filter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="search-set">
                  <div className="search-input">
                    <a href="#" className="btn btn-searchset">
                      <i className="las la-search"></i>
                    </a>
                    <div className="dataTables_filter">
                      <label>
                        {" "}
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Search"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table datatable contact-table">
                  <thead>
                    <tr>
                      <th className="no-sort"></th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Tags</th>
                      <th>Location</th>
                      <th>Rating</th>
                      <th>Owner</th>
                      <th>Contact </th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star filled"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-19.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Darlee Robertson
                            <span>Facility Manager</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 875455453</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="483a272a2d3a3c3b2726082d30292538242d662b2725"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-info">Promotion</span>
                      </td>
                      <td>Germany</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>4.2
                        </div>
                      </td>
                      <td>Hendry</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-20.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Sharon Roy
                            <span>Installer</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 989757485</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="f98a91988b9697b99c81989489959cd79a9694"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-warning">Rated</span>
                      </td>
                      <td>USA</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>5.0
                        </div>
                      </td>
                      <td>Guillory</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-21.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Vaughan <span>Senior Manager</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 546555455</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="67110612000f0609565527021f060a170b024904080a"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-info">Promotion</span>
                      </td>
                      <td>Canada</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>3.5
                        </div>
                      </td>
                      <td>Jami</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-danger "
                          >
                            {" "}
                            Inactive
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-1.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Jessica <span>Test Engineer</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 454478787</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="72181701011b1113434132170a131f021e175c111d1f"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-warning">Rated</span>
                      </td>
                      <td>India</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>4.5
                        </div>
                      </td>
                      <td>Theresa</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-16.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Carol Thomas<span>UI /UX Designer</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 124547845</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="46252734292a122e297506233e272b362a236825292b"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">
                          Rejected
                        </span>
                      </td>
                      <td>China</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>4.7
                        </div>
                      </td>
                      <td>Espinosa</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star filled"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-22.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Dawn Mercha
                            <span>Technician</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 478845447</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="731712041d1e1601101b1233160b121e031f165d101c1e"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-warning">Rated</span>
                      </td>
                      <td>Japan</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>5.0
                        </div>
                      </td>
                      <td>Martin</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-23.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Rachel Hampton
                            <span>Software Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 215544845</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="2e5c4f4d464b426e4b564f435e424b004d4143"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">
                          Rejected
                        </span>
                      </td>
                      <td>Indonesia</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>3.1
                        </div>
                      </td>
                      <td>Newell</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-24.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Jonelle Curtiss<span>Supervisor</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 121145471</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="0b6164656e67676e4b6e736a667b676e25686466"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger">
                          Rejected
                        </span>
                      </td>
                      <td>Cuba</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>5.0
                        </div>
                      </td>
                      <td>Janet</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-25.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Jonathan<span>Team Lead Dev</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 321454789</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="6e0401000f1a060f002e0b160f031e020b400d0103"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-danger me-2">
                          Collab
                        </span>
                        <span className="badge badge-soft-purple">Calls</span>
                      </td>
                      <td>Isreal</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>2.7
                        </div>
                      </td>
                      <td>Craig</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success "
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="set-star star-select">
                          <i className="fa fa-star"></i>
                        </div>
                      </td>
                      <td>
                        <h2 className="table-avatar d-flex">
                          <a href="contact-details.html" className="avatar">
                            <img
                              src="./public/img/avatar/avatar-26.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="contact-details.html"
                            className="profile-split d-flex flex-column"
                          >
                            Brook <span>Team Lead Dev</span>
                          </a>
                        </h2>
                      </td>
                      <td>+1 278907145</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="b4d6c6dbdbdff4d1ccd5d9c4d8d19ad7dbd9"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-purple">Calls</span>
                      </td>
                      <td>Colombia</td>
                      <td>
                        <div className="set-star">
                          <i className="fa fa-star filled me-2"></i>3.0
                        </div>
                      </td>
                      <td>Daniel</td>
                      <td>
                        <ul className="social-links d-flex align-items-center">
                          <li>
                            <a href="#">
                              <i className="la la-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-phone-volume"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lab la-facebook-messenger"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-skype"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="la la-facebook "></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="dropdown action-label">
                          <a
                            href="#"
                            className="btn btn-white btn-sm badge-outline-success"
                          >
                            {" "}
                            Active
                          </a>
                        </div>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_contact"
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_contact"
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-details.html"
                            >
                              <i className="fa-regular fa-eye"></i> Preview
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_notes"
                            >
                              <i className="la la-file-prescription"></i> Notes
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="modal custom-modal fade custom-modal-two modal-padding"
        id="add_contact"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Add New Contact</h5>
              <button
                type="button"
                className="btn-close position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="add-details-wizard">
                <ul id="progressbar" className="progress-bar-wizard">
                  <li className="active">
                    <span>
                      <i className="la la-user-tie"></i>
                    </span>
                    <div className="multi-step-info">
                      <h6>Basic Info</h6>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="la la-map-marker"></i>
                    </span>
                    <div className="multi-step-info">
                      <h6>Address</h6>
                    </div>
                  </li>
                  <li>
                    <div className="multi-step-icon">
                      <span>
                        <i className="la la-icons"></i>
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Social Profiles</h6>
                    </div>
                  </li>
                  <li>
                    <div className="multi-step-icon">
                      <span>
                        <i className="la la-images"></i>
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Access</h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="add-info-fieldset">
                <fieldset id="first-field">
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="form-upload-profile">
                      <h6 className>
                        Profile Image <span> *</span>
                      </h6>
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <img
                              src="./public/img/icons/profile-upload-img.svg"
                              alt="Img"
                            />
                          </span>
                        </div>
                        <div className="employee-field">
                          <div className="mb-0">
                            <div className="image-upload mb-0">
                              <input type="file" />
                              <div className="image-uploads">
                                <h4>Upload</h4>
                              </div>
                            </div>
                          </div>
                          <div className="img-reset-btn">
                            <a href="#">Reset</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Job Title <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Company Name{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>NovaWaveLLC</option>
                              <option>BlueSky Industries</option>
                              <option>SilverHawk</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <label className="col-form-label">
                                Email <span className="text-danger">*</span>
                              </label>
                              <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                <span className="me-2 label-text">Option</span>
                                <input
                                  type="checkbox"
                                  id="user2"
                                  className="check"
                                  checked
                                />
                                <label
                                  htmlFor="user2"
                                  className="checktoggle"
                                ></label>
                              </div>
                            </div>
                            <input className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone Number 1
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone Number 2
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Fax </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <label className="col-form-label">
                                Deals <span className="text-danger">*</span>
                              </label>
                              <a href="#" className="add-new">
                                <i className="la la-plus-circle me-2"></i>Add
                                New
                              </a>
                            </div>
                            <select className="select">
                              <option>Select</option>
                              <option>Collins</option>
                              <option>Konopelski</option>
                              <option>Adams</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Date of birth{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Reviews <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>Lowest</option>
                              <option>Highest</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Owner <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>Hendry</option>
                              <option>Guillory</option>
                              <option>Jami</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Industry <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>Barry Cuda</option>
                              <option>Tressa Wexler</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Currency <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>$</option>
                              <option>€</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Language <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>English</option>
                              <option>French</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Tags <span className="text-danger">*</span>
                            </label>
                            <input
                              className="input-tags form-control"
                              id="inputBox"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              value="Promotion, Rated"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Source <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>Barry Cuda</option>
                              <option>Tressa Wexler</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Comments<span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows="5"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Street Address
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              City <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              State / Province{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Country <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select</option>
                              <option>Germany</option>
                              <option>USA</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Zipcode <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Facebook</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Twitter</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Linkedin</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Skype</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Whatsapp</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Instagram</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <a href="#" className="add-new">
                              <i className="la la-plus-circle me-2"></i>Add New
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="input-blocks add-products">
                        <label className="mb-3">Visibility</label>
                        <div className="access-info-tab">
                          <ul
                            className="nav nav-pills"
                            id="pills-tab1"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0"
                                id="pills-public-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-public"
                                role="tab"
                                aria-controls="pills-public"
                                aria-selected="true"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="public"
                                  checked
                                />
                                <span className="checkmark"></span> Public
                              </span>
                            </li>
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0"
                                id="pills-private-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-private"
                                role="tab"
                                aria-controls="pills-private"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="private"
                                />
                                <span className="checkmark"></span> Private
                              </span>
                            </li>
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0 active"
                                id="pills-select-people-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-select-people"
                                role="tab"
                                aria-controls="pills-select-people"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="select-people"
                                />
                                <span className="checkmark"></span> Select
                                People
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade"
                          id="pills-public"
                          role="tabpanel"
                          aria-labelledby="pills-public-tab"
                        ></div>
                        <div
                          className="tab-pane fade"
                          id="pills-private"
                          role="tabpanel"
                          aria-labelledby="pills-private-tab"
                        ></div>
                        <div
                          className="tab-pane fade show active"
                          id="pills-select-people"
                          role="tabpanel"
                          aria-labelledby="pills-select-people-tab"
                        >
                          <div className="people-select-tab">
                            <h3>Select People</h3>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-19.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Darlee Robertson</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-20.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Sharon Roy</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-21.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Vaughan</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-1.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Jessica</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-confirm-btn">
                              <a href="#" className="btn danger-btn">
                                Confirm
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="mb-3">Status</h5>
                      <div className="status-radio-btns d-flex mb-3">
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test1"
                            name="radio-group"
                            checked
                          />
                          <label htmlFor="test1">Active</label>
                        </div>
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test2"
                            name="radio-group"
                          />
                          <label htmlFor="test2">Private</label>
                        </div>
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test3"
                            name="radio-group"
                          />
                          <label htmlFor="test3">Inactive</label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-end form-wizard-button">
                        <button
                          className="button btn-lights reset-btn"
                          type="reset"
                        >
                          Reset
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#success_msg"
                        >
                          Save Contact
                        </button>
                      </div>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal custom-modal fade custom-modal-two modal-padding"
        id="edit_contact"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Edit Contact</h5>
              <button
                type="button"
                className="btn-close position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="add-details-wizard">
                <ul id="progressbar2" className="progress-bar-wizard">
                  <li className="active">
                    <span>
                      <i className="la la-user-tie"></i>
                    </span>
                    <div className="multi-step-info">
                      <h6>Basic Info</h6>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="la la-map-marker"></i>
                    </span>
                    <div className="multi-step-info">
                      <h6>Address</h6>
                    </div>
                  </li>
                  <li>
                    <div className="multi-step-icon">
                      <span>
                        <i className="la la-icons"></i>
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Social Profiles</h6>
                    </div>
                  </li>
                  <li>
                    <div className="multi-step-icon">
                      <span>
                        <i className="la la-images"></i>
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Access</h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="add-info-fieldset">
                <fieldset id="edit-first-field">
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="form-upload-profile">
                      <h6 className>
                        Profile Image <span> *</span>
                      </h6>
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <img
                              src="./public/img/avatar/avatar-19.jpg"
                              className="rounded-circle"
                              alt="Img"
                            />
                          </span>
                        </div>
                        <div className="employee-field">
                          <div className="mb-0">
                            <div className="image-upload mb-0">
                              <input type="file" />
                              <div className="image-uploads">
                                <h4>Upload</h4>
                              </div>
                            </div>
                          </div>
                          <div className="img-reset-btn">
                            <a href="#">Reset</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Job Title <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="Facility Manager"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Company Name{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>NovaWaveLLC</option>
                              <option>BlueSky Industries</option>
                              <option>SilverHawk</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <label className="col-form-label">
                                Email <span className="text-danger">*</span>
                              </label>
                              <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                <span className="me-2 label-text">Option</span>
                                <input
                                  type="checkbox"
                                  id="user1"
                                  className="check"
                                  checked
                                />
                                <label
                                  htmlFor="user1"
                                  className="checktoggle"
                                ></label>
                              </div>
                            </div>
                            <input
                              className="form-control"
                              type="email"
                              value="Robertson@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone Number 1
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="+1 875455453"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone Number 2
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="+1 895455455"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Fax </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <label className="col-form-label">
                                Deals <span className="text-danger">*</span>
                              </label>
                              <a href="#" className="add-new">
                                <i className="la la-plus-circle me-2"></i>Add
                                New
                              </a>
                            </div>
                            <select className="select">
                              <option>Collins</option>
                              <option>Konopelski</option>
                              <option>Adams</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Date of birth{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="02-05-1998"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Reviews <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Lowest</option>
                              <option>Highest</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Owner <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Hendry</option>
                              <option>Guillory</option>
                              <option>Jami</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Industry <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Barry Cuda</option>
                              <option>Tressa Wexler</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Currency <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>$</option>
                              <option>€</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Language <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>English</option>
                              <option>French</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Tags <span className="text-danger">*</span>
                            </label>
                            <input
                              className="input-tags form-control"
                              id="inputBox2"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              value="Promotion, Rated"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Source <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Barry Cuda</option>
                              <option>Tressa Wexler</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Comments<span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows="5"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Street Address
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="38 Simpson Stree"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              City <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="Rock Island"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              State / Province{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="USA"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Country <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Germany</option>
                              <option>USA</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Zipcode <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="65"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Facebook</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Twitter</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Linkedin</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Skype</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Whatsapp</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Instagram</label>
                            <input
                              className="form-control"
                              type="text"
                              value="Darlee_Robertson"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <a href="#" className="add-new">
                              <i className="la la-plus-circle me-2"></i>Add New
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 text-end form-wizard-button">
                          <button
                            className="button btn-lights reset-btn"
                            type="reset"
                          >
                            Reset
                          </button>
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                          >
                            Save & Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                    <div className="contact-input-set">
                      <div className="input-blocks add-products">
                        <label className="mb-3">Visibility</label>
                        <div className="access-info-tab">
                          <ul
                            className="nav nav-pills"
                            id="pills-tab2"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0"
                                id="pills-public-tab2"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-public2"
                                role="tab"
                                aria-controls="pills-public2"
                                aria-selected="true"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="public"
                                  checked
                                />
                                <span className="checkmark"></span> Public
                              </span>
                            </li>
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0"
                                id="pills-private-tab2"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-private2"
                                role="tab"
                                aria-controls="pills-private2"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="private"
                                />
                                <span className="checkmark"></span> Private
                              </span>
                            </li>
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio mb-0 active"
                                id="pills-select-people-tab2"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-select-people2"
                                role="tab"
                                aria-controls="pills-select-people2"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="select-people"
                                />
                                <span className="checkmark"></span> Select
                                People
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-content" id="pills-tabContent2">
                        <div
                          className="tab-pane fade"
                          id="pills-public2"
                          role="tabpanel"
                          aria-labelledby="pills-public-tab2"
                        ></div>
                        <div
                          className="tab-pane fade"
                          id="pills-private2"
                          role="tabpanel"
                          aria-labelledby="pills-private-tab2"
                        ></div>
                        <div
                          className="tab-pane fade show active"
                          id="pills-select-people2"
                          role="tabpanel"
                          aria-labelledby="pills-select-people-tab2"
                        >
                          <div className="people-select-tab">
                            <h3>Select People</h3>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-19.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Darlee Robertson</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-20.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Sharon Roy</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-21.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Vaughan</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-people-checkbox">
                              <label className="custom_check">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span className="people-profile">
                                  <img
                                    src="./public/img/avatar/avatar-1.jpg"
                                    alt="Img"
                                  />
                                  <a href="#">Jessica</a>
                                </span>
                              </label>
                            </div>
                            <div className="select-confirm-btn">
                              <a href="#" className="btn danger-btn">
                                Confirm
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="mb-3">Status</h5>
                      <div className="status-radio-btns d-flex mb-3">
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test4"
                            name="radio-group"
                            checked
                          />
                          <label htmlFor="test4">Active</label>
                        </div>
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test5"
                            name="radio-group"
                          />
                          <label htmlFor="test5">Private</label>
                        </div>
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="test6"
                            name="radio-group"
                          />
                          <label htmlFor="test6">Inactive</label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-end form-wizard-button">
                        <button
                          className="button btn-lights reset-btn"
                          type="reset"
                        >
                          Reset
                        </button>
                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal custom-modal fade modal-padding"
        id="add_notes"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between p-0">
              <h5 className="modal-title">Add Note</h5>
              <button
                type="button"
                className="btn-close position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Title <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Note <span className="text-danger"> *</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Add text"
                  ></textarea>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Attachment <span className="text-danger"> *</span>
                  </label>
                  <div className="drag-upload">
                    <input type="file" />
                    <div className="img-upload">
                      <i className="las la-file-import"></i>
                      <p>Drag & Drop your files</p>
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Uploaded Files</label>
                  <div className="upload-file">
                    <h6>Projectneonals teyys.xls</h6>
                    <p>4.25 MB</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style="width: 25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>45%</p>
                  </div>
                  <div className="upload-file upload-list">
                    <div>
                      <h6>Projectneonals teyys.xls</h6>
                      <p>4.25 MB</p>
                    </div>
                    <a href="javascript:void(0);" className="text-danger">
                      <i className="las la-trash"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset">
                    Reset
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Save Notes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal custom-modal fade" id="success_msg" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="success-message text-center">
                <div className="success-popup-icon">
                  <i className="la la-user-shield"></i>
                </div>
                <h3>Contact Created Successfully!!!</h3>
                <p>View the details of contact</p>
                <div className="col-lg-12 text-center form-wizard-button">
                  <a
                    href="#"
                    className="button btn-lights"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </a>
                  <a href="contact-details.html" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal custom-modal fade"
        id="delete_contact"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="success-message text-center">
                <div className="success-popup-icon bg-danger">
                  <i className="la la-trash-restore"></i>
                </div>
                <h3>Are you sure, You want to delete</h3>
                <p>Contact ”Sharron Roy” from your Account</p>
                <div className="col-lg-12 text-center form-wizard-button">
                  <a
                    href="#"
                    className="button btn-lights"
                    data-bs-dismiss="modal"
                  >
                    Not Now
                  </a>
                  <a href="contact-list.html" className="btn btn-primary">
                    Okay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal custom-modal fade modal-padding"
        id="export"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Export</h5>
              <button
                type="button"
                className="btn-close position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-list.html">
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <h5 className="mb-3">Export</h5>
                      <div className="status-radio-btns d-flex">
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="pdf"
                            name="export-type"
                            checked
                          />
                          <label htmlFor="pdf">Person</label>
                        </div>
                        <div className="people-status-radio">
                          <input
                            type="radio"
                            className="status-radio"
                            id="excel"
                            name="export-type"
                          />
                          <label htmlFor="excel">Organization</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="mb-3">Filters</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Fields <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>All Fields</option>
                        <option>contact</option>
                        <option>Company</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        From Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control floating datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        To Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control floating datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 text-end form-wizard-button">
                    <button
                      className="button btn-lights reset-btn"
                      type="reset"
                      data-bs-dismiss="modal"
                    >
                      Reset
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Export Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
