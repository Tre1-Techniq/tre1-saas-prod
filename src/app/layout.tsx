"use client"

import React, { useEffect, useState } from 'react';

// font awesome 6
import '../../public/icons/font-awesome/css/all.css';

// main scss
import '../styles/main/main.scss';

import '../styles/globals.css';


import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes';

import { Montserrat } from "next/font/google";

import Footer from '~/components/layout/footer/Footer';
import Header from '~/components/layout/header/Header';
import ScrollProgressBtn from '~/components/layout/ScrollProgressBtn';
import gsap from 'gsap';
import SplitType from 'split-type';
import VanillaTilt from 'vanilla-tilt';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.topy-tilt');

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll('.appear-down');

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom center',
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const myText = new SplitType('.title-anim');
      const titleAnims = document.querySelectorAll('.title-anim');

      titleAnims.forEach((titleAnim) => {
        const charElements = titleAnim.querySelectorAll('.char');

        charElements.forEach((char, index) => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: char,
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none',
            },
          });

          const charDelay = index * 0.03;

          tl2.from(char, {
            duration: 0.8,
            x: 70,
            delay: charDelay,
            autoAlpha: 0,
          });
        });
      });
    }
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism]
      }}
    >
      <html lang="en">
        <body className={`${montserrat.className} bg-neutral-950 py-0 flex flex-col`}>
          <div><Header openNav={openNav} handleNav={handleNav} setOpenNav={setOpenNav} /></div>
          <main className="bg-neutral-900">
            <div>
              {children}
            </div>
          </main>
          <div >
            <Footer />
            <ScrollProgressBtn />
          </div>
        </body>
      </html>
  </ClerkProvider>
  );
}