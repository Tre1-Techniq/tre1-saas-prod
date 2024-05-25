"use client"

import React, { Fragment, useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google'
import gsap from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import Header from '../Header';
import Footer from '../layout/footer/Footer';
import VideoModal from '../layout/VideoModal';
import ScrollProgressBtn from '../layout/ScrollProgressBtn';
import SplitType from 'split-type';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// font awesome 6
import '@/public/icons/font-awesome/css/all.css';

// custom icons
import '@/public/icons/glyphter/css/xpovio.css';

// main scss
import '../styles/main/main.scss';

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  video?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, video }: LayoutProps) => {

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
    <Fragment>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />   
          {/* Get Response Web Connect Script */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(m, o, n, t, e, r, _){
                m['__GetResponseAnalyticsObject'] = e;m[e] = m[e] || function() {(m[e].q = m[e].q || []).push(arguments)};
                r = o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async = 1;r.src = t;r.setAttribute('crossorigin', 'use-credentials');_.parentNode .insertBefore(r, _);
            })(window, document, 'script', 'https://an.gr-wcon.com/script/153e051e-4ee4-429c-a53c-ddb55f58423c/ga.js', 'GrTracking');
              `,
            }}
          /> */}
          {/* Get Response Web Connect Script */}
        </head>
        <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/gtag/js?id=G-4HFY92S3VP"
        height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <div className="body-active">
            <Header openNav={openNav} handleNav={handleNav} setOpenNav={setOpenNav} />
            {/* Google tag (gtag.js) */}
            <GoogleTagManager gtmId='G-4HFY92S3VP' />
            <main>{children}</main>
            <Footer />
            {video ? <VideoModal /> : null}
            <ScrollProgressBtn />
          </div>
        </body>
      </html>
    </Fragment>
  );
};

export default Layout
