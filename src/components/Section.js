// import React from 'react';
// import Swatch2 from "@/components/svg/Swatch2";
// import Image from "next/image";
// import ParallaxComponent from '@/pages/ParallaxComponent';

// const Section = ({backgroundColor, textColor, title, children, imageUrl}) => (
//     <React.Fragment>
//         <ParallaxComponent marginTop={"85vw"} scrollSpeed={1}>
//             <Swatch2 color={backgroundColor} />
//             <div
//                 style={{
//                     paddingInline: "3vw",
//                     height: "1000vw",
//                 }}
//             >
//                 <div
//                     style={{
//                         fontSize: "21vw",
//                         color: textColor,
//                         fontWeight: "900",
//                         textTransform: "uppercase",
//                         lineHeight: "86%",
//                     }}
//                 >
//                     {title}
//                 </div>
//                 <div
//                     style={{
//                         marginTop: "10vw",
//                         fontSize: "5vw",
//                         color: textColor,
//                         lineHeight: "147%",
//                     }}
//                 >
//                     {children}
//                 </div>
//             </div>
//         </ParallaxComponent>
//         <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.8}>
//             <div
//                 style={{
//                     position: "relative",
//                     width: "100vw",
//                     height: "70vw",
//                 }}
//             >
//                 <Image
//                     src={imageUrl}
//                     alt="sky"
//                     fill
//                     sizes="100vw"
//                     priority
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />
//             </div>
//         </ParallaxComponent>
//     </React.Fragment>
// )

// export default Section;

import React, { useEffect, useRef } from "react";
import Swatch2 from "@/components/svg/Swatch2";
import Image from "next/image";
import ParallaxComponent from "@/pages/ParallaxComponent";
import { useColor } from "./Providers/ColorProvider";

const Section = ({
    backgroundColor,
    textColor,
    title,
    children,
    imageUrl,
    imageHeight,
    isHeader,
    noSwatch,
}) => {
    const { color, setColor } = useColor();

    // Reference to the section element
    const sectionRef = useRef(null);

    useEffect(() => {
        // Callback function to be run whenever the target appears or disappears from the viewport
        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setColor(backgroundColor);
            }
        };

        // Options for the Intersection Observer
        const options = {
            root: null, // Relative to the viewport
            threshold: 0,
            rootMargin: "-48% 0px -48% 0px",
        };

        // Create the Intersection Observer and observe the target element
        const observer = new IntersectionObserver(handleIntersection, options);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup function to unobserve the target when the component is unmounted
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [backgroundColor, setColor]);

    return (
        <div
            ref={sectionRef}
            style={{
                position: "relative",
            }}
        >
            {imageUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                        width: "100vw",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100vw",
                            height: imageHeight,
                            marginTop: !noSwatch ? "0vw" : "25vw",
                        }}
                    >
                        <Image
                            src={imageUrl}
                            alt="sky"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            )}
            <div
                style={{
                    marginBottom: "-26vw",
                }}
            >
                <div
                    style={{
                        height: !noSwatch
                            ? `calc(${imageHeight} - 30vw)`
                            : `calc(${imageHeight} - 5vw)`,
                    }}
                ></div>
                {!noSwatch && <Swatch2 color={backgroundColor} />}
                <div
                    style={{
                        backgroundColor: backgroundColor,
                        paddingInline: "3vw",
                        marginTop: !noSwatch ? "-58vw" : "10vw",
                        position: "relative",
                        zIndex: 2,
                        paddingTop: !noSwatch ? 0 : "6vw",
                        paddingBottom: !noSwatch ? 0 : "12vw",
                    }}
                >
                    {title && (
                        <div
                            style={{
                                fontSize: isHeader ? "20vw" : "13vw",
                                color: textColor,
                                // fontWeight: "900",
                                // textTransform: "uppercase",
                                // lineHeight: "140%",
                                marginBottom: "5vw",
                                marginTop: "5vw",
                                fontFamily: "pablo",
                            }}
                        >
                            {title}
                        </div>
                    )}
                    <div
                        style={{
                            fontSize: "5vw",
                            color: textColor,
                            lineHeight: "147%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5vw",
                        }}
                    >
                        {children}
                    </div>
                </div>
                <div
                    style={{
                        marginTop: !noSwatch ? "-45vw" : "-30vw",
                        width: "100%",
                        position: "relative",
                        zIndex: 0,
                    }}
                >
                    {!noSwatch && <Swatch2 color={backgroundColor} />}
                </div>
            </div>
        </div>
    );

    return (
        <div
            ref={sectionRef}
            style={{
                position: "relative",
            }}
        >
            {imageUrl && (
                <ParallaxComponent
                    marginTop={!noSwatch ? "0vw" : "25vw"}
                    scrollSpeed={0.8}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100vw",
                            height: imageHeight,
                        }}
                    >
                        <Image
                            src={imageUrl}
                            alt="sky"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </ParallaxComponent>
            )}
            <div
                style={{
                    marginBottom: "-26vw",
                }}
            >
                <div
                    style={{
                        height: !noSwatch
                            ? `calc(${imageHeight} - 30vw)`
                            : `calc(${imageHeight} - 5vw)`,
                    }}
                ></div>
                {!noSwatch && <Swatch2 color={backgroundColor} />}
                <div
                    style={{
                        backgroundColor: backgroundColor,
                        paddingInline: "3vw",
                        marginTop: !noSwatch ? "-58vw" : "10vw",
                        position: "relative",
                        zIndex: 2,
                        paddingTop: !noSwatch ? 0 : "6vw",
                        paddingBottom: !noSwatch ? 0 : "12vw",
                    }}
                >
                    {title && (
                        <div
                            style={{
                                fontSize: isHeader ? "13vw" : "8vw",
                                color: textColor,
                                fontWeight: "900",
                                textTransform: "uppercase",
                                lineHeight: "140%",
                                marginBottom: "5vw",
                                marginTop: "5vw",
                            }}
                        >
                            {title}
                        </div>
                    )}
                    <div
                        style={{
                            fontSize: "5vw",
                            color: textColor,
                            lineHeight: "147%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5vw",
                        }}
                    >
                        {children}
                    </div>
                </div>
                <div
                    style={{
                        marginTop: !noSwatch ? "-45vw" : "-30vw",
                        width: "100%",
                        position: "relative",
                        zIndex: 0,
                    }}
                >
                    {!noSwatch && <Swatch2 color={backgroundColor} />}
                </div>
            </div>
        </div>
    );
};

export default Section;
