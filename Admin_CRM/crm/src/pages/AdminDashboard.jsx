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
                            </div>

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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <DataTableCard
                                maintitle="Transactions Overview"
                                title="Latest Transactions"
                                description="Here you can see the latest transactions and their details."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
