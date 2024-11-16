"use client";
import Link from "next/link";
import { useState } from "react";
import "../src/app/globals.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

library.add(faBars);

export default function NavBar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="topnav">
        <button className="icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link className="nav-links" href="#introduction">Introduction</Link>
          <Link className="nav-links" href="#about">About</Link>
          <Link className="nav-links" href="#skills">Skills</Link>
          <Link className="nav-links" href="#education">Education</Link>
          <Link className="nav-links" href="#experience">Experience</Link>
          {/* <Link className="nav-links" href="#portfolio">Portfolio</Link> */}
          <Link className="nav-links" href="#contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
