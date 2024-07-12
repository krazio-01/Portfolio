import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import AnimatedWrapper from "../animatedWrapper/AnimatedWrapper";

const socialLinks = [
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/md-amman/",
    },
    {
        icon: <FaGithub />,
        url: "https://github.com/krazio-01",
    },
    {
        icon: <FaTwitter />,
        url: "https://twitter.com/krazio01",
    },
    {
        icon: <FaInstagram />,
        url: "https://instagram.com",
    },
];

const SocialIcons = () => {
    return (
        <ul>
            {socialLinks.map((link, index) => (
                <AnimatedWrapper
                    key={index}
                    as="li"
                    delay={(index + 5) * 0.1}
                    duration={0.7}
                    useSpring={true}
                >
                    <Link to={link.url} target="_blank">
                        {link.icon}
                    </Link>
                </AnimatedWrapper>
            ))}
        </ul>
    );
};

export default SocialIcons;
