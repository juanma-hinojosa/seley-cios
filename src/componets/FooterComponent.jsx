import '../css/footer-component.css'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function FooterComponent() {
    return(
        <footer className="footer-wrapper poppins-regular">
            <div className="footer-section-one">
                <div className="footer-logo-container">

                    <img src="" alt="" />

                </div>
                <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>1138393736</span>
                    <span>hello@dental.com</span>
                    <span>press@dental.com</span>
                    <span>contact@dental.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent