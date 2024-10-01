// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function EmployeeProfile() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
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
          <title>Employee Profile - HRMS admin template</title>

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
            href="./public/css/dataTables.bootstrap4.min.css"
          />
          <link rel="stylesheet" href="./public/css/select2.min.css" />
          <link
            rel="stylesheet"
            href="./public/css/bootstrap-datetimepicker.min.css"
          />
          <link
            rel="stylesheet"
            href="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css"
          />
          <link rel="stylesheet" href="./public/css/style.css" />

          <script
            data-cfasync="false"
            src="../public/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>

          <script
            src="./public/js/jquery-3.7.1.min.js"
            type="text/javascript"
          />
          <script
            src="./public/js/bootstrap.bundle.min.js"
            type="text/javascript"
          />
          <script
            src="./public/js/jquery.slimscroll.min.js"
            type="text/javascript"
          />
          <script src="./public/js/select2.min.js" type="text/javascript" />
          <script src="./public/js/moment.min.js" type="text/javascript" />
          <script
            src="./public/js/bootstrap-datetimepicker.min.js"
            type="text/javascript"
          />
          <script
            src="./public/js/jquery.dataTables.min.js"
            type="text/javascript"
          />
          <script
            src="./public/js/dataTables.bootstrap4.min.js"
            type="text/javascript"
          />
          <script
            src="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js"
            type="text/javascript"
          />
          <script src="./public/js/layout.js" type="text/javascript" />
          <script src="./public/js/theme-settings.js" type="text/javascript" />
          <script src="./public/js/greedynav.js" type="text/javascript" />
          <script src="./public/js/app.js" type="text/javascript" />
          <script
            src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
            data-cf-settings="08d17bc1b048e1f2500c2c08-|49"
            defer
          />
        </Helmet>
      </HelmetProvider>

      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <a href="#">
                          <img
                            src="./public/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                            <h6 className="text-muted">UI/UX Design Team</h6>
                            <small className="text-muted">Web Designer</small>
                            <div className="staff-id">
                              Employee ID : FT-0001
                            </div>
                            <div className="small doj text-muted">
                              Date of Join : 1st Jan 2013
                            </div>
                            <div className="staff-msg">
                              <a className="btn btn-custom" href="chat.html">
                                Send Message
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                <a href="#">9876543210</a>
                              </div>
                            </li>
                            <li>
                              <div className="title">Email:</div>
                              <div className="text">
                                <a href="#">
                                  <span
                                    className="__cf_email__"
                                    data-cfemail="deb4b1b6b0bab1bb9ebba6bfb3aeb2bbf0bdb1b3"
                                  >
                                    [email&#160;protected]
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">24th July</div>
                            </li>
                            <li>
                              <div className="title">Address:</div>
                              <div className="text">
                                1861 Bayonne Ave, Manchester Township, NJ, 08759
                              </div>
                            </li>
                            <li>
                              <div className="title">Gender:</div>
                              <div className="text">Male</div>
                            </li>
                            <li>
                              <div className="title">Reports to:</div>
                              <div className="text">
                                <div className="avatar-box">
                                  <div className="avatar avatar-xs">
                                    <img
                                      src="./public/img/profiles/avatar-16.jpg"
                                      alt="User Image"
                                    />
                                  </div>
                                </div>
                                <a href="profile.html">Jeffery Lalor</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-edit">
                      <a
                        data-bs-target="#profile_info"
                        data-bs-toggle="modal"
                        className="edit-icon"
                        href="#"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <a
                      href="#emp_profile"
                      data-bs-toggle="tab"
                      className="nav-link active"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#emp_projects"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#bank_statutory"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Bank & Statutory{" "}
                      <small className="text-danger">(Admin Only)</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#emp_./public"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      ./public
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              id="emp_profile"
              className="pro-overview tab-pane fade show active"
            >
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Personal Informations{" "}
                        <a
                          href="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#personal_info_modal"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </a>
                      </h3>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Passport No.</div>
                          <div className="text">9876543210</div>
                        </li>
                        <li>
                          <div className="title">Passport Exp Date.</div>
                          <div className="text">9876543210</div>
                        </li>
                        <li>
                          <div className="title">Tel</div>
                          <div className="text">
                            <a href="#">9876543210</a>
                          </div>
                        </li>
                        <li>
                          <div className="title">Nationality</div>
                          <div className="text">Indian</div>
                        </li>
                        <li>
                          <div className="title">Religion</div>
                          <div className="text">Christian</div>
                        </li>
                        <li>
                          <div className="title">Marital status</div>
                          <div className="text">Married</div>
                        </li>
                        <li>
                          <div className="title">Employment of spouse</div>
                          <div className="text">No</div>
                        </li>
                        <li>
                          <div className="title">No. of children</div>
                          <div className="text">2</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Emergency Contact{" "}
                        <a
                          href="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#emergency_contact_modal"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </a>
                      </h3>
                      <h5 className="section-title">Primary</h5>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Name</div>
                          <div className="text">John Doe</div>
                        </li>
                        <li>
                          <div className="title">Relationship</div>
                          <div className="text">Father</div>
                        </li>
                        <li>
                          <div className="title">Phone </div>
                          <div className="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                      <hr />
                      <h5 className="section-title">Secondary</h5>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Name</div>
                          <div className="text">Karen Wills</div>
                        </li>
                        <li>
                          <div className="title">Relationship</div>
                          <div className="text">Brother</div>
                        </li>
                        <li>
                          <div className="title">Phone </div>
                          <div className="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">Bank information</h3>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Bank name</div>
                          <div className="text">ICICI Bank</div>
                        </li>
                        <li>
                          <div className="title">Bank account No.</div>
                          <div className="text">159843014641</div>
                        </li>
                        <li>
                          <div className="title">IFSC Code</div>
                          <div className="text">ICI24504</div>
                        </li>
                        <li>
                          <div className="title">PAN No</div>
                          <div className="text">TC000Y56</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Family Informations{" "}
                        <a
                          href="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#family_info_modal"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </a>
                      </h3>
                      <div className="table-responsive">
                        <table className="table table-nowrap">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Leo</td>
                              <td>Brother</td>
                              <td>Feb 16th, 2019</td>
                              <td>9876543210</td>
                              <td className="text-end">
                                <div className="dropdown dropdown-action">
                                  <a
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    className="action-icon dropdown-toggle"
                                    href="#"
                                  >
                                    <i className="material-icons">more_vert</i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">
                                      <i className="fa-solid fa-pencil m-r-5"></i>
                                      Edit
                                    </a>
                                    <a href="#" className="dropdown-item">
                                      <i className="fa-regular fa-trash-can m-r-5"></i>
                                      Delete
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
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations{" "}
                        <a
                          href="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#education_info"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </a>
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Arts and Science (UG)
                                </a>
                                <div>Bsc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Arts and Science (PG)
                                </a>
                                <div>Msc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Experience{" "}
                        <a
                          href="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#experience_info"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </a>
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Zen Corporation
                                </a>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Ron-tech
                                </a>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Dalt Technology
                                </a>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="emp_projects">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <a
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          href="#"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-solid fa-pencil m-r-5"></i>
                            Edit
                          </a>
                          <a
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-regular fa-trash-can m-r-5"></i>
                            Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="project-title">
                        <a href="project-view.html">Office Management</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">1</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">9</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Jeffery Lalor"
                            >
                              <img
                                src="./public/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Doe"
                            >
                              <img
                                src="./public/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Richard Miles"
                            >
                              <img
                                src="./public/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Smith"
                            >
                              <img
                                src="./public/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Mike Litorus"
                            >
                              <img
                                src="./public/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="all-users">
                              +15
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          className="w-40 progress-bar bg-success"
                          title
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          data-original-title="40%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <a
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          href="#"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-solid fa-pencil m-r-5"></i>
                            Edit
                          </a>
                          <a
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-regular fa-trash-can m-r-5"></i>
                            Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="project-title">
                        <a href="project-view.html">Project Management</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">2</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">5</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Jeffery Lalor"
                            >
                              <img
                                src="./public/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Doe"
                            >
                              <img
                                src="./public/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Richard Miles"
                            >
                              <img
                                src="./public/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Smith"
                            >
                              <img
                                src="./public/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Mike Litorus"
                            >
                              <img
                                src="./public/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="all-users">
                              +15
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          className="w-40 progress-bar bg-success"
                          title
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          data-original-title="40%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <a
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          href="#"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-solid fa-pencil m-r-5"></i>
                            Edit
                          </a>
                          <a
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-regular fa-trash-can m-r-5"></i>
                            Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="project-title">
                        <a href="project-view.html">Video Calling App</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">3</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">3</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Jeffery Lalor"
                            >
                              <img
                                src="./public/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Doe"
                            >
                              <img
                                src="./public/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Richard Miles"
                            >
                              <img
                                src="./public/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Smith"
                            >
                              <img
                                src="./public/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Mike Litorus"
                            >
                              <img
                                src="./public/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="all-users">
                              +15
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          className="w-40 progress-bar bg-success"
                          title
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          data-original-title="40%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <a
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          href="#"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-solid fa-pencil m-r-5"></i>
                            Edit
                          </a>
                          <a
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            href="#"
                            className="dropdown-item"
                          >
                            <i className="fa-regular fa-trash-can m-r-5"></i>
                            Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="project-title">
                        <a href="project-view.html">Hospital Administration</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">12</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">4</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Jeffery Lalor"
                            >
                              <img
                                src="./public/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Doe"
                            >
                              <img
                                src="./public/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Richard Miles"
                            >
                              <img
                                src="./public/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="John Smith"
                            >
                              <img
                                src="./public/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              title="Mike Litorus"
                            >
                              <img
                                src="./public/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="all-users">
                              +15
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          className="w-40 progress-bar bg-success"
                          title
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          data-original-title="40%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="bank_statutory">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"> Basic Salary Information</h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Salary basis <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select salary basis type</option>
                            <option>Hourly</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Salary amount{" "}
                            <small className="text-muted">per month</small>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type your salary amount"
                              value="0.00"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Payment type</label>
                          <select className="select">
                            <option>Select payment type</option>
                            <option>Bank transfer</option>
                            <option>Check</option>
                            <option>Cash</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title"> PF Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            PF contribution
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            PF No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title"> ESI Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            ESI contribution
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            ESI No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee ESI rate
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="emp_./public">
              <div className="table-responsive table-newdatatable">
                <table className="table table-new custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Asset ID</th>
                      <th>Assigned Date</th>
                      <th>Assignee</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a
                          href="./public-details.html"
                          className="table-imgname"
                        >
                          <img
                            src="./public/img/laptop.png"
                            className="me-2"
                            alt="Laptop Image"
                          />
                          <span>Laptop</span>
                        </a>
                      </td>
                      <td>AST - 001</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="javascript:void(0);"
                          className="table-profileimage"
                        >
                          <img
                            src="./public/img/profiles/avatar-02.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="javascript:void(0);" className="table-name">
                          <span>John Paul Raj</span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="107a7f787e50746275717d77656963647573783e737f7d"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a
                          href="./public-details.html"
                          className="table-imgname"
                        >
                          <img
                            src="./public/img/laptop.png"
                            className="me-2"
                            alt="Laptop Image"
                          />
                          <span>Laptop</span>
                        </a>
                      </td>
                      <td>AST - 002</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="javascript:void(0);"
                          className="table-profileimage"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-asset"
                        >
                          <img
                            src="./public/img/profiles/avatar-05.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="javascript:void(0);" className="table-name">
                          <span>Vinod Selvaraj</span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="88fee1e6e7eca6fbc8ecfaede9e5effdf1fbfcedebe0a6ebe7e5"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a
                          href="./public-details.html"
                          className="table-imgname"
                        >
                          <img
                            src="./public/img/keyboard.png"
                            className="me-2"
                            alt="Keyboard Image"
                          />
                          <span>Dell Keyboard</span>
                        </a>
                      </td>
                      <td>AST - 003</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="javascript:void(0);"
                          className="table-profileimage"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-asset"
                        >
                          <img
                            src="./public/img/profiles/avatar-03.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="javascript:void(0);" className="table-name">
                          <span>Harika </span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="3850594a515359164e785c4a5d59555f4d414b4c5d5b50165b5755"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <a href="#" className="table-imgname">
                          <img
                            src="./public/img/mouse.png"
                            className="me-2"
                            alt="Mouse Image"
                          />
                          <span>Logitech Mouse</span>
                        </a>
                      </td>
                      <td>AST - 0024</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="./public-details.html"
                          className="table-profileimage"
                        >
                          <img
                            src="./public/img/profiles/avatar-02.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="./public-details.html" className="table-name">
                          <span>Mythili</span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="deb3a7aab6b7b2b79ebaacbbbfb3b9aba7adaabbbdb6f0bdb1b3"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <a href="#" className="table-imgname">
                          <img
                            src="./public/img/laptop.png"
                            className="me-2"
                            alt="Laptop Image"
                          />
                          <span>Laptop</span>
                        </a>
                      </td>
                      <td>AST - 005</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="./public-details.html"
                          className="table-profileimage"
                        >
                          <img
                            src="./public/img/profiles/avatar-02.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="./public-details.html" className="table-name">
                          <span>John Paul Raj</span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="650f0a0d0b25011700040802101c161100060d4b060a08"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <a href="#" className="table-imgname">
                          <img
                            src="./public/img/laptop.png"
                            className="me-2"
                            alt="Laptop Image"
                          />
                          <span>Laptop</span>
                        </a>
                      </td>
                      <td>AST - 006</td>
                      <td>22 Nov, 2022 10:32AM</td>
                      <td className="table-namesplit">
                        <a
                          href="javascript:void(0);"
                          className="table-profileimage"
                        >
                          <img
                            src="./public/img/profiles/avatar-05.jpg"
                            className="me-2"
                            alt="User Image"
                          />
                        </a>
                        <a href="javascript:void(0);" className="table-name">
                          <span>Vinod Selvaraj</span>
                          <p>
                            <span
                              className="__cf_email__"
                              data-cfemail="b6c0dfd8d9d298c5f6d2c4d3d7dbd1c3cfc5c2d3d5de98d5d9db"
                            >
                              [email&#160;protected]
                            </span>
                          </p>
                        </a>
                      </td>
                      <td>
                        <div className="table-actions d-flex">
                          <a
                            className="delete-table me-2"
                            href="user-asset-details.html"
                          >
                            <img
                              src="./public/img/icons/eye.svg"
                              alt="Eye Icon"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          id="profile_info"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile Information</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-img-wrap edit-img">
                        <img
                          className="inline-block"
                          src="./public/img/profiles/avatar-02.jpg"
                          alt="User Image"
                        />
                        <div className="fileupload btn">
                          <span className="btn-text">edit</span>
                          <input className="upload" type="file" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="John"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Doe"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Birth Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control datetimepicker"
                                type="text"
                                value="05/06/1985"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Gender</label>
                            <select className="select form-control">
                              <option value="male selected">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value="4487 Snowbird Lane"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          value="New York"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          value="United States"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Pin Code</label>
                        <input
                          type="text"
                          className="form-control"
                          value="10523"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value="631-889-3206"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Reports To <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>-</option>
                          <option>Wilmer Deluna</option>
                          <option>Lesley Grauer</option>
                          <option>Jeffery Lalor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="personal_info_modal"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Personal Information</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Passport No</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Passport Expiry Date
                        </label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Tel</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Nationality <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Religion</label>
                        <div className="cal-icon">
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Marital status <span className="text-danger">*</span>
                        </label>
                        <select className="select form-control">
                          <option>-</option>
                          <option>Single</option>
                          <option>Married</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          Employment of spouse
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">
                          No. of children{" "}
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="family_info_modal"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Family Informations</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Family Member{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Name <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Relationship{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Phone <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Name <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Relationship{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">
                                Phone <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus-circle"></i>
                            Add More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="emergency_contact_modal"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Personal Information</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Primary Contact</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Phone 2</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Primary Contact</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">Phone 2</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="education_info"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Education Informations</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Oxford University"
                                className="form-control floating"
                              />
                              <label className="focus-label">Institution</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Subject</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  value="01/06/2002"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Starting Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  value="31/05/2006"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Complete Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="BE Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Degree</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Grade A"
                                className="form-control floating"
                              />
                              <label className="focus-label">Grade</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Oxford University"
                                className="form-control floating"
                              />
                              <label className="focus-label">Institution</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Subject</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  value="01/06/2002"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Starting Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  value="31/05/2006"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Complete Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="BE Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Degree</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus focused">
                              <input
                                type="text"
                                value="Grade A"
                                className="form-control floating"
                              />
                              <label className="focus-label">Grade</label>
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus-circle"></i>
                            Add More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          id="experience_info"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Experience Informations</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Experience Informations{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="Digital Devlopment Inc"
                              />
                              <label className="focus-label">
                                Company Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="United States"
                              />
                              <label className="focus-label">Location</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="Web Developer"
                              />
                              <label className="focus-label">
                                Job Position
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control floating datetimepicker"
                                  value="01/07/2007"
                                />
                              </div>
                              <label className="focus-label">Period From</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control floating datetimepicker"
                                  value="08/06/2018"
                                />
                              </div>
                              <label className="focus-label">Period To</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Experience Informations{" "}
                          <a href="javascript:void(0);" className="delete-icon">
                            <i className="fa-regular fa-trash-can"></i>
                          </a>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="Digital Devlopment Inc"
                              />
                              <label className="focus-label">
                                Company Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="United States"
                              />
                              <label className="focus-label">Location</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                value="Web Developer"
                              />
                              <label className="focus-label">
                                Job Position
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control floating datetimepicker"
                                  value="01/07/2007"
                                />
                              </div>
                              <label className="focus-label">Period From</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3 form-focus">
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control floating datetimepicker"
                                  value="08/06/2018"
                                />
                              </div>
                              <label className="focus-label">Period To</label>
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <a href="javascript:void(0);">
                            <i className="fa-solid fa-plus-circle"></i>
                            Add More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
