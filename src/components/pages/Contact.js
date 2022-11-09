import Footer from "../Footer"
import Navbar from "../Navbar"

const Contact = () => {
    return (<div className="contact">
        <Navbar page="contact" />
        <div className="contact-hero">
            <h1>Reach out!</h1>
            <div>ariannejudkins@gmail.com</div>
            <div>-or-</div>
            <div>Find me on <a href="https://www.linkedin.com/in/arianne-mix-168619220/" target="/">linkedin</a></div>
        </div>
        <Footer />
    </div>)
}

export default Contact