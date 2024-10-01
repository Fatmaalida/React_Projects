import { NavLink } from "react-router-dom";

export default function Register() {
    return (
        <>
            <body className="account-page">

                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">

                            <div className="account-logo">
                                <a href="admin-dashboard.html"><img src="./public/img/logo2.png" alt="Dreamguy's Technologies" /></a>
                            </div>

                            <div className="account-box">
                                <div className="account-wrapper">
                                    <h3 className="account-title">Register</h3>
                                    <p className="account-subtitle">Access to our dashboard</p>

                                    <form action="https://smarthr.dreamstechnologies.com/html/template-rtl/admin-dashboard.html">
                                        <div className="input-block mb-4">
                                            <label className="col-form-label">Email<span className="mandatory">*</span></label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="input-block mb-4">
                                            <label className="col-form-label">Password<span className="mandatory">*</span></label>
                                            <input className="form-control" type="password" />
                                        </div>
                                        <div className="input-block mb-4">
                                            <label className="col-form-label">Repeat Password<span className="mandatory">*</span></label>
                                            <input className="form-control" type="password" />
                                        </div>
                                        <div className="input-block mb-4 text-center">
                                            <button className="btn btn-primary account-btn" type="submit">Register</button>
                                        </div>
                                        <div className="account-footer">
                                            <p>
                                                Already have an account?{" "}
                                                <NavLink to="/">
                                                    <a href="index.html">Login</a>
                                                </NavLink>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </body>





        </>
    )
}
