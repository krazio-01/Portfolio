import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Curve from './menuCurve/Curve';
import Logo from '../logoSVG/Logo';
import NavLinks from './NavLinks';
import SocialIcons from '../SocialICons/SocialIcons';
import AnimatedWrapper from '../animatedWrapper/AnimatedWrapper';
import useClickOutside from '../../hooks/useClickOutside';
import './navbar.css';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Work', link: '/work' },
    { name: 'Contact', link: '/contact' },
];

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    useClickOutside([sidebarRef, buttonRef], () => {
        if (isSidebarOpen) setSidebarOpen(false);
    });

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    return (
        <header className="nav">
            <div className="nav-items">
                <ul>
                    {navItems.map((item, index) => (
                        <AnimatedWrapper
                            as="li"
                            key={item.name}
                            className="doodle-underline"
                            delay={(index + 3) * 0.1}
                            duration={1}
                            useSpring={true}
                        >
                            <NavLinks item={item} />
                        </AnimatedWrapper>
                    ))}
                </ul>

                <div className="nav-social-icons">
                    <span className="social-hint">find me →</span>
                    <SocialIcons />
                </div>
            </div>

            <div className="logo">
                <Link to="/">
                    <Logo width={120} height={20} />
                </Link>
            </div>

            <div className="mobile-nav">
                <button ref={buttonRef} onClick={() => setSidebarOpen((prev) => !prev)}>
                    <span className={isSidebarOpen ? 'active' : ''} />
                    <span className={isSidebarOpen ? 'active' : ''} />
                    <span className={isSidebarOpen ? 'active' : ''} />
                </button>

                <AnimatePresence mode="wait">
                    {isSidebarOpen && (
                        <motion.div
                            ref={sidebarRef}
                            initial={{ x: 'calc(100% + 100px)' }}
                            animate={{ x: '0%' }}
                            exit={{ x: 'calc(100% + 100px)' }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="mobile-nav-menu"
                        >
                            <div className="mobile-nav-body">
                                <div className="sidebar-header">
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.2,
                                        }}
                                    >
                                        Navigation
                                    </motion.h1>
                                </div>
                                <ul>
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            onClick={() => setSidebarOpen(false)}
                                            initial={{ x: 80 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: 80 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.76, 0, 0.24, 1],
                                                delay: 0.07 * index,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                transition: { duration: 0.1 },
                                            }}
                                        >
                                            <NavLinks item={item} fromSidebar={true} />
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
