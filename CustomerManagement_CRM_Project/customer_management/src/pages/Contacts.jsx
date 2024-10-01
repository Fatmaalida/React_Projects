// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Contacts() {
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
                    <link rel="stylesheet" href="./public/css/style.css" />

                    <script src="./public/js/jquery-3.7.1.min.js" type="text/javascript"></script>
                    <script src="./public/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                    <script src="./public/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                    <script src="./public/js/layout.js" type="text/javascript"></script>
                    <script src="./public/js/theme-settings.js" type="text/javascript"></script>
                    <script src="./public/js/greedynav.js" type="text/javascript"></script>
                    <script src="./public/js/app.js" type="text/javascript"></script>
                    <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="022b597943ee1e0647ae51d7-|49" defer></script>
                </Helmet>
            </HelmetProvider>



            <div className="page-wrapper">

                <div className="chat-main-row">

                    <div className="chat-main-wrapper">
                        <div className="col-lg-12 message-view">
                            <div className="chat-window">
                                <div className="fixed-header">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <h4 className="page-title mb-0">Contacts</h4>
                                        </div>
                                        <div className="col-6">
                                            <div className="navbar justify-content-end">
                                                <div className="search-box m-t-0">
                                                    <div className="input-group input-group-sm">
                                                        <input type="text" className="form-control" placeholder="Search"/>
                                                            <button className="btn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                    </div>
                                                </div>
                                                <ul className="nav float-end custom-menu">
                                                    <li className="nav-item dropdown dropdown-action">
                                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-gear"></i></a>
                                                        <div className="dropdown-menu custom-dropdown-menu">
                                                            <a className="dropdown-item" href="javascript:void(0)">Menu 1</a>
                                                            <a className="dropdown-item" href="javascript:void(0)">Menu 2</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-contents">
                                    <div className="chat-content-wrap">
                                        <div className="chat-wrap-inner">
                                            <div className="contact-box">
                                                <div className="row">
                                                    <div className="contact-cat col-sm-4 col-lg-3">
                                                        <a href="#" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#add_contact"><i className="fa-solid fa-plus"></i> Add Contact</a>
                                                        <div className="roles-menu">
                                                            <ul>
                                                                <li className="active"><a href="javascript:void(0);">All</a></li>
                                                                <li><a href="#">Company</a></li>
                                                                <li><a href="#">Client</a></li>
                                                                <li><a href="#">Staff</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-list col-sm-8 col-lg-9">
                                                        <ul className="contact-list">
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-02.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">John Doe</span>
                                                                        <span className="contact-date">Web Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-09.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Richard Miles</span>
                                                                        <span className="contact-date">Web Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-10.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">John Smith</span>
                                                                        <span className="contact-date">Android Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-05.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Mike Litorus</span>
                                                                        <span className="contact-date">IOS Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-11.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Wilmer Deluna</span>
                                                                        <span className="contact-date">Team Leader</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-12.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Jeffrey Warden</span>
                                                                        <span className="contact-date">Web Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-13.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Bernardo Galaviz</span>
                                                                        <span className="contact-date">Web Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-01.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Lesley Grauer</span>
                                                                        <span className="contact-date">Team Leader</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-16.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Jeffery Lalor</span>
                                                                        <span className="contact-date">Team Leader</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact-cont">
                                                                    <div className="float-start user-img">
                                                                        <a href="profile.html" className="avatar">
                                                                            <img className="rounded-circle" src="./public/img/profiles/avatar-16.jpg" alt="User Image"/>
                                                                                <span className="status online"></span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="contact-info">
                                                                        <span className="contact-name text-ellipsis">Loren Gatlin</span>
                                                                        <span className="contact-date">Android Developer</span>
                                                                    </div>
                                                                    <ul className="contact-action">
                                                                        <li className="dropdown dropdown-action">
                                                                            <a href="#" className="dropdown-toggle action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#edit_contact">Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#delete_contact">Delete</a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="contact-alphapets">
                                                        <div className="alphapets-inner">
                                                            <a href="#">A</a>
                                                            <a href="#">B</a>
                                                            <a href="#">C</a>
                                                            <a href="#">D</a>
                                                            <a href="#">E</a>
                                                            <a href="#">F</a>
                                                            <a href="#">G</a>
                                                            <a href="#">H</a>
                                                            <a href="#">I</a>
                                                            <a href="#">J</a>
                                                            <a href="#">K</a>
                                                            <a href="#">L</a>
                                                            <a href="#">M</a>
                                                            <a href="#">N</a>
                                                            <a href="#">O</a>
                                                            <a href="#">P</a>
                                                            <a href="#">Q</a>
                                                            <a href="#">R</a>
                                                            <a href="#">S</a>
                                                            <a href="#">T</a>
                                                            <a href="#">U</a>
                                                            <a href="#">V</a>
                                                            <a href="#">W</a>
                                                            <a href="#">X</a>
                                                            <a href="#">Y</a>
                                                            <a href="#">Z</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="modal custom-modal fade" id="add_contact" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/contacts.html">
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Email Address</label>
                                        <input className="form-control" type="email"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Contact Number <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="d-block col-form-label">Status</label>
                                        <div className="status-toggle">
                                            <input type="checkbox" id="contact_status" className="check"/>
                                                <label htmlFor="contact_status" className="checktoggle">checkbox</label>
                                        </div>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal custom-modal fade" id="edit_contact" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value="John Doe"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Email Address</label>
                                        <input className="form-control" type="email" value="johndoe@example.com"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Contact Number <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value="9876543210"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="d-block col-form-label">Status</label>
                                        <div className="status-toggle">
                                            <input type="checkbox" id="edit_contact_status" className="check"/>
                                                <label htmlFor="edit_contact_status" className="checktoggle">checkbox</label>
                                        </div>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal custom-modal fade" id="delete_contact" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-header">
                                    <h3>Delete Contact</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div className="modal-btn delete-action">
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

