"use client"
import React, { useState } from 'react';

const Faq = () => {
    const faqlist = [
        {
            title: "How can I create a challenges on KingsClub?",
            discription: "To create a challenges, simply create an account on KingsClub, now go to play games page and now you see a button on a bottom to create a challenge , simply click on it and enter you amount you want to play and submit , your challenge are created "
        },
        {
            title: "How can I join challenges on KingsClub?",
            discription: "To join challenges, simply create an account on KingsClub, Now go to play games page and now you see all the created challenges , choose whatever you want and click to accept and your challenge was accepted "
        },
        {
            title: "After join and create what can i do to furture gaming?",
            discription: "If you create a challenge to simply go to ludoking app and create a table and copy the room code and come back to kingsclub app and update room code on content page and joiner copy the room code and go to ludo king app and play your game. ",
        },
        {
            title: "what things do after match complete in ludo king?",
            discription: "If you are Win the game so please upload your winning screenshot on app and if you are lose so plase click on lose button and if any problem your game is not completed so please click on cancel , your game was canceled if you'r reason is valid."
        },
        {
            title: "How do I add coins to my wallet?",
            discription: "You can add coins to your wallet by navigating to the Wallet section in the app, selecting the 'Add coin' option, and get our bank details, qr code and upi for payment , you can choose any one and do that , and upload your payment screenshot and submit , wait 2-5 minutes your coin deposited suucessfully if your payment is valid."
        },
        {
            title: "How does the leaderboard work, and how can I climb up the ranks?",
            discription: "The leaderboard showcases top-performing players based on their achievements in challenges. You can climb up the ranks by winning challenges, earning points, and actively participating in the gaming community, and you can see the leaderboard for a day , week , month and whole year by selecting fliters that given in leaderbaord page."
        },
        {
            title: "What rewards can I earn through the referral program?",
            discription: "Through our referral program, you can earn when your friend play a game and you get 5% of thier game as refer coin, and after you get you play the game of these coin and earn more coins"
        },
        {
            title: "Is KingsClub's gameplay fair and secure?",
            discription: "Yes, KingsClub ensures fair and secure gameplay for all users. We have stringent measures in place to prevent cheating or unfair practices, ensuring an enjoyable and trustworthy gaming environment.."
        },
    ]
    const [clicked, setClicked] = useState("0");
    const handleToggle = (i) => {
        if (clicked === i) {
            return setClicked("0");
        }
        setClicked(i);
    };
    return (
        <>
            <section className="faq-section position-relative" id='faq'>
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>FAQ’s</h2>
                        <p >orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className="faq-content mt-5">
                        <ul className="faq-accordion">
                            {faqlist.map((item, i) => (
                                <li key={i} className={`accordion_item ${clicked === i ? "active" : ""}`}>
                                    <button onClick={() => handleToggle(i)} className="button">
                                        <h6>{i + 1}. {item.title}</h6>
                                        <span className="control">{clicked === i ? (<img src="assets/images/arrow-right.png" alt='down-arrow' />) : (<img src="assets/images/arrow-right.png" alt='down-arrow' />)}</span>
                                    </button>
                                    <div className={`answer_wrapper ${clicked === i ? "open" : ""}`}>
                                        <div className="answer mt-3"><p>  {item.discription} </p></div>
                                        {item.discriptionMenu && item.discriptionMenu.length > 0 && (
                                            <ul className="discription-menu">
                                                {item.discriptionMenu.map((menu, index) => (
                                                    <li key={index}>{menu}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;
