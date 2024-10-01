// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function DealsDashboard() {
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
                    <title>Dashboard - HRMS admin template</title>

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
                        href="./public/plugins/daterangepicker/daterangepicker.css"
                    />
                    <link
                        rel="stylesheet"
                        href="./public/css/bootstrap-datetimepicker.min.css"
                    />
                    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                    <link rel="stylesheet" href="./public/css/material.css" />
                    <link rel="stylesheet" href="./public/plugins/morris/morris.css" />
                    <link rel="stylesheet" href="./public/css/select2.min.css" />
                    <link rel="stylesheet" href="./public/css/style.css" />

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
                        src="./public/js/greedynav.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="./public/plugins/apexchart/apexcharts.min.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="./public/plugins/apexchart/chart-data.js"
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
                    <script src="./public/js/layout.js" type="text/javascript"></script>
                    <script
                        src="./public/js/theme-settings.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="./public/js/select2.min.js"
                        type="text/javascript"
                    ></script>
                    <script src="./public/js/app.js" type="text/javascript"></script>
                    <script
                        src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
                        data-cf-settings="3b83127c60cc14d39bc68432-|49"
                        defer
                    ></script>
                </Helmet>
            </HelmetProvider>

            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h3 className="page-title">Deals Dashboard</h3>
                            </div>
                            <div className="col-md-8 float-end ms-auto">
                                <div className="d-flex title-head">
                                    <div className="view-icons">
                                        <a
                                            href="javascript:void(0);"
                                            className="grid-view btn btn-link"
                                        >
                                            <i className="las la-redo-alt"></i>
                                        </a>
                                        <a
                                            href="javascript:void(0);"
                                            className="list-view btn btn-link"
                                            id="collapse-header"
                                        >
                                            <i className="las la-expand-arrows-alt"></i>
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
                                    <div className="daterange-picker d-flex">
                                        <div className="form-sort">
                                            <i className="las la-calendar"></i>
                                            <input
                                                type="text"
                                                className="form-control  date-range bookingrange"
                                            />
                                        </div>
                                        <div className="form-sort">
                                            <i className="las la-cubes"></i>
                                            <select className="select">
                                                <option>Deals Dashboard</option>
                                                <option>Leads Dashboard</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Deals By Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Marketing Pipeline
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Last 3 months
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="deals-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card analytics-card w-100">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>
                                            Recently Created Contacts
                                            <a href="#" className="text-muted">
                                                <i className="la la-link ms-1"></i>
                                            </a>
                                        </h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Last 3 months
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table custom-table table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Deal Name</th>
                                                    <th>Stage</th>
                                                    <th>Deal Value</th>
                                                    <th>Probability</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="deals-details.html">Collins</a>
                                                    </td>
                                                    <td>Conversation</td>
                                                    <td>$04,51,000</td>
                                                    <td>85%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-warning">
                                                            Open
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="deals-details.html">Konopelski</a>
                                                    </td>
                                                    <td>Pipeline</td>
                                                    <td>$03,12,500</td>
                                                    <td>85%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">
                                                            Lost
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="deals-details.html">Adams</a>
                                                    </td>
                                                    <td>Won</td>
                                                    <td>$04,14,800</td>
                                                    <td>80%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-success">
                                                            Won
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="deals-details.html">Schumm</a>
                                                    </td>
                                                    <td>Lost</td>
                                                    <td>$9,14,400</td>
                                                    <td>47%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">
                                                            Lost
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="deals-details.html">Wisozk</a>
                                                    </td>
                                                    <td>Follow Up</td>
                                                    <td>$11,14,400</td>
                                                    <td>98%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">
                                                            Lost
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Lost Deals Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Marketing Pipeline
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Last 3 months
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="last-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="statistic-header">
                                        <h4>Won Deals Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Marketing Pipeline
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Last 3 months
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="won-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Deals by Year</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="javascript:void(0);"
                                                        >
                                                            Last 3 months
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="year-chart"></div>
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
                            <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contact-grid.html">
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
            </div>
        </>
    );
}
