import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Menu from "../views/Menu";
import MobileApp from "../views/MobileApp";
import ContactUs from "../views/ContactUs";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/mobile-app" element={<MobileApp />} />
    <Route path="/contact-us" element={<ContactUs />} />
  </Routes>
);

export default Router;
