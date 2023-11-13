import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React, { useEffect, useRef } from "react";
import ParallaxDiv from "./ParallaxDiv";
import Line from "@/components/Line";
import Logo2 from "@/components/svg/Logo2";
import {
    ArrowLongDownIcon,
    ArrowLongRightIcon,
    ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useColor } from "@/components/Providers/ColorProvider";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Parallax() {
    return (
        <div
            style={{
                height: "1000vw",
                position: "relative",
                overflow: "hidden",
                background: "#111905",
            }}
        >
            <ParallaxImage
                marginTop={"-60vw"}
                scrollSpeed={0.24}
                src="/sky x2.png"
                height="200vw"
            />
            <ParallaxImage
                marginTop={"9vw"}
                scrollSpeed={0.28}
                src="/volc d.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"34vw"}
                scrollSpeed={0.33}
                src="/mounts d.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"15vw"}
                scrollSpeed={0.4}
                src="/hills c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"32vw"}
                scrollSpeed={0.48}
                src="/feild c.png"
                height="500vw"
            />

            <ParallaxImage
                marginTop={"40vw"}
                scrollSpeed={0.56}
                src="/farm hill 1.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"40vw"}
                scrollSpeed={0.56}
                src="/cacaos 1 c.png"
                height="500vw"
                fadeInThreshold={180}
            />

            <ParallaxImage
                marginTop={"105vw"}
                scrollSpeed={0.74}
                src="/trees 2 c.png"
                height="500vw"
            />

            <ParallaxImage
                marginTop={"75vw"}
                scrollSpeed={0.65}
                src="/farm hill 2 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"75vw"}
                scrollSpeed={0.65}
                src="/cacao 2 c.png"
                height="500vw"
                fadeInThreshold={260}
            />

            <ParallaxImage
                marginTop={"170vw"}
                scrollSpeed={0.89}
                src="/trees 3 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"120vw"}
                scrollSpeed={0.75}
                src="/farm hill 3 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"120vw"}
                scrollSpeed={0.75}
                src="/cacao 3 c.png"
                height="500vw"
                fadeInThreshold={340}
            />
            <ParallaxImage
                marginTop={"220vw"}
                scrollSpeed={0.87}
                src="/sill.png"
                height="500vw"
            />

            <ParallaxArrow />

            <ParallaxTitle />

            <ParallaxPreview
                marginTop={"200vw"}
                title="Costa Rican Origin"
                subTitle={["Soil", "beans", "ancient tradition"]}
                text="For thousands of years, ancient lava flows and volcanic ash have fed these lands with nutrients and minerals to form a rare type of soil called Andisol. This rich earth and year-round warm, tropical weather contribute to our cacao’s unique terroir."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"380vw"}
                title="Forests made of chocolate"
                subTitle={["Agroforestry", "Regenerative farming"]}
                text="For thousands of years, ancient lava flows and volcanic ash have fed these lands with nutrients and minerals to form a rare type of soil called Andisol. This rich earth and year-round warm, tropical weather contribute to our cacao’s unique terroir."
                href="/demo"
            />

            <ParallaxPreview
                marginTop={"580vw"}
                title="Direct Trade"
                subTitle={["Meet our farmers"]}
                text="For thousands of years, ancient lava flows and volcanic ash have fed these lands with nutrients and minerals to form a rare type of soil called Andisol. This rich earth and year-round warm, tropical weather contribute to our cacao’s unique terroir."
                href="/demo"
            />
        </div>
    );
}

const ParallaxImage = ({
    marginTop,
    scrollSpeed,
    src,
    height,
    fadeInThreshold,
}) => {
    return (
        <ParallaxDiv
            marginTop={marginTop}
            scrollSpeed={scrollSpeed}
            fadeInThreshold={fadeInThreshold}
        >
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: height,
                }}
            >
                <Image
                    src={src}
                    alt="sky"
                    fill
                    sizes="20vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        </ParallaxDiv>
    );
};

