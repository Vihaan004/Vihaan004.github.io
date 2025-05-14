import "./About.css";
import myImage from "../assets/me.jpg";
import { useEffect, useRef } from "react";

function About() {
    const aboutRef = useRef(null);
    useEffect(() => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ block: "start" });
        }
    }, []);
    return (
      <>
        <div ref={aboutRef} className="About">
            <div className="tag" style={{border: 'none'}}>
                <h1>About Me</h1>
            </div>
            <div className="wrapper">
                <p className="intro">
                    Hi, I'm Vihaan Patel - a senior at Arizona State Univeristy pursuing a BSE in Computer Engineering. I am passionate about solving real world problems with elegant and impactful solutions with tech. My interests include hardware design, FPGAs, embedded systems, edge computing, machine learning, and web app development. When I'm not working on projects, I enjoy exploring music, traveling, practicing golf, and updating my dad joke archive.
                </p>
                <div className="me">
                    <img src={myImage} alt="Vihaan Patel" />
                </div>
            </div>
        </div>
      </>
    );
}
  
export default About;