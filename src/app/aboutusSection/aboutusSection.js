import React from 'react';

const Aboutus = () => {
    return (
        <>
           <section className="aboutus-section position-relative" id='aboutus'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="image-banner">
                            <img src="assets/images/ludo-image.png" className='img-fluid' alt="hero images" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="content-wrapper">
                         <h2>About us</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Aboutus;
