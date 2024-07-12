import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Card from "../../components/card/Card";
import { projects } from "./data";
import Img from "../../assets/images/me.webp";
import CircularButton from "../../components/circularButton/CircularButton";
import AnimatedWrapper from "../../components/animatedWrapper/AnimatedWrapper";
import resume from "../../../resume.pdf";
import { FaLink } from "react-icons/fa6";
import "./home.css";

const Home = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
        layoutEffect: false,
    });

    const basicInfo =
        "As a professional full-stack developer, I specialize in crafting modern web applications using React.js for front-end development and Express.js for back-end solutions. With proficiency in MongoDB, I design efficient database systems to manage application data effectively. Additionally, I enhance user experience through fluid animations and interactive transitions using Framer Motion. My expertise lies in creating scalable, maintainable, and user-centric solutions tailored to meet the unique requirements of each project.";
    const words = basicInfo.split(" ");

    return (
        <>
            <div className="home-main">
                <div className="home-hero">
                    <div className="home-content">
                        <AnimatedWrapper className="home-title" delay={0.2} duration={1}>
                            <span>Hi, my name is</span>
                            <span>Md Amman.</span>
                        </AnimatedWrapper>

                        <AnimatedWrapper className="home-description" delay={0.4} duration={1}>
                            <p>
                                As a versatile Software Engineer and Full-Stack Developer, I build
                                user-centric applications, leveraging my expertise in web
                                development, Java, and Unreal Engine. I am passionate about
                                problem-solving and staying current, ensuring high-quality solutions
                                across diverse projects.
                            </p>
                        </AnimatedWrapper>

                        <AnimatedWrapper className="resume" delay={0.6} duration={1}>
                            <a
                                href={resume}
                                download="resume.pdf"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <span>Resume</span> <FaLink />
                            </a>
                        </AnimatedWrapper>
                    </div>

                    <AnimatedWrapper className="home-img" delay={0.6} duration={1}>
                        <img src={Img} alt="img1" />
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
                            {word}{" "}
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
