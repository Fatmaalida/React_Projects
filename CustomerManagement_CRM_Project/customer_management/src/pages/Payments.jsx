// import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Payments() {
  return (
    <>
    <HelmetProvider>
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Smarthr - Bootstrap Admin Template" />
    <meta
      name="keywords"
      content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
    />
    <meta name="author" content="Dreamstechnologies - Bootstrap Admin Template" />
    <title>Payments - HRMS admin template</title>

    <link rel="shortcut icon" type="image/x-icon" href="./public/img/favicon.png" />
    <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
    <link rel="stylesheet" href="./public/plugins/fontawesome/css/fontawesome.min.css" />
    <link rel="stylesheet" href="./public/plugins/fontawesome/css/all.min.css" />
    <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
    <link rel="stylesheet" href="./public/css/material.css" />
    <link rel="stylesheet" href="./public/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="./public/css/style.css" />

    <script src="./public/js/jquery-3.7.1.min.js"></script>
    <script src="./public/js/bootstrap.bundle.min.js"></script>
    <script src="./public/js/jquery.slimscroll.min.js"></script>
    <script src="./public/js/jquery.dataTables.min.js"></script>
    <script src="./public/js/dataTables.bootstrap4.min.js"></script>
    <script src="./public/js/layout.js"></script>
    <script src="./public/js/theme-settings.js"></script>
    <script src="./public/js/greedynav.js"></script>
    <script src="./public/js/app.js"></script>
    <script
      src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
      data-cf-settings="dad09a3e2ccbf0696a3c57b4-|49"
      defer
    ></script>
  </Helmet>
</HelmetProvider>


      <div className="page-wrapper">

<div className="content container-fluid">

    <div className="page-header">
        <div className="row">
            <div className="col-sm-12">
                <h3 className="page-title">Payments</h3>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Payments</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="table-responsive">
                <table className="table table-striped custom-table datatable mb-0">
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Client</th>
                            <th>Payment Type</th>
                            <th>Paid Date</th>
                            <th>Paid Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="invoice-view.html">#INV-0001</a></td>
                            <td>
                                <h2><a href="#">Global Technologies</a></h2>
                            </td>
                            <td>Paypal</td>
                            <td>8 Feb 2019</td>
                            <td>$500</td>
                        </tr>
                        <tr>
                            <td><a href="invoice-view.html">#INV-0002</a></td>
                            <td>
                                <h2><a href="#">Delta Infotech</a></h2>
                            </td>
                            <td>Paypal</td>
                            <td>8 Feb 2019</td>
                            <td>$500</td>
                        </tr>
                        <tr>
                            <td><a href="invoice-view.html">#INV-0003</a></td>
                            <td>
                                <h2><a href="#">Cream Inc</a></h2>
                            </td>
                            <td>Paypal</td>
                            <td>8 Feb 2019</td>
                            <td>$500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</div>
    </>
  );
}
