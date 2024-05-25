import React from "react";
import Link from "next/link";

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
}

const BannerDevLabDetails = ({ title, navigation, parent, parentLink }: BannerProps) => {
  return (
    <>
      <section
        className="devlab-banner bg-img"
        style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.jpg')" }}
      >
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-5 col-xl-7">
              <div className="text-center text-lg-start">
                <h2 className="title title-anim">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/devlab">
                        <i className="fa-solid fa-backward"></i>
                        Back to DevLab
                      </Link>
                    </li>
                    {parent && (
                      <li className="breadcrumb-item">
                        <Link href={parentLink}>{parent}</Link>
                      </li>
                    )}
                    <li className="breadcrumb-item active" aria-current="page">
                      {navigation}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="justify-content-end text-lg-end mb-3">
                <p className="primary-text-primary">
                  Browse More Posts
                </p>
              </div>
              <div className="slide-group justify-content-center justify-content-lg-end">
                <Link
                  href="devlab"
                  aria-label="previous post"
                  className="slide-btn "
                >
                  <i className="fa-light fa-angle-left"></i>
                </Link>
                <Link
                  href="devlab"
                  aria-label="next post"
                  className="slide-btn"
                >
                  <i className="fa-light fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerDevLabDetails;
