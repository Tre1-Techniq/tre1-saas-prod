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
      </ul>
    </div>
  );
}