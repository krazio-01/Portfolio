import React, { useMemo } from "react";
import { motion } from "framer-motion";

const defaultAnimationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { ease: "easeOut" },
};

const springTransition = {
    type: "spring",
    stiffness: 100,
};

const AnimatedWrapper = React.memo((props) => {
    const { children, as = "div", className, delay = 0, duration = 0.5, useSpring = false } = props;

    const MotionComponent = motion(as);

    const animationProps = useMemo(() => {
        return {
            ...defaultAnimationProps,
            transition: useSpring
                ? { ...springTransition, delay, duration }
                : { ...defaultAnimationProps.transition, delay, duration },
        };
    }, [useSpring, delay, duration]);

    return (
        <MotionComponent className={className} {...animationProps}>
            {children}
        </MotionComponent>
    );
});

export default AnimatedWrapper;
