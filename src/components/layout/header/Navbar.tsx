import Link from "next/link";

interface NavBarProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

export default function Navbar({ openNav, handleNav, setOpenNav }: NavBarProps) {
  return (
    <div className="navbar__menu">
      <ul>
        {/* <li className="navbar__item nav-fade">
          < Link href="/" className="">
              <i className="fa-light fa-solid fa-home-lg"></i>
          </Link>
        </li> */}
        <li className="navbar__item nav-fade">
          <div className="navbar__options">
            <button
              className="open-offcanvas-nav d-flex"
              aria-label="toggle mobile menu"
              title="open offcanvas menu"
              onClick={handleNav}
            ></button>
          </div>
        </li>
        {/* <li className="navbar__item navbar__item--has-children nav-fade">
          <Link
            href="/dashboard"
            aria-label="dropdown menu"
            className="navbar__dropdown-label"
          >
            E-Learning
          </Link>
          <ul className="navbar__sub-menu">
            <li>
              <Link href="/gallery">AI Quizzes</Link>
            </li>
            <li>
              <Link href="/dashboard">Online Courses</Link>
            </li>
            <li>
              <Link href="/gallery">Coding Demos</Link>
            </li>
            <li>
              <Link href="/gallery">E-Book Library</Link>
            </li>
            <li>
              <Link href="/gallery">Blog Articles</Link>
            </li>
          </ul>
        </li>
        <li className="navbar__item navbar__item--has-children nav-fade">
          <Link
            href="/gallery"
            aria-label="dropdown menu"
            className="navbar__dropdown-label"
          >
            Digital Assets
          </Link>
          <ul className="navbar__sub-menu">
            <li className="navbar__item nav-fade">
              <Link href="/dashboard">AI Prompts</Link>
            </li>
            <li className="navbar__item nav-fade">
              <Link href="/dashboard">Code Samples</Link>
            </li>
            <li className="navbar__item nav-fade">
              <Link href="/dashboard">UI/UX Kits</Link>
            </li>
            <li className="navbar__item nav-fade">
              <Link href="/dashboard">Video Templates</Link>
            </li>
          </ul>
        </li>
        <li className="navbar__item navbar__item--has-children nav-fade">
          <Link
            href="/gallery"
            aria-label="dropdown menu"
            className="navbar__dropdown-label"
          >
            Members
          </Link>
          <ul className="navbar__sub-menu">
            <li className="navbar__item nav-fade">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar__item nav-fade">
              <Link href="/gallery">Messages</Link>
            </li>
          </ul>
        </li>
        <li className="navbar__item nav-fade">
          <Link href="/gallery">Settings</Link>
        </li>
        <li className="navbar__item navbar__item--has-children nav-fade">
          <Link
            href="/dashboard"
            aria-label="dropdown menu"
            className="navbar__dropdown-label"
          >
            About
          </Link>
          <ul className="navbar__sub-menu">
            <li className="navbar__item nav-fade">
              <Link href="/gallery">Contact</Link>
            </li> 
          </ul>
        </li> */}
      </ul>
    </div>
  );
}