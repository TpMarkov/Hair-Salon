import {navLinks, services} from "./assets/assets.js";
import {Routes, Route} from "react-router-dom"
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Services from "./pages/Services.jsx";
import Appointment from "./pages/Appointment.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
      <div className={"mx-4 sm:mx-[10%]"}>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/my-appointments" element={<MyAppointments/>}/>
          <Route path="/my-profile" element={<MyProfile/>}/>
          <Route path="/services/:type" element={<Services/>}/>
          <Route path="/appointment/:serviceId" element={<Appointment/>}/>
        </Routes>
      </div>
  )
}

export default App
