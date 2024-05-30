"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.png";
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(m, o, n, t, e, r, _) {
        m['__GetResponseAnalyticsObject'] = e;
        m[e] = m[e] || function() {
          (m[e].q = m[e].q || []).push(arguments)
        };
        r = o.createElement(n);
        _ = o.getElementsByTagName(n)[0];
        r.async = 1;
        r.src = t;
        r.setAttribute('crossorigin', 'use-credentials');
        _.parentNode.insertBefore(r, _)
      })(window, document, 'script', 'https://an.gr-wcon.com/script/153e051e-4ee4-429c-a53c-ddb55f58423c/ga.js', 'GrTracking');
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-row justify-center gap-24 h-full bg-neutral-900 bg-no-repeat py-12 px-20 mt-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <>
        <div className="flex w-1/4">
          <div className="">
            <Link href="/" className="pb-12">
              <Image src={logo} alt="Image" />
            </Link>
          <div className="footer__CTA pb-12 ">
            <Link href="https://www.upwork.com/ab/flservices/workwith/tre1techniq" target="_blank" className="btn btn--secondary">
              Send a Proposal
              <i className="fa-light fa-file-contract form-btn-icon"></i>
            </Link>
          </div>  
          <div className="social justify-content-center justify-content-lg-end">
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
          <div className="flex flext-start">
            <Link href="mailto:info@tre1techniq.com">
              <i className="fa-sharp fa-solid fa-envelope"></i>
              info@tre1techniq.com
            </Link>
          </div>
        </div>
      </div>


        {/* Footer Nav */}
          <div className="flex w-1/6 px-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5 className="text-xl text-primary font-bold pb-4 uppercase">Top Links</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/quiz">QuizMaster AI</Link>
                  </li>
                  <li>
                    <Link href="/tre1-u">Tre1 University</Link>
                  </li>
                  <li>
                    <Link href="/e-books">E-Book Library</Link>
                  </li>
                  <li>
                    <Link href="/about-tre1">About Tre1</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-1/6 px-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5 className="text-xl text-primary font-bold pb-4 uppercase">Affiliates</h5>
                <div className="footer__single-content flex">
                  <ul>
                    <li>
                      <Link href="https://www.getresponse.com?a=QexKgVR7cW" target="_blank">GetResponse</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Footer CTA */}
          <div className="flex flex-wrap">
            {/* <getresponse-form form-id="ae2c9dae-2b9d-42df-a9f5-db65db531810" e="1"></getresponse-form> */}
          </div>
        </>


        {/* Footer Copyright */}
        <div className="grid px-12 w-screen">
          <div className="col-12 col-lg-8">
            <div className="footer__copyright-text text-center text-lg-start">
              <p>
                Copyright &copy;
                <span id="copyYear">{currentYear}</span> Tre1 Techniq{" "}
                . All Rights Reserved
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
