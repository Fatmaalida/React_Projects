import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Register from "./pages/Register";
import DealsDashboard from "./pages/DealsDashboard";
import LeadsDashboard from "./pages/LeadsDashboard";
import Users from "./pages/Users";

// import DealsDetails from "./pages/DealsDetails";
// import Leads from "./pages/Leads";
// import LeadsDashboard from "./pages/LeadsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/AdminDashboard"
          element={
            <>
              <Header />
              <SideMenu />
              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/EmployeeDashboard"
          element={
            <>
              <Header />
              <SideMenu />
              <EmployeeDashboard />
            </>
          }
        />
        <Route path="/Register" element={<Register></Register>}></Route>

        <Route
          path="/DealsDashboard"
          element={
            <>
              <Header />
              <SideMenu />
              <DealsDashboard />
            </>
          }
        ></Route>
        <Route
          path="/LeadsDashboard"
          element={
            <>
              <Header />
              <SideMenu />
              <LeadsDashboard />
            </>
          }
        ></Route>
         <Route
          path="/Users"
          element={
            <>
              <Header />
              <SideMenu />
              <Users />
            </>
          }
        ></Route>
      </Routes>
    </Router>
    // <DealsDetails/>
    // <LeadsDashboard/>
  );
}

export default App;
