// import { NavLink } from "react-router-dom"; 
import InputTextCard from "../components/InputTextCard";
import InputPasswordCard from "../components/InputPasswordCard";
import CheckboxCard from "../components/CheckBoxCard";
import LinkCard from "../components/LinkCard";
import ButtonCard from "../components/ButtonCard";
import LogoCard from "../components/LogoCard";
import TextCard from "../components/TextCard";

export default function Login() {


    return (
        <>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-primary-subtle">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <TextCard title="Welcome Back !" text="Sign in to continue to Skote." />
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="./public/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="avatar-md profile-user-wid mb-4">
                                        <LogoCard href="index.html" imgSrc="./public/images/logo.svg" alt="" imgHeight="" />
                                    </div>

                                    <div className="p-2">
                                        <div className="card">
                                            <div className="card-body pt-0" >
                                                <div className="card mb-4">
                                                    <InputTextCard title="Username" placeholder="Enter username..." />
                                                </div>
                                                <div className="card mb-2">
                                                    <InputPasswordCard />
                                                </div>
                                                <div className="form-check card mt-4">
                                                    <CheckboxCard desc="Remember me" />
                                                </div>

                                                <div className="mt-3 d-grid" >
                                                    <ButtonCard
                                                        buttonText="Log In" redirectUrl="" style={{ padding: '10px 20px', textDecoration: 'none', color: 'white' }}

                                                    />
                                                </div>

                                                {/* <div className="mt-3 d-grid">
                                            <NavLink to="/"><button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                                </NavLink>
                                             </div> */}

                                                <div className="mt-4 text-center card mb-2">
                                                    <LinkCard link="#" text="Forgot Password ?" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                {/* <div style={{ display: 'flex' }}>
                                    <TextCard  text="Don't have an account?"/>
                                    <LinkCard text="Signup now" link="register.html" />
                                </div> */}
                                <p>©Skote. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
