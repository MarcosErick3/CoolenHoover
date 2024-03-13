// src/components/AnimatedSection.js
import { useState, useRef } from 'react';
import PropTypes from 'prop-types'; 
import { useSpring, animated, config } from 'react-spring';
import useOnScreen from '../utils/useOnScreen';

function AnimatedSection({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const onScreen = useOnScreen(ref);

    const animation = useSpring({
        opacity: isVisible ? 1.5 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: config.molasses,
    });

    if (onScreen && !isVisible) {
        setIsVisible(true);
    }

    return (
        <animated.div ref={ref} style={animation} className="section">
            {children}
        </animated.div>
    );
}

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AnimatedSection;
