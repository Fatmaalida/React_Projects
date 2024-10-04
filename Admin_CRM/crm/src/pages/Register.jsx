
// import { NavLink } from "react-router-dom"; 
import InputTextCard from "../components/InputTextCard";
import InputPasswordCard from "../components/InputPasswordCard";
import TextCard from "../components/TextCard";
import LinkCard from "../components/LinkCard";
import ButtonCard from "../components/ButtonCard";
import LogoCard from "../components/LogoCard";


export default function Register() {
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
                                                <TextCard title="Free Register" text="Get your free Skote account now." />
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="./public/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="avatar-md profile-user-wid mb-4">
                                        <LogoCard href="index.html" imgSrc="./public/images/logo.svg"  alt="" imgHeight="" />
                                    </div>
                                    <div className="p-2">

                                        <div className=" mt-2">
                                            <InputTextCard title="Email" placeholder="Please Enter Email" />
                                        </div>
                                        <div className="mt-4">
                                            <InputTextCard title="Username" placeholder="Enter username..." />
                                        </div>
                                        <div className="mt-4">
                                            <InputPasswordCard />
                                        </div>
                                        <div className="mt-4 d-grid" >
                                            <ButtonCard
                                                buttonText="Register" style={{ padding: '10px 20px', textDecoration: 'none', color: 'white' }}
                                            />
                                        </div>

                                        <div className="mt-4 text-center card mb-2">
                                            <LinkCard link="#" text="Terms Of Use" />
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <div>
                                <p>Already have an account ? <a href="auth-login.html" className="fw-medium text-primary"> Login</a> </p>
                                <p>© <script>document.write(new Date().getFullYear())</script> Skote. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
