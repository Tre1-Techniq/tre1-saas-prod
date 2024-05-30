import Image from "next/image";
import logo from "/public/images/logo.png";
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

  let logoSrc = logo;

  return (
    <>
      <div className="secondary--navbar bg-neutral-950 border-b border-[#313131]">
        <div className="px-20 w-full">
          <nav className="flex justify-between">
            <div className="flex justify-center">
              <a href="/" aria-label="go to home">
                <Image src={logoSrc} priority alt="Image" />
              </a>
            </div>
            <Navbar openNav={openNav} setOpenNav={setOpenNav} handleNav={handleNav} />
            <div className="flex items-center">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <div>
                  <UserButton />
                </div>
                <div className="text-sm">
                  {user?.firstName}
                </div>
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
