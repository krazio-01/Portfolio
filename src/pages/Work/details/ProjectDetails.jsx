import './projectDetails.css';
import { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedWrapper from '../../../components/animatedWrapper/AnimatedWrapper';
import {
    FaNodeJs,
    FaReact,
    FaJs,
    FaEye,
    FaArrowRight,
    FaGooglePlus,
    FaChartLine,
    FaShieldAlt,
    FaCubes,
    FaCreditCard,
    FaFilePdf,
    FaLock,
    FaServer,
} from 'react-icons/fa';
import {
    SiMongodb,
    SiExpress,
    SiSocketdotio,
    SiCloudinary,
    SiRedis,
    SiWebrtc,
    SiThemoviedatabase,
} from 'react-icons/si';
import { LuGithub } from 'react-icons/lu';
import { FiFramer } from 'react-icons/fi';
import { RiNextjsLine } from 'react-icons/ri';
import { projects } from '../../../data/projects';
import images from './imgs';

const TECH_META = {
    React: { icon: FaReact, category: 'Frontend' },
    'Next.js': { icon: RiNextjsLine, category: 'Frontend' },
    Zustand: { icon: FaCubes, category: 'Frontend' },
    Recharts: { icon: FaChartLine, category: 'Frontend' },
    'Framer Motion': { icon: FiFramer, category: 'Frontend' },
    JavaScript: { icon: FaJs, category: 'Frontend' },
    'Node.js': { icon: FaNodeJs, category: 'Backend' },
    'Express.js': { icon: SiExpress, category: 'Backend' },
    MongoDB: { icon: SiMongodb, category: 'Data & real-time' },
    Redis: { icon: SiRedis, category: 'Data & real-time' },
    'Socket.io': { icon: SiSocketdotio, category: 'Data & real-time' },
    WebRTC: { icon: SiWebrtc, category: 'Data & real-time' },
    NextAuth: { icon: FaShieldAlt, category: 'Auth & payments' },
    PayGlocal: { icon: FaCreditCard, category: 'Auth & payments' },
    'Google Gemini API': { icon: FaGooglePlus, category: 'AI & external APIs' },
    TMDB: { icon: SiThemoviedatabase, category: 'AI & external APIs' },
    Vidsrc: { icon: FaServer, category: 'AI & external APIs' },
    Cloudinary: { icon: SiCloudinary, category: 'Media & docs' },
    'pdf-lib': { icon: FaFilePdf, category: 'Media & docs' },
};

const CATEGORY_ORDER = [
    'Frontend',
    'Backend',
    'Data & real-time',
    'Auth & payments',
    'AI & external APIs',
    'Media & docs',
];

const CtaButton = ({ href, icon: Icon, label, variant }) =>
    href ? (
        <a href={href} target="_blank" rel="noreferrer" className={`btn btn--${variant}`}>
            <Icon />
            <span>{label}</span>
        </a>
    ) : (
        <div className="btn btn--disabled">
            <Icon />
            <span>{label}</span>
        </div>
    );

const ProjectDetails = () => {
    const { projectName } = useParams();
    const currentIndex = useMemo(() => projects.findIndex((proj) => proj.title === projectName), [projectName]);
    const project = projects[currentIndex];

    const separateLetters = useMemo(() => projectName.split(''), [projectName]);
    const shots = useMemo(() => images[projectName] || [], [projectName]);
    const [activeShot, setActiveShot] = useState(0);

    useEffect(() => {
        shots.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [shots]);

    const techByCategory = useMemo(() => {
        const grouped = {};
        (project?.technologies || []).forEach((tech) => {
            const category = TECH_META[tech]?.category;
            if (!category) return;
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push(tech);
        });
        return CATEGORY_ORDER.map((category) => ({ category, items: grouped[category] || [] })).filter(
            (group) => group.items.length > 0,
        );
    }, [project]);

    const hostname = useMemo(() => (project?.viewLink ? new URL(project.viewLink).hostname : null), [project]);

    if (!project) {
        return (
            <div className="project-details">
                <p className="project-tagline-lead">Couldn&apos;t find that project.</p>
                <Link to="/work" className="btn btn--ghost">
                    <span>Back to work</span>
                    <FaArrowRight />
                </Link>
            </div>
        );
    }

    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <div className="project-details">
            <div className="project-header">
                <ul>
                    {separateLetters.map((letter, index) => (
                        <motion.li
                            initial={{ y: index % 2 === 0 ? -10 : 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: (index + 5) * 0.08,
                                type: 'spring',
                                stiffness: 400,
                            }}
                            key={index}
                        >
                            <span style={{ whiteSpace: 'pre' }}>{letter === ' ' ? '\u00A0' : letter}</span>
                        </motion.li>
                    ))}
                </ul>
                {project.stamp && (
                    <motion.span
                        className="project-stamp"
                        initial={{ opacity: 0, scale: 2, rotate: -6 }}
                        animate={{ opacity: 1, scale: 1, rotate: -6 }}
                        transition={{ delay: 0.9, type: 'spring', stiffness: 320, damping: 16 }}
                    >
                        {project.stamp}
                    </motion.span>
                )}
            </div>

            {project.note && (
                <AnimatedWrapper as="p" className="project-note" delay={1.2} duration={0.4}>
                    (and yeah — {project.note})
                </AnimatedWrapper>
            )}

            <AnimatedWrapper as="p" className="project-tagline-lead" delay={0.6} duration={0.6}>
                {project.tagline}
            </AnimatedWrapper>

            <AnimatedWrapper className="cta-row cta-row--hero" delay={0.7} duration={0.6}>
                <CtaButton href={project.viewLink} icon={FaEye} label="Live Demo" variant="primary" />
                <CtaButton href={project.codeLink} icon={LuGithub} label="Source Code" variant="secondary" />
            </AnimatedWrapper>

            {shots.length > 0 && (
                <div className="project-gallery">
                    <div className="browser-frame">
                        <div className="browser-bar">
                            <div className="browser-dots">
                                <span />
                                <span />
                                <span />
                            </div>
                            {hostname && (
                                <span className="browser-url">
                                    <FaLock />
                                    <span className="browser-url-text">{hostname}</span>
                                </span>
                            )}
                        </div>
                        <div className="shot-wrap">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeShot}
                                    src={shots[activeShot]}
                                    alt={`${projectName} screenshot ${activeShot + 1}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    {project.shotCaptions?.length > 0 && (
                        <p className="gallery-caption">{project.shotCaptions[activeShot] || ''}</p>
                    )}

                    {shots.length > 1 && (
                        <div className="thumb-rail">
                            {shots.map((shot, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`thumb${index === activeShot ? ' thumb--active' : ''}`}
                                    onClick={() => setActiveShot(index)}
                                    aria-label={`Show screenshot ${index + 1}`}
                                >
                                    <img src={shot} alt="" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="project-description">
                <AnimatedWrapper inView useSpring className="project-overview">
                    <h2>Overview</h2>
                    <p>{project.description}</p>
                </AnimatedWrapper>

                {project.highlights?.length > 0 && (
                    <div className="project-highlights">
                        <AnimatedWrapper as="h2" inView>
                            Highlights
                        </AnimatedWrapper>
                        <div className="highlight-grid">
                            {project.highlights.map((item, index) => (
                                <AnimatedWrapper
                                    as="div"
                                    key={index}
                                    inView
                                    delay={index * 0.15}
                                    useSpring
                                    className="highlight-card"
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </AnimatedWrapper>
                            ))}
                        </div>
                    </div>
                )}

                <div className="project-tech">
                    <AnimatedWrapper as="h2" inView>
                        Technologies
                    </AnimatedWrapper>
                    <div className="tech-groups">
                        {techByCategory.map(({ category, items }, index) => (
                            <AnimatedWrapper
                                as="div"
                                key={category}
                                inView
                                delay={index * 0.15}
                                useSpring
                                className="tech-group"
                            >
                                <span className="tech-label">{category}</span>
                                <div className="chip-row">
                                    {items.map((tech) => {
                                        const IconComponent = TECH_META[tech]?.icon;
                                        return (
                                            <span className="tech-chip" key={tech}>
                                                {IconComponent && <IconComponent />}
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>

                <div className="cta-row cta-row--footer">
                    <div className="cta-group">
                        <CtaButton href={project.viewLink} icon={FaEye} label="Live Demo" variant="primary" />
                        <CtaButton href={project.codeLink} icon={LuGithub} label="Source Code" variant="secondary" />
                    </div>
                    <Link to={`/work/${nextProject.title}`} className="btn btn--ghost">
                        <span>Next Project</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
