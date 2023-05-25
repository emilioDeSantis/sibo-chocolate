
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useWindowSize from '@/components/hooks/useWindowSize';


const ParallaxDiv = ({children, scrollSpeed, marginTop, fadeInThreshold, fadeOutThreshold}) => {
    const [scrollOffset, setScrollOffset] = useState(0);
    const [vwToPixels, setVwToPixels] = useState(0);
    const size = useWindowSize()

    useEffect(() => {
        console.log(size);
        setVwToPixels({
            fadeIn: fadeInThreshold? fadeInThreshold * (size.width / 100) : -1000,
            fadeOut: fadeOutThreshold? fadeOutThreshold * (size.width / 100) : 1000000
        });
    }, [fadeInThreshold, fadeOutThreshold]);

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
        willChange: 'transform opacity',
        transition: 'opacity 1.2s ease-in-out',
        opacity: springScrollOffset.to(value => {
            if (value >= vwToPixels.fadeIn && value <= vwToPixels.fadeOut) {
                return 1;
            } else {
                return 0;
            }
        }),
    };

    return (
        <animated.div style={style}>
            {children}
        </animated.div>
    );
}

export default ParallaxDiv;