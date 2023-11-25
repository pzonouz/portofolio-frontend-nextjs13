"use client";
import { useState, useEffect } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import FixedMenu from "./FixedMenu";

const Navbar = ({ parts, services, classes }) => {
  return (
    <div>
      <FixedMenu />
      <TopBar />
      <DesktopMenu parts={parts} services={services} classes={classes} />
      <MobileMenu parts={parts} services={services} classes={classes} />
    </div>
  );
};

export default Navbar;
