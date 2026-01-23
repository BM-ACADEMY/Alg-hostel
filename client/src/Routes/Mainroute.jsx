// src/Mainroutes.jsx
import { Routes, Route } from "react-router-dom";
import Homeroute from "./Homeroute";
import Aboutroute from "./Aboutroute";
import Facilitiesroutes from "./Facilitiesroutes";
import Gallery from "@/Modules/Pages/Gallery/Gallery";
import Rooms from "@/Modules/Pages/Room/Rooms";
import Contact from "@/Modules/Pages/Contact/Contact";




const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homeroute />} />
      <Route path="/about" element={<Aboutroute />} />
      <Route path="/facilities" element={<Facilitiesroutes />} />
      <Route path="/gallery" element={<Gallery />} /> 
      <Route path="/rooms" element={<Rooms />} /> 
      <Route path="/contact" element={<Contact/>}/>    
    </Routes>
  );
};

export default Mainroutes;