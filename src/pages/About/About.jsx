import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import AnimatedScrollComponent from '../../components/animatedScrollComp/AnimatedScrollComp';
import AnimatedWrapper from '../../components/animatedWrapper/AnimatedWrapper';
import Scribble from '../../components/Scribble/Scribble';
import { FaReact, FaAngular, FaNodeJs, FaGitAlt, FaJava, FaNetworkWired } from 'react-icons/fa6';
import { BiLogoMongodb, BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiRedis, SiCloudinary, SiPostman, SiSocketdotio, SiWebrtc, SiJsonwebtokens } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FiFramer, FiChevronRight } from 'react-icons/fi';
import { TbBrandCpp, TbApi, TbBoxModel } from 'react-icons/tb';
import { RiNextjsLine } from 'react-icons/ri';
import './about.css';

const skillsData = [
    { name: 'React.js', category: 'frontend', icon: <FaReact color="#61DAFB" /> },
    { name: 'Next.js', category: 'frontend', icon: <RiNextjsLine color="#ffffff" /> },
    { name: 'Angular', category: 'frontend', icon: <FaAngular color="#DD0031" /> },
    { name: 'Zustand', category: 'frontend', icon: <TbBoxModel color="#ec5990" /> },
    { name: 'Framer Motion', category: 'frontend', icon: <FiFramer color="#ffffff" /> },
    { name: 'Node.js', category: 'backend', icon: <FaNodeJs color="#3c873a" /> },
    { name: 'Express.js', category: 'backend', icon: <SiExpress color="#ffffff" /> },
    { name: 'REST APIs', category: 'backend', icon: <TbApi color="#007ACC" /> },
    { name: 'JWT Auth', category: 'backend', icon: <SiJsonwebtokens color="#ffffff" /> },
    { name: 'Socket.io', category: 'data', icon: <SiSocketdotio color="#ffffff" /> },
    { name: 'WebRTC', category: 'data', icon: <SiWebrtc color="#ffffff" /> },
    { name: 'WebSockets', category: 'data', icon: <FaNetworkWired color="#005C8A" /> },
    { name: 'MongoDB', category: 'data', icon: <BiLogoMongodb color="#47A248" /> },
    { name: 'Redis', category: 'data', icon: <SiRedis color="#DC382D" /> },
    { name: 'Cloudinary', category: 'data', icon: <SiCloudinary color="#3448C5" /> },
    { name: 'JavaScript', category: 'core', icon: <IoLogoJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', category: 'core', icon: <BiLogoTypescript color="#3178C6" /> },
    { name: 'Java', category: 'core', icon: <FaJava color="#f89820" /> },
    { name: 'C++', category: 'core', icon: <TbBrandCpp color="#3178C6" /> },
    { name: 'Git', category: 'core', icon: <FaGitAlt color="#f1502f" /> },
    { name: 'Postman', category: 'core', icon: <SiPostman color="#FF6C37" /> },
];

const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'data', label: 'Real-Time & Data' },
    { id: 'core', label: 'Languages & Tools' },
];

const experienceData = [
    {
        company: 'DailyObjects',
        role: 'Full Stack Developer',
        date: 'Jan 2025 - Present',
        impacts: [
            'Led the end-to-end migration of the core e-commerce platform from Angular 14 to Angular 19, eliminating legacy technical debt and establishing a clean routing architecture that indexed 2.6k+ valid rich-result items on Google.',
            'Implemented Server-Side Rendering (SSR) from scratch as part of the migration, improving mobile Lighthouse scores by ~33% and desktop scores by ~25% across the site through faster initial page loads.',
            'Drove an 11.1% increase in quarterly organic search traffic (+50,000 clicks) and improved average Google search position from 10 to 9.5 through better crawlability and indexing from SSR.',
            'Built REST APIs on the Node.js backend, including audit-logged media asset endpoints that let non-technical teams update banners, product images, and site media independently, removing developer dependency from every launch.',
        ],
        tech: ['Angular 19', 'SSR', 'Node.js', 'Elasticsearch', 'REST APIs'],
    },
    {
        company: 'Tag11 Softech Pvt. Ltd.',
        role: 'Full Stack Intern',
        date: 'Jun - Aug 2023',
        impacts: [
            'Added pagination to several REST API endpoints that previously returned entire datasets in a single response, reducing payload size on data-heavy pages.',
            'Built Express.js middleware to validate JWTs on every protected route, blocking unauthorized requests before they reached business logic or the database',
        ],
        tech: ['Node.js', 'Express.js', 'JWT', 'REST APIs'],
    },
];

