import { motion } from "framer-motion";
import AnimatedScrollComponent from "../../components/animatedScrollComp/AnimatedScrollComp";
import AnimatedWrapper from "../../components/animatedWrapper/AnimatedWrapper";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import "./about.css";

const mySkills = [
    { name: "HTML", icon: <FaHtml5 style={{ color: "#e44f26" }} /> },
    { name: "CSS", icon: <FaCss3 style={{ color: "#2965f1" }} /> },
    { name: "Javascript", icon: <IoLogoJavascript style={{ color: "#F7DF1E" }} /> },
    { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { name: "Node.js", icon: <FaNodeJs style={{ color: "#3c873a" }} /> },
    { name: "Git", icon: <FaGitAlt style={{ color: "#f1502f" }} /> },
    { name: "MongoDB", icon: <BiLogoMongodb style={{ color: "#47A248" }} /> },
    { name: "Express.js", icon: <SiExpress style={{ color: "#000" }} /> },
    { name: "Framer Motion", icon: <FiFramer style={{ color: "#000" }} /> },
    { name: "TypeScript", icon: <BiLogoTypescript style={{ color: "#3178C6" }} /> },
    { name: "Java", icon: <FaJava style={{ color: "#f89820" }} /> },
];

const About = () => {
    return (
        <div>
            <div className="bio">
                <div className="bio-left">
                    <AnimatedWrapper as="h2" delay={0.5} duration={0.7}>
                        BIOGRAPHY
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.7}>
                        Hello! My name is <span>Amman</span> and I enjoy creating things that live
                        on the internet. My interest in web development started back in 2021
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={0.9}>
                        My web development journey has equipped me with skills in both front-end and
                        back-end technologies. I create responsive applications using{" "}
                        <span>React.js</span> and ensure robust server functionality with{" "}
                        <span>Node.js </span> and <span>Express.js</span>. Using{" "}
                        <span>MongoDB</span>, I manage data efficiently for scalability and
                        performance.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.1}>
                        In addition to my technical skills, I am adept at collaborating with
                        cross-functional teams, translating client requirements into technical
                        specifications, and delivering high-quality projects on time. My keen eye
                        for detail and commitment to staying updated with the latest industry trends
                        enable me to incorporate the best practices and cutting-edge technologies
                        into my work.
                    </AnimatedWrapper>
                    <AnimatedWrapper as="p" delay={1.3}>
                        Driven by a passion for innovation and fueled by curiosity, I'm always eager
                        to explore new technologies and tackle exciting challenges. Let's
                        collaborate and transform your ideas into reality!
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
                <div className="skill-left">
                    <h2>SKILLS</h2>
                    <div className="skills-container">
                        {mySkills.map((obj, index) => (
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.07,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                key={index}
                                className="skill-container"
                            >
                                <span>{obj.icon}</span>
                                <p>{obj.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="skill-right">
                    <div>
                        <AnimatedScrollComponent text="Let's see my Experience" />
                    </div>
                </div>
            </div>

            <div className="line" />

            <div className="experiance">
                <div className="experiance-left">
                    <h2>EXPERIENCE</h2>
                    <div className="experiance-container">
                        <div>
                            <h4>Full Stack Developer</h4>
                            <p>Tag. 11 Softech Pvt. Ltd</p>
                        </div>
                        <div>
                            <span>2022-2023</span>
                        </div>
                    </div>
                </div>
                <div className="experiance-right">
                    <div>
                        <AnimatedScrollComponent text="Contact me" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
