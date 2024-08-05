import { useState } from "react";

const NavbarBottom = () => {
  const [linkItem, setLinkItem] = useState("home");

  return (
    <section className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a
                href="/"
                className={`nav-link ${
                  linkItem === "home" ? "active-nav-item" : ""
                }`}
                onClick={() => setLinkItem("home")}
                aria-current="page"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`nav-link ${
                  linkItem === "menu" ? "active-nav-item" : ""
                }`}
                onClick={() => setLinkItem("menu")}
              >
                menu
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`nav-link ${
                  linkItem === "mobile-app" ? "active-nav-item" : ""
                }`}
                onClick={() => setLinkItem("mobile-app")}
              >
                mobile-app
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`nav-link ${
                  linkItem === "contact us" ? "active-nav-item" : ""
                }`}
                onClick={() => setLinkItem("contact us")}
              >
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavbarBottom;
