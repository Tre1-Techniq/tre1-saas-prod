import Link from "next/link";

interface NavBarProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

export default function Navbar({ openNav, handleNav, setOpenNav }: NavBarProps) {
  return (
    <div className="flex flex-row justfiy-between">
      <ul>
        <li className="navbar__item nav-fade">
          <div className="navbar__options">
            <button
              className="open-offcanvas-nav text-center"
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