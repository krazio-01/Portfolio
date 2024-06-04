import { useLocation } from "react-router-dom";
import SocialIcons from "../SocialICons/SocialIcons";
import CircularButton from "../circularButton/CircularButton";
import "./footer.css";

const Footer = () => {
    const location = useLocation();

    const isContactPage = location.pathname === "/contact" || location.pathname === "/Contact";

    return (
        <footer className="footer-main">
            <div className="line" />

            <div className="footer-content">
                {!isContactPage && (
                    <div className="foo-info">
                        <div className="foo-info-head">
                            <div className="foo-head-inside">
                                <div>
                                    <p>Let's work</p>
                                    <p>together</p>
                                </div>
                                <p>
                                    Call or email me to start your next project with me. I'd love
                                    to hear from you!
                                </p>
                            </div>
                            <div className="foo-contact-btn">
                                <CircularButton tag="link" name="Contact" />
                            </div>
                        </div>
                        <div className="foo-contact">
                            <div>
                                <a href="mailto:md.krazio@gmail.com">
                                    <span>md.krazio@gmail.com</span>
                                </a>
                            </div>
                            <div>
                                <a href="tel:+91 9352072344">
                                    <span>+91 9352072344</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                <div className="foo-links">
                    <div>
                        <p>Copyright © 2024</p>
                    </div>
                    <div>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
