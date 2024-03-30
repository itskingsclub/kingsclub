"use client"
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../CommenSection/Header';
import Footer from '../CommenSection/footer';
import { useSearchParams } from 'next/navigation'
import { registerApi } from '../service/apicalls';
import { useRouter } from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams();
    const { push } = useRouter();
    const referalcode = searchParams.get('referalcode')
    console.log("referalcode", referalcode, searchParams)
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        fullName: { value: "", error: "" },
        emailAddress: { value: "", error: "" },
        mobileNumber: { value: "", error: "" },
        referralCode: { value: referalcode || "", error: "" },
    });
    const handleInputChange = (fieldName, value) => {
        // Regex patterns for validation
        const regexPatterns = {
            fullName: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
            emailAddress: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mobileNumber: /^[0-9]{10}$/,
            referralCode: /^[a-zA-Z0-9]*$/,
        };

        // Check if the value matches the regex pattern
        const isValid = regexPatterns[fieldName].test(value);

        setUser((prevUser) => ({
            ...prevUser,
            [fieldName]: {
                value,
                error: isValid ? "" : `Invalid ${fieldName}`,
            },
        }));
    };


    const submitForm = async (e) => {
        e.preventDefault();
        const allFields = Object.keys(user).map((key) => user[key].error);
        if (allFields.some((error) => error !== "")) {
            return;
        }
        setLoading(true);
        const data = {
            name: user.fullName.value,
            mobile: user.mobileNumber.value,
            email: user.emailAddress.value,
            referral_code: user.referralCode.value,
        };
        await registerApi(data)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("mobileNumber", data.mobile);
                    toast.info(res?.message)
                    console.log(res?.message)
                    push('/otp');
                } else {
                    console.log(res?.message)
                    toast.error(res?.message)
                }
                setLoading(false);
            })
    }

    return (
        <>
            {loading ? (
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ) : (
                ""
            )}
            <Header />
            <section className="register-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-6 d-flex align-items-center">
                            <div className="register-content">
                                <div className="heading text-center">
                                    <h2 className='mb-3'>Create Account</h2>
                                </div>
                                <div className="row mt-5 pe-0 pe-md-5 pe-lg-3" action="true">
                                    <div className="col-12">
                                        <div className="form-box">
                                            <label htmlFor="Name">Name</label>
                                            <input type="text" name='fullname' value={user.fullName.value} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder='Enter your full name' />
                                            <p style={{ color: "red" }}>{user.fullName.error}</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-box">
                                            <label htmlFor="Name">Mobile Number</label>
                                            <input type="text" name='mobileNumber' value={user.mobileNumber.value} onChange={(e) => handleInputChange("mobileNumber", e.target.value)} placeholder='Enter your full name' />
                                            <p style={{ color: "red" }}>{user.mobileNumber.error}</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-box">
                                            <label htmlFor="Name">Email Address</label>
                                            <input type="text" name='emailAddress' value={user.emailAddress.value} onChange={(e) => handleInputChange("emailAddress", e.target.value)} placeholder='Enter your Email Address' />
                                            <p style={{ color: "red" }}>{user.emailAddress.error}</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-box">
                                            <label htmlFor="Name">Referral Code</label>
                                            <input type="text" name='referralCode' value={user.referralCode.value} onChange={(e) => handleInputChange("referralCode", e.target.value)} placeholder='Enter Referral COde' />
                                            <p style={{ color: "red" }}>{user.referralCode.error}</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-box">
                                            <input type="submit" disabled={
                                                user.fullName.value == "" ||
                                                user.mobileNumber.value == "" ||
                                                user.fullName.error !== "" ||
                                                user.mobileNumber.error !== "" ||
                                                user.emailAddress.error !== ""
                                            } onClick={submitForm} className='btn w-100 mt-4 main-btn yellow-btn' value={'Create Account'} />
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <p className='link-p'>Already have an account? <a href="/login"> Log in </a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-end align-items-center mt-5 mt-md-0">
                            <div className="banner-image">
                                <img src="assets/images/register.png" alt="register-banner" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;
