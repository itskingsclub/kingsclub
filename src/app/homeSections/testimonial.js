"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <>
            <section className="aboutus-section position-relative m-0" id='aboutus'>
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>What Our User’s Say About Us</h2>
                        <p >Our users have been achieving remarkable success with KingsClub, both in terms of earnings and positive feedback. Many have shared their experiences of earning substantial rewards through challenges, referrals, and special offers. The overwhelming positive feedback reflects the satisfaction and excitement our app brings to their gaming experiences. Join the growing community of successful players at KingsClub and start earning while having a blast gaming </p>
                    </div>
                    <Swiper className='swiper testimonial'
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className='main-content'>KingsClub ne mere gaming experience ko ek naya mod diya hai. Challenges create karna, friends ko invite karna, aur rewards jeetna, sab kuch easy aur exciting hai. KingsClub ki team ka support bhi bahut helpful hai</p>
                                <div className="testimonial-box">
                                    <div className="user-detail text-end">
                                        <h3>Ramesh Kumar</h3>
                                        <p>Kota</p>
                                    </div>
                                    <div className="user-img">
                                        <img src="assets/images/male2.jpg" className='img-flui' alt="user image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className='main-content'>KingsClub ka wallet system bahut smooth hai. Paise add karna aur withdraw karna, dono hi bina kisi pareshani ke hota hai. Mera gaming experience isse aur bhi better ho gaya hai </p>
                                <div className="testimonial-box">
                                    <div className="user-detail text-end">
                                        <h3>Priya Singh</h3>
                                        <p>Delhi</p>
                                    </div>
                                    <div className="user-img">
                                        <img src="assets/images/male1.jpg" className='img-flui' alt="user image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className='main-content'>KingsClub ka leaderboard mujhe motivate karta hai har challenge mein top position lene ke liye. Game play fair hai aur rewards bhi achhe milte hain. or me ab tak 50000 rupay earn kar chuka hu </p>
                                <div className="testimonial-box">
                                    <div className="user-detail text-end">
                                        <h3>Sunil Choudhary</h3>
                                        <p>Jaipur</p>
                                    </div>
                                    <div className="user-img">
                                        <img src="assets/images/male3.jpg" className='img-flui' alt="user image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className='main-content'>KingsClub ka 24/7 support system bahut accha hai. Har samasya ka turant samadhan milta hai aur app ka use karna bahut easy hai or  mujhe ek naya gaming community mein shamil hone ka mauka diya hai. Har challenge ek naya adventure hai aur rewards jeetne ka excitement unbeatable hai. </p>
                                <div className="testimonial-box">
                                    <div className="user-detail text-end">
                                        <h3>Rajesh Tiwari</h3>
                                        <p>Up</p>
                                    </div>
                                    <div className="user-img">
                                        <img src="assets/images/male4.jpg" className='img-flui' alt="user image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className='main-content'>KingsClub ki user interface itni user-friendly hai ki koi bhi, chahe wo beginner ho ya pro, app ka istemal kar sakta hai aur gaming ka maza le sakta hai. KingsClub ka referral program se mujhy alag se eaning hoti jab mere freinds koi bhi game play krty hai jab</p>
                                <div className="testimonial-box">
                                    <div className="user-detail text-end">
                                        <h3>Deepak roa Singh</h3>
                                        <p>Udaipur</p>
                                    </div>
                                    <div className="user-img">
                                        <img src="assets/images/male5.jpg" className='img-flui' alt="user image" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonial;
