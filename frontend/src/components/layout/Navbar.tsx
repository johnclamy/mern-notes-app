import { useState } from "react";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

export type LinkItem =
  | "home"
  | "menu"
  | "mobile-app"
  | "contact us"
  | "cart"
  | "place order";

const Navbar = () => {
  const [linkItem, setLinkItem] = useState<LinkItem>("home");
  const handleNavLinkClick = (linkItem: LinkItem): void =>
    setLinkItem(linkItem);

  return (
    <nav>
      <NavbarTop onNavLinkClick={handleNavLinkClick} />
      <NavbarBottom linkItem={linkItem} onNavLinkClick={handleNavLinkClick} />
    </nav>
  );
};

export default Navbar;
