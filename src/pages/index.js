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
import Canopy from "@/components/svg/Canopy";
import Treetops from "@/components/svg/Treetops";
import Volcano from "@/components/svg/Volcano";
import Mountains from "@/components/svg/Mountains";
import Hills from "@/components/svg/Hills";
import LeavesDark from "@/components/svg/LeavesDark";
import Tree from "@/components/svg/Tree";
import PodsBack from "@/components/svg/PodsBack";
import PodsMiddle from "@/components/svg/PodsMiddle";
import PodsFront from "@/components/svg/PodsFront";
import LeavesFront from "@/components/svg/LeavesFront";
import LeavesMiddle from "@/components/svg/LeavesMiddle";
import TreesBack from "@/components/svg/TreesBack";
import Foliage from "@/components/svg/Foliage";
import Cloud from "@/components/svg/Cloud";
import Farmer from "@/components/svg/Farmer";
import FarmHill from "@/components/svg/FarmHill";
import FarmHill2 from "@/components/svg/FarmHill2";
import FoliageBottom from "@/components/svg/FoliageBottom";
import ParallaxComponent from "./ParallaxComponent";
import JungleBack from "@/components/svg/JungleBack";
import Lotus from "@/components/svg/Lotus";
import CacaoPod from "@/components/svg/CacaoPod";
import JungleFront from "@/components/svg/JungleFront";
import JungleBottom from "@/components/svg/JungleBottom";
import Layout from "@/components/Layout";
import Pattern2 from "@/components/Pattern2";
import categories from "@/data/categories";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {

    const {setColor} = useColor()

    useEffect(() => {
        setColor('#100606')
    }, [])
    return (
        <div
            style={{
                perspective: "1px",
                height: "100vh",
                overflowX: "hidden",
                overflowY: "scroll",
                transformStyle: "preserve-3d",
                width: "100vw",
                background: "#100606",
            }}
        >
            <Layout>
                <ParallaxComponent marginTop={"280vw"} scrollSpeed={0.8}>
                    <div
                        style={{
                            background: "#FFE2B7",
                            position: "relative",
                            height: "200vw",
                        }}
                    >
                        <div
                            style={{
                                height: "1.6vw",
                            }}
                        />
                        <Pattern2 color={"#FFD79A"} />
                        <Pattern2 color={"#FFD79A"} />
                        <Pattern2 color={"#FFD79A"} />
                        <Pattern2 color={"#FFD79A"} />
                        <Pattern2 color={"#FFD79A"} />
                    </div>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"380vw"} scrollSpeed={1}>
                    <div
                        style={{
                            textTransform: "uppercase",
                            border: "none",
                            color: "#3A2423",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: "9vw",
                            lineHeight: "100%",
                            marginInline: "3vw",
                        }}
                    >
                        the world of costa rican chocolate
                    </div>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"370vw"} scrollSpeed={0.85}>
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <Volcano color={"#B37A52"} />
                    </div>
                    <div
                        style={{
                            width: "100vw",
                            height: "40vw",
                            background: "#B37A52",
                            position: "absolute",
                            marginTop: "-5vw",
                        }}
                    />
                </ParallaxComponent>

                <ParallaxComponent
                    marginTop={"400vw"}
                    scrollSpeed={0.9}
                >
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <Mountains color={"#7A4B37"} />
                    </div>
                    <div
                        style={{
                            width: "100vw",
                            height: "40vw",
                            background: "#7A4B37",
                            position: "absolute",
                            marginTop: "-5vw",
                        }}
                    />
                </ParallaxComponent>

                <ParallaxComponent marginTop={"500vw"} scrollSpeed={0.95}>
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <Hills color={"#52312A"} />
                    </div>
                    <div
                        style={{
                            width: "100vw",
                            height: "40vw",
                            background: "#52312A",
                            position: "absolute",
                            marginTop: "-5vw",
                        }}
                    />
                </ParallaxComponent>

                <ParallaxComponent marginTop={"530vw"} scrollSpeed={1}>
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <Canopy color={"#3A2423"} />
                    </div>
                    <div
                        style={{
                            width: "100vw",
                            height: "30vw",
                            background: "#3A2423",
                            position: "absolute",
                            marginTop: "-5vw",
                        }}
                    />

                    <div
                        style={{
                            width: "100vw",
                            background: "#3A2423",
                            position: "absolute",
                            marginTop: "0vw",
                        }}
                    >
                        <Pattern2 color={"#100606"} />
                    </div>
                </ParallaxComponent>






                <ParallaxComponent marginTop={"420vw"} scrollSpeed={0.85}>

                    <Link
                        style={{
                            textTransform: "uppercase",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: "6.2vw",
                            paddingInline: "3vw",
                            position: "absolute",
                            zIndex: 1,
                            lineHeight: "86%",
                        }}
                        href={"/fresh-from-the-source"}
                    >
                        fresh from the source →
                    </Link>
                </ParallaxComponent>

                <ParallaxComponent
                    marginTop={"470vw"}
                    scrollSpeed={0.9}
                >
                    <Link
                        style={{
                            textTransform: "uppercase",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: "6.2vw",
                            paddingInline: "3vw",
                            position: "absolute",
                            zIndex: 1,
                            lineHeight: "86%",
                        }}
                        href={"/forests-made-of-chocolate"}
                    >
                        forests made of chocolate →
                    </Link>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"535vw"} scrollSpeed={0.95}>
                    <Link
                        style={{
                            textTransform: "uppercase",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: "6.2vw",
                            paddingInline: "3vw",
                            position: "absolute",
                            zIndex: 10,
                            lineHeight: "86%",
                        }}
                        href={"/directly-traded"}
                    >
                        directly traded →
                    </Link>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"600vw"} scrollSpeed={1}>
                    <Link
                        style={{
                            textTransform: "uppercase",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: "6.2vw",
                            paddingInline: "3vw",
                            position: "absolute",
                            lineHeight: "86%",
                        }}
                        href={"/directly-traded"}
                    >
                        Chocolate & wellness →
                    </Link>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.8}>
                    <div style={{ position: "relative", height: "180vw" }}>
                        <Image
                            src="/hero.png"
                            alt="Landing Page Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"0vw"} scrollSpeed={1}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ position: "relative", height: "200vw" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "30vw",
                                        width: "40vw",
                                    }}
                                >
                                    <Logo2 color={"#FCEBD2"} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "2em",
                                    }}
                                >
                                    <Link href="/shop" passHref>
                                        <div
                                            style={{
                                                fontSize: "1em",
                                                textTransform: "uppercase",
                                                paddingTop: "0.7em",
                                                width: "84vw",
                                                paddingBottom: "0.5em",
                                                border: "none",
                                                background: "#FFD79A",
                                                color: "#100606",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginTop: "5vw",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Our Chocolates
                                            {/* Replace with your right arrow SVG */}
                                            <svg
                                                width="24"
                                                height="24"
                                                fill="none"
                                                style={{ marginLeft: "0.5em" }}
                                            >
                                                <path
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                    stroke="#100606"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxComponent>

                <ParallaxComponent marginTop={"180vw"} scrollSpeed={1}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            background: "#100606",
                        }}
                    >
                        <div
                            style={{
                                textTransform: "uppercase",
                                border: "none",
                                color: "#FFE9CF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 900,
                                fontSize: "16vw",
                                lineHeight: "100%",
                                marginInline: "3vw",
                                marginTop: "30vw",
                            }}
                        >
                            Fresh from the source
                        </div>
                        <div
                            style={{
                                border: "none",
                                color: "#BF9B86",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 400,
                                fontSize: "5vw",
                                lineHeight: "169%",
                                marginInline: "3vw",
                                marginTop: "10vw",
                                marginBottom: "30vw",
                            }}
                        >
                            Welcome to Sibo, where the pure taste of Costa Rica
                            comes to life in every bite of our world-class
                            chocolates. We are a team dedicated to preserving
                            our rich heritage through every delightful bite.
                            Handcrafted from fresh local ingredients, our
                            chocolates embody the lush, fertile paradise of
                            Costa Rica in each piece.
                        </div>
                    </div>
                </ParallaxComponent>
                <ParallaxComponent marginTop={'660vw'} scrollSpeed={1}>
                <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div 
              style={{
                textTransform: "uppercase",
                color: "#FFE9CF",
                fontWeight: 900,
                fontSize: "12vw",
                paddingInline: "3vw",
                marginTop:'26vw',
                lineHeight: '86%',
                marginBottom: '10vw'
              }}>
                Explore Our Collection
              </div>

                {categories.map((category) => (
                    <Link href={`/shop/${category.slug}`} style={{
                      marginTop:'6vw'
                    }}>
                        <div
                            style={{
                                position: "absolute",
                                zIndex: 1,
                            }}
                        >
                            <Pattern2 color={'#331F1C'}/>
                        </div>
                        <div
                            style={{
                                textTransform: "uppercase",
                                color: "#FFD79A",
                                fontWeight: 900,
                                fontSize: "9vw",
                                paddingInline: "3vw",
                                position: "absolute",
                                zIndex: 1,
                                marginTop:'24vw',
                                lineHeight: '86%',
                            }}
                        >
                            {category.name} →
                        </div>

                        <div
                            style={{
                                position: "relative",
                                width: "100vw",
                                height: "66vw",
                                marginTop:'14vw',
                            }}
                        >
                            <Image
                                src={category.backgroundImageUrl}
                                alt="sky"
                                fill
                                sizes="100vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </Link>
                ))}
                </div>
                </ParallaxComponent>
            </Layout>
        </div>
    );
};

export default Home;
