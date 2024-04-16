"use client";

import React, { useEffect, useState } from "react";
import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";
import { getCancationContent } from "../service/apicalls";

export default function Page() {
    const [cancelData, setCancelData] = useState({})
    const cancelationData = {
        "cancellationPolicy": {
            "title": "Cancellation Policy",
            "content": [
                "For cancellations, please contact us via WhatsApp or email: help.kingsclub@gmail.com",
                "Requests received later than 2 business days before the scheduled match will be considered cancellations for the next match."
            ]
        },
        "themePlayerRefunds": {
            "title": "Theme Player or Fresh ID Player Refunds",
            "content": [
                "If you join a match as a Theme player or play with a Theme/Fresh ID player, our refund policy applies as follows:",
                "Cancellation within 10% of Gameplay: If you cancel the game after playing less than 10% of the total duration, you will receive a 50% refund (entry fee).",
                "Cancellation after 10% of Gameplay: If you cancel after playing more than 10% of the duration, the losing player will forfeit the entry fee, and the winning player will receive only 50% of the total win amount."
            ]
        },
        "fairPlaySportsmanship": {
            "title": "Fair Play and Sportsmanship",
            "content": [
                "Foul Language and Slang: Using any kind of foul language or slang towards your opponent without a valid reason will result in game cancellation and a potential fine (no refunds in such cases).",
                "Slow Play: Playing excessively slow without justification will lead to a game loss. If you have a valid reason for slow play (requires verification), the game may be canceled after 30 minutes from the start."
            ]
        },
        "inappropriateContent": {
            "title": "Inappropriate Content",
            "content": [
                "Uploading a profile picture with nudity is strictly prohibited. Doing so will result in a permanent account suspension."
            ]
        },
        "tournamentTimeLimits": {
            "title": "Tournament Time Limits",
            "content": [
                "In tournament matches, exceeding the 15-minute time limit may lead to match cancellation without a refund."
            ]
        }
    }
    const refundData = {
        "RefundPolicy": {
            "title": "Refund Policy",
            "content": [
                "KingsClub strives for customer satisfaction. We may offer refunds on a case-by-case basis for genuine reasons verified through investigation. Here's an overview of our refund policy."
            ]
        },
        "GeneralPolicy": {
            "title": "General Policy",
            "content": [
                "Refunds are not guaranteed and will be evaluated based on the specific situation."
            ]
        },
        "ScenariosforRefunds:": {
            "title": "Scenarios for Refunds:",
            "content": [
                "Cancellation within Allowed Window (see Cancellation Policy): Refer to the Cancellation Policy section for details on eligible cancellation windows and partial refunds based on gameplay progress (Theme/Fresh ID players).",
                "Technical Issues: If technical issues prevent you from playing the game.",
                "Rule Violations by Opponent (with Proof): If your opponent violates game rules and you can provide valid proof."

            ]
        },
        "Non-RefundableSituations": {
            "title": "Non-Refundable Situations",
            "content": [
                "Delays in uploading results during zero commission hours (if applicable), using foul language, playing excessively slow without justification, uploading inappropriate profile pictures, or exceeding tournament time limits may lead to match cancellation and no refunds will be issued in these cases."
            ]
        },
        "LateorMissingRefunds": {
            "title": "Late or Missing Refunds",
            "content": [
                "If you haven't received a refund after a reasonable timeframe (usually determined by your bank's processing time), please check your bank statement first. If the issue persists, contact us at help.kingsclub@gmail.com for further assistance"
            ]
        },
    }

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
    useEffect(() => {
        getContent()
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
