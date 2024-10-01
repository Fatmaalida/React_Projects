import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Users() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Smarthr - Bootstrap Admin Template" />
                    <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
                    <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
                    <title>Users - HRMS admin template</title>
                    <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
                    <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
                    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                    <link rel="stylesheet" href="./public/css/material.css" />
                    <link rel="stylesheet" href="./public/css/dataTables.bootstrap4.min.css" />
                    <link rel="stylesheet" href="./public/css/select2.min.css" />
                    <link rel="stylesheet" href="./public/css/bootstrap-datetimepicker.min.css" />
                    <link rel="stylesheet" href="./public/css/style.css" />
                    <script src="./public/js/jquery-3.7.1.min.js"></script>
                    <script src="./public/js/bootstrap.bundle.min.js"></script>
                    <script src="./public/js/jquery.slimscroll.min.js"></script>
                    <script src="./public/js/select2.min.js"></script>
                    <script src="./public/js/moment.min.js"></script>
                    <script src="./public/js/bootstrap-datetimepicker.min.js"></script>
                    <script src="./public/js/jquery.dataTables.min.js"></script>
                    <script src="./public/js/dataTables.bootstrap4.min.js"></script>
                    <script src="./public/js/layout.js"></script>
                    <script src="./public/js/theme-settings.js"></script>
                    <script src="./public/js/greedynav.js"></script>
                    <script src="./public/js/app.js"></script>
                </Helmet>
            </HelmetProvider>

            <div className="page-wrapper">

                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title">Users</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Users</li>
                                </ul>
                            </div>
                            <div className="col-auto float-end ms-auto">
                                <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_user"><i className="fa-solid fa-plus"></i> Add User</a>
                            </div>
                        </div>
                    </div>


                    <div className="row filter-row">
                        <div className="col-sm-6 col-md-3">
                            <div className="input-block mb-3 form-focus">
                                <input type="text" className="form-control floating"/>
                                    <label className="focus-label">Name</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="input-block mb-3 form-focus select-focus">
                                <select className="select floating">
                                    <option>Select Company</option>
                                    <option>Global Technologies</option>
                                    <option>Delta Infotech</option>
                                </select>
                                <label className="focus-label">Company</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="input-block mb-3 form-focus select-focus">
                                <select className="select floating">
                                    <option>Select Role</option>
                                    <option>Web Developer</option>
                                    <option>Web Designer</option>
                                    <option>Android Developer</option>
                                    <option>Ios Developer</option>
                                </select>
                                <label className="focus-label">Role</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <a href="#" className="btn btn-success w-100"> Search </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table datatable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Company</th>
                                            <th>Created Date</th>
                                            <th>Role</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-21.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">Daniel Porter <span>Admin</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="187c7976717d7468776a6c7d6a587d60797568747d367b7775">[email&#160;protected]</a></td>
                                            <td>Dreamguys Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-danger">Admin</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-02.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">John Doe <span>Web Designer</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d6bcb9beb8b2b9b396b3aeb7bba6bab3f8b5b9bb">[email&#160;protected]</a></td>
                                            <td>Dreamguys Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-success">Employee</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-09.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">Richard Miles <span>Admin</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2f5d464c474e5d4b4246434a5c6f4a574e425f434a014c4042">[email&#160;protected]</a></td>
                                            <td>Dreamguys Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-success">Employee</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-10.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">John Smith <span>Android Developer</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="711b1e191f021c180519311409101c011d145f121e1c">[email&#160;protected]</a></td>
                                            <td>Dreamguy Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-success">Employee</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-05.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">Mike Litorus <span>IOS Developer</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="721f1b19171e1b061d00070132170a131f021e175c111d1f">[email&#160;protected]</a></td>
                                            <td>Dreamguy Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-success">Employee</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-11.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">Wilmer Deluna <span>Team Leader</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dbacb2b7b6bea9bfbeb7aeb5ba9bbea3bab6abb7bef5b8b4b6">[email&#160;protected]</a></td>
                                            <td>Dreamguy Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-success">Employee</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="profile.html" className="avatar"><img src="./public/img/profiles/avatar-19.jpg" alt="User Image"/></a>
                                                    <a href="profile.html">Barry Cuda <span>Global Technologies</span></a>
                                                </h2>
                                            </td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="95f7f4e7e7ecf6e0f1f4d5f0edf4f8e5f9f0bbf6faf8">[email&#160;protected]</a></td>
                                            <td>Global Technologies</td>
                                            <td>1 Jan 2013</td>
                                            <td>
                                                <span className="badge bg-inverse-info">Client</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
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


                <div id="add_user" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add User</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Last Name</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                <input className="form-control" type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Confirm Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Phone </label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Role</label>
                                                <select className="select">
                                                    <option>Admin</option>
                                                    <option>Client</option>
                                                    <option>Employee</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Company</label>
                                                <select className="select">
                                                    <option>Global Technologies</option>
                                                    <option>Delta Infotech</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control floating"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive m-t-15">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Module Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                    <th className="text-center">Import</th>
                                                    <th className="text-center">Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Employee</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Holidays</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Leaves</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Events</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="edit_user" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" value="John" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Last Name</label>
                                                <input className="form-control" value="Doe" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                                <input className="form-control" value="johndoe" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                <input className="form-control" value="johndoe@example.com" type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Confirm Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Phone </label>
                                                <input className="form-control" value="9876543210" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Role</label>
                                                <select className="select">
                                                    <option>Admin</option>
                                                    <option>Client</option>
                                                    <option selected>Employee</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Company</label>
                                                <select className="select">
                                                    <option>Global Technologies</option>
                                                    <option>Delta Infotech</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                                                <input type="text"value="FT-0001" className="form-control floating"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive m-t-15">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th>Module Permission</th>
                                                    <th className="text-center">Read</th>
                                                    <th className="text-center">Write</th>
                                                    <th className="text-center">Create</th>
                                                    <th className="text-center">Delete</th>
                                                    <th className="text-center">Import</th>
                                                    <th className="text-center">Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Employee</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Holidays</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Leaves</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Events</td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td className="text-center">
                                                        <label className="custom_check">
                                                            <input type="checkbox" checked/>
                                                                <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal custom-modal fade" id="delete_user" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-header">
                                    <h3>Delete User</h3>
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
    );
}
