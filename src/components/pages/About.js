import Navbar from "../Navbar";
import picture from "../../Images/profile_pic.png";

const About = () => {
    return (
    <div className="about">
        <Navbar page="about" />
        <div className="about-hero">
            <div className="about-info">
                <div className="personal-image"><img src={picture} alt="Arianne Mix" /></div>
                <div className="personal-info">
                    <h4>About Me</h4>
                    <p>Before I developed an interest in programming, I completed a 
                        B.S. in History from Arizona State University and an 
                        A.S. in music from Utah Valley University.<br /><br />
                        I stumbled upon web development in 2021 and quickly became fascinated 
                        by the logic and technologies that power the web. As I completed 
                        beginner courses in Javascript and React with <a href="https://www.shecodes.io/" target="/">SheCodes</a> I grew more and more excited by what I was learning. 
                        I couldn't believe that a career path existed that would allow me to do something 
                        that I've always excelled at and done for fun; solve puzzles.<br /><br />
                        After I completed the Plus and React courses through SheCodes, I taught myself 
                        Python and started working part-time at <a href="https://devpipeline.com/" target="/">Devpipeline</a>, where 
                        I was exposed to new technologies. During my time at Devpipeline, I have taught myself how to navigate and use
                         SQLAlchemy, Flask, Postgres, Firebase, and Sass.<br /><br />I love to code and am beyond excited to continue on this 
                         career path.</p>
                </div>
            </div>
        </div>
    </div>)
}

export default About