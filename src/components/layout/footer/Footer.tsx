"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo-wht.png";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="justify-center gap-12 h-full bg-neutral-900 bg-no-repeat bg-cover mt-0 ml-0 border-t"
      style={{ backgroundImage: "url('/images/footer/footer-bg-2.png')" }}
    >
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-4 gap-12 p-10 text-center sm:text-left">
        {/* Footer CTA */}
        <div className="">
          <h5 className="pb-4 text-xl text-primary font-bold uppercase">Tre1 Mailing List</h5>
          {/* <getresponse-form form-id="ae2c9dae-2b9d-42df-a9f5-db65db531810" e="1"></getresponse-form> */}
        </div>


        {/* Footer Nav */}
          <div className="grid-cols-1 gap-4">
              <h5 className="pb-4 text-xl text-primary font-bold uppercase">Top Links</h5>
            <div>
              <ul className="grid gap-4">
                <li className="hover:text-primary">
                  <Link href="/quiz">QuizMaster AI</Link>
                </li>
                <li className="hover:text-primary">
                  <Link href="/tre1-u">Tre1 University</Link>
                </li>
                <li className="hover:text-primary">
                  <Link href="/e-books">eBook Library</Link>
                </li>
                <li className="hover:text-primary">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid-cols-1 gap-4">
            <h5 className="pb-4 text-xl text-primary font-bold uppercase">Affiliates</h5>
            <div>
              <ul>
                <li className="hover:text-primary">
                  <Link href="https://www.getresponse.com?a=QexKgVR7cW" target="_blank">GetResponse</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="flex">
            <div className="flex flex-wrap justify-center sm:justify-left">
              <div className="">
                <Link href="/" className="pb-12">
                  <Image src={logo} alt="Image" />
                </Link>
              </div>
              <div className="">
                <div className="flex flex-row justify-start">
                  <Link
                      href="https://www.instagram.com/tre1.techniq/" 
                      target="_blank"
                      aria-label="follow me on instagram"
                      >
                    <Instagram className="text-accent hover:text-primary w-[40px] h-[40px] mx-4 align-center" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCL8Nem5gkFZy2qqol8e3VmA?sub_confirmation=1"
                    target="_blank"
                    aria-label="subscribe on youtube"
                  >
                    <Youtube className="text-accent hover:text-primary w-[40px] h-[40px] mx-4 align-center" />
                  </Link>
                  <Link
                    href="https://twitter.com/Tre1_Techniq"
                    target="_blank"
                    aria-label="follow me on x"
                  >
                    <Twitter className="text-accent hover:text-primary w-[40px] h-[40px] mx-4 align-center" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

           {/* Footer Copyright */}
          <div>
            <p className="text-sm">
              Copyright &copy;
              <span id="copyYear">{currentYear}</span> Tre1 Techniq<br/>
              All Rights Reserved
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
