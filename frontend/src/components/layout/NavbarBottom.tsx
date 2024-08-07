import { Link } from "react-router-dom";
import { LinkItem } from "./Navbar";

const NavbarBottom = ({
  linkItem,
  onNavLinkClick,
}: {
  linkItem: LinkItem;
  onNavLinkClick: (linkItem: LinkItem) => void;
}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  linkItem === "home" ? "active-nav-item" : ""
                }`}
                onClick={() => onNavLinkClick("home")}
                aria-current="page"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`nav-link ${
                  linkItem === "menu" ? "active-nav-item" : ""
                }`}
                onClick={() => onNavLinkClick("menu")}
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                to="/mobile-app"
                className={`nav-link ${
                  linkItem === "mobile-app" ? "active-nav-item" : ""
                }`}
                onClick={() => onNavLinkClick("mobile-app")}
              >
                mobile-app
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`nav-link ${
                  linkItem === "contact us" ? "active-nav-item" : ""
                }`}
                onClick={() => onNavLinkClick("contact us")}
              >
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavbarBottom;
