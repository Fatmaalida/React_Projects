// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function TaskBoard() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Smarthr - Bootstrap Admin Template" />
                    <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
                    <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
                    <title>Task Board - HRMS admin template</title>

                    <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />

                    <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
                    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                    <link rel="stylesheet" href="./public/css/material.css" />
                    <link rel="stylesheet" href="./public/css/select2.min.css" />
                    <link rel="stylesheet" href="./public/css/bootstrap-datetimepicker.min.css" />
                    <link rel="stylesheet" href="./public/css/style.css" />

                    <script src="./public/js/jquery-3.7.1.min.js" type="text/javascript"></script>
                    <script src="./public/js/jquery-ui.min.js" type="text/javascript"></script>
                    <script src="./public/js/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
                    <script src="./public/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                    <script src="./public/js/jquery.slimscroll.min.js" type="text/javascript"></script>
                    <script src="./public/js/select2.min.js" type="text/javascript"></script>
                    <script src="./public/js/moment.min.js" type="text/javascript"></script>
                    <script src="./public/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
                    <script src="./public/js/layout.js" type="text/javascript"></script>
                    <script src="./public/js/theme-settings.js" type="text/javascript"></script>
                    <script src="./public/js/greedynav.js" type="text/javascript"></script>
                    <script src="./public/js/app.js" type="text/javascript"></script>

                    <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="71372ee360f9915f2cf20f7f-|49" defer></script>
                </Helmet>
            </HelmetProvider>

            <div className="page-wrapper">

                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Hospital Admin</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Task Board</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row board-view-header">
                        <div className="col-4">
                            <div className="pro-teams">
                                <div className="pro-team-lead">
                                    <h4>Lead</h4>
                                    <div className="avatar-group">
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-11.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-01.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-16.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <a href="#" className="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i className="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-team-members">
                                    <h4>Team</h4>
                                    <div className="avatar-group">
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-02.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-09.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <img className="avatar-img rounded-circle border border-white" alt="User Image" src="./public/img/profiles/avatar-12.jpg"/>
                                        </div>
                                        <div className="avatar">
                                            <a href="#" className="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_user"><i className="fa-solid fa-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 text-end">
                            <a href="#" className="btn btn-white float-end ms-2" data-bs-toggle="modal" data-bs-target="#add_task_board"><i className="fa-solid fa-plus"></i> Create List</a>
                            <a href="project-view.html" className="btn btn-white float-end" title="View Board"><i className="fa fa-link"></i></a>
                        </div>
                        <div className="col-12">
                            <div className="pro-progress">
                                <div className="pro-progress-bar">
                                    <h4>Progress</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success w-20" role="progressbar"></div>
                                    </div>
                                    <span>20%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-board card mb-0">
                        <div className="card-body">
                            <div className="kanban-cont">
                                <div className="kanban-list kanban-danger">
                                    <div className="kanban-header">
                                        <span className="status-title">Pending</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap">
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-danger">High</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Make a wireframe</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-success">Low</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-warning">Normal</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                                <div className="kanban-list kanban-info">
                                    <div className="kanban-header">
                                        <span className="status-title">Progress</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap">
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-warning">Normal</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-danger">High</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                                <div className="kanban-list kanban-success">
                                    <div className="kanban-header">
                                        <span className="status-title">Completed</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap ks-empty">
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                                <div className="kanban-list kanban-warning">
                                    <div className="kanban-header">
                                        <span className="status-title">Inprogress</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap">
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-success">Low</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                                <div className="kanban-list kanban-purple">
                                    <div className="kanban-header">
                                        <span className="status-title">On Hold</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap">
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-danger">High</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                                <div className="kanban-list kanban-primary">
                                    <div className="kanban-header">
                                        <span className="status-title">Review</span>
                                        <div className="dropdown kanban-action">
                                            <a href="#" data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-wrap">
                                        <div className="card panel">
                                            <div className="kanban-box">
                                                <div className="task-board-header">
                                                    <span className="status-title"><a href="javascript:void(0);">Website redesign</a></span>
                                                    <div className="dropdown kanban-task-action">
                                                        <a href="#" data-bs-toggle="dropdown">
                                                            <i className="fa-solid fa-angle-down"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_modal">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="task-board-body">
                                                    <div className="kanban-info">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span>70%</span>
                                                    </div>
                                                    <div className="kanban-footer">
                                                        <span className="task-info-cont">
                                                            <span className="task-date"><i className="fa-regular fa-clock"></i> Sep 26</span>
                                                            <span className="task-priority badge bg-inverse-danger">High</span>
                                                        </span>
                                                        <span className="task-users">
                                                            <img src="./public/img/profiles/avatar-12.jpg" className="task-avatar" width="24" height="24" alt="User Image"/>
                                                                <span className="task-user-count">+2</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-new-task">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="add_task_board" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Task Board</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Board Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="input-block mb-3 task-board-color">
                                        <label className="col-form-label">Task Board Color</label>
                                        <div className="board-color-list">
                                            <label className="board-control board-primary">
                                                <input name="radio" type="radio" className="board-control-input" value="primary" checked/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-success">
                                                <input name="radio" type="radio" className="board-control-input" value="success"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-info">
                                                <input name="radio" type="radio" className="board-control-input" value="info"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-purple">
                                                <input name="radio" type="radio" className="board-control-input" value="purple"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-warning">
                                                <input name="radio" type="radio" className="board-control-input" value="warning"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-danger">
                                                <input name="radio" type="radio" className="board-control-input" value="danger"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="edit_task_board" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Task Board</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Board Name</label>
                                        <input type="text" className="form-control" value="Pending"/>
                                    </div>
                                    <div className="input-block mb-3 task-board-color">
                                        <label className="col-form-label">Task Board Color</label>
                                        <div className="board-color-list">
                                            <label className="board-control board-primary">
                                                <input name="radio" type="radio" className="board-control-input" value="primary" checked/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-success">
                                                <input name="radio" type="radio" className="board-control-input" value="success"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-info">
                                                <input name="radio" type="radio" className="board-control-input" value="info"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-purple">
                                                <input name="radio" type="radio" className="board-control-input" value="purple"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-warning">
                                                <input name="radio" type="radio" className="board-control-input" value="warning"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-danger">
                                                <input name="radio" type="radio" className="board-control-input" value="danger"/>
                                                    <span className="board-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="new_project" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create New Project</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Project Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Create Project</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="assign_leader" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Assign Leader to this project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group m-b-30">
                                    <input placeholder="Search to add a leader" className="form-control search-input" type="text"/>
                                        <button className="btn btn-primary">Search</button>
                                </div>
                                <div>
                                    <ul className="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar flex-shrink-0"><img src="./public/img/profiles/avatar-09.jpg" alt="User Image"/></span>
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
                                                    <span className="avatar flex-shrink-0"><img src="./public/img/profiles/avatar-10.jpg" alt="User Image"/></span>
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
                                                    <span className="avatar flex-shrink-0">
                                                        <img src="./public/img/profiles/avatar-16.jpg" alt="User Image"/>
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
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="assign_user" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Assign the user to this project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group m-b-30">
                                    <input placeholder="Search a user to assign" className="form-control search-input" type="text"/>
                                        <button className="btn btn-primary">Search</button>
                                </div>
                                <div>
                                    <ul className="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div className="chat-block d-flex">
                                                    <span className="avatar flex-shrink-0"><img src="./public/img/profiles/avatar-09.jpg" alt="User Image"/></span>
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
                                                    <span className="avatar flex-shrink-0"><img src="./public/img/profiles/avatar-10.jpg" alt="User Image"/></span>
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
                                                    <span className="avatar flex-shrink-0">
                                                        <img src="./public/img/profiles/avatar-16.jpg" alt="User Image"/>
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
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="add_task_modal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Task</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Priority</label>
                                        <select className="form-control select">
                                            <option>Select</option>
                                            <option>High</option>
                                            <option>Normal</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Due Date</label>
                                        <div className="cal-icon"><input className="form-control datetimepicker" type="text"/></div>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Followers</label>
                                        <input type="text" className="form-control" placeholder="Search to add"/>
                                            <div className="task-follower-list">
                                                <span data-bs-toggle="tooltip" title="John Doe">
                                                    <img src="./public/img/profiles/avatar-02.jpg" className="avatar" alt="John Doe" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="Richard Miles">
                                                    <img src="./public/img/profiles/avatar-09.jpg" className="avatar" alt="Richard Miles" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="John Smith">
                                                    <img src="./public/img/profiles/avatar-10.jpg" className="avatar" alt="John Smith" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="Mike Litorus">
                                                    <img src="./public/img/profiles/avatar-05.jpg" className="avatar" alt="Mike Litorus" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                            </div>
                                    </div>
                                    <div className="submit-section text-center">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="edit_task_modal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Task</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Name</label>
                                        <input type="text" className="form-control" value="Website Redesign"/>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Priority</label>
                                        <select className="form-control select">
                                            <option>Select</option>
                                            <option selected>High</option>
                                            <option>Normal</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Due Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" value="20/08/2019"/>
                                        </div>
                                    </div>
                                    <div className="input-block mb-3">
                                        <label className="col-form-label">Task Followers</label>
                                        <input type="text" className="form-control" placeholder="Search to add"/>
                                            <div className="task-follower-list">
                                                <span data-bs-toggle="tooltip" title="John Doe">
                                                    <img src="./public/img/profiles/avatar-02.jpg" className="avatar" alt="John Doe" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="Richard Miles">
                                                    <img src="./public/img/profiles/avatar-09.jpg" className="avatar" alt="Richard Miles" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="John Smith">
                                                    <img src="./public/img/profiles/avatar-10.jpg" className="avatar" alt="John Smith" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                                <span data-bs-toggle="tooltip" title="Mike Litorus">
                                                    <img src="./public/img/profiles/avatar-05.jpg" className="avatar" alt="Mike Litorus" width="20" height="20"/>
                                                        <i className="fa-solid fa-xmark"></i>
                                                </span>
                                            </div>
                                    </div>
                                    <div className="submit-section text-center">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
