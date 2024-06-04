import "./loader.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Loader = ({ isLoading, setIsLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading();
        }, 1900);

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loader"
                    exit={{ y: "-42%", scale: 0.7 }}
                    key="motiondivleave"
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        width="429"
                        height="77.28720626631853"
                        viewBox="0 0 383 69"
                        className="looka-1j8o68f"
                    >
                        <defs id="SvgjsDefs2320"></defs>
                        <g
                            id="SvgjsG2321"
                            featurekey="rootContainer"
                            transform="matrix(1,0,0,1,0,0)"
                            fill="#ffffff"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                stroke="#ffffff"
                                fill="none"
                                d="  M0,0 H383 V69 H0,0 z M4,4 v61 h375 v-61 z"
                            ></motion.path>
                        </g>
                        <g
                            id="SvgjsG2322"
                            featurekey="nameFeature-0"
                            transform="matrix(1.6796318424150098,0,0,1.6796318424150098,13.170439847803866,-12.067886963155392)"
                            fill="#000000"
                        >
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                                fill="#ffffff"
                                d="M8.28 26.52 l0 13.48 l-6 0 l0 -24.48 l6 0 l7.64 13.52 l7.64 -13.52 l6 0 l0 24.48 l-6 0 l0 -13.48 l-4.64 7.96 l-6 0 z M43.557 40 l-8.6 0 l0 -24.48 l8.6 0 c7.48 0 12.6 4.88 12.6 12.24 c0 7.56 -5.4 12.24 -12.6 12.24 z M40.957 21.08 l0 13.36 l2.6 0 c4.24 0 6.6 -2.68 6.6 -6.68 c0 -0.92 -0.12 -1.76 -0.36 -2.6 c-1.04 -2.92 -3.32 -4.08 -6.24 -4.08 l-2.6 0 z M85.43100000000001 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M78.39100000000002 29.48 l5.08 0 l-2.52 -7.12 z M102.98800000000001 26.52 l0 13.48 l-6 0 l0 -24.48 l6 0 l7.64 13.52 l7.64 -13.52 l6 0 l0 24.48 l-6 0 l0 -13.48 l-4.64 7.96 l-6 0 z M135.66500000000002 26.52 l0 13.48 l-6 0 l0 -24.48 l6 0 l7.64 13.52 l7.64 -13.52 l6 0 l0 24.48 l-6 0 l0 -13.48 l-4.64 7.96 l-6 0 z M177.502 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M170.46200000000002 29.48 l5.08 0 l-2.52 -7.12 z M204.65900000000002 15.52 l6 0 l0 24.48 l-6 0 l-9.6 -14.32 l0 14.32 l-6 0 l0 -24.48 l6 0 l9.6 14.32 l0 -14.32 z"
                            ></motion.path>
                        </g>
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
