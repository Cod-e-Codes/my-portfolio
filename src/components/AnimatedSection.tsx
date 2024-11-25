// components/AnimatedSection.tsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
    children: React.ReactNode;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation will trigger only once
        threshold: 0.2,    // 20% of the section is visible
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
