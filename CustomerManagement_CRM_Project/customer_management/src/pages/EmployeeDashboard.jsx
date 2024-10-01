// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function EmployeeDashboard() {
  return (
    <>
      (
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
          <title>Employee Dashboard - HRMS admin template</title>

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
          <link
            rel="stylesheet"
            href="./public/plugins/icons/feather/feather.css"
          />
          <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
          <link rel="stylesheet" href="./public/css/material.css" />
          <link rel="stylesheet" href="./public/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="./public/css/style.css" />

          <script
            src="./public/js/jquery-3.7.1.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>

          <script
            src="./public/js/bootstrap.bundle.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/js/jquery.slimscroll.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/js/feather.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>

          <script
            src="./public/plugins/apexchart/apexcharts.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/plugins/apexchart/chart-data.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>

          <script
            src="./public/js/owl.carousel.min.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>

          <script
            src="./public/js/layout.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/js/theme-settings.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/js/greedynav.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>
          <script
            src="./public/js/app.js"
            type="e4c04552f2df363fd8228521-text/javascript"
          ></script>

          <script
            src="../public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
            data-cf-settings="e4c04552f2df363fd8228521-|49"
            defer
          ></script>
        </Helmet>
      </HelmetProvider>
      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          <div className="row">
            <div className="col-md-12">
              <div className="employee-alert-box">
                <div className="alert alert-outline-success alert-dismissible fade show">
                  <div className="employee-alert-request">
                    <i className="far fa-circle-question"></i>
                    Your Leave Request on <span>“24th April 2024”</span> has
                    been Approved!!!
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <i className="fas fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-8 col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card employee-welcome-card flex-fill">
                    <div className="card-body">
                      <div className="welcome-info">
                        <div className="welcome-content">
                          <h4>Welcome Back, Darlee</h4>
                          <p>
                            You have <span>4 meetings</span> today,
                          </p>
                        </div>
                        <div className="welcome-img">
                          <img
                            src="./public/img/avatar/avatar-19.jpg"
                            className="img-fluid"
                            alt="User"
                          />
                        </div>
                      </div>
                      <div className="welcome-btn">
                        <a href="profile.html" className="btn">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="statistic-header">
                        <h4>Statistics</h4>
                        <div className="dropdown statistic-dropdown">
                          <a
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Today
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                            >
                              Week
                            </a>
                            <a
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                            >
                              Month
                            </a>
                            <a
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                            >
                              Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="clock-in-info">
                        <div className="clock-in-content">
                          <p>Work Time</p>
                          <h4>6 Hrs : 54 Min</h4>
                        </div>
                        <div className="clock-in-btn">
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              src="./public/img/icons/clock-in.svg"
                              alt="Icon"
                            />{" "}
                            Clock-In
                          </a>
                        </div>
                      </div>
                      <div className="clock-in-list">
                        <ul className="nav">
                          <li>
                            <p>Remaining</p>
                            <h6>2 Hrs 36 Min</h6>
                          </li>
                          <li>
                            <p>Overtime</p>
                            <h6>0 Hrs 00 Min</h6>
                          </li>
                          <li>
                            <p>Break</p>
                            <h6>1 Hrs 20 Min</h6>
                          </li>
                        </ul>
                      </div>
                      <div className="view-attendance">
                        <a href="attendance.html">
                          View Attendance{" "}
                          <i className="fe fe-arrow-right-circle"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card info-card flex-fill">
                    <div className="card-body">
                      <h4>Upcoming Holidays</h4>
                      <div className="holiday-details">
                        <div className="holiday-calendar">
                          <div className="holiday-calendar-icon">
                            <img
                              src="./public/img/icons/holiday-calendar.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="holiday-calendar-content">
                            <h6>Ramzan</h6>
                            <p>Mon 20 May 2024</p>
                          </div>
                        </div>
                        <div className="holiday-btn">
                          <a href="holidays.html" className="btn">
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="statistic-header">
                        <h4>Attendance & Leaves</h4>
                        <div className="dropdown statistic-dropdown">
                          <a
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            2024
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              2025
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              2026
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              2027
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="attendance-list">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-primary">9</h4>
                              <p>Total Leaves</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-pink">5.5</h4>
                              <p>Leaves Taken</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-success">04</h4>
                              <p>Leaves Absent</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-purple">0</h4>
                              <p>Pending Approval</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-info">214</h4>
                              <p>Working Days</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="attendance-details">
                              <h4 className="text-danger">2</h4>
                              <p>Loss of Pay</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="view-attendance">
                        <a href="leaves-employee.html">
                          Apply Leave{" "}
                          <i className="fe fe-arrow-right-circle"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="statistic-header">
                        <h4>Working hours</h4>
                        <div className="dropdown statistic-dropdown">
                          <a
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Last Week
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              This Month
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Last 30 Days
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="working-hour-info">
                        <div id="working_chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-12 col-md-12 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="statistic-header">
                    <h4>Important</h4>
                    <div className="important-notification">
                      <a href="activities.html">
                        View All <i className="fe fe-arrow-right-circle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="notification-tab">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          href="#"
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#notification_tab"
                        >
                          <i className="la la-bell"></i> Notifications
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#schedule_tab"
                        >
                          <i className="la la-list-alt"></i> Schedules
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="notification_tab">
                        <div className="employee-noti-content">
                          <ul className="employee-notification-list">
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-danger rounded-circle">
                                    HR
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Your leave request has been
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>02:10 PM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-info rounded-circle">
                                    ER
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    You’re enrolled in upcom....
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>12:40 PM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-warning rounded-circle">
                                    SM
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Your annual compliance trai
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>11:00 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="rounded-circle">
                                    <img
                                      src="./public/img/avatar/avatar-1.jpg"
                                      className="img-fluid rounded-circle"
                                      alt="User"
                                    />
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Jessica has requested feedba
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>10:30 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-warning rounded-circle">
                                    DT
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Gentle remainder about train
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>09:00 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-danger rounded-circle">
                                    AU
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Our HR system will be down
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>11:50 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="schedule_tab">
                        <div className="employee-noti-content">
                          <ul className="employee-notification-list">
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="rounded-circle">
                                    <img
                                      src="./public/img/avatar/avatar-2.jpg"
                                      className="img-fluid rounded-circle"
                                      alt="User"
                                    />
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    John has requested feedba
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>10:30 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-danger rounded-circle">
                                    HR
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Your leave request has been
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>02:10 PM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-info rounded-circle">
                                    ER
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    You’re enrolled in upcom....
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>12:40 PM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-warning rounded-circle">
                                    SM
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Your annual compliance trai
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>11:00 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-warning rounded-circle">
                                    DT
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Gentle remainder about train
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>09:00 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                            <li className="employee-notification-grid">
                              <div className="employee-notification-icon">
                                <a href="activities.html">
                                  <span className="badge-soft-danger rounded-circle">
                                    AU
                                  </span>
                                </a>
                              </div>
                              <div className="employee-notification-content">
                                <h6>
                                  <a href="activities.html">
                                    Our HR system will be down
                                  </a>
                                </h6>
                                <ul className="nav">
                                  <li>11:50 AM</li>
                                  <li>21 Apr 2024</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-8">
                      <div className="statistic-header">
                        <h4>On Going Projects</h4>
                      </div>
                    </div>
                    <div className="col-sm-4 text-sm-end">
                      <div className="owl-nav project-nav nav-control">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev"
                        >
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next"
                        >
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="project-slider owl-carousel owl-rtl owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(1194px, 0px, 0px)",
                          transition: "all",
                          width: "3878px",
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 15 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Video Calling App
                                </a>
                              </h5>
                              <p>
                                Design and developing a software application
                                that enables users to make video calls over the
                                internet.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>30</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>12</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Catherine Manseau"
                                      data-bs-original-title="Catherine Manseau"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +10
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 12 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Hospital Administration
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that serves as a
                                central hub for hospital admin, staff, patients.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>40</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>02</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="John Smith"
                                      data-bs-original-title="John Smith"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-4.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +12
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 25 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Digital Marketpace
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that connects
                                sellers with buyers, facilitating the exchange
                                of goods,
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>50</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>10</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-26.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-8.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +13
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 15 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Video Calling App
                                </a>
                              </h5>
                              <p>
                                Design and developing a software application
                                that enables users to make video calls over the
                                internet.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>30</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>12</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Catherine Manseau"
                                      data-bs-original-title="Catherine Manseau"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +10
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 10 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Office Management
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that enables various
                                administrative tasks within an organization
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>20</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>15</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-19.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +16
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 15 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Video Calling App
                                </a>
                              </h5>
                              <p>
                                Design and developing a software application
                                that enables users to make video calls over the
                                internet.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>30</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>12</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Catherine Manseau"
                                      data-bs-original-title="Catherine Manseau"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +10
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 12 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Hospital Administration
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that serves as a
                                central hub for hospital admin, staff, patients.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>40</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>02</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="John Smith"
                                      data-bs-original-title="John Smith"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-4.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +12
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 25 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Digital Marketpace
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that connects
                                sellers with buyers, facilitating the exchange
                                of goods,
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>50</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>10</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-26.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-8.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +13
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 15 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Video Calling App
                                </a>
                              </h5>
                              <p>
                                Design and developing a software application
                                that enables users to make video calls over the
                                internet.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>30</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>12</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Catherine Manseau"
                                      data-bs-original-title="Catherine Manseau"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +10
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 10 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Office Management
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that enables various
                                administrative tasks within an organization
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>20</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>15</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-19.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +16
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 15 Feb 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Video Calling App
                                </a>
                              </h5>
                              <p>
                                Design and developing a software application
                                that enables users to make video calls over the
                                internet.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>30</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>12</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Catherine Manseau"
                                      data-bs-original-title="Catherine Manseau"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-21.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-16.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-20.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +10
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 12 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Hospital Administration
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that serves as a
                                central hub for hospital admin, staff, patients.
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>40</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>02</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="John Smith"
                                      data-bs-original-title="John Smith"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-4.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-23.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      className="more-team-members"
                                    >
                                      +12
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "278.3px", marginLeft: "20px" }}
                        >
                          <div className="project-grid">
                            <div className="project-top">
                              <h6>
                                <a href="project-view.html">
                                  Deadline : 25 Apr 2024
                                </a>
                              </h6>
                              <h5>
                                <a href="project-view.html">
                                  Digital Marketpace
                                </a>
                              </h5>
                              <p>
                                Creating an online platform that connects
                                sellers with buyers, facilitating the exchange
                                of goods,
                              </p>
                            </div>
                            <div className="project-middle">
                              <ul className="nav">
                                <li>
                                  <div className="project-tasks">
                                    <h4>50</h4>
                                    <p>Total Tasks</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="project-tasks">
                                    <h4>10</h4>
                                    <p>Total Completed</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="project-bottom">
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Project Leader :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-1.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="project-leader">
                                <ul className="nav">
                                  <li>Members :</li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Loren Gatlin"
                                      data-bs-original-title="Loren Gatlin"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-26.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Lesley Grauer"
                                      data-bs-original-title="Lesley Grauer"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-18.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Richard Miles"
                                      data-bs-original-title="Richard Miles"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-6.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Jeffery Lalor"
                                      data-bs-original-title="Jeffery Lalor"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-13.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="project-view.html"
                                      data-bs-toggle="tooltip"
                                      aria-label="Tarah Shropshire"
                                      data-bs-original-title="Tarah Shropshire"
                                    >
                                      <img
                                        src="./public/img/avatar/avatar-8.jpg"
                                        alt="User"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="more-team-members"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      +13
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-dots disabled"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-12 d-flex">
              <div className="card employee-month-card flex-fill">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-9 col-md-12">
                      <div className="employee-month-details">
                        <h4>Employee of the month</h4>
                        <p>
                          We are really proud of the difference you have made
                          which gives everybody the reason to applaud &
                          appreciate
                        </p>
                      </div>
                      <div className="employee-month-content">
                        <h6>Congrats, Hanna</h6>
                        <p>UI/UX Team Lead</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <div className="employee-month-img">
                        <img
                          src="./public/img/employee-img.png"
                          className="img-fluid"
                          alt="User"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-8">
                      <div className="statistic-header">
                        <h4>Company Policy</h4>
                      </div>
                    </div>
                    <div className="col-sm-4 text-sm-end">
                      <div className="owl-nav company-nav nav-control">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev"
                        >
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next"
                        >
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-slider owl-carousel">
                  <div className="company-grid company-soft-tertiary">
                    <div className="company-top">
                      <div className="company-icon">
                        <span className="company-icon-tertiary rounded-circle">
                          HR
                        </span>
                      </div>
                      <div className="company-link">
                        <a href="companies.html">HR Policy</a>
                      </div>
                    </div>
                    <div className="company-bottom d-flex">
                      <ul>
                        <li>Policy Name : Work policy</li>
                        <li>Updated on : Today</li>
                      </ul>
                      <div className="company-bottom-links">
                        <a href="#">
                          <i className="la la-download"></i>
                        </a>
                        <a href="#">
                          <i className="la la-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="company-grid company-soft-success">
                    <div className="company-top">
                      <div className="company-icon">
                        <span className="company-icon-success rounded-circle">
                          EP
                        </span>
                      </div>
                      <div className="company-link">
                        <a href="companies.html">Employer Policy</a>
                      </div>
                    </div>
                    <div className="company-bottom d-flex">
                      <ul>
                        <li>Policy Name : Parking</li>
                        <li>Updated on : 25 Jan 2024</li>
                      </ul>
                      <div className="company-bottom-links">
                        <a href="#">
                          <i className="la la-download"></i>
                        </a>
                        <a href="#">
                          <i className="la la-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="company-grid company-soft-info">
                    <div className="company-top">
                      <div className="company-icon">
                        <span className="company-icon-info rounded-circle">
                          LP
                        </span>
                      </div>
                      <div className="company-link">
                        <a href="companies.html">Leave Policy</a>
                      </div>
                    </div>
                    <div className="company-bottom d-flex">
                      <ul>
                        <li>Policy Name : Annual Leave</li>
                        <li>Updated on : 25 Jan 2023</li>
                      </ul>
                      <div className="company-bottom-links">
                        <a href="#">
                          <i className="la la-download"></i>
                        </a>
                        <a href="#">
                          <i className="la la-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
