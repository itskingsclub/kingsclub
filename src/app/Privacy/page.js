import Header from "../CommenSection/Header";
import Footer from "../CommenSection/footer";

export default function Page() {
    const sections = {
        "sections": [
            {
                "heading": "General",
                "subsections": [
                    {
                        "heading": "1.1 Kings Club",
                        "content": "Kings Club (\"We\", \"Our\", \"Us\") is committed to protecting the personal information provided by users (\"You\", \"Your\", \"User\") to Kings Club. By using the Kings Club mobile application (\"App\"), you agree to the collection, retention, and use of Your personal information as outlined in this Privacy Policy."
                    },
                    {
                        "heading": "1.2 Electronic Record",
                        "content": "This Privacy Policy is an electronic record under the Information Technology Act, 2000, forming a legally binding document between You and Kings Club."
                    },
                    {
                        "heading": "1.3 Privacy Commitment",
                        "content": "We prioritize the privacy of our users, ensuring a secure and personalized service."
                    },
                    {
                        "heading": "1.4 Security",
                        "content": "Your information is not rented or sold to any third party. While we maintain a high standard of security, please note that the transmission of information over the internet or telephone networks is not completely secure."
                    },
                    {
                        "heading": "1.5 Consent for Use of Profile Information",
                        "content": "By using the platform and creating an account, You grant Kings Club irrevocable consent to use Your profile information for advertisements, promotions, and offers on the platform and other marketing channels."
                    },
                    {
                        "heading": "1.6 to 1.9",
                        "content": "(No changes, as they pertain to the user's understanding and agreement regarding the use of Profile Information)"
                    },
                    {
                        "heading": "1.10 Agreement",
                        "content": "Access to the contents available through the App is conditional upon Your approval of this Privacy Policy, read together with the terms and conditions of use. This Privacy Policy, along with our Terms, forms Our agreement with You in relation to Your use of the App."
                    }
                ]
            },
            {
                "heading": "Information Collected",
                "subsections": [
                    {
                        "heading": "2.1 Traffic Data Collected",
                        "content": "To provide the App, We automatically track and collect information such as IP addresses, domain servers, and other information related to Your device and its interaction with the App (\"Traffic Data\")."
                    },
                    {
                        "heading": "2.2 Personal Information Collected",
                        "content": "In order to provide the App, We may require You to provide Us with certain information that personally identifies You (\"Personal Information\")."
                    },
                    {
                        "heading": "2.3 to 2.4",
                        "content": "(No changes)"
                    }
                ]
            },
            {
                "heading": "Disclosure of Personal Information",
                "subsections": [
                    {
                        "heading": "3.1 to 3.3",
                        "content": "(No changes, ensuring compliance with Privacy Policy and legal obligations)"
                    }
                ]
            },
            {
                "heading": "Confidentiality",
                "subsections": [
                    {
                        "heading": "4.1 to 4.1.3",
                        "content": "(No changes, except specifying Kings Club instead of UNIBIT)"
                    }
                ]
            },
            {
                "heading": "Security",
                "subsections": [
                    {
                        "heading": "5.1 to 5.2",
                        "content": "(No changes, emphasizing the importance of security and acknowledging potential risks)"
                    }
                ]
            },
            {
                "heading": "Cookies",
                "subsections": [
                    {
                        "heading": "6.1 to 6.2",
                        "content": "(No changes, explaining the use of cookies to improve user experience)"
                    }
                ]
            },
            {
                "heading": "Updates and Changes to Privacy Policy",
                "subsections": [
                    {
                        "heading": "7.1",
                        "content": "(No changes, indicating the right to update the Privacy Policy)"
                    }
                ]
            },
            {
                "heading": "Your Rights",
                "subsections": [
                    {
                        "heading": "8.1",
                        "content": "(No changes, specifying the user's rights)"
                    }
                ]
            },
            {
                "heading": "Restriction of Liability",
                "subsections": [
                    {
                        "heading": "9.1 to 9.3",
                        "content": "(No changes, disclaiming liability for accuracy and providing contact information for concerns)"
                    }
                ]
            }
        ]
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
                        {sections && sections.sections.map((section, i) => (
                            <div key={i}>
                                <div className="content_heading"><h4>{section.heading}</h4></div>
                                {section.subsections.map((subsections) => (
                                    <div className="content_detail">
                                        <div className="content_sab_heading"><h6>{subsections.heading}</h6></div>
                                        <p>{subsections.content}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="content d-none">
                            <div className="content_heading"><h4>1. GENERAL</h4></div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum, possimus quis reiciendis accusamus veritatis rem neque? Dolor odit eaque, natus quibusdam magni deleniti libero, deserunt tempore quae quam necessitatibus.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                        </div>
                        <div className="content d-none">
                            <div className="content_heading"><h4>1. GENERAL</h4></div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum, possimus quis reiciendis accusamus veritatis rem neque? Dolor odit eaque, natus quibusdam magni deleniti libero, deserunt tempore quae quam necessitatibus.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                        </div>
                        <div className="content d-none">
                            <div className="content_heading"><h4>1. GENERAL</h4></div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum, possimus quis reiciendis accusamus veritatis rem neque? Dolor odit eaque, natus quibusdam magni deleniti libero, deserunt tempore quae quam necessitatibus.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, incidunt ipsa voluptatem deleniti debitis fugiat ullam minima aperiam, distinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                            <div className="content_detail">
                                <div className="content_sab_heading"><h6>1.1 KINGS CLUB</h6></div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitinctio eveniet quis laboriosam veritatis quam! Veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
