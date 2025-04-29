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
                    Hi, I'm Vihaan Patel—a junior at Arizona State University pursuing a BSE in Computer Systems Engineering. I am passionate about hardware design, embedded systems, and software development. My interests include FPGA design, machine learning, and creating impactful engineering solutions. When I'm not working on projects, I enjoy exploring music, reading, and experimenting with new technologies.
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