import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import AnimatedScrollComp from '../../components/animatedScrollComp/AnimatedScrollComp';
import { projects } from '../../data/projects';
import ProgressBar from '../../components/progressBar/ProgressBar';
import Card from '../../components/card/Card';
import Scribble from '../../components/Scribble/Scribble';
import './work.css';

const Work = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    const { scrollYProgress: barProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    return (
        <div className="work">
            <div className="work-header">
                <div className="work-title">
                    <span className="work-eyebrow">Selected work</span>
                    <h1>Things I&apos;ve built</h1>
                    <h3>
                        A few things worth showing —{' '}
                        <Scribble variant="circle" wrapClassName="work-count" delay={1.2}>
                            {projects.length}
                        </Scribble>{' '}
                        of them, and the stories behind each one.
                    </h3>
                </div>
                <AnimatedScrollComp text="" />
            </div>
            <div className="work-content">
                <div className="work-progress-rail">
                    <div className="work-progress-bar">
                        <h4>Everything I&apos;ve shipped</h4>
                        <ProgressBar progress={barProgress} />
                    </div>
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
