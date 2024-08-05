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
                aria-current="page"
              >
                home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                menu
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                mobile-app
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
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
