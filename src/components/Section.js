import React, { useEffect, useRef } from "react";
import Swatch2 from "@/components/svg/Swatch2";
import Image from "next/image";
import ParallaxComponent from "@/pages/ParallaxComponent";
import { useColor } from "./Providers/ColorProvider";
import Swatch2Top from "./svg/Swatch2Top";
import Swatch2Bottom from "./svg/Swatch2Bottom";

const Section = ({
    backgroundColor,
    textColor,
    title,
    children,
    imageUrl,
    imageHeight,
    aspectRatio,
    isHeader,
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
                // position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: isHeader ? '4rem' : "clamp(-9rem,-30vw,0rem)",
                // marginTop: '4rem',
            }}
        >
            {imageUrl && (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        // height: imageHeight,
                        aspectRatio: aspectRatio,
                        zIndex: -1,
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
            )}
            <div
                style={{
                    marginTop: "-13vw",
                    marginTop: "clamp(-7rem,-13vw,0rem)",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "-1px",
                }}
            >
                <Swatch2Top color={backgroundColor} />
            </div>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    paddingInline: "3vw",
                    paddingTop: "1rem",
                    paddingBottom: "1.8rem",
                    // marginTop: "clamp(-100rem,-56vw,0rem)",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {title && (
                    <div
                        style={{
                            fontSize: isHeader ? "4.8rem" : "3.2rem",
                            color: textColor,
                            // fontWeight: "900",
                            // textTransform: "uppercase",
                            // lineHeight: "140%",
                            paddingBlock: "1rem",
                            marginBlock: "0.2rem",
                            fontFamily: "pablo",
                        }}
                    >
                        {title}
                    </div>
                )}
                <div
                    style={{
                        fontSize: "1.2rem",
                        color: textColor,
                        lineHeight: "147%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.2rem",
                    }}
                >
                    {children}
                </div>
            </div>
            <div
                style={{
                    marginTop: "-1px",
                    // marginTop: "clamp(-100rem,-48vw,-2rem)",
                    width: "100%",
                    position: "relative",
                    zIndex: 0,
                }}
            >
                <Swatch2Bottom color={backgroundColor} />
            </div>
        </div>
    );
};

export default Section;
