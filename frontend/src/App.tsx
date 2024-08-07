import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Cart from "./views/Cart";
import MobileApp from "./views/MobileApp";
import ContactUs from "./views/ContactUs";
import PlaceOrder from "./views/PlaceOrder";
import NoMatch from "./views/NoMatch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
