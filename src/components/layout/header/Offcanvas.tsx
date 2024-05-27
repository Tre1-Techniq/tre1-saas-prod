import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.png";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const { user } = useUser();

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item nav-fade">
                  < Link href="/" className="">
                      <i className="fa-light fa-solid fa-home-lg"></i>
                  </Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "e-learning"
                    )}`}
                    onClick={() => handleSubmenu("e-learning")}
                  >
                    E-Learning
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("e-learning")}`}>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/quiz">AI Quizzes</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">Online Courses</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Coding Demos</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">E-Book Library</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Blog Posts</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "digital-assets"
                    )}`}
                    onClick={() => handleSubmenu("digital-assets")}
                  >
                    Digital Assets
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("digital-assets")}`}>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">AI Prompts</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Code Samples</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">UI/UX Kits</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Video Templates</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "members-only"
                    )}`}
                    onClick={() => handleSubmenu("members-only")}
                  >
                    Members Only
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("members-only")}`}>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Community</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/dashboard">My Assets</Link>
                    </li>
                    <li className="navbar__item nav-fade">
                      <Link onClick={closeNav} href="/gallery">Settings</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item nav-fade">
                  <Link onClick={closeNav} href="gallery">About</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link onClick={closeNav} href="dashboard">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
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
          </div>
          <div className="offcanvas-menu__social social nav-fade">
          <Link
            href="https://www.instagram.com/tre1.techniq/" 
            target="_blank"
            aria-label="follow me on instagram"
            onClick={closeNav}
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCL8Nem5gkFZy2qqol8e3VmA?sub_confirmation=1"
            target="_blank"
            aria-label="subscribe on youtube"
            onClick={closeNav}
          >
            <i className="fa-brands fa-square-youtube"></i>
          </Link>
          <Link
            href="https://twitter.com/Tre1_Techniq"
            target="_blank"
            aria-label="follow me on x"
            onClick={closeNav}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
