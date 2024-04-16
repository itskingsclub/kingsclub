import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";

export default function Page() {
    const policyData = {
        "introduction": {
            "title": "Introduction",
            "content": [
                "KingsClub (\"We\", \"Us\", \"Our\") is committed to protecting the privacy of our users (\"You\", \"Your\", \"User\"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application, KingsClub (the \"App\").",
                "By using the App, you agree to the terms of this Privacy Policy."
            ]
        },
        "informationCollected": {
            "title": "Information We Collect",
            "content": [
                "We collect two main types of information through the App:",
                "Traffic Data: This information is collected automatically when you use the App and includes your IP address, device information, and how you interact with the App.",
                "Personal Information: This information may include your email address, contact details, and, in some cases, financial data for prize disbursement (with your consent). You may also provide us with information when you communicate with us directly."
            ]
        },
        "informationUse": {
            "title": "Use of Information",
            "content": [
                "We use the information we collect for the following purposes:",
                "To provide and improve the App",
                "To personalize your experience",
                "To analyze App usage",
                "To deliver prizes and coupons",
                "To manage our relationship with partners",
                "To comply with legal requirements",
                "We will only use your information for the purposes described in this Privacy Policy."
            ]
        },
        "informationDisclosure": {
            "title": "Disclosure of Information",
            "content": [
                "We will not disclose your Personal Information to third parties except in the following cases:",
                "With your consent",
                "To comply with legal requirements",
                "To protect the rights, property, or safety of KingsClub or others",
                "We may share Traffic Data in an aggregated form (so that no individual user is identified) for various purposes like marketing and analytics."
            ]
        },
        "security": {
            "title": "Security",
            "content": [
                "We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure."
            ]
        },
        "cookies": {
            "title": "Cookies",
            "content": [
                "We may use cookies and similar technologies to collect information and improve your experience with the App. You can control cookies through your browser settings."
            ]
        },
        "updates": {
            "title": "Updates to this Privacy Policy",
            "content": [
                "We may update this Privacy Policy from time to time. We will post any changes on this page."
            ]
        },
        "yourRights": {
            "title": "Your Rights",
            "content": [
                "You have the right to access, correct, or delete your Personal Information. You can also request that we stop using your information."
            ]
        },
        "contact": {
            "title": "Contact Us",
            "content": [
                "If you have any questions about this Privacy Policy, please contact us at help.kingsclub@gmail.com."
            ]
        },
        "limitationOfLiability": {
            "title": "Limitation of Liability",
            "content": [
                "KingsClub makes no guarantees about the accuracy or completeness of the App's content and disclaims liability for errors or omissions."
            ]
        }
    }




    return (
        <>
            <Header />
            <section className="feature-section position-relative" id='features'>
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Privacy Policy</h2>
                        <p >Kings Club Privacy Policy: Safeguarding Your Data, Ensuring Transparency, and Fostering a Secure Gaming Environment for Our Valued Users</p>
                    </div>
                    <div className="content_container mt-5">
                        {Object.keys(policyData).map((sectionKey, i) => {
                            const section = policyData[sectionKey];
                            return (
                                <div key={i}>
                                    <div className="content_heading"><h5>{section.title}</h5></div>
                                    {section.content.map((subsections, j) => (
                                        <div key={j} className="content_detail">
                                            <p>{j + 1 + "." + " "}{subsections}</p>
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
