import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Card from '../../components/card/Card';
import { projects } from './data';
import Img from '../../assets/images/me.webp';
import CircularButton from '../../components/circularButton/CircularButton';
import AnimatedWrapper from '../../components/animatedWrapper/AnimatedWrapper';
import Scribble from '../../components/Scribble/Scribble';
import resume from '../../../resume.pdf';
import { FaLink } from 'react-icons/fa6';
import './home.css';

const Home = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
        layoutEffect: false,
    });

    const basicInfo =
        'As a full-stack developer, I specialize in crafting modern web applications using React.js, Next.js and Angular for front-end development and Express.js for back-end solutions. With proficiency in MongoDB, I design efficient database systems to manage application data effectively. Additionally, I enhance user experience through fluid animations and interactive transitions using Framer Motion. My expertise lies in creating scalable, maintainable, and user-centric solutions tailored to meet the unique requirements of each project.';
    const words = basicInfo.split(' ');

    return (
        <>
            <div className="home-main">
                <div className="home-hero">
                    <div className="home-content">
                        <AnimatedWrapper className="home-title" delay={0.2} duration={1}>
                            <span className="home-title-greeting">Hi, my name is</span>
                            <Scribble variant="underline" wrapClassName="home-title-name-wrap" delay={1.2}>
                                <span className="home-title-name">Md Amman.</span>
                            </Scribble>
                        </AnimatedWrapper>
                        <AnimatedWrapper className="home-description" delay={0.4} duration={1}>
                            <p className="home-location">Full-Stack Developer from Jaipur, India</p>
                            <p>
                                One year in — I build the frontend, wire the backend, and close the{' '}
                                <Scribble variant="circle" wrapClassName="circle-annotate" delay={1.4}>
                                    loop
                                </Scribble>{' '}
                                myself. These are just the{' '}
                                <Scribble variant="highlight" delay={2}>
                                    highlights
                                </Scribble>
                                .
                            </p>
                        </AnimatedWrapper>
                        <AnimatedWrapper className="resume" delay={0.6} duration={1}>
                            <motion.a
                                href={resume}
                                download="Md_Amman_Resume.pdf"
                                rel="noopener noreferrer"
                                target="_blank"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                <span>Resume</span> <FaLink />
                            </motion.a>
                        </AnimatedWrapper>
                    </div>
                    <AnimatedWrapper className="home-img-wrapper" delay={0.6} duration={1}>
                        <motion.div className="home-img-hover-group" initial="rest" whileHover="hover">
                            <motion.span
                                className="home-img-annotation"
                                variants={{
                                    rest: { x: 0, y: 0, rotate: -6, scale: 1 },
                                    hover: { x: -16, y: -10, rotate: -15, scale: 1.06 },
                                }}
                                transition={{ type: 'spring', stiffness: 260, damping: 12 }}
                            >
                                (that&apos;s me!)
                            </motion.span>
                            <motion.div
                                className="home-img"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.05 },
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            >
                                <img src={Img} alt="Md Amman" />
                            </motion.div>
                        </motion.div>
                    </AnimatedWrapper>
                </div>
            </div>

            <div className="line" />

            <div className="home-basic-info">
                <div className="home-basic-info-inside">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: index * 0.015 }}
                            className="span-word"
                        >
                            {word}{' '}
                        </motion.span>
                    ))}
                </div>
                <div className="home-basic-info-btn">
                    <CircularButton tag="link" name="About" />
                </div>
            </div>

            <div className="line" />

            <div className="home-work-container">
                <div className="work-header">
                    <p>My Recent work</p>
                </div>
                <div className="home-work" ref={ref}>
                    {projects.map((project, index) => {
                        const targetScale = 1 - (projects.length - index) * 0.05;
                        return (
                            <Card
                                key={index}
                                index={index}
                                {...project}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
