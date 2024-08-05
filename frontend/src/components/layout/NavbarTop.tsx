import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import Logo from "../widgets/Logo";

const NavbarTop = () => (
  <section className="bg-white border-app_grey dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/">
        <Logo />
      </a>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="/">
          <FaSearch className="text-sm  text-app_blue dark:text-white" />
        </a>
        <a href="/">
          <FaShoppingBasket className="text-sm  text-app_blue dark:text-white" />
        </a>
        <a
          href="/"
          className="text-sm font-semibold text-app_blue decoration-4 decoration-app_yellow dark:text-app_yellow hover:text-app_yellow hover:no-underline transition"
        >
          Login
        </a>
      </div>
    </div>
  </section>
);

export default NavbarTop;
