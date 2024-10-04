import DataTableCard from "../components/DataTableCard";
import MiniCard from "../components/MiniCard";

export default function AdminDashboard() {
    return (
        <>
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {/* <div className="row mb-4">
                            <div className="col-lg-12">
                                <div className="d-flex align-items-center">
                                    <img src="./public/images/users/avatar-1.jpg" alt="" className="avatar-sm rounded"/>
                                    <div className="ms-3 flex-grow-1">
                                        <h5 className="mb-2 card-title">Hello, Henry Franklin</h5>
                                        <p className="text-muted mb-0">Ready to jump back in?</p>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="btn btn-primary"><i className="bx bx-plus align-middle"></i> Add New Jobs</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card overflow-hidden">
                                <div className="bg-primary-subtle">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-3">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Skote Dashboard</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="./public/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <img src="./public/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle" />
                                            </div>
                                            <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                        </div>

                                        <div className="col-sm-8">
                                            <div className="pt-4">

                                                <div className="row">
                                                    <div className="col-6">
                                                        <h5 className="font-size-15">125</h5>
                                                        <p className="text-muted mb-0">Projects</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="font-size-15">$1245</h5>
                                                        <p className="text-muted mb-0">Revenue</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {/* <div className="card-body">
                                        <h4 className="card-title mb-4">Monthly Earning</h4>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="text-muted">This month</p>
                                                <h3>$34,252</h3>
                                                <p className="text-muted"><span className="text-success me-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>

                                                <div className="mt-4">
                                                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mt-4 mt-sm-0">
                                                    <div id="radialBar-chart" data-colors='["--bs-primary"]' className="apex-charts"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
                                    </div> */}
                            </div>
                        </div>
                        {/* mini cards  */}
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <MiniCard icon="bx bx-copy-alt font-size-24" count="1,235" label="Orders" />
                                </div>
                                <div className="col-md-4">
                                    <MiniCard icon="bx bx-copy-alt font-size-24" count="1,235" label="Orders" />

                                </div>
                                <div className="col-md-4">
                                    <MiniCard icon="bx bx-copy-alt font-size-24" count="1,235" label="Orders" />

                                </div>
                            </div>
                        </div>


                        {/* <div className="card">
                                    <div className="card-body">
                                        <div className="d-sm-flex flex-wrap">
                                            <h4 className="card-title mb-4">Email Sent</h4>
                                            <div className="ms-auto">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Year</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div id="stacked-column-chart" className="apex-charts" data-colors='["--bs-primary", "--bs-warning", "--bs-success"]' dir="ltr"></div>
                                    </div>
                                </div> */}
                    </div>
                </div>
                {/*                     
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Social Source</h4>
                                        <div className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <span className="avatar-title rounded-circle bg-primary-subtle font-size-24">
                                                        <i className="mdi mdi-facebook text-primary"></i>
                                                    </span>
                                            </div>
                                            <p className="font-16 text-muted mb-2"></p>
                                            <h5><a href="javascript: void(0);" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </a></h5>
                                            <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                            <a href="javascript: void(0);" className="text-primary font-16">Learn more <i className="mdi mdi-chevron-right"></i></a>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-primary font-size-16">
                                                                <i className="mdi mdi-facebook text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Facebook</h5>
                                                    <p className="text-muted mb-0">125 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-info font-size-16">
                                                                <i className="mdi mdi-twitter text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Twitter</h5>
                                                    <p className="text-muted mb-0">112 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                                <i className="mdi mdi-instagram text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Instagram</h5>
                                                    <p className="text-muted mb-0">104 sales</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Top Cities Selling Product</h4>

                                        <div className="text-center">
                                            <div className="mb-4">
                                                <i className="bx bx-map-pin text-primary display-4"></i>
                                            </div>
                                            <h3>1,456</h3>
                                            <p>San Francisco</p>
                                        </div>

                                        <div className="table-responsive mt-4">
                                            <table className="table align-middle table-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 30%">
                                                            <p className="mb-0">San Francisco</p>
                                                        </td>
                                                        <td style="width: 25%">
                                                            <h5 className="mb-0">1,456</h5></td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">Los Angeles</p>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0">1,123</h5>
                                                        </td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-success rounded" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className="mb-0">San Diego</p>
                                                        </td>
                                                        <td>
                                                            <h5 className="mb-0">1,026</h5>
                                                        </td>
                                                        <td>
                                                            <div className="progress bg-transparent progress-sm">
                                                                <div className="progress-bar bg-warning rounded" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Latest Transaction</h4>
                                <div className="table-responsive">
                                    <DataTableCard
                                        maintitle="Transactions Overview"
                                        title="Latest Transactions"
                                        description="Here you can see the latest transactions and their details."
                                    />
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
