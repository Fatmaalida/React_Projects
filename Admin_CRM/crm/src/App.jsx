// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import SideMenu from "./components/SideMenu"
// import AdminDashboard from "./pages/AdminDashboard"


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import Login from "../src/pages/Login"
// import ProjectsList from "./pages/ProjectsList"
// import Register from "./pages/Register"

// import SideMenu from "./components/SideMenu"
import ProjectGrid from "./pages/ProjectGrid"

// import ProjectCreate from "./pages/ProjectCreate"
// import ProjectGridcopy from "./pages/ProjectGridcopy"

function App() {


  return (
    <>

      {/* <Router>
      <Routes>


      <Route path="/Login" element={<Login></Login>} ></Route>
      <Route path="/" element={<><Header/><SideMenu/><AdminDashboard/></>} ></Route>

      </Routes>
    </Router> */}

      <ProjectGrid/>
      {/* <AdminDashboard/> */}
      {/* <Login /> */}
      {/* <ProjectsList/> */}
      {/* <Register/> */}
      
      {/* <Footer/>  */}
      {/* <ProjectCreate/> */}
      {/* <ProjectGridcopy/> */}
     
    </>
  )
}

export default App
