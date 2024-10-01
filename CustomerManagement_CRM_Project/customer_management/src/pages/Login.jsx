import { Helmet } from "react-helmet";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // useNavigate import edildi

export default function Login() {
    const [email, setEmail] = useState('admin@dreamstechnologies.com'); // Email state
    const [password, setPassword] = useState('123456'); // Password state
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [role, setRole] = useState("admin"); // Default olarak admin seçtik
    const navigate = useNavigate(); // useNavigate hook'unu tanımladık

    const handleSubmit = (e) => {
        e.preventDefault();

        // Login işlemi başarılıysa yönlendirme yap
        console.log('Email:', email);
        console.log('Password:', password);

        // Yönlendirme yap
        if (role === "admin") {
            navigate('/AdminDashboard'); // Admin Dashboard'a yönlendir
        } else if (role === "employee") {
            navigate('/EmployeeDashboard'); // Employee Dashboard'a yönlendir
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Smarthr - Bootstrap Admin Template" />
                <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
                <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
                <title>Login - HRMS admin template</title>

                <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
                <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
                <link rel="stylesheet" href="./public/css/material.css" />
                <link rel="stylesheet" href="./public/css/style.css" />

                <script src="./public/js/jquery-3.7.1.min.js"></script>
                <script src="./public/js/bootstrap.bundle.min.js"></script>
                <script src="./public/js/owl.carousel.min.js"></script>
                <script src="./public/js/app.js"></script>
                <script
                    src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
                    data-cf-settings="5ee51424d07b08c06ae673ea-|49"
                    defer
                ></script>
            </Helmet>

            <div className="account-page">
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">
                            <div className="account-logo">
                                <a href="admin-dashboard.html">
                                    <img src="./public/img/logo2.png" alt="Dreamguy's Technologies" />
                                </a>
                            </div>

                            <div className="account-box">
                                <div className="account-wrapper">
                                    <h3 className="account-title">Login</h3>
                                    <p className="account-subtitle">Access to our dashboard</p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="input-block mb-4">
                                            <label className="col-form-label">Email Address</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                value={email} // Controlled component
                                                onChange={(e) => setEmail(e.target.value)} // Update email
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="input-block mb-4">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <label className="col-form-label">Password</label>
                                                </div>
                                                <div className="col-auto">
                                                    <a className="text-muted" href="forgot-password.html">
                                                        ?Forgot password
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="position-relative">
                                                <input
                                                    className="form-control"
                                                    type={showPassword ? "text" : "password"}
                                                    value={password} // Controlled component
                                                    onChange={(e) => setPassword(e.target.value)} // Update password
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                                <span
                                                    className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                                    id="toggle-password"
                                                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                                    style={{ cursor: 'pointer' }}
                                                ></span>
                                            </div>
                                        </div>
                                        <div className="input-block mb-4 text-center">
                                            <button
                                                className="btn btn-primary account-btn"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="account-footer">
                                            <p>
                                                Don't have an account yet?{" "}
                                                <NavLink to="/Register">
                                                    <a href="register.html">Register</a>
                                                </NavLink>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
