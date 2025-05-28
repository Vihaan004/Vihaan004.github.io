import "./About.css";
import myImage from "../assets/me.jpg";

function About() {
    return (
      <>
        <div className="About">
            <div className="tag" style={{border: 'none'}}>
                <h1>About Me</h1>
            </div>            <div className="wrapper">
                <div className="me">
                    <img src={myImage} alt="Vihaan Patel" />
                </div>
                <p className="intro">
                    Hi, I'm Vihaan Patel - a senior at Arizona State Univeristy pursuing a BSE in Computer Engineering. I am passionate about solving real world problems with elegant and impactful solutions with tech and AI. My interests include hardware design/verification, FPGAs, embedded/edge computing, and agentic development. When I'm not working on projects, I enjoy exploring music, traveling, practicing golf, and updating my dad joke archive.
                </p>
            </div>
        </div>
      </>
    );
}
  
export default About;