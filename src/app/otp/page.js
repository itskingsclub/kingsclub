"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";
import { verifyotpApi } from "../service/apicalls";
import { useRouter } from "next/navigation";

const Page = ({ length = 4, onOtpSubmit = () => {} }) => {
  const { push } = useRouter();
  const mobileNumber = localStorage.getItem("mobileNumber");
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  useEffect(() => {
    console.log("object", otp.join("").length);
    if (otp.join("").length == 4) {
      otpSubmit(); // Call otpSubmit function when all digits are entered
    }
  }, [otp]);
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };
  const otpSubmit = async () => {
    setLoading(true);
    const data = {
      mobile: mobileNumber, // Assuming mobileNumber is defined somewhere in your component
      pin: otp.join(""), // Join the OTP digits into a single string
    };
    await verifyotpApi(data).then((res) => {
      setLoading(false);
      console.log("res", res);
      if (res.success === true) {
        console.log("true", res.data);
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        push("/");
        toast.success(res?.message);
      } else {
        toast.error(res.message);
      }
    });
  };
  return (
    <>
      {loading ? (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
                  <h2 className="mb-3">Enter Otp</h2>
                </div>
                <div className="row mt-5 pe-0 pe-md-5 pe-lg-3" action="true">
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      {otp.map((value, index) => {
                        return (
                          <>
                            <div className="otp-input">
                              <input
                                key={index}
                                type="text"
                                ref={(input) =>
                                  (inputRefs.current[index] = input)
                                }
                                value={value}
                                onChange={(e) => handleChange(index, e)}
                                onClick={() => handleClick(index)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-box">
                      <input
                        type="submit"
                        className="btn w-100 mt-4 main-btn yellow-btn"
                        value={"Submit"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-end align-items-center mt-5 mt-md-0">
              <div className="banner-image">
                <img
                  src="assets/images/register.png"
                  alt="register-banner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
