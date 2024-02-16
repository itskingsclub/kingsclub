"use client"
import React, { useState } from 'react';

const Faq = () => {
    const faqlist = [
        {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.et?",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
        {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
        {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
        {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
        {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
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
                {faqlist.map((item, i)=>(
                    <li key={i} className={`accordion_item ${clicked === i ? "active" : ""}`}>
                    <button onClick={() => handleToggle(i)}  className="button">
                     <h6>{i+1}. {item.title}</h6>     
                      <span className="control">{clicked === i ? (<img src="assets/images/arrow-right.png" alt='down-arrow'/>) : (<img src="assets/images/arrow-right.png" alt='down-arrow'/>)}</span>
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
