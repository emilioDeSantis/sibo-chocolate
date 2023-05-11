import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ParallaxDiv = ({children, scrollSpeed, marginTop}) => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [{ springScrollOffset }, setSpring] = useSpring(() => ({ springScrollOffset: 0 }));

    setSpring({ springScrollOffset: scrollOffset });

    const style = {
        position: 'fixed',
        transform: springScrollOffset.to(value => `translateY(${-value * scrollSpeed}px)`),
        marginTop: marginTop,
        willChange: 'transform'
    };

    return (
        <animated.div style={style}>
            {children}
        </animated.div>
    );
}

export default ParallaxDiv;

