import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar"
import certPlus from "../../Images/certificate-plus.png"
import certReact from "../../Images/certificate-react.png"
import Footer from "../Footer";

const LandingPage = () => {
    const skills = ["Python", "Javascript", "React", "Flask", "SQLAlchemy", "Postgres",  "HTML", "Sass", "CSS"]
    const [skill, setSkill] = useState("React");
    const [count, setCount] = useState(0);


    const getSkill = () => {
        setSkill(skills[count]);
        setCount(prev => prev === skill.length - 1 ? 0 : prev + 1)
    }


    const renderSkill = () => {
        return  <motion.div 
        // animate={{opacity: 1} } 
        // initial={{opacity: 0}}
        // transition={{duration: 1.5}} 
        className="skill">
            {skill}
        </motion.div>
    }
    
    useEffect(() => {
        const interval = setTimeout(getSkill, 3000);
        return () => clearInterval(interval);
    });

    return (
    <div className="landing-page">
        <Navbar page="home" />
        <div className="hero">
            <div className="hero-content">
                    <motion.h1 animate={{ y: 10 }}>Hi, I'm Arianne.</motion.h1>                     
                <div className="intro">
                    <h4>Fullstack Developer with experience in {" "}</h4>
                    {renderSkill()}
                </div>
            </div>
        </div>
        <div className="certificate-wrapper">
            <a href="https://www.shecodes.io/certificates/a3df057faacfe7384b2a1a137528893d" target="/"><img src={certPlus} alt="certificate" /></a>
            <a href="https://www.shecodes.io/certificates/a14db670c469f907cea2cd288b7d4403" target="/"><img src={certReact} alt="certificate" /></a>          
        </div>
        <Footer />
    </div>)
}

export default LandingPage