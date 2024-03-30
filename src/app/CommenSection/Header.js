"use client"
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation'
import { AuthContext } from '../auth-provider';

const Header = () => {
  const [show, setShow] = useState(false);
  const { userData, setUserData } = useContext(AuthContext);
  const pathname = usePathname();

  const toggleclick = () => {
    setShow(!show);
  };
  console.log("userdata id", userData)

  if (userData) {
    console.log("userdata id", userData)
  } else {
    console.log("userdata id", userData)
  }


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
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <header className="header header-transprent">
        <nav className="navbar">
          <div className="container position-relative d-flex">
            <Link href="/" className="navbar-brnad" data-aos="fade-right">
              <img src="assets/images/logo.png" className="img-fluid header-logo" alt="Hrms" />
            </Link>
            <div className={`header-menu ${show === true ? "active" : ""} `}>
              <ul className="navbar-nav mx-auto ml-auto flex-row gap-3 gap-md-4 gap-lg-5 justify-content-around align-items-center">
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="300">
                  <Link href="/" className={`header header-transprent ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="450">
                  <Link href="#features" className={`header header-transprent ${pathname.startsWith('/feature') ? 'active' : ''}`} >Features</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="600">
                  <Link href="#aboutus" className={`header header-transprent ${pathname.startsWith('/aboutus') ? 'active' : ''}`}>ABOUT US</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="750">
                  <Link href="#footer" className={`header header-transprent ${pathname.startsWith('/contactus') ? 'active' : ''}`}>Contact Us</Link>
                </li>
                <li className="nav-item" data-aos="fade-down-right" data-aos-delay="900">
                  <Link href="#faq" className={`header header-transprent ${pathname.startsWith('/contact') ? 'active' : ''}`}>Faqs</Link>
                </li>
                {userData == null ? <li className="nav-item" data-aos="fade-down-right" data-aos-delay="900">
                  <Link href="/register" className="main-btn yellow-btn">register</Link>
                </li> :
                  <li className="nav-item" data-aos="fade-down-right" data-aos-delay="900">
                    <button onClick={() => logout()} className="main-btn yellow-btn">Log Out</button>
                  </li>}
                <li className="nav-item d-none d-md-block" data-aos="fade-down-right" data-aos-delay="900">
                  <Link href="kingsclub.apk"> <button className="main-btn yellow-btn">Download App</button></Link>
                </li>
              </ul>
            </div>
            <div className='d-md-none d-flex'>
              <Link href="kingsclub.apk"><button className="main-btn yellow-btn">Download App</button></Link>
              <button className="togglebtn main-btn yellow-btn " onClick={() => toggleclick()} >
                {show === true ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa fa-bars" aria-hidden="true"></i>)}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
