
// import React, { useEffect, useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import useWindowSize from '@/components/hooks/useWindowSize';


// const ParallaxDiv = ({children, scrollSpeed, marginTop, fadeInThreshold, fadeOutThreshold}) => {
//     const [scrollOffset, setScrollOffset] = useState(0);
//     const [vwToPixels, setVwToPixels] = useState(0);
//     const size = useWindowSize()

//     useEffect(() => {
//         console.log(size);
//         setVwToPixels({
//             fadeIn: fadeInThreshold? fadeInThreshold * (size.width / 100) : -1000,
//             fadeOut: fadeOutThreshold? fadeOutThreshold * (size.width / 100) : 1000000
//         });
//     }, [fadeInThreshold, fadeOutThreshold]);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollOffset(window.pageYOffset);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);


//     const [{ springScrollOffset }, setSpring] = useSpring(() => ({ springScrollOffset: 0 }));

//     setSpring({ springScrollOffset: scrollOffset });

//     // const style = {
//     //     position: 'fixed',
//     //     transform: springScrollOffset.to(value => `translateY(${-value * scrollSpeed}px)`),
//     //     marginTop: marginTop,
//     //     willChange: 'transform opacity',
//     //     transition: 'opacity 1.2s ease-in-out',
//     //     opacity: springScrollOffset.to(value => {
//     //         if (value >= vwToPixels.fadeIn && value <= vwToPixels.fadeOut) {
//     //             return 1;
//     //         } else {
//     //             return 0;
//     //         }
//     //     }),
//     // };

//     const style = {
//         position: 'fixed',
//         transform: `translateY(${-scrollOffset * scrollSpeed}px)`,
//         marginTop: marginTop,
//         willChange: 'transform opacity',
//         transition: 'opacity 1.2s ease-in-out',
//     };

//     return (
//         <animated.div style={style}>
//             {children}
//         </animated.div>
//     );
// }

// export default ParallaxDiv;




import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useWindowSize from '@/components/hooks/useWindowSize';

const ParallaxDiv = ({children, scrollSpeed, marginTop, fadeInThreshold, fadeOutThreshold}) => {
    const [scrollOffset, setScrollOffset] = useState(0);
    const [vwToPixels, setVwToPixels] = useState({fadeIn: -1000, fadeOut: 1000000});
    const size = useWindowSize()
    const pendingOffsetUpdate = useRef(null);  // We'll store our pending update here

    useEffect(() => {
        setVwToPixels({
            fadeIn: fadeInThreshold ? fadeInThreshold * (size.width / 100) : -1000,
            fadeOut: fadeOutThreshold ? fadeOutThreshold * (size.width / 100) : 1000000
        });
    }, [fadeInThreshold, fadeOutThreshold, size]);

    useEffect(() => {
        const handleScroll = () => {
            // If there's a pending update, cancel it
            if (pendingOffsetUpdate.current !== null) {
                cancelAnimationFrame(pendingOffsetUpdate.current);
            }

            // Schedule an update
            pendingOffsetUpdate.current = requestAnimationFrame(() => {
                setScrollOffset(window.pageYOffset);
                pendingOffsetUpdate.current = null;  // The update has been applied
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const style = {
        position: 'fixed',
        transform: `translateY(${-scrollOffset * scrollSpeed}px)`,
        marginTop: marginTop,
        willChange: 'transform',
    };

    return (
        <animated.div style={style}>
            {children}
        </animated.div>
    );
}

export default ParallaxDiv;

