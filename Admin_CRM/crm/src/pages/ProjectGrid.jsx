import { useState, useEffect } from 'react';
import GridCard from "../components/GridCard";

import { userLogin, getUserInfo, getBalance, getMyQuote } from '../helper/get_data';


export default function ProjectGrid() {

    // State to store the API data
    const [projects, setProjects] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [token, setToken] = useState(null); // Token burada tutulacak hep


    const userLogin1 = async () => {

        const email = "deneme111@hotmail.com";
        const password = "12345";

        try {

            const fetchedToken = await userLogin(email, password);
            await setToken(fetchedToken);
            await console.log("Login successful, token:", fetchedToken);

        } catch (error) {
            console.error("Login failed:", error);
        }


    };



    const getProfile = async () => {
        try {

            const getProfileData = await getUserInfo(token);
            await console.log(getProfileData);

        } catch (error) {
            console.error("GET function failed:", error);
        }
    };



    const getBalance1 = async () => {
        try {

            const getBalanceData = await getBalance(token);
            await console.log(getBalanceData);

        } catch (error) {
            console.error("GET function failed:", error);
        }
    };



    const getStatusQuote = async () => {
        try {

            const getQuoteStatusData = await getStatusQuote(token);
            await console.log(getQuoteStatusData);

        } catch (error) {
            console.error("GET function failed:", error);
        }
    };


    const getMyQuote1 = async () => {
        try {

            const getQuoteData = await getMyQuote(token);
            await console.log(getQuoteData);

        } catch (error) {
            console.error("GET function failed:", error);
        }
    };


    const userRegister = async () => {
        var formdata = new FormData();
        formdata.append("email", "deneme111@hotmail.com");
        formdata.append("password", "12345");
        formdata.append("first_name", "deneme");
        formdata.append("last_name", "deneme2");
        formdata.append("phone", "5530014722");
        formdata.append("address", "deneme adres");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
            mode: 'cors'
        };

        fetch((apiURL + "/api/auth/register/NewAccount"), requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };





    useEffect(() => {


        //  userLogin();




        //  userRegister();





    }, []);


    return (
        <>
            <button onClick={userLogin1}>Giriş Yap</button>
            <button onClick={getProfile}>Profil Bilgileri</button>
            <button onClick={getBalance1}>Bakiye Bilgisi</button>
            <button onClick={getMyQuote1}>Bana Gelen Teklifler</button>
            <button onClick={getStatusQuote}>Teklifin Durumunu Gör</button>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Projects Grid</h4>
                                    {/* <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                                            <li className="breadcrumb-item active">Projects Grid</li>
                                        </ol>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Check if the data is loaded */}
                        <div className="row">
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <div className="col-xl-4 col-sm-6" key={index}>
                                        <div className="card">
                                            <GridCard
                                                imageSrc={project.imageSrc} // Replace with your actual field names
                                                title={project.title} // Replace with your actual field names
                                                description={project.description} // Replace with your actual field names
                                                status={project.status} // Replace with your actual field names
                                                date={project.date} // Replace with your actual field names
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Loading projects...</p> // Show this while the data is being fetched
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
