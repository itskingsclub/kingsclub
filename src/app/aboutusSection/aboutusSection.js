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
                                <p>At KingsClub, we love games that bring people together. Our app lets you play Ludo with friends and win real money! We've worked hard to make it fair and fun for everyone. Join us at KingsClub and enjoy gaming that rewards you!</p>
                                <p> we believe in the power of play. Our mission is to make gaming not just entertaining but rewarding too. With our app, you can dive into thrilling Ludo challenges, compete with friends, and win exciting cash prizes. We are committed to creating a platform that is fair, secure, and accessible to everyone. Whether you're a casual player or a seasoned gamer, KingsClub welcomes you to a world of fun and rewards. Join us today and let's play, compete, and win together!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Aboutus;
