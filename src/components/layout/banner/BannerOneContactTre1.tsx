"use client"

import React from "react";
import Image from "next/image";
import clientLatinaSad from "../../../../public/images/client-banner-latina-sad.jpg";

const BannerOneContactTre1 = () => {
  return (
    <section className="section-mt contact-m fade-wrapper">
        <div className="container">
            <div className="row gaper pb-0 team-det fade-wrapper">
                <div className="col-12">
                    <div className="team-det__info fade-top col-12">
                        <div className="case-intro">
                            <div className="group col-12 col-lg-7">
                                <Image src={clientLatinaSad} alt="Image" />
                            </div>
                            <div className="group col-12 col-lg-4">
                                <h5>
                                    <span>{" "}TECHNOLOGY CAN BE FRUSTRATING</span>
                                </h5>
                                <p>
                                    Dealing with high-tech issues can drain time, energy, and resources from your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BannerOneContactTre1;
