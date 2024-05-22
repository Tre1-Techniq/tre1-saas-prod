/** @format */
"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

// Dynamic import for Clerk components
const SignInButton = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignInButton), { ssr: false });
const SignedIn = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignedIn), { ssr: false });
const SignedOut = dynamic(() => import("@clerk/nextjs").then(mod => mod.SignedOut), { ssr: false });
const UserButton = dynamic(() => import("@clerk/nextjs").then(mod => mod.UserButton), { ssr: false });

type NavItemType = {
  label: string;
  link?: string;
  children?: NavItemType[];
  iconImage?: string;
};

const navItems: NavItemType[] = [
  {
    label: "E-Learning",
    link: "/gallery",
    children: [
      { label: "AI Quizzes", link: "/gallery" },
      { label: "Courses", link: "/gallery" },
      { label: "Tutorials", link: "/gallery" },
      { label: "E-Books", link: "/gallery" },
    ],
  },
  {
    label: "Templates",
    link: "#",
    children: [
      { label: "Codebase", link: "#" },
      { label: "Videos", link: "#" },
      { label: "Graphics", link: "#" },
      { label: "Marketing", link: "#" },
    ],
  },
  {
    label: "Services",
    link: "#",
    children: [
      { label: "Branding", link: "#" },
      { label: "UI/UX Design", link: "#" },
      { label: "Development", link: "#" },
      { label: "Production", link: "#" },
    ],
  },
  {
    label: "Members",
    link: "#",
    children: [
      { label: "Dashboard", link: "#" },
      { label: "Groups", link: "#" },
      { label: "Messages", link: "#" },
      { label: "Settings", link: "#" },
    ],
    
  },
];

function NavItem({ item }: { item: NavItemType }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="relative group px-4 py-3 transition-all"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={toggleOpen}
    >
      <p className="flex cursor-pointer items-center gap-2 text-gray-100 hover:text-cyan-400">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`} />}
      </p>
      {item.children && isOpen && (
        <div className="absolute right-0 top-12 flex flex-col gap-1 border bg-gray-900 py-5 shadow-md transition-all">
          {item.children.map((child, i) => (
            <Link key={i} href={child.link ?? "#"} className="flex items-center py-1 pl-6 pr-8 text-lg text-cyan-400 hover:text-gray-100">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav({ closeSideMenu, isSideMenuOpen }: { closeSideMenu: () => void, isSideMenuOpen: boolean }) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Close the side menu when a link is selected
  const handleLinkClick = () => {
    closeSideMenu();
  };

  const { user } = useUser();

  return (
    <div className={`fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden transition-all duration-300 ${isSideMenuOpen ? "fixed-left" : ""}`}>
      <div className="h-full w-[70%] bg-gray-800 border-l px-6 py-6 transform transition-transform duration-500 ease-in-out">
        <section className="flex justify-end mb-12">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-3xl" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => toggleItem(i)}
                className="flex justify-between items-center py-2 px-4 cursor-pointer bg-gray-900 hover:bg-gray-700"
              >
                <span>{item.label}</span>
                {item.children && (
                  <IoIosArrowDown className={`transition-transform ${openItems[i] ? "rotate-0" : "rotate-180"}`} />
                )}
              </div>
              {openItems[i] && item.children && (
                <div className="flex flex-col gap-1 pl-6">
                  {item.children.map((child, j) => (
                    <Link onClick={handleLinkClick} key={j} href={child.link as string} className="flex items-center py-1 text-neutral-400 hover:text-black">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="flex flex-col gap-8 mt-12 items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
            {user?.firstName}
          </SignedIn>
        </section>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { user } = useUser();

  const [isSideMenuOpen, setSideMenu] = useState(false);

  const openSideMenu = () => setSideMenu(true);
  const closeSideMenu = () => setSideMenu(false);

  return (
    <div className="sticky top-0 z-50 mx-auto flex w-full border-b justify-between px-20 py-6 text-lg uppercase">
      <section className="flex items-center gap-10">
        <div className="flex cursor-pointer items-center mr-10">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
      </section>

      <section className="hidden md:flex items-center gap-6 transition-all">
        {navItems.map((item, i) => (
          <NavItem key={i} item={item} />
        ))}
      </section>

      <section className="hidden md:flex items-center gap-8">
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
      </section>

      <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />

      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} isSideMenuOpen={isSideMenuOpen} />}
    </div>
  );
}