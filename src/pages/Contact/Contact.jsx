import "./contact.css";
import { useRef, useState } from "react";
import CircularButton from "../../components/circularButton/CircularButton";
import AnimatedWrapper from "../../components/animatedWrapper/AnimatedWrapper";
import emailjs from "@emailjs/browser";

const primaryLinks = [
    { href: "mailto:email@gmail.com", text: "md.krazio@gmail.com" },
    { href: "tel:+91 123456789", text: "+91 9352072344" },
];

const socialLinks = [
    { href: "https://www.linkedin.com/in/md-amman/", text: "Linkedin" },
    { href: "https://github.com/krazio-01", text: "Github" },
    { href: "https://twitter.com/krazio01", text: "Twitter" },
];

const ListItem = ({ href, children }) => {
    const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel");
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
        >
            <span>{children}</span>
        </a>
    );
};

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await emailjs.sendForm(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_APP_PUBLIC_ID,
                }
            );
            console.log("SUCCESS!");
            setShowToast(true);
        } catch (error) {
            console.log("FAILED...", error);
        } finally {
            setLoading(false);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <div className="contact-main">
            <div className="contact-info">
                <div className="basic-info">
                    <AnimatedWrapper as="h5" delay={0.5} useSpring={true}>
                        Contact credentials
                    </AnimatedWrapper>
                    <ul>
                        {primaryLinks.map((link, index) => (
                            <AnimatedWrapper
                                key={link.href}
                                as="li"
                                delay={(index + 2) * 0.2}
                                useSpring={true}
                            >
                                <ListItem href={link.href}>{link.text}</ListItem>
                            </AnimatedWrapper>
                        ))}
                    </ul>

                    <AnimatedWrapper as="h5" delay={0.8} useSpring={true}>
                        Socials
                    </AnimatedWrapper>
                    <ul>
                        {socialLinks.map((link, index) => (
                            <AnimatedWrapper
                                key={link.href}
                                as="li"
                                delay={(index + 4) * 0.25}
                                duration={0.4}
                                useSpring={true}
                            >
                                <ListItem href={link.href}>{link.text}</ListItem>
                            </AnimatedWrapper>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="contact-form">
                <form ref={formRef} onSubmit={sendEmail}>
                    <AnimatedWrapper as="div" delay={0.8}>
                        <h3>Feel free to reach out</h3>
                        <div className="contact-input-container">
                            <label>WHat's your name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="contact-input-container">
                            <label>What's your email</label>
                            <input
                                type="email"
                                placeholder="johnD@example.com"
                                name="from_name"
                            />
                        </div>
                        <div className="contact-input-container">
                            <label>Your message</label>
                            <textarea placeholder="Hi Amman ..." name="message"></textarea>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper
                        className="contact-submit-container"
                        delay={0.7}
                        useSpring={true}
                    >
                        <div className="contact-submit">
                            <CircularButton tag="button" name="Submit" loading={loading} />
                        </div>
                    </AnimatedWrapper>
                </form>
            </div>

            {showToast && <div className="toast show">Email sent successfully!</div>}
        </div>
    );
};

export default Contact;
