import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';

export default function SideMenu() {
    const [openMenus, setOpenMenus] = useState({
        dashboards: false,
        ecommerce: false,
        invoices: false,
        projects: false,
        contacts: false,
    });

    const toggleMenu = (menu) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <div id="layout-wrapper">
            <div className="vertical-menu">
                <div className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Menu</li>

                            <li>
                                <a
                                    href="#"
                                    className="has-arrow waves-effect"
                                    onClick={() => toggleMenu('dashboards')}
                                >
                                    <span className="badge rounded-pill bg-danger float-end">Hot</span>
                                    <i className="bx bx-home-circle"></i>
                                    <span>Dashboards</span>
                                </a>
                                <ul className={`sub-menu collapse ${openMenus.dashboards ? 'show' : ''}`}>
                                    <li><a href="dashboard-crypto.html">Users Dashboard</a></li>
                                    <NavLink to="/"><li><a>Admin Dashboard</a></li></NavLink>
                                    <li><a href="dashboard-saas.html">Employee Dashboard</a></li>
                                </ul>
                            </li>

                            <li className="menu-title">Apps</li>

                            <li>
                                <a
                                    href="#"
                                    className="has-arrow waves-effect"
                                    onClick={() => toggleMenu('ecommerce')}
                                >
                                    <i className="bx bx-store"></i>
                                    <span>Ecommerce</span>
                                </a>
                                <ul className={`sub-menu collapse ${openMenus.ecommerce ? 'show' : ''}`}>
                                    <li><a href="ecommerce-products.html">Customers</a></li>
                                    <li><a href="ecommerce-product-detail.html">Users</a></li>
                                    <li><a href="ecommerce-orders.html">Orders</a></li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="has-arrow waves-effect"
                                    onClick={() => toggleMenu('invoices')}
                                >
                                    <i className="bx bx-receipt"></i>
                                    <span>Invoices</span>
                                </a>
                                <ul className={`sub-menu collapse ${openMenus.invoices ? 'show' : ''}`}>
                                    <li><a href="invoices-list.html">Invoice List</a></li>
                                    <li><a href="invoices-detail.html">Invoice Detail</a></li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="has-arrow waves-effect"
                                    onClick={() => toggleMenu('projects')}
                                >
                                    <i className="bx bx-briefcase-alt-2"></i>
                                    <span>Projects</span>
                                </a>
                                <ul className={`sub-menu collapse ${openMenus.projects ? 'show' : ''}`}>
                                    <li><a href="projects-grid.html">Projects Grid</a></li>
                                    <li><a href="projects-list.html">Projects List</a></li>
                                    <li><a href="projects-overview.html">Project Overview</a></li>
                                    <li><a href="projects-create.html">Create New</a></li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="has-arrow waves-effect"
                                    onClick={() => toggleMenu('contacts')}
                                >
                                    <i className="bx bxs-user-detail"></i>
                                    <span>Contacts</span>
                                </a>
                                <ul className={`sub-menu collapse ${openMenus.contacts ? 'show' : ''}`}>
                                    <li><a href="contacts-grid.html">Users Grid</a></li>
                                    <li><a href="contacts-list.html">Users List</a></li>
                                    <li><a href="contacts-profile.html">Profile</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
