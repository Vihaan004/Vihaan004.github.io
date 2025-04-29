import React from "react";
import "./Hero.css";
// import myImage from "../assets/me.jpg";


import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import email from "../assets/mail.png";
import spotify from "../assets/spotify.svg";


export default function Hero() {
return (
    <div className="hero">
            <div>
                    <h3 className="subtitle">Hi, you've just discovered a wild</h3>
                    <h1 className="name">Vihaan Patel</h1>
                    <h2 className="description">I'm a Computer Engineer <span className="progress-text">(in progress)</span></h2>
                    <div className="socials">
                            <li><a href="https://github.com/Vihaan004"><img src={github} alt="github"/></a></li>
                            <li><a href="https://www.linkedin.com/in/vihaanpatel/"><img src={linkedin} alt="linkedin"/></a></li>
                            <li><a href="mailto:vihaan004@gmail.com"><img src={email} alt="email"/></a></li>
                            <li><a href="https://www.instagram.com/vihaan.004/"><img src={instagram} alt="instagram"/></a></li>
                            <li><a href="https://open.spotify.com/user/n7edezqm12qvmml7mktlo0iry?si=d7425dcc63f84239"><img src={spotify} alt="spotify"/></a></li>
                    </div>
            </div>
            {/* <div className="hero-image">
                    <img className = "pfp" src={myImage} alt="Vihaan Patel"/>
            </div> */}
    </div>
);
}
