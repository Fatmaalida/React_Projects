import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ErrorPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Smarthr - Bootstrap Admin Template"
          />
          <meta
            name="keywords"
            content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
          />
          <meta
            name="author"
            content="Dreamstechnologies - Bootstrap Admin Template"
          />
          <title>Error 404 - HRMS admin template</title>

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="./public/img/favicon.png"
          />

          <link rel="stylesheet" href="./public/css/bootstrap.rtl.min.css" />
          <link
            rel="stylesheet"
            href="./public/plugins/fontawesome/css/fontawesome.min.css"
          />
          <link
            rel="stylesheet"
            href="./public/plugins/fontawesome/css/all.min.css"
          />
          <link rel="stylesheet" href="./public/css/line-awesome.min.css" />
          <link rel="stylesheet" href="./public/css/material.css" />
          <link rel="stylesheet" href="./public/css/style.css" />

          <script
            src="./public/js/jquery-3.7.1.min.js"
            type="text/javascript"
          />
          <script
            src="./public/js/bootstrap.bundle.min.js"
            type="text/javascript"
          />
          <script src="./public/js/app.js" type="text/javascript" />
          <script
            src="./public/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
            data-cf-settings="3429a69c45f0b0bc010d1970-|49"
            defer
          />
        </Helmet>
      </HelmetProvider>
      <body className="error-page">
        <div className="main-wrapper">
          <div className="error-box">
            <h1>404</h1>
            <h3>
              <i className="fa-solid fa-triangle-exclamation"></i> Oops! Page
              not found!
            </h3>
            <p>The page you requested was not found.</p>
            <a href="admin-dashboard.html" className="btn btn-custom">
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </>
  );
}
