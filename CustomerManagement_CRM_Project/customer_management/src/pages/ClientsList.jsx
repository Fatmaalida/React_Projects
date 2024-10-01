// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function ClientsList() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Smarthr - Bootstrap Admin Template" />
                    <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
                    <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
                    <title>Clients - HRMS admin template</title>

                    <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />

                    <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
                    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                    <link rel="stylesheet" href="./public/css/dataTables.bootstrap4.min.css" />
                    <link rel="stylesheet" href="./public/css/select2.min.css" />
                    <link rel="stylesheet" href="./public/css/style.css" />

                    <script data-cfasync="false" src="./public/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>


                    <script src="./public/js/jquery-3.7.1.min.js"></script>


                    <script src="./public/js/bootstrap.bundle.min.js"></script>
                    <script src="./public/js/jquery.slimscroll.min.js"></script>
                    <script src="./public/js/jquery.dataTables.min.js"></script>
                    <script src="./public/js/dataTables.bootstrap4.min.js"></script>
                    <script src="./public/js/select2.min.js"></script>
                    <script src="./public/js/layout.js"></script>
                    <script src="./public/js/theme-settings.js"></script>
                    <script src="./public/js/greedynav.js"></script>
                    <script src="./public/js/app.js"></script>

                    <script src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="0a58496ca73fad105490635a-|49" defer></script>
                </Helmet>
            </HelmetProvider>
            <div className="page-wrapper">

                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title">Clients</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Clients</li>
                                </ul>
                            </div>
                            <div className="col-auto float-end ms-auto">
                                <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_client"><i className="fa-solid fa-plus"></i> Add Client</a>
                                <div className="view-icons">
                                    <a href="clients.html" className="grid-view btn btn-link"><i className="fa fa-th"></i></a>
                                    <a href="clients-list.html" className="list-view btn btn-link active"><i className="fa-solid fa-bars"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row filter-row">
                        <div className="col-sm-6 col-md-3">
                            <div className="input-block mb-3 form-focus">
                                <input type="text" className="form-control floating"/>
                                    <label className="focus-label">Client ID</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="input-block mb-3 form-focus">
                                <input type="text" className="form-control floating"/>
                                    <label className="focus-label">Client Name</label>
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
                            <div className="d-grid">
                                <a href="#" className="btn btn-success"> Search </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table datatable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Client ID</th>
                                            <th>Contact Person</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Status</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-19.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Global Technologies</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0001</td>
                                            <td>Barry Cuda</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="25474457575c4650414465405d44485549400b464a48">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-29.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Delta Infotech</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0002</td>
                                            <td>Tressa Wexler</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6a1e180f19190b1d0f12060f182a0f120b071a060f44090507">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-07.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Cream Inc</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0003</td>
                                            <td>Ruby Bartlett</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="86f4f3e4ffe4e7f4f2eae3f2f2c6e3fee7ebf6eae3a8e5e9eb">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-06.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Wellware Company</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0004</td>
                                            <td>Misty Tison</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8ce1e5fff8f5f8e5ffe3e2cce9f4ede1fce0e9a2efe3e1">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-14.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Mustang Technologies</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0005</td>
                                            <td>Daniel Deacon</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="86e2e7e8efe3eae2e3e7e5e9e8c6e3fee7ebf6eae3a8e5e9eb">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-18.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">International Software Inc</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0006</td>
                                            <td>Walter Weaver</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1562747961706762707463706755706d74786579703b767a78">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-28.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Mercury Software Inc</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0007</td>
                                            <td>Amanda Warren</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="20414d414e444157415252454e604558414d504c450e434f4d">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-success"></i> Active </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="client-profile.html" className="avatar"><img src="./public/img/profiles/avatar-22.jpg" alt="User Image"/></a>
                                                    <a href="client-profile.html">Carlson Tech</a>
                                                </h2>
                                            </td>
                                            <td>CLT-0008</td>
                                            <td>Betty Carlson</td>
                                            <td><a href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8ceee9f8f8f5efedfee0ffe3e2cce9f4ede1fce0e9a2efe3e1">[email&#160;protected]</a></td>
                                            <td>9876543210</td>
                                            <td>
                                                <div className="dropdown action-label">
                                                    <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive </a>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-success"></i> Active</a>
                                                        <a className="dropdown-item" href="#"><i className="fa-regular fa-circle-dot text-danger"></i> Inactive</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
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


                <div id="add_client" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Client</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Last Name</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                <input className="form-control floating" type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Confirm Password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Client ID <span className="text-danger">*</span></label>
                                                <input className="form-control floating" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Phone </label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Company Name</label>
                                                <input className="form-control" type="text"/>
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
                                                    <td>Projects</td>
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
                                                    <td>Tasks</td>
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
                                                    <td>Chat</td>
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
                                                    <td>Estimates</td>
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
                                                    <td>Invoices</td>
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
                                                    <td>Timing Sheets</td>
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


                <div id="edit_client" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Client</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                <input className="form-control" value="Barry" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Last Name</label>
                                                <input className="form-control" value="Cuda" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                                <input className="form-control" value="barrycuda" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                <input className="form-control floating" value="barrycuda@example.com" type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Password</label>
                                                <input className="form-control" value="barrycuda" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Confirm Password</label>
                                                <input className="form-control" value="barrycuda" type="password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Client ID <span className="text-danger">*</span></label>
                                                <input className="form-control floating" value="CLT-0001" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Phone </label>
                                                <input className="form-control" value="9876543210" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">Company Name</label>
                                                <input className="form-control" type="text" value="Global Technologies"/>
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
                                                    <td>Projects</td>
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
                                                    <td>Tasks</td>
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
                                                    <td>Chat</td>
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
                                                    <td>Estimates</td>
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
                                                    <td>Invoices</td>
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
                                                    <td>Timing Sheets</td>
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


                <div className="modal custom-modal fade" id="delete_client" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-header">
                                    <h3>Delete Client</h3>
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
