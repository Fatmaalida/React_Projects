// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Leads() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Smarthr - Bootstrap Admin Template" />
          <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
          <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
          <title>Leads - HRMS admin template</title>

          <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
          <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
          <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
          <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
          <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
          <link rel="stylesheet" href="./public/css/material.css" />
          <link rel="stylesheet" href="./public/plugins/daterangepicker/daterangepicker.css" />
          <link rel="stylesheet" href="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css" />
          <link rel="stylesheet" href="./public/css/dataTables.bootstrap4.min.css" />
          <link rel="stylesheet" href="./public/css/bootstrap-datetimepicker.min.css" />
          <link rel="stylesheet" href="./public/css/select2.min.css" />
          <link rel="stylesheet" href="./public/css/style.css" />

          <script src="./public/js/jquery-3.7.1.min.js" type="text/javascript"></script>
          <script src="./public/js/bootstrap.bundle.min.js" type="text/javascript"></script>
          <script src="./public/js/jquery.slimscroll.min.js" type="text/javascript"></script>
          <script src="./public/js/jquery.dataTables.min.js" type="text/javascript"></script>
          <script src="./public/js/dataTables.bootstrap4.min.js" type="text/javascript"></script>
          <script src="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js" type="text/javascript"></script>
          <script src="./public/js/moment.min.js" type="text/javascript"></script>
          <script src="./public/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
          <script src="./public/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
          <script src="./public/js/select2.min.js" type="text/javascript"></script>
          <script src="./public/js/layout.js" type="text/javascript"></script>
          <script src="./public/js/theme-settings.js" type="text/javascript"></script>
          <script src="./public/js/greedynav.js" type="text/javascript"></script>
          <script src="./public/js/app.js" type="text/javascript"></script>
          <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="4c2ebd966f1af7a872a4c644-|49" defer></script>
        </Helmet>
      </HelmetProvider>


      <div className="page-wrapper">

        <div className="content container-fluid">

          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h3 className="page-title">Leads</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Leads</li>
                </ul>
              </div>
              <div className="col-md-8 float-end ms-auto">
                <div className="d-flex title-head">
                  <div className="view-icons">
                    <a href="javascript:void(0);" className="grid-view btn btn-link"><i className="las la-redo-alt"></i></a>
                    <a href="javascript:void(0);" className="list-view btn btn-link" id="collapse-header"><i className="las la-expand-arrows-alt"></i></a>
                    <a href="javascript:void(0);" className="list-view btn btn-link" id="filter_search"><i className="las la-filter"></i></a>
                  </div>
                  <div className="form-sort">
                    <a href="javascript:void(0);" className="list-view btn btn-link" data-bs-toggle="modal" data-bs-target="#export"><i className="las la-file-export"></i>Export</a>
                  </div>
                  <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leads"><i className="la la-plus-circle"></i> Add Leads</a>
                </div>
              </div>
            </div>
          </div>


          <div className="filter-filelds" id="filter_inputs">
            <div className="row filter-row">
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus">
                  <input type="text" className="form-control floating"/>
                    <label className="focus-label">Lead Name</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus">
                  <input type="email" className="form-control floating"/>
                    <label className="focus-label">Email</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus focused">
                  <input type="text" className="form-control  date-range bookingrange"/>
                    <label className="focus-label">From - To Date</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus select-focus">
                  <select className="select floating">
                    <option>--Select--</option>
                    <option>Closed</option>
                    <option>Not Contacted</option>
                    <option>Contacted</option>
                    <option>Lost</option>
                  </select>
                  <label className="focus-label">Lead Status</label>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="input-block mb-3 form-focus select-focus">
                  <select className="select floating">
                    <option>--Select--</option>
                    <option>NovaWaveLLC</option>
                    <option>SilverHawk</option>
                    <option>SummitPeak</option>
                    <option>HarborView</option>
                    <option>Redwood Inc</option>
                  </select>
                  <label className="focus-label">Company Name</label>
                </div>
              </div>
              <div className="col-xl-2">
                <a href="#" className="btn btn-success w-100"> Search </a>
              </div>
            </div>
          </div>
          <hr/>

            <div className="filter-section">
              <ul>
                <li>
                  <div className="view-icons">
                    <a href="leads.html" className="list-view btn btn-link active"><i className="las la-list"></i></a>
                    <a href="leads-kanban.html" className="grid-view btn btn-link"><i className="las la-th"></i></a>
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
                    <a href="javascript:void(0);" className="dropdown-toggle" id="table-filter"><i className="las la-filter me-2"></i>Filter</a>
                    <div className="filter-dropdown-menu">
                      <div className="filter-set-view">
                        <div className="filter-set-head">
                          <h4>Filter</h4>
                        </div>
                        <div className="accordion" id="accordionExample">
                          <div className="filter-set-content">
                            <div className="filter-set-content-head">
                              <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Rating<i className="las la-angle-right"></i></a>
                            </div>
                            <div className="filter-set-contents accordion-collapse collapse show" id="collapseOne" data-bs-parent="#accordionExample">
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" checked/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                              <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Owner<i className="las la-angle-right"></i></a>
                            </div>
                            <div className="filter-set-contents accordion-collapse collapse" id="collapseTwo" data-bs-parent="#accordionExample">
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" checked/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                              <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Tags<i className="las la-angle-right"></i></a>
                            </div>
                            <div className="filter-set-contents accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionExample">
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" checked/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                                      <input type="checkbox"/>
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
                          <a href="#" className="btn btn-light">Reset</a>
                          <a href="#" className="btn btn-primary">Filter</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="search-set">
                    <div className="search-input">
                      <a href="#" className="btn btn-searchset"><i className="las la-search"></i></a>
                      <div className="dataTables_filter">
                        <label> <input type="search" className="form-control form-control-sm" placeholder="Search"/></label>
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
                        <th>Lead Name</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Lead Status</th>
                        <th>Created Date</th>
                        <th>Lead Owner</th>
                        <th className="no-sort text-end">Action</th>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Collins</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-01.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">NovaWaveLLC</a>
                          </h2>
                        </td>
                        <td>+1 875455453</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ec9e838e899e989f8382ac89948d819c8089c28f8381">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>10 Feb 2024, 09:00 am</td>
                        <td>Hendry</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Konopelski</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-02.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">BlueSky Industries</a>
                          </h2>
                        </td>
                        <td>+1 989757485</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="11627970637e7f517469707c617d743f727e7c">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>24 Feb 2024, 12:20 pm</td>
                        <td>Guillory</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Adams</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-03.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">SilverHawk</a>
                          </h2>
                        </td>
                        <td>+1 546555455</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="54223521333c353a656614312c35392438317a373b39">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-info">Not Contacted</span></td>
                        <td>5 Mar 2024, 10:00 am</td>
                        <td>Jami</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Schumm</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-04.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">SummitPeak</a>
                          </h2>
                        </td>
                        <td>+1 454478787</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="52383721213b3133636112372a333f223e377c313d3f">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-warning">Contacted</span></td>
                        <td>17 Mar 2024, 02:00 pm</td>
                        <td>Theresa</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Wisozk</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-05.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">RiverStone Ventur</a>
                          </h2>
                        </td>
                        <td>+1 124547845</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="197a786b76754d71762a597c61787469757c377a7674">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>8 Apr 2024, 11:00 am</td>
                        <td>Espinosa</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Heller</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-06.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">Bright Bridge Grp</a>
                          </h2>
                        </td>
                        <td>+1 478845447</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="402421372e2d2532232821002538212d302c256e232f2d">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>20 Apr 2024, 03:15 pm</td>
                        <td>Martin</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Gutkowski</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-07.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">CoastalStar Co.</a>
                          </h2>
                        </td>
                        <td>+1 215544845</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cdbfacaea5a8a18da8b5aca0bda1a8e3aea2a0">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>12 May 2024, 08:30 am</td>
                        <td>Newell</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Walter</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-08.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">HarborView</a>
                          </h2>
                        </td>
                        <td>+1 121145471</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="791316171c15151c391c01181409151c571a1614">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>26 May 2024, 04:10 pm</td>
                        <td>Janet</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Hansen</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-09.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">Golden Gate Ltd</a>
                          </h2>
                        </td>
                        <td>+1 321454789</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bbd1d4d5dacfd3dad5fbdec3dad6cbd7de95d8d4d6">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-success">Closed</span></td>
                        <td>13 June 2024, 10:30 am</td>
                        <td>Craig</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
                          <h2>
                            <a href="leads-details.html" className="profile-split">Leuschke</a>
                          </h2>
                        </td>
                        <td>
                          <h2 className="table-avatar d-flex align-items-center">
                            <a href="company-details.html" className="company-img"><img src="./public/img/icons/company-icon-10.svg" alt="User Image"/></a>
                            <a href="company-details.html" className="profile-split">Redwood Inc</a>
                          </h2>
                        </td>
                        <td>+1 278907145</td>
                        <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b6a6bbbbbf94b1acb5b9a4b8b1fab7bbb9">[email&#160;protected]</a></td>
                        <td><span className="badge badge-soft-danger">Lost</span></td>
                        <td>28 June 2024, 05:40 pm</td>
                        <td>Daniel</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leads"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leads"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                              <a className="dropdown-item" href="leads-details.html"><i className="fa-regular fa-eye"></i> Preview</a>
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
      <div className="modal custom-modal fade custom-modal-two modal-padding" id="add_leads" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Add New Lead</h5>
              <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/leads.html">
                <div className="contact-input-set">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Lead Name <span className="text-danger">*</span></label>
                        <input className="form-control" type="text"/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Lead Type</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test1" name="radio-group" checked/>
                              <label htmlFor="test1">Person</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test2" name="radio-group"/>
                              <label htmlFor="test2">Organization</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 company-add-col">
                      <div className="input-block mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="col-form-label">Company <span className="text-danger">*</span></label>
                          <a href="#" className="add-new add-new-company"><i className="la la-plus-circle me-2"></i>Add New</a>
                        </div>
                        <select className="select">
                          <option>Select</option>
                          <option>NovaWaveLLC</option>
                          <option>SilverHawk</option>
                          <option>SummitPeak</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Value<span className="text-danger"> *</span></label>
                        <input className="form-control" type="text"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select</option>
                          <option>$</option>
                          <option>€</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 lead-phno-col del-phno-col">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Phone Number <span className="text-danger">*</span></label>
                            <input className="form-control" type="text"/>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-end">
                          <div className="input-block mb-3 d-flex align-items-center">
                            <div className="w-100">
                              <select className="select">
                                <option>Work</option>
                                <option>Home</option>
                              </select>
                            </div>
                            <a href="#" className="add-modal-row add-lead-phno"><i className="la la-plus-circle"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 lead-email-col del-email-col">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Email <span className="text-danger">*</span></label>
                            <input className="form-control" type="email"/>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-end">
                          <div className="input-block mb-3 d-flex align-items-center">
                            <div className="w-100">
                              <select className="select">
                                <option>Work</option>
                                <option>Home</option>
                              </select>
                            </div>
                            <a href="#" className="add-modal-row add-lead-email"><i className="la la-plus-circle"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Source <span className="text-danger">*</span></label>
                        <input className="form-control" type="text"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Industry <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select</option>
                          <option>Highy</option>
                          <option>Low</option>
                          <option>Medium</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block tag-with-img mb-3">
                        <label className="col-form-label">Owner <span className="text-danger">*</span></label>
                        <input className="input-tags form-control" id="inputBox3" type="text" data-role="tagsinput" name="Label" value="James"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Tags <span className="text-danger">*</span></label>
                        <input className="input-tags form-control" id="inputBox4" type="text" data-role="tagsinput" name="Label" value="Promotion, Rated"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Description <span className="text-danger">*</span></label>
                        <textarea className="form-control" rows="5"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Visibility</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test3" name="radio-group2" checked/>
                              <label htmlFor="test3">Pubilc</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test4" name="radio-group2"/>
                              <label htmlFor="test4">Private</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test5" name="radio-group2"/>
                              <label htmlFor="test5">Select People</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Status</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test6" name="radio-group3" checked/>
                              <label htmlFor="test6">Active</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test7" name="radio-group3"/>
                              <label htmlFor="test7">Inactive</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 text-end form-wizard-button">
                      <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                      <button className="btn btn-primary" type="submit">Save Lead</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="modal custom-modal fade custom-modal-two modal-padding" id="edit_leads" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Edit Lead</h5>
              <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/leads.html">
                <div className="contact-input-set">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Lead Name <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" value="Adams"/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Lead Type</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test8" name="radio-group" checked/>
                              <label htmlFor="test8">Person</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="test9" name="radio-group"/>
                              <label htmlFor="test9">Organization</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 company-add-col">
                      <div className="input-block mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="col-form-label">Company <span className="text-danger">*</span></label>
                          <a href="#" className="add-new add-new-company"><i className="la la-plus-circle me-2"></i>Add New</a>
                        </div>
                        <select className="select">
                          <option>NovaWaveLLC</option>
                          <option>SilverHawk</option>
                          <option>SummitPeak</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Value<span className="text-danger"> *</span></label>
                        <input className="form-control" type="text" value="10"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>$</option>
                          <option>€</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 lead-phno-col del-phno-col">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Phone Number <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" value="+1 546555455"/>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-end">
                          <div className="input-block mb-3 d-flex align-items-center">
                            <div className="w-100">
                              <select className="select">
                                <option>Work</option>
                                <option>Home</option>
                              </select>
                            </div>
                            <a href="#" className="add-modal-row add-lead-phno"><i className="la la-plus-circle"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 lead-email-col del-email-col">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Email <span className="text-danger">*</span></label>
                            <input className="form-control" type="email" value="Vaughan12@example.com"/>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-end">
                          <div className="input-block mb-3 d-flex align-items-center">
                            <div className="w-100">
                              <select className="select">
                                <option>Work</option>
                                <option>Home</option>
                              </select>
                            </div>
                            <a href="#" className="add-modal-row add-lead-email"><i className="la la-plus-circle"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Source <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" value="Lost"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Industry <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Highy</option>
                          <option>Low</option>
                          <option>Medium</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block tag-with-img mb-3">
                        <label className="col-form-label">Owner <span className="text-danger">*</span></label>
                        <input className="input-tags form-control" id="inputBox1" type="text" data-role="tagsinput" name="Label" value="James"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Tags <span className="text-danger">*</span></label>
                        <input className="input-tags form-control" id="inputBox2" type="text" data-role="tagsinput" name="Label" value="Promotion, Rated"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Description <span className="text-danger">*</span></label>
                        <textarea className="form-control" rows="5"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Visibility</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="tests3" name="radio-group2" checked/>
                              <label htmlFor="tests3">Pubilc</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="tests4" name="radio-group2"/>
                              <label htmlFor="tests4">Private</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="tests5" name="radio-group2"/>
                              <label htmlFor="tests5">Select People</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <h5 className="mb-3">Status</h5>
                        <div className="status-radio-btns d-flex">
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="tests6" name="radio-group3" checked/>
                              <label htmlFor="tests6">Active</label>
                          </div>
                          <div className="people-status-radio">
                            <input type="radio" className="status-radio" id="tests7" name="radio-group3"/>
                              <label htmlFor="tests7">Inactive</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 text-end form-wizard-button">
                      <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                      <button className="btn btn-primary" type="submit">Save Lead</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="modal custom-modal fade" id="delete_leads" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="success-message text-center">
                <div className="success-popup-icon bg-danger">
                  <i className="la la-trash-restore"></i>
                </div>
                <h3>Are you sure, You want to delete</h3>
                <p>Lead ”Collins” from your Account</p>
                <div className="col-lg-12 text-center form-wizard-button">
                  <a href="#" className="button btn-lights" data-bs-dismiss="modal">Not Now</a>
                  <a href="leads.html" className="btn btn-primary">Okay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal custom-modal fade modal-padding" id="export" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border justify-content-between p-0">
              <h5 className="modal-title">Export</h5>
              <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/leads.html">
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <h5 className="mb-3">Export</h5>
                      <div className="status-radio-btns d-flex">
                        <div className="people-status-radio">
                          <input type="radio" className="status-radio" id="pdf" name="export-type" checked/>
                            <label htmlFor="pdf">Person</label>
                        </div>
                        <div className="people-status-radio">
                          <input type="radio" className="status-radio" id="excel" name="export-type"/>
                            <label htmlFor="excel">Organization</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="mb-3">Filters</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Fields <span className="text-danger">*</span></label>
                      <select className="select">
                        <option>All Fields</option>
                        <option>contact</option>
                        <option>Company</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">From Date <span className="text-danger">*</span></label>
                      <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">To Date <span className="text-danger">*</span></label>
                      <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 text-end form-wizard-button">
                    <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                    <button className="btn btn-primary" type="submit">Export Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