const About = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const gridRef = useRef(null);
    const experienceRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: experienceRef,
        offset: ['start 80%', 'end 60%'],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const handleMouseMove = (e) => {
        if (!gridRef.current) return;

        const cards = gridRef.current.getElementsByClassName('skills-card');

        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    const filteredSkills = skillsData.filter((skill) => activeCategory === 'all' || skill.category === activeCategory);

    return (
        <div>
            <div className="bio">
                <div className="bio-left">
                    <AnimatedWrapper as="h2" delay={0.5} duration={0.7}>
                        THE REST OF IT
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.7}>
                        Hello! My name is <span>Amman</span> and I enjoy creating things that live on the internet. My
                        interest in web development started back in 2021.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.9}>
                        Since then I&apos;ve picked up a full-stack toolkit — <span>React</span>, <span>Next.js</span>,
                        and Angular on the frontend, Node and Express on the backend — along with the smaller things
                        that hold it together: TypeScript, MongoDB, Redis, and enough <span>Framer Motion</span> to make
                        things feel less static.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.1}>
                        Outside of the obvious stuff, I&apos;m the kind of person who&apos;ll lose an evening tweaking
                        one animation curve nobody else will ever notice, or wondering if a boring form could feel a bit
                        more like a game menu instead. It rarely changes anything measurable. I do it anyway.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.3}>
                        This portfolio, in particular, is where that habit gets to run wild — new animation ideas, and a
                        slightly excessive amount of attention to{' '}
                        <Scribble variant="highlight" delay={2.2}>
                            hover states
                        </Scribble>
                        .
                    </AnimatedWrapper>
                </div>
                <div className="bio-right">
                    <div>
                        <AnimatedScrollComponent text="Scroll to know about me more" />
                    </div>
                </div>
            </div>

            <div className="line" />

            <div className="skills">
                <div className="skills-header">
                    <h2>SKILLS</h2>
                    <div className="skills-category-dock">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`skills-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            >
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="skills-active-pill"
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    />
                                )}
                                <span className="skills-category-label">{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="skills-grid" ref={gridRef} onMouseMove={handleMouseMove}>
                    <AnimatePresence mode="wait">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                                className="skills-card"
                            >
                                <div className="skills-card-content">
                                    <span className="skills-icon">{skill.icon}</span>
                                    <span className="skills-name">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="line" />

            <div className="experiance">
                <div className="experiance-header">
                    <h2>EXPERIENCE</h2>
                </div>

                <div className="experiance-timeline-wrapper" ref={experienceRef}>
                    <div className="experiance-track">
                        <motion.div className="experiance-progress" style={{ scaleY }} />
                    </div>

                    <div className="experiance-container">
                        {experienceData.map((exp, index) => (
                            <div key={index} className="experiance-item">
                                <div className="experiance-node">
                                    <div className="experiance-node-inner" />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 14,
                                        mass: 1.2,
                                    }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="experiance-card"
                                >
                                    <div className="experiance-badge">
                                        <span className="experiance-company">{exp.company}</span>
                                        <span className="experiance-divider"></span>
                                        <span className="experiance-date">{exp.date}</span>
                                    </div>

                                    <h3 className="experiance-title">{exp.role}</h3>

                                    <div className="experiance-impact-grid">
                                        {exp.impacts.map((impact, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                            >
                                                <div className="experiance-impact-item">
                                                    <div className="experiance-impact-icon">
                                                        <FiChevronRight />
                                                    </div>
                                                    <p>{impact}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="experiance-tech-row">
                                        {exp.tech.map((tech, i) => (
                                            <span key={i} className="experiance-tech-pill">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
