import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";

export default function Page() {
    const policyData = {
        "terms_and_conditions": {
            "title": "Terms and Conditions",
            "sections": [
                {
                    "title": "Player's Age Requirement",
                    "content": "Players must be 18 years of age or older to participate. Players from the following states are not permitted to play: Assam, Telangana, Odisha, Nagaland, Andhra Pradesh, Tamil Nadu. This requirement ensures compliance with legal regulations and promotes responsible gaming practices."
                },
                {
                    "title": "Definitions",
                    "content": "In these terms, the terms 'We,' 'Us,' 'Our,' 'Company' individually and collectively refer to UNIBIT App by Unibit. On the other hand, the terms 'Visitor' and 'User' refer specifically to individuals using our website and mobile application."
                },
                {
                    "title": "Acceptance of Terms",
                    "content": "By accessing this website (Unibit.in) or using the UNIBIT app, you explicitly agree to abide by these Terms and Conditions. Should you disagree with any part of these terms, we kindly request that you exit the site and app immediately."
                },
                {
                    "title": "Updates to Terms",
                    "content": "We retain the right to revise, amend, or modify these Terms and Conditions at any given time. It is your responsibility as a user to review these terms periodically for any updates or changes."
                },
                {
                    "title": "Financial Risk and Responsibility",
                    "content": "Participants should be aware that our gaming platform involves a certain level of financial risk. Play responsibly at your own risk. Additionally, participants must be 18 years or older to participate. This requirement ensures compliance with legal regulations and promotes responsible gaming practices."
                },
                {
                    "title": "Use of Content",
                    "content": "All content on this site, including logos, brands, and marks, is the property of UNIBIT or used under license. Unauthorized use is prohibited."
                },
                {
                    "title": "Acceptable Use",
                    "content": "Visitors must not violate the security of the website or app, infringe intellectual property rights, or engage in unlawful activities. Any such actions may result in account termination or legal action."
                },
                {
                    "title": "Indemnity",
                    "content": "Users agree to indemnify and hold harmless the Company and its affiliates from any claims or liabilities arising from their use of the website or app. This includes legal fees and damages."
                },
                {
                    "title": "Fraud Detection",
                    "content": "The Company reserves the right to block accounts and forfeit funds in case of detected fraud. This measure helps maintain the integrity and fairness of our gaming platform."
                },
                {
                    "title": "Limitation of Liability",
                    "content": "The Company and its affiliates shall not be liable for any damages, losses, or liabilities arising from the use of the service. This includes but is not limited to financial losses, data loss, or any indirect or consequential damages."
                },
                {
                    "title": "Disclaimer of Consequential Damages",
                    "content": "The Company shall not be liable for any consequential damages resulting from the use of the website or app. This includes but is not limited to lost profits, business interruption, or loss of data."
                },
                {
                    "title": "Refund & Cancellation Policy",
                    "content": "Our refund policy allows for refunds in certain circumstances. Please review the cancellation and refund policy for details. Requests for cancellations must be made at least 7 business days prior to the end of the current service period."
                }
            ]
        }
    }




    return (
        <>
            <Header />
            <section className="feature-section position-relative" id='features'>
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Terms & Conditions</h2>
                        <p >Comprehensive Terms and Conditions for Kingsclub App: Ensuring Legal Compliance, User Responsibilities, and Risk Management</p>
                    </div>
                    <div className="content_container mt-5">
                        {policyData && Object.keys(policyData).map((section, i) => (
                            <div key={i}>
                                <div className="content_heading"><h4>{policyData[section]?.title}</h4></div>
                                {policyData[section]?.sections && policyData[section].sections.map((subsections, j) => (
                                    <div key={j} className="content_detail">
                                        <div className="content_sab_heading"><h6>{subsections.title}</h6></div>
                                        <p>{subsections.content}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
