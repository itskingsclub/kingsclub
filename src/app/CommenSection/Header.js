"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();


  const toggleclick = () => {
    setShow(!show);
  };


  const handleDocumentClick = event => {
    if (!event.target.closest(".header-menu, .togglebtn")) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <header className="header header-transprent">
        <nav className="navbar">
          <div className="container position-relative">
            <Link href="/" className="navbar-brnad d-md-none" data-aos="fade-right">
              <img src="assets/images/logo.png" className="img-fluid header-logo" alt="Hrms" />
            </Link>
            <div className={`header-menu w-100 ${show === true ? "active" : ""} `}>
              <ul className="navbar-nav mx-auto ml-auto flex-row justify-content-around align-items-center">
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="300">
                  <Link href="/" className={`header header-transprent ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="450">
                  <Link href="#features" className={`header header-transprent ${pathname.startsWith('/feature') ? 'active' : ''}`} >Features</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="600">
                  <Link href="#aboutus" className={`header header-transprent ${pathname.startsWith('/aboutus') ? 'active' : ''}`}>ABOUT US</Link>
                </li>
                <li className="nav-item d-none d-md-block" data-aos="fade-down-right" data-aos-delay="600">
                  <Link href="/" className="navbar-brnad" data-aos="fade-right">
                    <img src="assets/images/logo.png" className="img-fluid header-logo" alt="Hrms" />
                  </Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="750">
                  <Link href="#footer" className={`header header-transprent ${pathname.startsWith('/contactus') ? 'active' : ''}`}>Contact Us</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="900">
                  <Link href="#faq" className={`header header-transprent ${pathname.startsWith('/contact') ? 'active' : ''}`}>Faqs</Link>
                </li>
                <li className="nav-item d-none d-md-block" data-aos="fade-down-right" data-aos-delay="900">
                  <Link href="kingsclub.apk"> <button className="main-btn yellow-btn">Download App</button></Link>
                </li>
              </ul>
            </div>
            <div className='d-md-none d-flex'>
              <button className="main-btn yellow-btn">Download App</button>
              <button className="togglebtn main-btn yellow-btn " onClick={() => toggleclick()} >
                {show === true ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa fa-bars" aria-hidden="true"></i>)}
              </button>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1316" height="39" viewBox="0 0 1316 39" fill="none">
  <path d="M0 1H588.824C593.623 1 598.311 2.43857 602.284 5.12995L644.54 33.7544C652.668 39.261 663.332 39.261 671.46 33.7544L713.716 5.12995C717.689 2.43857 722.377 1 727.176 1H1316" stroke="url(#paint0_linear_3_468)"/>
  <defs>
    <linearGradient id="paint0_linear_3_468" x1="1316" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0"/>
      <stop offset="0.494792" stop-color="white" stop-opacity="0.6"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
