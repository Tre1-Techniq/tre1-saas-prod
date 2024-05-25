"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import membersBannerThumb from "/public/images/banner/tre1-exchange-banner.png";
import star from "/public/images/star.png";

gsap.registerPlugin(ScrollTrigger);
const TutorialsHomeBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  chart
                  <span className="text-stroke-secondary"> your</span>
                </h1>
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                <span className="interval">
                    <i className="fa-solid fa-sailboat"></i> course
                  </span>
                </h1>
                <div className="members-banner__content-inner">
                  <p>
                    Browse our E-Learning Course Library and find your subject matter. Study at your own pace and choose your own level of difficulty. Save your progress, go run a few errands, then hustle back and pick up right where you left off. 
                  </p>
                  <div className="banner-cta">
                    <div>
                      <Link className="btn btn--secondary-rev" href="#">
                        <i className="fa-solid fa-user-graduate btn-icon"></i>
                        Set Your Own Pace&#33;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={membersBannerThumb}
          alt="Image"
          className="members-banner-thumb d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          {/* <Link href="mailto:info@tre1techniq.com">email : info@tre1techniq.com</Link>
          <Link href="tel:1-949-371-6511">mobile : (949) 371-6511</Link> */}
          <p>follow Tre1 Techniq on social media</p>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link
              href="https://www.instagram.com/tre1.techniq/" 
              target="_blank"
              aria-label="follow me on instagram"
              >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCL8Nem5gkFZy2qqol8e3VmA?sub_confirmation=1"
            target="_blank"
            aria-label="subscribe on youtube"
          >
            <i className="fa-brands fa-square-youtube"></i>
          </Link>
          <Link
            href="https://twitter.com/Tre1_Techniq"
            target="_blank"
            aria-label="follow me on x"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  );
};

export default TutorialsHomeBanner;