const ParallaxPreview = ({ marginTop, title, subTitle, text, href }) => {
    return (
        <ParallaxDiv marginTop={marginTop} scrollSpeed={1}>
            <div
                style={{
                    paddingInline: "3vw",
                    color: "#faf1e3",
                }}
            >
                <div
                    style={{
                        // width: "100%",
                        fontSize: "9vw",
                        fontWeight: "900",
                        lineHeight: "96%",
                        letterSpacing: "0.0em",
                        // textAlign: 'center',
                        textTransform: "uppercase",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        // width: "100%",
                        fontSize: "3.6vw",
                        fontWeight: "900",
                        lineHeight: "140%",
                        letterSpacing: "0.05em",
                        marginTop: "8vw",
                        // textAlign: 'center',
                        textTransform: "uppercase",
                    }}
                >
                    {subTitle.map((word, index, arr) => (
                        <span key={index}>
                            {index === arr.length - 1
                                ? " & "
                                : index > 0
                                ? ", "
                                : ""}
                            {/* {index === arr.length - 1 ? " & " : ''} */}
                            {word}
                            {/* <br /> */}
                        </span>
                    ))}
                </div>

                <div
                    style={{
                        // width: "100%",
                        fontSize: "3.8vw",
                        fontWeight: "200",
                        lineHeight: "150%",
                        letterSpacing: "0.02em",
                        marginTop: "2vw",
                        // textAlign: 'center',
                        // textTransform: "uppercase",
                    }}
                >
                    {text}
                </div>

                <Link
                    href={href}
                    style={{
                        marginTop: "7vw",
                        background: "#faf1e3",
                        color: "#000",
                        paddingBlock: "1.5vw",
                        borderRadius: "1vw",
                        paddingInline: "1vw",
                        width: "56vw",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2vw",
                    }}
                >
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "0.4vw",
                            fontSize: "4vw",
                            fontWeight: "400",
                            borderRadius: "2vw",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        Learn more
                    </div>
                    <ArrowLongRightIcon width={"6vw"} />
                </Link>
            </div>
        </ParallaxDiv>
    );
};

const ParallaxArrow = () => {
    return (
        <ParallaxDiv marginTop={"0vw"} scrollSpeed={1} fadeOutThreshold={1}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: "100vh",
                    paddingBottom: "26vw",
                    color: "white",
                    width: "100vw",
                }}
            >
                <div
                    style={{
                        fontSize: "4.5vw",
                        // fontWeight: 200,
                        // width: '20vw',
                        textAlign: "center",
                        // textTransform: "uppercase",
                    }}
                >
                    scroll to explore
                </div>
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        fontSize: "3vw",
                        marginTop: "5vw",
                        userSelect: "none",
                        cursor: "pointer",
                    }}
                >
                    <ChevronDoubleDownIcon height={"5vw"} />
                </motion.div>
            </div>
        </ParallaxDiv>
    );
};

const ParallaxTitle = () => {
    return (
        <ParallaxDiv
            marginTop={"14vw"}
            scrollSpeed={1}
            // fadeInThreshold={-100}
            // fadeOutThreshold={20}
        >
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingInline: "6vw",
                }}
            >
                <div
                    style={{
                        width: "36vw",
                    }}
                >
                    <Logo2 color={"#441812"} />
                </div>
                <Link
                    href="/shop/milk-bars"
                    style={{
                        marginTop: "8vw",
                        background: "#441812",
                        color: "#fff",
                        textTransform: "uppercase",
                        paddingBlock: "2.76vw",
                        borderRadius: "1vw",
                        paddingInline: "12vw",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2vw",
                    }}
                >
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "1vw",
                            fontSize: "4vw",
                            fontWeight: "200",
                            textTransform: "uppercase",
                            borderRadius: "2vw",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        view Our Collection
                    </div>
                    <ArrowLongRightIcon width={"6vw"} />
                </Link>
            </div>
        </ParallaxDiv>
    );
};
