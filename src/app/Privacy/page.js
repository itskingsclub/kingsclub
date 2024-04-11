import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";

export default function Page() {
    const policyData = {
        "general": {
            "title": "General",
            "sections": [
                {
                    "title": "Introduction",
                    "content": "KingsClub (“KingsClub,” “We,” “Our,” “Us”) is committed to protecting the personal information provided by the users (“You,” “Your,” “User”) to KingsClub. By using the KingsClub mobile application (“App”), you consent to the collection, retention, and use of Your personal information as outlined in this Privacy Policy (“Privacy Policy”). We prioritize the privacy and security of our users' data, ensuring a safe and trustworthy experience."
                },
                {
                    "title": "Electronic Contract",
                    "content": "This Privacy Policy is an electronic contract formed under the Information Technology Act, 2000 and amended provisions related to electronic documents/records. It does not require any physical or digital signature and is a legally binding document between You and KingsClub. This electronic contract ensures clarity and legality in our data handling processes, fostering transparency and user trust."
                },
                {
                    "title": "User Privacy",
                    "content": "We take User privacy seriously and are dedicated to providing a personalized and valuable service while safeguarding User information. Our commitment to user privacy includes strict data protection measures and adherence to privacy laws and regulations."
                },
                {
                    "title": "Security Measures",
                    "content": "We maintain a high level of security for User information. However, the transmission of information over the internet or telephone networks is not entirely secure. Despite our robust security measures, users should be aware of inherent risks in data transmission over digital networks."
                },
                {
                    "title": "Consent to Use Profile Information",
                    "content": "By using the Platform and creating an account, You grant KingsClub your irrevocable consent to use Your Profile Information (profile name, picture, winnings) for advertisements, promotions, and sponsored content without further consent or compensation. This consent ensures personalized experiences and relevant content delivery to users."
                },
                {
                    "title": "Exclusive License",
                    "content": "You also grant KingsClub an exclusive license to use, distribute, and modify Your Profile Information. This exclusive license allows KingsClub to optimize user experiences and enhance app functionalities while respecting user privacy rights."
                },
                {
                    "title": "Liability and Waiver",
                    "content": "You understand and accept that Your Profile Information will not violate third-party rights, and You will be liable for any damages arising from its use by KingsClub. You also waive any right to inspect or modify such content. This liability clause ensures responsible data sharing practices and user accountability."
                },
                {
                    "title": "Agreement",
                    "content": "Access to the App is subject to Your acceptance of this Privacy Policy and Our Terms and Conditions, forming an agreement between You and KingsClub. This agreement outlines the terms of use and data handling practices, creating a legal framework for user interactions with the app."
                }
            ]
        },
        "information_collected": {
            "title": "Information Collected",
            "sections": [
                {
                    "title": "Traffic Data",
                    "content": "We automatically track and collect Traffic Data (IP addresses, domain servers, device information) to provide the App. This data collection helps optimize app performance and enhance user experiences."
                },
                {
                    "title": "Personal Information",
                    "content": "Personal Information may include contact data, demographic data, and financial data provided by You. We handle Personal Information securely, using it for business purposes and providing app features while maintaining user privacy."
                },
                {
                    "title": "Storage and Usage",
                    "content": "Your Personal Information is stored securely and used for business purposes and providing app features. Our data storage and usage practices adhere to industry standards, ensuring data security and privacy."
                },
                {
                    "title": "Third-party Links",
                    "content": "Our App may contain links to third-party websites, and Your use of such sites is governed by their privacy policies. Users should review third-party privacy policies when accessing external links within the app."
                }
            ]
        },
        "disclosure": {
            "title": "Disclosure of Personal Information",
            "sections": [
                {
                    "title": "Third-party Disclosure",
                    "content": "We do not disclose Personal Information to third parties except as outlined in Our Privacy Policy. Our commitment to data privacy includes strict restrictions on third-party data sharing."
                },
                {
                    "title": "Usage in Aggregate Form",
                    "content": "Personal Information may be used in aggregate form for marketing, analytics, and enhancing User experience. Aggregate data usage helps improve app functionality and user engagement."
                },
                {
                    "title": "Legal Disclosure",
                    "content": "We may disclose Personal Information if required by law or to protect Our rights or safety. Legal disclosures are made in compliance with applicable laws and regulations."
                }
            ]
        },
        "confidentiality": {
            "title": "Confidentiality",
            "sections": [
                {
                    "title": "Private Information",
                    "content": "Your Personal Information is kept private and shared only in compliance with Our Privacy Policy or legal requirements. We prioritize the confidentiality of user data, ensuring secure data handling practices."
                },
                {
                    "title": "Third-party Marketing",
                    "content": "We do not share Personal Information for third-party marketing without Your consent. User data is not used for third-party marketing purposes without explicit user consent."
                }
            ]
        },
        "security": {
            "title": "Security",
            "sections": [
                {
                    "title": "Data Protection",
                    "content": "We follow industry standards to protect Your Personal Information during transmission and storage. Our data protection measures include encryption and secure storage protocols."
                },
                {
                    "title": "Complete Security",
                    "content": "While We strive for security, complete security cannot be guaranteed. Users should be aware of inherent risks in digital data transmission despite stringent security measures."
                }
            ]
        },
        "cookies": {
            "title": "Cookies",
            "sections": [
                {
                    "title": "Cookie Usage",
                    "content": "We may use cookies or similar tools to improve site responsiveness and collect User data. Cookie usage helps personalize user experiences and optimize app performance."
                },
                {
                    "title": "Web Server Information",
                    "content": "Our web servers collect limited information about Your connection for site optimization and traffic analysis. Web server data collection aids in improving app functionality and user engagement."
                }
            ]
        },
        "rights": {
            "title": "Your Rights",
            "sections": [
                {
                    "title": "Right to Correct Information",
                    "content": "You have the right to correct any errors in Your Personal Information provided to us."
                },
                {
                    "title": "Right to Cease Use",
                    "content": "You have the right to request cessation of the use of Your Personal Information."
                }
            ]
        },
        "liability": {
            "title": "Restriction of Liability",
            "sections": [
                {
                    "title": "Liability Disclaimer",
                    "content": "KingsClub disclaims liability for any errors or omissions in App content and does not guarantee the accuracy or adequacy of content."
                }
            ]
        },
        "updates_changes": {
            "title": "Updates and Changes",
            "sections": [
                {
                    "title": "Policy Modification",
                    "content": "We reserve the right to modify this Privacy Policy, and any changes will be posted on Our website."
                }
            ]
        },
        "contact_info": {
            "title": "Contact Information",
            "sections": [
                {
                    "title": "Customer Support",
                    "content": "If You have questions or concerns, please contact our customer support team at help.kingsclub@gmail.com."
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
                        <h2>Privacy Policy</h2>
                        <p >Kings Club Privacy Policy: Safeguarding Your Data, Ensuring Transparency, and Fostering a Secure Gaming Environment for Our Valued Users</p>
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
