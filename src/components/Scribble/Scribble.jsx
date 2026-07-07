import { motion } from 'framer-motion';

const PRESETS = {
    underline: {
        kind: 'stroke',
        viewBox: '0 0 260 20',
        d: 'M4 12 C 40 4, 80 18, 120 8 S 200 4, 256 10',
        strokeWidth: 3,
        svgClassName: 'signature-underline',
        finalOpacity: 1,
        duration: 0.8,
    },
    circle: {
        kind: 'stroke',
        viewBox: '0 0 100 50',
        d: 'M50 6 C 20 2, 2 18, 6 30 C 10 44, 35 50, 55 46 C 78 42, 96 28, 90 14 C 86 4, 65 -2, 48 4 C 45 5, 44 8, 47 9',
        strokeWidth: 2.5,
        svgClassName: 'circle-annotate-svg',
        finalOpacity: 0.9,
        duration: 0.6,
    },
    highlight: {
        kind: 'fill',
        maskUrl:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 34' preserveAspectRatio='none'%3E%3Cpath d='M3 10 Q15 2,30 7 T60 5 Q75 9,97 6 Q100 18,96 26 Q80 32,55 29 T20 30 Q5 28,2 18 Z' fill='black'/%3E%3C/svg%3E\")",
        opacity: 0.4,
        duration: 0.6,
    },
};

const FALLBACKS = {
    stroke: { strokeWidth: 2.5, svgClassName: '', finalOpacity: 1, duration: 0.6 },
    fill: { opacity: 0.4, duration: 0.6 },
};

const FILL_WRAP_STYLE = {
    position: 'relative',
    display: 'inline-block',
    padding: '0.05em 0.3em',
    margin: '0 -0.15em',
};
const FILL_TEXT_STYLE = { position: 'relative', zIndex: 1 };
const FILL_EASE = [0.34, 1.2, 0.64, 1];

const pickDefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined));

const Scribble = ({
    variant,
    viewBox,
    d,
    strokeWidth,
    svgClassName,
    finalOpacity,
    maskUrl,
    opacity,
    duration,
    color = 'var(--accent)',
    wrapClassName = '',
    as: Tag = 'span',
    delay = 1.2,
    children,
}) => {
    const preset = variant ? PRESETS[variant] : undefined;
    const kind = preset?.kind ?? (maskUrl ? 'fill' : 'stroke');

    const resolved = {
        ...FALLBACKS[kind],
        ...preset,
        ...pickDefined({ viewBox, d, strokeWidth, svgClassName, finalOpacity, maskUrl, opacity, duration }),
    };

    const isRenderable = kind === 'fill' ? Boolean(resolved.maskUrl) : Boolean(resolved.viewBox && resolved.d);
    if (!isRenderable) {
        if (import.meta.env?.DEV) {
            console.warn(
                `Scribble: kind="${kind}" (variant="${variant}") is missing required shape props — rendering children only.`,
            );
        }
        return <Tag className={wrapClassName}>{children}</Tag>;
    }

    if (kind === 'fill') {
        return (
            <Tag className={wrapClassName} style={FILL_WRAP_STYLE}>
                <motion.span
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        backgroundColor: color,
                        opacity: resolved.opacity,
                        WebkitMask: `${resolved.maskUrl} no-repeat`,
                        mask: `${resolved.maskUrl} no-repeat`,
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        transformOrigin: 'left center',
                        pointerEvents: 'none',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: resolved.duration, delay, ease: FILL_EASE }}
                />
                <span style={FILL_TEXT_STYLE}>{children}</span>
            </Tag>
        );
    }

    return (
        <Tag className={wrapClassName}>
            {children}
            <motion.svg className={resolved.svgClassName} viewBox={resolved.viewBox} preserveAspectRatio="none">
                <motion.path
                    d={resolved.d}
                    fill="none"
                    strokeWidth={resolved.strokeWidth}
                    strokeLinecap="round"
                    style={{ stroke: color }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: resolved.finalOpacity }}
                    transition={{ duration: resolved.duration, delay, ease: 'easeInOut' }}
                />
            </motion.svg>
        </Tag>
    );
};

export default Scribble;
