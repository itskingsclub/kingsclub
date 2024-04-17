"use client";

import React, { useEffect, useState } from "react";
import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";
import { getCancationContent, getRefundDataContent } from "../service/apicalls";

export default function Page() {
    const [cancelData, setCancelData] = useState({})
    const [refundData, setRefundData] = useState({})

    const getContent = async (e) => {
        await getCancationContent()
            .then((res) => {
                if (res.success) {
                    console.log("res", res)
                    setCancelData(res?.data)
                } else {
                    console.log("err", res)
                }
            })
    }
    const getContent2 = async (e) => {
        await getRefundDataContent()
            .then((res) => {
                if (res.success) {
                    console.log("res", res)
                    setCancelData(res?.data)
                } else {
                    console.log("err", res)
                }
            })
    }
    useEffect(() => {
        getContent()
        getContent2()
    }, [])


    return (
        <>
            <Header />
            <section className="feature-section position-relative" id='features'>
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Gambling Policy</h2>
                        <p >Comprehensive Terms and Conditions for Kingsclub App: Ensuring Legal Compliance, User Responsibilities, and Risk Management</p>
                    </div>
                    <div className="content_container mt-5">
                        {Object.keys(cancelData).map((sectionKey, i) => {
                            const section = cancelData[sectionKey];
                            return (
                                <div key={i}>
                                    <div className="content_heading"><h5>{section.title}</h5></div>
                                    {section.content.map((subsections, j) => (
                                        <div key={j} className="content_detail">
                                            {Array.isArray(subsections) ? (
                                                <ul>
                                                    {subsections.map((item, k) => (
                                                        <li key={k}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{subsections}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                    <div className="content_container mt-5">
                        {Object.keys(refundData).map((sectionKey, i) => {
                            const section = refundData[sectionKey];
                            return (
                                <div key={i}>
                                    <div className="content_heading"><h5>{section.title}</h5></div>
                                    {section.content.map((subsections, j) => (
                                        <div key={j} className="content_detail">
                                            {Array.isArray(subsections) ? (
                                                <ul>
                                                    {subsections.map((item, k) => (
                                                        <li key={k}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{j + 1 + "." + " "} {subsections}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}
