import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ParallaxPage = () => {
    const parallaxRef = useRef([]);

    const onScroll = () => {
        parallaxRef.current.forEach((ref, index) => {
            if (ref) {
                let translateY = 0;
                switch (index) {
                    case 0:
                        translateY = -(window.pageYOffset * -35) / 100;
                        break;
                    case 1:
                        translateY = -(window.pageYOffset * -28) / 100;
                        break;
                    case 2:
                        translateY = -(window.pageYOffset * -15) / 100;
                        break;
                    case 3:
                        translateY = -(window.pageYOffset * 0) / 100;
                        break;
                    case 4:
                        translateY = -(window.pageYOffset * 50) / 100;
                        break;
                    default:
                        break;
                }
                ref.style.transform = `translateY(${translateY}px)`;
            }
        });
    };
    

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div style={{ height: "517vw", position: "relative", overflow: 'hidden', }}>
            <div
                ref={(ref) => (parallaxRef.current[0] = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/sky.png"
                    alt="sky"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                ref={(ref) => (parallaxRef.current[1] = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/volcano.png"
                    alt="sky"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                ref={(ref) => (parallaxRef.current[2] = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/hills.png"
                    alt="sky"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                ref={(ref) => (parallaxRef.current[3] = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/hills 2.png"
                    alt="sky"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div
                ref={(ref) => (parallaxRef.current[4] = ref)}
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Image
                    src="/forrest.png"
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
    );
};

export default ParallaxPage;
