"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import Offcanvas from "./Offcanvas";
import Navbar from "./Navbar";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const { user } = useUser();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar secondary--navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <a href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </a>
                  </div>
                  <Navbar openNav={openNav} setOpenNav={setOpenNav} handleNav={handleNav} />
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <section>
                          <div>
                            <UserButton />
                          </div>
                          <div className="text-sm normal-case">
                            {user?.firstName}
                          </div>
                        </section>
                      </SignedIn>
                    </div>
                    {/* <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
