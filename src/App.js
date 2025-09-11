import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";    
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import CatFood from "./pages/Catfood";
import DogFood from "./pages/Dogfood";



function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Home chỉ load Hero */}
        <Route path="/" element={<Hero />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* CatFood và DogFood */}
        <Route path="/catfood" element={<CatFood />} />
        <Route path="/dogfood" element={<DogFood />} />

        


        {/* Các trang khác */}
        <Route 
          path="/petcare" 
          element={<Header title="Pet Care" background="images/hero_bg_1.jpg" />} 
        />
        <Route 
          path="/products" 
          element={<Header title="Products" background="images/hero_bg_2.jpg" />} 
        />
        <Route 
          path="/emergency" 
          element={<Header title="Emergency Help" background="images/hero_bg_1.jpg" />} 
        />
        <Route 
          path="/veterinarians" 
          element={<Header title="Veterinarians" background="images/hero_bg_2.jpg" />} 
        />
        <Route 
          path="/petshelter" 
          element={<Header title="Pet Shelter" background="images/hero_bg_1.jpg" />} 
        />
        <Route 
          path="/feedback" 
          element={<Header title="Feedback" background="images/hero_bg_2.jpg" />} 
        />
        <Route 
          path="/contact" 
          element={<Header title="Contact Us" background="images/hero_bg_1.jpg" />} 
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
