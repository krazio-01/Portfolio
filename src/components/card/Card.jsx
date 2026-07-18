import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTransform, motion, useScroll } from 'framer-motion';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa6';
import './card.css';

const DESKTOP_STACK_COUNT = 4;
const MOBILE_STACK_COUNT = 3;

const formatStack = (list, count) => {
    const visible = list.slice(0, count);
    const hidden = list.length - visible.length;
    return `${visible.join(' \u00b7 ')}${hidden > 0 ? ` +${hidden}` : ''}`;
};

const Card = ({
    index,
    title,
    tagline,
    description,
    src,
    technologies = [],
    note,
    stamp,
    viewLink,
    codeLink,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const [noteOpen, setNoteOpen] = useState(false);

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    const stackDesktop = formatStack(technologies, DESKTOP_STACK_COUNT);
    const stackMobile = formatStack(technologies, MOBILE_STACK_COUNT);

    return (
        <div ref={container} className="cardContainer">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${index * 20}px)`,
                }}
                className="card"
            >
                <span className="card-tab" style={{ left: `calc(4% + ${index * 16}%)` }}>
                    <span className="tab-num">{String(index + 1).padStart(2, '0')}</span>
                    {title}
                </span>

                {stamp && (
                    <motion.span
                        className="card-stamp"
                        style={{ rotate: -12 }}
                        initial={{ opacity: 0, scale: 2.4 }}
                        whileInView={{ opacity: 0.85, scale: 1 }}
                        viewport={{ once: true, margin: '-15% 0px' }}
                        transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 0.25 }}
                    >
                        {stamp}
                    </motion.span>
                )}

                <h2>{title}</h2>
                <div className="body">
                    <div className="description">
                        <p>{tagline}</p>

                        <div className="desc-links">
                            <Link
                                to={{
                                    pathname: `/work/${title}`,
                                    state: {
                                        title,
                                        tagline,
                                        description,
                                        src,
                                        viewLink,
                                        codeLink,
                                    },
                                }}
                            >
                                <FaInfo />
                                <span>Project Info</span>
                            </Link>
                            {viewLink ? (
                                <a href={viewLink} target="_blank" rel="noopener noreferrer">
                                    <FaEye />
                                    <span>Live Demo</span>
                                </a>
                            ) : (
                                <div className="disabled-link">
                                    <FaEye />
                                    <span>Live Demo</span>
                                </div>
                            )}
                            {codeLink ? (
                                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                    <span>Source Code</span>
                                </a>
                            ) : (
                                <div className="disabled-link">
                                    <FaExternalLinkAlt />
                                    <span>Source Code</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="imageContainer">
                        <motion.div className="inner" style={{ scale: imageScale }}>
                            <img src={src} alt={`${title} preview`} />
                        </motion.div>

                        {note && (
                            <button
                                type="button"
                                className={`note-pin${noteOpen ? ' is-open' : ''}`}
                                onClick={() => setNoteOpen((prev) => !prev)}
                                aria-label={noteOpen ? 'Hide note' : 'Show note'}
                            >
                                <span className="pin-dot" />
                                <span className="pin-text">{note}</span>
                            </button>
                        )}
                    </div>
                </div>

                <div className="card-meta">
                    <span className="meta-no">N&ordm; {String(index + 1).padStart(2, '0')}</span>
                    {technologies.length > 0 && (
                        <>
                            <span className="meta-stack meta-stack-desktop">{stackDesktop}</span>
                            <span className="meta-stack meta-stack-mobile">{stackMobile}</span>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
