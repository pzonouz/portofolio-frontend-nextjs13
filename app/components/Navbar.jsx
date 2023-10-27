"use client";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";

const Navbar = () => {
  return (
    <div>
      <TopBar />
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
