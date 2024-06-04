import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Curve from "./menuCurve/Curve";
import Logo from "../logoSVG/Logo";
import NavLinks from "./NavLinks";
import SocialIcons from "../SocialICons/SocialIcons";
import AnimatedWrapper from "../animatedWrapper/AnimatedWrapper";
import "./navbar.css";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
];

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [active]);

    return (
        <header className="nav">
            <div className="nav-items">
                <ul>
                    {navItems.map((item, index) => (
                        <AnimatedWrapper
                            as="li"
                            key={item.name}
                            delay={(index + 3) * 0.1}
                            duration={1}
                            useSpring={true}
                        >
                            <NavLinks item={item} />
                        </AnimatedWrapper>
                    ))}
                </ul>

                <div className="nav-social-icons">
                    <SocialIcons />
                </div>
            </div>

            <div className="logo">
                <Link to="/">
                    <Logo width={120} height={20} />
                </Link>
            </div>

            <div className="mobile-nav">
                <button onClick={() => setActive((prev) => !prev)}>
                    <span className={active ? "active" : ""} />
                    <span className={active ? "active" : ""} />
                    <span className={active ? "active" : ""} />
                </button>

                <AnimatePresence mode="wait">
                    {active && (
                        <motion.div
                            initial={{ x: "calc(100% + 100px)" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "calc(100% + 100px)" }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="mobile-nav-menu"
                        >
                            <div className="mobile-nav-body">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.7,
                                    }}
                                >
                                    Navigation
                                </motion.h2>
                                <ul>
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            onClick={() => setActive(false)}
                                            initial={{ x: 80 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: 80 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.76, 0, 0.24, 1],
                                                delay: 0.07 * index,
                                            }}
                                        >
                                            <NavLinks item={item} />
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mobile-nav-social">
                                    <div />
                                    <div className="mobile-nav-social-icons">
                                        <SocialIcons />
                                    </div>
                                </div>
                            </div>
                            <Curve />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
