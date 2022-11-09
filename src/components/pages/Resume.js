import Navbar from "../Navbar"
import pic from "../../Images/profile_pic.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    const feSkills = ["Javascript", "React", "HTML", "Sass", "Firebase"];
    const beSkills = ["Python", "Flask", "SQLAlchemy", "Postgres", "SQL"];

    const renderList = (type) => {
        const mapList = type === "front" ? feSkills : beSkills;
        return (
            mapList.map(s => {
                return (<li key={s}>
                    {s}
                </li>)
            })
        )
    }

    return (<div className="resume">
        <Navbar page="resume" />
        <div className="hero">
            <img src={pic} alt="arianne mix" /><h1>Arianne Mix  </h1><span>Junior Developer</span>
        </div>
        <div className="resume-content">
            <h4>Summary</h4>
            <p>I was first exposed to programming in 2021, after completing an education 
                in an unrelated field. Despite having an established education and career, 
                I was fascinated by the world of web development. I have since discovered that 
                I love to code, and have become efficient at teaching myself new concepts and 
                technologies. My ability to adapt to new environments and learn languages and
                 related skills independently sets me apart as a Junior Developer.</p>
            <p>For more information on me and my certifications, visit my website at www.ariannemix.com.</p>
            <h4>Education</h4>
            <p className="bold">BACHELOR OF ARTS | MAY 2019 | ARIZONA STATE UNIVERSITY</p>
            <span>Major: History, 4.0 GPA</span>
            <p className="bold">ASSOCIATE OF SCIENCE | MAY 2014 | UTAH VALLEY UNIVERSITY </p>
            <span>Major: Music, 3.8 GPA</span>
            <h4>Web Development</h4>
            <p className="bold">DEVPIPELINE JUNIOR DEVELOPER | MAY 2022 - PRESENT</p>
            <span>At DevPipeline, I have had the opportunity to work as a full-stack 
                developer (using React and Flask) on both client and internal projects.</span>
            <p className="bold">WEB DEVELOPMENT CERTIFICATION | APRIL 2021</p>
            <span>Official certification from SheCodes for skills in basic front-end development</span>
            <p className="bold">REACT CERTIFICATION | JUNE 2021</p>
            <span>Official certification from SheCodes for skills in React</span>
            <h4>Skills</h4>
            <div className="skills-lists">
                <div className="front-end">
                    <div>Front-end</div>
                    <ul>
                        {renderList("front")}
                    </ul>
                </div>
                <div className="back-end">
                    <div>Back-end</div>
                    <ul>
                        {renderList("back")}
                    </ul>
                </div>
                
            </div>
        </div>
    </div>)
}

export default Resume

            // <h2>Summary</h2>
            // <p>I was first exposed to programming in 2021, after completing an education in an 
            //     unrelated field. Despite having an established education and career, I was fascinated by
            //      the world of web development. I have since discovered that I love to code, and have become 
            //      efficient at teaching myself new concepts and technologies. My ability to adapt to new environments 
            //      and learn languages and related skills independently sets me apart as a Junior Developer.
            // </p>
            // <p>For more information on me and my certifications, visit my website at www.ariannemix.com.</p>