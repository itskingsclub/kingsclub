import React from "react";
import Header from "../CommenSection/Header";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section className="hero-section">
                <Header />
                <div className="container hero_top">
                    <div className="row gy-3 gy-md-5">
                        <div className="col-lg-6 col-md-7 d-flex align-items-center justify-content-start justify-content-md-center justify-content-start">
                            <div className="hero-content">
                                <div className="hero-top">
                                    <div className="icon">
                                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.08683 17.257L11.4525 20.3539V14.1558L6.08255 11.059V17.257H6.08683ZM3.77444 18.589L11.4525 23.0179V27.3749L0 20.7671V7.54716L3.77444 9.7261V18.589ZM12 7.00905L6.6352 10.1094L12 13.2062L17.3648 10.1094L12 7.01248V7.00905ZM12 4.34847L18.4564 8.08783L22.2308 5.90889L12 0L0.562914 6.60355L4.33649 8.77736L12 4.34847ZM20.2204 18.589V14.0848L17.9132 15.4168V17.257L12.5475 20.3582V14.1601L24 7.55229V20.7679L12.5475 27.3801V23.0273L20.2204 18.589Z" fill="white" />
                                        </svg>
                                    </div>
                                    <h3>Play ludo & Win Real Money</h3>
                                </div>
                                {/* <img src="assets/images/hero-content.png" className='img-fluid hero-content-img' alt="hero-content" /> */}
                                <div>
                                    <pre>
                                        <h1 className="text-right">
                                            Play More <br />
                                            &nbsp; &nbsp; &nbsp; <span>&</span>  <br />
                                            Earn  More
                                        </h1>
                                    </pre>
                                </div>
                                <Link href="kingsclub.apk"> <button className="main-btn yellow-btn download-button">
                                    <img src="assets/images/anroid-icon.gif" alt="anroid-icon" />{" "}
                                    Download App
                                </button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 d-flex align-items-center justify-content-center justify-content-start">
                            <div className="image-banner">
                                <img
                                    src="assets/images/hero-img.png"
                                    className="img-fluid"
                                    alt="hero images"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
