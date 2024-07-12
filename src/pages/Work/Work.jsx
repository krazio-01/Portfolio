import { useRef } from "react";
import { useScroll } from "framer-motion";
import AnimatedScrollComp from "../../components/animatedScrollComp/AnimatedScrollComp";
import { projects } from "./work-items";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Card from "../../components/card/Card";
import "./work.css";

const Work = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="work">
            <div className="work-header">
                <div className="work-title">
                    <h1>My work</h1>
                    <h3>A showcase of diverse and impactful projects</h3>
                </div>
                <AnimatedScrollComp text="" />
            </div>

            <div className="work-content">
                <div className="work-progress-bar">
                    <h4>My All Work</h4>
                    <ProgressBar />
                </div>
                <div ref={ref} className="work-cards">
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
        </div>
    );
};

export default Work;
