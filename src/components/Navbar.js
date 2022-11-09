import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
 
const Navbar = (page) => {
    const [navName, setNavName] = useState("regular");
    const [ burger, setBurger] = useState(true)
    const [menuName, setMenuName] = useState("menu-row")

    const handleClick = () => {
        setNavName(prev => prev === "regular" ? "mobile" : "regular")
        setMenuName(prev => prev === "menu-row" ? "menu-column" : "menu-row")
        setBurger(prev => !prev)
    }

    return (
    <div className="navbar">
        <nav className={`main-navbar ${navName}`}>
            <button className="burger" onClick={handleClick}>{burger ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</button>
            <div className={`main-navbar ${menuName}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>     
        </nav>
    </div>
    )
        
}

export default Navbar