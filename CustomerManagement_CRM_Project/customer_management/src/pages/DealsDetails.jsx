// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function DealsDetails() {
  return (
    <>
    <HelmetProvider>
    <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Smarthr - Bootstrap Admin Template" />
        <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
        <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
        <title>Contacts - HRMS admin template</title>

        <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
        <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
        <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
        <link rel="stylesheet" href="./public/css/material.css" />
        <link rel="stylesheet" href="./public/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="./public/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css" />
        <link rel="stylesheet" href="./public/css/dataTables.bootstrap4.min.css" />
        <link rel="stylesheet" href="./public/css/feather.css" />
        <link rel="stylesheet" href="./public/css/bootstrap-datetimepicker.min.css" />
        <link rel="stylesheet" href="./public/plugins/summernote/summernote-bs4.min.css" />
        <link rel="stylesheet" href="./public/css/select2.min.css" />
        <link rel="stylesheet" href="./public/css/style.css" />

        <script data-cfasync="false" src="./public/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
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
        <script src="./public/plugins/summernote/summernote-bs4.min.js" type="text/javascript"></script>
        <script src="./public/js/layout.js" type="text/javascript"></script>
        <script src="./public/js/theme-settings.js" type="text/javascript"></script>
        <script src="./public/js/greedynav.js" type="text/javascript"></script>
        <script src="./public/js/app.js" type="text/javascript"></script>
        <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="42e6b8abe4da06de164b7d36-|49" defer></script>
    </Helmet>
</HelmetProvider>
<div className="col-xl-3">
                        <div className="card contact-sidebar">
                            <h5>Deal Information</h5>
                            <ul className="other-info">
                                <li><span className="other-title">Date Created</span><span>10 Jan 2024, 10:00 am</span></li>
                                <li><span className="other-title">Probability - Win</span><span>80%</span></li>
                                <li><span className="other-title">Deal Value</span><span>$25,11,145</span></li>
                                <li><span className="other-title">Due Date</span><span>20 Jan 2024, 10:00 am</span></li>
                                <li><span className="other-title">Follow Up</span><span>20 Jan 2024</span></li>
                                <li><span className="other-title">Source</span><span>Google</span></li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h5>Deal Owner</h5>
                            </div>
                            <ul className="deals-info">
                                <li>
                                    <span>
                                        <img src="./public/img/avatar/avatar-21.jpg" alt="Image"/>
                                    </span>
                                    <div>
                                        <p>Vaughan</p>
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <img src="./public/img/avatar/avatar-1.jpg" alt="Image"/>
                                    </span>
                                    <div>
                                        <p>Jessica</p>
                                    </div>
                                </li>
                            </ul>
                            <h5>Tags</h5>
                            <ul className="tag-info">
                                <li>
                                    <a href="javascript:void(0);" className="bg-success-light">Collab</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="bg-warning-light">Rated</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h5>Priority</h5>
                            </div>
                            <ul className="priority-info">
                                <li>
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><span><i
                                                    className="fa-solid fa-circle me-1 text-danger circle"></i>High</span><i
                                                className="las la-angle-down ms-1"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <span><i
                                                        className="fa-solid fa-circle me-1 text-danger circle"></i>High</span>
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <span><i
                                                        className="fa-solid fa-circle me-1 text-success circle"></i>Low</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h5>Projects</h5>
                            </div>
                            <ul className="projects-info">
                                <li>
                                    <a href="javascript:void(0);" className="badge badge-light">Devops Design</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="badge badge-light">Margrate Design</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h5>Contacts</h5>
                                <a href="javascript:void(0);" className="com-add" data-bs-toggle="modal"
                                    data-bs-target="#add_contact"><i className="las la-plus-circle me-1"></i>Add New</a>
                            </div>
                            <ul className="deals-info">
                                <li>
                                    <span>
                                        <img src="./public/img/avatar/avatar-21.jpg" alt="Image"/>
                                    </span>
                                    <div>
                                        <p>Vaughan</p>
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <img src="./public/img/avatar/avatar-1.jpg" alt="Image"/>
                                    </span>
                                    <div>
                                        <p>Jessica</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="other-info">
                                <li><span className="other-title">Last Modified</span><span>10 Jan 2024, 10:00 am</span>
                                </li>
                                <li>
                                    <span className="other-title">Modified By</span>
                                    <span><img src="./public/img/avatar/avatar-19.jpg" className="avatar-xs rounded-circle"
                                            alt="img"/> Darlee Robertson</span>
                                </li>
                            </ul>
                        </div>
                    </div>



   
    
    
    
    </>
  )
}
