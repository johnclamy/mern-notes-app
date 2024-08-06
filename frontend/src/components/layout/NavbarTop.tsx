import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import Logo from "../widgets/Logo";

const NavbarTop = () => (
  <section className="bg-white border-app_grey dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <Link to="/">
          <FaSearch className="icon" />
        </Link>
        <Link to="/">
          <div className="flex justify-center items-center relative">
            <FaShoppingBasket className="icon" />
            <span className="absolute top-2/3 right-1/2 bg-app_yellow text-black text-sm w-5 h-5 rounded-full flex justify-center items-center">
              0
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="text-sm font-semibold text-app_blue decoration-4 decoration-app_yellow dark:text-app_yellow hover:text-app_yellow hover:no-underline transition"
        >
          Login
        </Link>
      </div>
    </div>
  </section>
);

export default NavbarTop;
