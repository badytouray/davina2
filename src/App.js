import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Faq from './Component/FAQ/Faq';
import Footer from './Component/Footer/Footer';
import ServiceList from './Component/ServiceList/ServiceList';
import NavBar from './Component/NavBar/NavBar';
import Slider from './Component/Slider/Slider';
import About from './Component/About/About';
import SpecialOffer from "./Component/SpecialOffer/SpecialOffer";
import ContactUs from "./Component/ContactUs/ContactUs";
import Testimonial from "./Component/Testimonials/Testimonial";
import Waxing from "./Component/Waxing/Waxing";
import PriceList from "./Component/PriceList/PriceList";
import EyeTreatment from "./Component/EyeTreatment/EyeTreatment";
import TermsAndConditions from "./Component/TermsAndConditions/TermsAndConditions";
import Home from "./Component/Home/Home";
import Facials from "./Component/Facials/Facials";
import FeaturedSpecial from "./Component/FeaturedSpecial/FeaturedSpecial";

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Slider />
    
          <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/service-list" element={<ServiceList />} />
                    <Route path="/testimonials" element={<Testimonial />} />
                    <Route path="/special-offers" element={<SpecialOffer />} />
                    <Route path="/waxing" element={<Waxing/>} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/eye-treatment" element={<EyeTreatment />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/facials" element={<Facials />} />
                    <Route path="/" element={<FeaturedSpecial />} />
                  
            </Routes>
     
      <Footer />
      </Router>
    </>
  );
}

export default App;
