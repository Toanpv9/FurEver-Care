import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";    
import Header from "./components/Header"; 
import "./styles/tiny-slider.css";


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/properties" element={<Header title="Properties" background="images/hero_bg_1.jpg" />} />
        <Route path="/services" element={<Header title="Services" background="images/hero_bg_1.jpg" />} />
        <Route path="/about" element={<Header title="About Us" background="images/hero_bg_2.jpg" />} />
        <Route path="/contact" element={<Header title="Contact Us" background="images/hero_bg_1.jpg" />} />
      </Routes>
    </Router>
  );
}

export default App;
