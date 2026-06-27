import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import AnimatedScrollComponent from '../../components/animatedScrollComp/AnimatedScrollComp';
import AnimatedWrapper from '../../components/animatedWrapper/AnimatedWrapper';
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
            'Led the migration of the core web application from Angular 14 to 19, implementing Server-Side Rendering (SSR) for improved SEO and performance.',
            'Developed and integrated highly optimized RESTful APIs using Node.js to ensure seamless data communication and fast response times.',
        ],
        tech: ['Angular 19', 'SSR', 'REST APIs', 'Node.js'],
    },
    {
        company: 'Tag. 11 Softech Pvt. Ltd',
        role: 'Full Stack Intern',
        date: 'June - August 2023',
        impacts: [
            'Architected scalable backend solutions using Express and Node.js to handle complex data structures and improve platform efficiency.',
            'Engineered secure authentication flows by implementing customized session management and JWT strategies across the application.',
        ],
        tech: ['Node.js', 'Express', 'JWT', 'Backend Architecture'],
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
                        BIOGRAPHY
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.7}>
                        Hello! My name is <span>Amman</span> and I enjoy creating things that live on the internet. My
                        interest in web development started back in 2021
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.9}>
                        My web development journey has equipped me with skills in both front-end and back-end
                        technologies. I create responsive applications with expertise in <span>React.js</span>,{' '}
                        <span>Next.js</span> and pleasing animations using <span>Framer Motion.</span>
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.1}>
                        In addition to my technical skills, I am adept at collaborating with cross-functional teams,
                        translating client requirements into technical specifications, and delivering high-quality
                        projects on time. My keen eye for detail and commitment to staying updated with the latest
                        industry trends enable me to incorporate the best practices and cutting-edge technologies into
                        my work.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.3}>
                        Driven by a passion for innovation and fueled by curiosity, I&apos;m always eager to explore new
                        technologies and tackle exciting challenges. Let&apos;s collaborate and transform your ideas
                        into reality!
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
                                                className="experiance-impact-item"
                                            >
                                                <div className="experiance-impact-icon">
                                                    <FiChevronRight />
                                                </div>
                                                <p>{impact}</p>
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
