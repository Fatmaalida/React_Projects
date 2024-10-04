import { useState, useEffect } from 'react';
import GridCard from "../components/GridCard";
import config from '../config/config';
const apiURL = config.baseURL;


export default function ProjectGrid() {

    // State to store the API data
    const [projects, setProjects] = useState([]);



    const userLogin = async () => {
        const formdata = new FormData();
        formdata.append("email", "deneme111@hotmail.com");
        formdata.append("password", "12345");

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
            mode: 'cors'
        };

        fetch((apiURL + "/api/auth/login/user"), requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
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


        userLogin();




        //  userRegister();





    }, []);


    return (
        <>
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
