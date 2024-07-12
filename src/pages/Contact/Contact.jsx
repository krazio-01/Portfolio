import { useRef } from "react";
import CircularButton from "../../components/circularButton/CircularButton";
import AnimatedWrapper from "../../components/animatedWrapper/AnimatedWrapper";
import { toast } from "sonner";
import "./contact.css";

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
        href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
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

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            formData.append("access_key", import.meta.env.VITE_APP_WEB3FORMS_PUBLIC_KEY);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.ok) toast("Email sent successfully!");
        } catch (error) {
            toast("Failed to send email");
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
                            <input type="text" placeholder="John Doe" name="name" required />
                        </div>
                        <div className="contact-input-container">
                            <label>What's your email</label>
                            <input
                                type="email"
                                placeholder="johnD@example.com"
                                name="email"
                                required
                            />
                        </div>
                        <div className="contact-input-container">
                            <label>Your message</label>
                            <textarea placeholder="Hi Amman ..." name="message" required></textarea>
                        </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper
                        className="contact-submit-container"
                        delay={0.7}
                        useSpring={true}
                    >
                        <div className="contact-submit">
                            <CircularButton tag="button" name="Submit" loading={false} />
                        </div>
                    </AnimatedWrapper>
                </form>
            </div>
        </div>
    );
};

export default Contact;
