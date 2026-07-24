import { useMemo, useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';

const defaultAnimationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { ease: 'easeOut' },
};

const springTransition = {
    type: 'spring',
    stiffness: 100,
};

const motionComponentCache = new Map();
const getMotionComponent = (as) => {
    if (!motionComponentCache.has(as)) motionComponentCache.set(as, motion(as));
    return motionComponentCache.get(as);
};

const AnimatedWrapper = memo((props) => {
    const {
        children,
        as = 'div',
        className,
        delay = 0,
        duration = 0.5,
        useSpring = false,
        inView = false,
        viewMargin = '-50px',
    } = props;

    const MotionComponent = getMotionComponent(as);

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: viewMargin, once: true });
    const shouldAnimate = inView ? isInView : true;

    const animationProps = useMemo(() => {
        return {
            initial: defaultAnimationProps.initial,
            animate: shouldAnimate ? defaultAnimationProps.animate : defaultAnimationProps.initial,
            transition: useSpring
                ? { ...springTransition, delay, duration }
                : { ...defaultAnimationProps.transition, delay, duration },
        };
    }, [useSpring, delay, duration, shouldAnimate]);

    return (
        <MotionComponent ref={ref} className={className} {...animationProps}>
            {children}
        </MotionComponent>
    );
});

AnimatedWrapper.displayName = 'AnimatedWrapper';

export default AnimatedWrapper;
