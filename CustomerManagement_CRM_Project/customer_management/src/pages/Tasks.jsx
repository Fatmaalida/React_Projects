// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Tasks() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Smarthr - Bootstrap Admin Template" />
                    <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
                    <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
                    <title>Tasks - HRMS admin template</title>

                    <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
                    <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
                    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                    <link rel="stylesheet" href="./public/css/material.css" />
                    <link rel="stylesheet" href="./public/css/select2.min.css" />
                    <link rel="stylesheet" href="./public/css/bootstrap-datetimepicker.min.css" />
                    <link rel="stylesheet" href="./public/css/ckeditor.css" />
                    <link rel="stylesheet" href="./public/css/style.css" />

                    <script src="./public/js/jquery-3.7.1.min.js" type="text/javascript"></script>
                    <script src="./public/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                    <script src="./public/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                    <script src="./public/js/select2.min.js" type="text/javascript"></script>
                    <script src="./public/js/moment.min.js" type="text/javascript"></script>
                    <script src="./public/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
                    <script src="https://cdn.ckeditor.com/ckeditor5/34.0.0/classic/ckeditor.js" type="text/javascript"></script>
                    <script src="./public/js/ckeditor.js" type="text/javascript"></script>
                    <script src="./public/js/task.js" type="text/javascript"></script>
                    <script src="./public/js/layout.js" type="text/javascript"></script>
                    <script src="./public/js/theme-settings.js" type="text/javascript"></script>
                    <script src="./public/js/greedynav.js" type="text/javascript"></script>
                    <script src="./public/js/app.js" type="text/javascript"></script>
                    <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="a0b282cc7857a631a23f8e95-|49" defer></script>
                </Helmet>
            </HelmetProvider>

            <div className="page-wrapper">
                <div className="chat-main-row">
                    <div className="chat-main-wrapper">
                        <div className="col-lg-7 message-view task-view task-left-sidebar">
                            <div className="chat-window">
                                <div className="fixed-header">
                                    <div className="navbar">
                                        <div className="float-start me-auto">
                                            <div className="add-task-btn-wrapper">
                                                <span className="add-task-btn btn btn-white btn-sm">
                                                    Add Task
                                                </span>
                                            </div>
                                        </div>
                                        <a className="task-chat profile-rightbar float-end" id="task_chat"
                                            href="#task_window"><i className="fa fa fa-comment"></i></a>
                                        <ul className="nav float-end custom-menu">
                                            <li className="nav-item dropdown dropdown-action">
                                                <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa-solid fa-gear"></i></a>
                                                <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0)">Pending Tasks</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Completed Tasks</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">All Tasks</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chat-contents">
                                    <div className="chat-content-wrap">
                                        <div className="chat-wrap-inner">
                                            <div className="chat-box">
                                                <div className="task-wrapper">
                                                    <div className="task-list-container">
                                                        <div className="task-list-body">
                                                            <ul id="task-list">
                                                                <li className="task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label"
                                                                            contentEditable={true} >Patient appointment
                                                                            booking</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label"
                                                                            contentEditable={true} >Appointment booking with
                                                                            payment gateway</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="completed task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label">Doctor available
                                                                            module</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label"
                                                                            contentEditable={true} >Patient and Doctor video
                                                                            conferencing</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label"
                                                                            contentEditable={true} >Private chat
                                                                            module</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="task">
                                                                    <div className="task-container">
                                                                        <span className="task-action-btn task-check">
                                                                            <span className="action-circle large complete-btn"
                                                                                title="Mark Complete">
                                                                                <i className="material-icons">check</i>
                                                                            </span>
                                                                        </span>
                                                                        <span className="task-label"
                                                                            contentEditable={true} >Patient Profile
                                                                            add</span>
                                                                        <span className="task-action-btn task-btn-right">
                                                                            <span className="action-circle large"
                                                                                title="Assign">
                                                                                <i className="material-icons">person_add</i>
                                                                            </span>
                                                                            <span className="action-circle large delete-btn"
                                                                                title="Delete Task">
                                                                                <i className="material-icons">delete</i>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="task-list-footer">
                                                            <div className="new-task-wrapper">
                                                                <textarea id="new-task"
                                                                    placeholder="Enter new task here. . ."></textarea>
                                                                <span className="error-message hidden">You need to enter a task
                                                                    first</span>
                                                                <span className="add-new-task-btn btn" id="add-task">Add
                                                                    Task</span>
                                                                <span className="btn" id="close-task-panel">Close</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-popup hide">
                                                    <p>
                                                        <span className="task"></span>
                                                        <span className="notification-text"></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 message-view task-chat-view task-right-sidebar" id="task_window">
                            <div className="chat-window">
                                <div className="fixed-header">
                                    <div className="navbar">
                                        <div className="task-assign">
                                            <a className="task-complete-btn" id="task_complete" href="javascript:void(0);">
                                                <i className="material-icons">check</i> Mark Complete
                                            </a>
                                        </div>
                                        <ul className="nav float-end custom-menu">
                                            <li className="dropdown dropdown-action">
                                                <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"
                                                    aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0)">Delete Task</a>
                                                    <a className="dropdown-item" href="javascript:void(0)">Settings</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chat-contents task-chat-contents">
                                    <div className="chat-content-wrap">
                                        <div className="chat-wrap-inner">
                                            <div className="chat-box">
                                                <div className="chats">
                                                    <h4>Hospital Administration Phase 1</h4>
                                                    <div className="task-header">
                                                        <div className="assignee-info">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#assignee">
                                                                <div className="avatar">
                                                                    <img src="./public/img/profiles/avatar-02.jpg"
                                                                        alt="User Image" />
                                                                </div>
                                                                <div className="assigned-info">
                                                                    <div className="task-head-title">Assigned To</div>
                                                                    <div className="task-assignee">John Doe</div>
                                                                </div>
                                                            </a>
                                                            <span className="remove-icon">
                                                                <i className="fa fa-close"></i>
                                                            </span>
                                                        </div>
                                                        <div className="task-due-date">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#assignee">
                                                                <div className="due-icon">
                                                                    <span>
                                                                        <i className="material-icons">date_range</i>
                                                                    </span>
                                                                </div>
                                                                <div className="due-info">
                                                                    <div className="task-head-title">Due Date</div>
                                                                    <div className="due-date">Mar 26, 2019</div>
                                                                </div>
                                                            </a>
                                                            <span className="remove-icon">
                                                                <i className="fa fa-close"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="task-line" />
                                                    <div className="task-desc">
                                                        <div className="task-desc-icon">
                                                            <i className="material-icons">subject</i>
                                                        </div>
                                                        <div className="task-textarea">
                                                            <textarea className="form-control"
                                                                placeholder="Description"></textarea>
                                                        </div>
                                                    </div>
                                                    <hr className="task-line" />
                                                    <div className="task-information">
                                                        <span className="task-info-line"><a className="task-user" href="#">Lesley
                                                            Grauer</a> <span className="task-info-subject">created
                                                                task</span></span>
                                                        <div className="task-time">Jan 20, 2019</div>
                                                    </div>
                                                    <div className="task-information">
                                                        <span className="task-info-line"><a className="task-user" href="#">Lesley
                                                            Grauer</a> <span className="task-info-subject">added to Hospital
                                                                Administration</span></span>
                                                        <div className="task-time">Jan 20, 2019</div>
                                                    </div>
                                                    <div className="task-information">
                                                        <span className="task-info-line"><a className="task-user" href="#">Lesley
                                                            Grauer</a> <span className="task-info-subject">assigned to John
                                                                Doe</span></span>
                                                        <div className="task-time">Jan 20, 2019</div>
                                                    </div>
                                                    <hr className="task-line" />
                                                    <div className="task-information">
                                                        <span className="task-info-line"><a className="task-user" href="#">John
                                                            Doe</a> <span className="task-info-subject">changed the due date
                                                                to Sep 28</span> </span>
                                                        <div className="task-time">9:09pm</div>
                                                    </div>
                                                    <div className="task-information">
                                                        <span className="task-info-line"><a className="task-user" href="#">John
                                                            Doe</a> <span className="task-info-subject">assigned to
                                                                you</span></span>
                                                        <div className="task-time">9:10pm</div>
                                                    </div>
                                                    <div className="chat chat-left">
                                                        <div className="chat-avatar">
                                                            <a href="profile.html" className="avatar">
                                                                <img src="./public/img/profiles/avatar-02.jpg"
                                                                    alt="User Image" />
                                                            </a>
                                                        </div>
                                                        <div className="chat-body">
                                                            <div className="chat-bubble">
                                                                <div className="chat-content">
                                                                    <span className="task-chat-user">John Doe</span> <span
                                                                        className="chat-time">8:35 am</span>
                                                                    <p>Im just looking around.</p>
                                                                    <p>Will you tell me something about yourself? </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="completed-task-msg"><span className="task-success"><a
                                                        href="#">John Doe</a> completed this task.</span> <span
                                                            className="task-time">Today at 9:27am</span></div>
                                                    <div className="chat chat-left">
                                                        <div className="chat-avatar">
                                                            <a href="profile.html" className="avatar">
                                                                <img src="./public/img/profiles/avatar-02.jpg"
                                                                    alt="User Image" />
                                                            </a>
                                                        </div>
                                                        <div className="chat-body">
                                                            <div className="chat-bubble">
                                                                <div className="chat-content">
                                                                    <span className="task-chat-user">John Doe</span> <span
                                                                        className="file-attached">attached 3 files <i
                                                                            className="fa-solid fa-paperclip"></i></span> <span
                                                                                className="chat-time">Feb 17, 2019 at 4:32am</span>
                                                                    <ul className="attach-list">
                                                                        <li><i className="fa fa-file"></i> <a
                                                                            href="#">project_document.avi</a></li>
                                                                        <li><i className="fa fa-file"></i> <a
                                                                            href="#">video_conferencing.psd</a></li>
                                                                        <li><i className="fa fa-file"></i> <a
                                                                            href="#">landing_page.psd</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat chat-left">
                                                        <div className="chat-avatar">
                                                            <a href="profile.html" className="avatar">
                                                                <img src="./public/img/profiles/avatar-16.jpg"
                                                                    alt="User Image" />
                                                            </a>
                                                        </div>
                                                        <div className="chat-body">
                                                            <div className="chat-bubble">
                                                                <div className="chat-content">
                                                                    <span className="task-chat-user">Jeffery Lalor</span> <span
                                                                        className="file-attached">attached file <i
                                                                            className="fa-solid fa-paperclip"></i></span> <span
                                                                                className="chat-time">Yesterday at 9:16pm</span>
                                                                    <ul className="attach-list">
                                                                        <li className="pdf-file"><i
                                                                            className="fa-regular fa-file-pdf"></i> <a
                                                                                href="#">Document_2016.pdf</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat chat-left">
                                                        <div className="chat-avatar">
                                                            <a href="profile.html" className="avatar">
                                                                <img src="./public/img/profiles/avatar-16.jpg"
                                                                    alt="User Image" />
                                                            </a>
                                                        </div>
                                                        <div className="chat-body">
                                                            <div className="chat-bubble">
                                                                <div className="chat-content">
                                                                    <span className="task-chat-user">Jeffery Lalor</span> <span
                                                                        className="file-attached">attached file <i
                                                                            className="fa-solid fa-paperclip"></i></span> <span
                                                                                className="chat-time">Today at 12:42pm</span>
                                                                    <ul className="attach-list">
                                                                        <li className="img-file">
                                                                            <div className="attach-img-download"><a
                                                                                href="#">avatar-1.jpg</a></div>
                                                                            <div className="task-attach-img"><img
                                                                                src="./public/img/user.jpg"
                                                                                alt="User Image" /></div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="task-information">
                                                        <span className="task-info-line">
                                                            <a className="task-user" href="#">John Doe</a>
                                                            <span className="task-info-subject">marked task as incomplete</span>
                                                        </span>
                                                        <div className="task-time">1:16pm</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-footer">
                                    <div className="message-bar">
                                        <div className="message-inner">
                                            <a className="link attach-icon" href="#"><img src="./public/img/attachment.png"
                                                alt="Attachment Icon" /></a>
                                            <div className="message-area">
                                                <div className="input-group">
                                                    <textarea className="form-control" placeholder="Type message..."></textarea>
                                                    <button className="btn btn-primary" type="button"><i
                                                        className="fa-solid fa-paper-plane"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-members task-followers">
                                        <span className="followers-title">Followers</span>
                                        <a className="avatar" href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                                            <img src="./public/img/profiles/avatar-16.jpg" alt="User Image" />
                                        </a>
                                        <a className="avatar" href="#" data-bs-toggle="tooltip" title="Richard Miles">
                                            <img src="./public/img/profiles/avatar-09.jpg" alt="User Image" />
                                        </a>
                                        <a className="avatar" href="#" data-bs-toggle="tooltip" title="John Smith">
                                            <img src="./public/img/profiles/avatar-10.jpg" alt="User Image" />
                                        </a>
                                        <a className="avatar" href="#" data-bs-toggle="tooltip" title="Mike Litorus">
                                            <img src="./public/img/profiles/avatar-05.jpg" alt="User Image" />
                                        </a>
                                        <a href="#" className="followers-add" data-bs-toggle="modal"
                                            data-bs-target="#task_followers"><i className="material-icons">add</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="create_project" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create Project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Project Name</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Client</label>
                                                <select className="select">
                                                    <option>Global Technologies</option>
                                                    <option>Delta Infotech</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Start Date</label>
                                                <div className="cal-icon">
                                                    <input className="form-control datetimepicker" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">End Date</label>
                                                <div className="cal-icon">
                                                    <input className="form-control datetimepicker" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Rate</label>
                                                <input placeholder="$50" className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">&nbsp;</label>
                                                <select className="select">
                                                    <option>Hourly</option>
                                                    <option>Fixed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Priority</label>
                                                <select className="select">
                                                    <option>High</option>
                                                    <option>Medium</option>
                                                    <option>Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Add Project Leader</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Team Leader</label>
                                                <div className="project-members">
                                                    <a className="avatar" href="#" data-bs-toggle="tooltip"
                                                        title="Jeffery Lalor">
                                                        <img src="./public/img/profiles/avatar-16.jpg" alt="User Image" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Add Team</label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Team Members</label>
                                                <div className="project-members">
                                                    <a className="avatar" href="#" data-bs-toggle="tooltip" title="John Doe">
                                                        <img src="./public/img/profiles/avatar-02.jpg" alt="User Image" />
                                                    </a>
                                                    <a className="avatar" href="#" data-bs-toggle="tooltip"
                                                        title="Richard Miles">
                                                        <img src="./public/img/profiles/avatar-09.jpg" alt="User Image" />
                                                    </a>
                                                    <a className="avatar" href="#" data-bs-toggle="tooltip" title="John Smith">
                                                        <img src="./public/img/profiles/avatar-10.jpg" alt="User Image" />
                                                    </a>
                                                    <a className="avatar" href="#" data-bs-toggle="tooltip"
                                                        title="Mike Litorus">
                                                        <img src="./public/img/profiles/avatar-05.jpg" alt="User Image" />
                                                    </a>
                                                    <span className="all-team">+2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Description</label>
                                        <div id="editor"></div>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Upload Files</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="assignee" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Assign to this task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group m-b-30">
                                    <input placeholder="Search to add" className="form-control search-input" type="text" />
                                    <button className="btn btn-primary">Search</button>
                                </div>
                                <div>
                                    <ul className="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar"><img src="./public/img/profiles/avatar-09.jpg"
                                                        alt="User Image" /></span>
                                                    <div className="media-body align-self-center text-nowrap">
                                                        <div className="user-name">Richard Miles</div>
                                                        <span className="designation">Web Developer</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar"><img src="./public/img/profiles/avatar-10.jpg"
                                                        alt="User Image" /></span>
                                                    <div className="media-body align-self-center text-nowrap">
                                                        <div className="user-name">John Smith</div>
                                                        <span className="designation">Android Developer</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar">
                                                        <img src="./public/img/profiles/avatar-16.jpg" alt="User Image" />
                                                    </span>
                                                    <div className="media-body align-self-center text-nowrap">
                                                        <div className="user-name">Jeffery Lalor</div>
                                                        <span className="designation">Team Leader</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Assign</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="task_followers" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add followers to this task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group m-b-30">
                                    <input placeholder="Search to add" className="form-control search-input" type="text" />
                                    <button className="btn btn-primary">Search</button>
                                </div>
                                <div>
                                    <ul className="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar"><img src="./public/img/profiles/avatar-16.jpg"
                                                        alt="User Image" /></span>
                                                    <div className="media-body media-middle text-nowrap">
                                                        <div className="user-name">Jeffery Lalor</div>
                                                        <span className="designation">Team Leader</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar"><img src="./public/img/profiles/avatar-08.jpg"
                                                        alt="User Image" /></span>
                                                    <div className="media-body media-middle text-nowrap">
                                                        <div className="user-name">Catherine Manseau</div>
                                                        <span className="designation">Android Developer</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar"><img src="./public/img/profiles/avatar-26.jpg"
                                                        alt="User Image" /></span>
                                                    <div className="media-body media-middle text-nowrap">
                                                        <div className="user-name">Wilmer Deluna</div>
                                                        <span className="designation">Team Leader</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Add to Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
