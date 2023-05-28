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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div
            style={{
                perspective: "1px",
                height: "100vh",
                overflowX: "hidden",
                overflowY: "scroll",
                transformStyle: "preserve-3d",
                width: "100vw",
            }}
        >
            <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#BADCCA",
                        width: "100vw",
                        height: "120vw",
                    }}
                />
            </ParallaxComponent>
            <ParallaxComponent
                marginTop={"60vw"}
                scrollSpeed={0.4}
                background={"#f5a090"}
            >
                <Volcano color={"#f5a090"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"170vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#FFEDBE",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"210vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#FFCC8F",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"115vw"}
                scrollSpeed={0.45}
                invert={true}
            >
                <TreesBack color={"#ADCA7D"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"160vw"}
                scrollSpeed={0.55}
                invert={true}
            >
                <LeavesFront color={"#274127"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"250vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#FFC74F",
                        width: "100vw",
                        height: "200vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"200vw"} scrollSpeed={0.4}>
                <Cloud color={"#FFEBCF"} />
            </ParallaxComponent>
            <ParallaxComponent marginTop={"258vw"} scrollSpeed={0.5}>
                <div
                    style={{
                        background: "#ECA15B",
                        width: "100vw",
                        height: "70vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"320vw"} scrollSpeed={0.62}>
                <div
                    style={{
                        background: "#B4602B",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"185vw"}
                scrollSpeed={0.63}
                invert={true}
            >
                <Tree color={"#40262F"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"195vw"}
                scrollSpeed={0.65}
                invert={true}
            >
                <PodsMiddle color={"#FF5F49"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"280vw"}
                scrollSpeed={0.8}
                invert={true}
            >
                <LeavesDark color={"#29130C"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"50vw"}
                scrollSpeed={0.5}
                background={"#926382"}
            >
                <Mountains color={"#926382"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"120vw"}
                scrollSpeed={0.65}
                background={"#435"}
                invert={true}
            >
                <Hills color={"#435"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"125vw"}
                scrollSpeed={0.8}
                background={"#29130C"}
                invert={true}
            >
                <Canopy color={"#29130C"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"190vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#29130C",
                        width: "100vw",
                        height: "100vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"270vw"}
                scrollSpeed={0.5}
                invert={true}
            >
                <FarmHill color={"#C4BF51"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"500vw"} scrollSpeed={0.5}>
                <div
                    style={{
                        background: "#FFCAFD",
                        width: "100vw",
                        height: "200vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"460vw"} scrollSpeed={0.5}>
                <JungleBack color={"#BB7FD0"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"610vw"} scrollSpeed={0.65}>
                <Lotus color={"#5F3183"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"640vw"} scrollSpeed={0.68}>
                <CacaoPod color={"#432833"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"375vw"}
                scrollSpeed={0.65}
                invert={true}
            >
                <FarmHill2 color={"#565C31"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"440vw"}
                scrollSpeed={0.75}
                invert={true}
            >
                <Farmer color={"#2B2221"} />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"475vw"}
                scrollSpeed={0.8}
                invert={true}
            >
                <Foliage color={"#461B18"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"410vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#461B18",
                        width: "100vw",
                        height: "100vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent
                marginTop={"475vw"}
                scrollSpeed={0.8}
                invert={true}
            >
                <FoliageBottom color={"#2E1D1C"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"760vw"} scrollSpeed={0.8}>
                <JungleFront color={"#2E1D1C"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"750vw"} scrollSpeed={0.8}>
                <JungleBottom color={"#261916"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"960vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#261916",
                        width: "100vw",
                        height: "130vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"700vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#2E1D1C",
                        width: "100vw",
                        height: "95vw",
                    }}
                />
            </ParallaxComponent>

            <ParallaxComponent scrollSpeed={1} marginTop={"0vw"}>
                <ParallaxTitle />
            </ParallaxComponent>

            <ParallaxComponent scrollSpeed={1} marginTop={"0vw"}>
                <ParallaxArrow />
            </ParallaxComponent>

            <ParallaxComponent scrollSpeed={1} marginTop={"0vw"}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100vw",
                        // height: "1200vw",
                    }}
                >
                    <ParallaxPreview
                        marginTop={"230vw"}
                        title="Chocolate Fresh from the Source"
                        subTitle="Soil beans & ancient tradition"
                        text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                        href="/demo"
                    />

                    <ParallaxPreview
                        marginTop={"205vw"}
                        title="Forests Made of Chocolate"
                        subTitle="Agroforestry Upcycling & Regenerative farming"
                        text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                        href="/demo"
                    />

                    <ParallaxPreview
                        marginTop={"230vw"}
                        title="Directly Traded"
                        subTitle="Meet our farmers"
                        text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                        href="/demo"
                    />

                    <ParallaxPreview
                        marginTop={"235vw"}
                        title="Chocolate & Wellness"
                        subTitle="Your mind body & spirit on chocolate"
                        text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
                        href="/demo"
                    />
                </div>
            </ParallaxComponent>
        </div>
    );

    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <div
                style={{
                    height: "1350vw",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <ParallaxDiv marginTop={"0vw"} scrollSpeed={0.4}>
                    <div
                        style={{
                            background: "#BADCCA",
                            width: "100vw",
                            height: "120vw",
                        }}
                    />
                </ParallaxDiv>
                <ParallaxComponent
                    marginTop={"60vw"}
                    scrollSpeed={0.4}
                    background={"#f5a090"}
                >
                    <Volcano color={"#f5a090"} />
                </ParallaxComponent>

                <ParallaxComponent
                    marginTop={"300vw"}
                    scrollSpeed={0.8}
                    background={"#FFEDBE"}
                ></ParallaxComponent>

                <ParallaxDiv marginTop={"210vw"} scrollSpeed={0.4}>
                    <div
                        style={{
                            background: "#FFCC8F",
                            width: "100vw",
                            height: "90vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxComponent
                    marginTop={"115vw"}
                    scrollSpeed={0.45}
                    invert={true}
                >
                    <TreesBack color={"#ADCA7D"} />
                </ParallaxComponent>

                {/* <ParallaxSVG
                    marginTop={"160vw"}
                    scrollSpeed={0.55}
                    invert={true}
                >
                    <LeavesFront color={"#274127"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"185vw"}
                    scrollSpeed={0.63}
                    invert={true}
                >
                    <Tree color={"#40262F"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"195vw"}
                    scrollSpeed={0.65}
                    invert={true}
                >
                    <PodsMiddle color={"#FF5F49"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"280vw"}
                    scrollSpeed={0.8}
                    invert={true}
                >
                    <LeavesDark color={"#29130C"} />
                </ParallaxSVG>

                <ParallaxDiv marginTop={"250vw"} scrollSpeed={0.4}>
                    <div
                        style={{
                            background: "#FFC74F",
                            width: "100vw",
                            height: "200vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxSVG
                    marginTop={"50vw"}
                    scrollSpeed={0.5}
                    background={"#926382"}
                    invert={true}
                >
                    <Mountains color={"#926382"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"120vw"}
                    scrollSpeed={0.65}
                    background={"#435"}
                    invert={true}
                >
                    <Hills color={"#435"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"125vw"}
                    scrollSpeed={0.8}
                    background={"#29130C"}
                    invert={true}
                >
                    <Canopy color={"#29130C"} />
                </ParallaxSVG>

                <ParallaxDiv marginTop={"190vw"} scrollSpeed={0.8}>
                    <div
                        style={{
                            background: "#29130C",
                            width: "100vw",
                            height: "100vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxSVG
                    marginTop={"200vw"}
                    scrollSpeed={0.4}
                    invert={true}
                >
                    <Cloud color={"#FFEBCF"} />
                </ParallaxSVG>

                <ParallaxDiv marginTop={"258vw"} scrollSpeed={0.5}>
                    <div
                        style={{
                            background: "#ECA15B",
                            width: "100vw",
                            height: "90vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxDiv marginTop={"320vw"} scrollSpeed={0.62}>
                    <div
                        style={{
                            background: "#B4602B",
                            width: "100vw",
                            height: "90vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxSVG
                    marginTop={"270vw"}
                    scrollSpeed={0.5}
                    invert={true}
                >
                    <FarmHill color={"#C4BF51"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"375vw"}
                    scrollSpeed={0.65}
                    invert={true}
                >
                    <FarmHill2 color={"#565C31"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"440vw"}
                    scrollSpeed={0.75}
                    invert={true}
                >
                    <Farmer color={"#2B2221"} />
                </ParallaxSVG>

                <ParallaxSVG
                    marginTop={"475vw"}
                    scrollSpeed={0.8}
                    invert={true}
                >
                    <Foliage color={"#461B18"} />
                </ParallaxSVG>

                <ParallaxDiv marginTop={"410vw"} scrollSpeed={0.8}>
                    <div
                        style={{
                            background: "#461B18",
                            width: "100vw",
                            height: "100vw",
                        }}
                    />
                </ParallaxDiv>

                <ParallaxSVG
                    marginTop={"475vw"}
                    scrollSpeed={0.8}
                    invert={true}
                >
                    <FoliageBottom color={"#2E1D1C"} />
                </ParallaxSVG>

                <ParallaxDiv marginTop={"710vw"} scrollSpeed={0.8}>
                    <div
                        style={{
                            background: "#2E1D1C",
                            width: "100vw",
                            height: "100vw",
                        }}
                    />
                </ParallaxDiv> */}
            </div>

            <div
                style={{
                    height: "1350vw",
                    position: "absolute",
                    top: 0,
                    overflow: "hidden",
                }}
            >
                <ParallaxPreview
                    marginTop={"230vw"}
                    title="Chocolate Fresh from the Source"
                    subTitle={["Soil", "beans", "ancient tradition"]}
                    text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                    href="/demo"
                />

                <ParallaxPreview
                    marginTop={"195vw"}
                    title="Forests Made of Chocolate"
                    subTitle={[
                        "Agroforestry",
                        "Upcycling",
                        "Regenerative farming",
                    ]}
                    text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                    href="/demo"
                />

                <ParallaxPreview
                    marginTop={"240vw"}
                    title="Directly Traded"
                    subTitle={["Meet our farmers"]}
                    text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                    href="/demo"
                />

                <ParallaxArrow />

                <ParallaxTitle />
            </div>
        </div>
    );
    return (
        <div
            style={{
                height: "1350vw",
                position: "relative",
                overflow: "hidden",
                background: "#BADCCA",
            }}
        >
            <ParallaxSVG
                marginTop={"60vw"}
                scrollSpeed={0.4}
                background={"#f5a090"}
            >
                <Volcano color={"#f5a090"} />
            </ParallaxSVG>

            <ParallaxSVG
                marginTop={"300vw"}
                scrollSpeed={0.8}
                background={"#FFEDBE"}
            ></ParallaxSVG>

            <ParallaxDiv marginTop={"210vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#FFCC8F",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxSVG marginTop={"115vw"} scrollSpeed={0.45} invert={true}>
                <TreesBack color={"#ADCA7D"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"160vw"} scrollSpeed={0.55} invert={true}>
                <LeavesFront color={"#274127"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"185vw"} scrollSpeed={0.63} invert={true}>
                <Tree color={"#40262F"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"195vw"} scrollSpeed={0.65} invert={true}>
                <PodsMiddle color={"#FF5F49"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"280vw"} scrollSpeed={0.8} invert={true}>
                <LeavesDark color={"#29130C"} />
            </ParallaxSVG>

            <ParallaxDiv marginTop={"250vw"} scrollSpeed={0.4}>
                <div
                    style={{
                        background: "#FFC74F",
                        width: "100vw",
                        height: "200vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxSVG
                marginTop={"50vw"}
                scrollSpeed={0.5}
                background={"#926382"}
                invert={true}
            >
                <Mountains color={"#926382"} />
            </ParallaxSVG>

            <ParallaxSVG
                marginTop={"120vw"}
                scrollSpeed={0.65}
                background={"#435"}
                invert={true}
            >
                <Hills color={"#435"} />
            </ParallaxSVG>

            <ParallaxSVG
                marginTop={"125vw"}
                scrollSpeed={0.8}
                background={"#29130C"}
                invert={true}
            >
                <Canopy color={"#29130C"} />
            </ParallaxSVG>

            <ParallaxDiv marginTop={"190vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#29130C",
                        width: "100vw",
                        height: "100vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxSVG marginTop={"200vw"} scrollSpeed={0.4} invert={true}>
                <Cloud color={"#FFEBCF"} />
            </ParallaxSVG>

            <ParallaxDiv marginTop={"258vw"} scrollSpeed={0.5}>
                <div
                    style={{
                        background: "#ECA15B",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxDiv marginTop={"320vw"} scrollSpeed={0.62}>
                <div
                    style={{
                        background: "#B4602B",
                        width: "100vw",
                        height: "90vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxSVG marginTop={"270vw"} scrollSpeed={0.5} invert={true}>
                <FarmHill color={"#C4BF51"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"375vw"} scrollSpeed={0.65} invert={true}>
                <FarmHill2 color={"#565C31"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"440vw"} scrollSpeed={0.75} invert={true}>
                <Farmer color={"#2B2221"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"475vw"} scrollSpeed={0.8} invert={true}>
                <Foliage color={"#461B18"} />
            </ParallaxSVG>

            <ParallaxDiv marginTop={"410vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#461B18",
                        width: "100vw",
                        height: "100vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxSVG marginTop={"475vw"} scrollSpeed={0.8} invert={true}>
                <FoliageBottom color={"#2E1D1C"} />
            </ParallaxSVG>

            <ParallaxDiv marginTop={"710vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#2E1D1C",
                        width: "100vw",
                        height: "100vw",
                    }}
                />
            </ParallaxDiv>

            <ParallaxPreview
                marginTop={"230vw"}
                title="Chocolate Fresh from the Source"
                subTitle={["Soil", "beans", "ancient tradition"]}
                text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                href="/demo"
            />

            <ParallaxPreview
                marginTop={"510vw"}
                title="Forests Made of Chocolate"
                subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
                text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                href="/demo"
            />

            <ParallaxPreview
                marginTop={"860vw"}
                title="Directly Traded"
                subTitle={["Meet our farmers"]}
                text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                href="/demo"
            />

            <ParallaxArrow />

            <ParallaxTitle />
        </div>
    );
    // return (
    //     <div
    //         style={{
    //             height: "1350vw",
    //             position: "relative",
    //             overflow: "hidden",
    //             background: "#BADCCA",
    //         }}
    //     >
    //         {/* <ParallaxImage
    //             marginTop={"-60vw"}
    //             scrollSpeed={0.3}
    //             src="/sky x2.png"
    //             height="200vw"
    //         /> */}

    //         <ParallaxSVG
    //             marginTop={"60vw"}
    //             scrollSpeed={0.4}
    //             background={"#f5a090"}
    //         >
    //             <Volcano color={"#f5a090"} />
    //         </ParallaxSVG>
    //         {/* <ParallaxImage
    //             marginTop={"26vw"}
    //             scrollSpeed={0.4}
    //             src="/volc d.png"
    //             height="100vw"
    //         /> */}

    //         <ParallaxSVG
    //             marginTop={"50vw"}
    //             scrollSpeed={0.5}
    //             background={"#926382"}
    //         >
    //             <Mountains color={"#926382"} />
    //         </ParallaxSVG>
    //         {/* <ParallaxImage
    //             marginTop={"50vw"}
    //             scrollSpeed={0.5}
    //             src="/mounts d.png"
    //             height="100vw"
    //         /> */}
    //         {/* <ParallaxImage
    //             marginTop={"33vw"}
    //             scrollSpeed={0.65}
    //             src="/hills c.png"
    //             height="500vw"
    //         /> */}
    //         <ParallaxSVG
    //             marginTop={"120vw"}
    //             scrollSpeed={0.65}
    //             background={"#435"}
    //         >
    //             <Hills color={"#435"} />
    //         </ParallaxSVG>

    //         <ParallaxSVG
    //             marginTop={"125vw"}
    //             scrollSpeed={0.8}
    //             background={"#29130C"}
    //         >
    //             <Canopy color={"#29130C"} />
    //         </ParallaxSVG>
    //         {/* <ParallaxImage
    //             marginTop={"120vw"}
    //             scrollSpeed={0.8}
    //             src="/treetop sill d.png"
    //             height="100vw"
    //         />

    //         <ParallaxDiv marginTop={"220vw"} scrollSpeed={0.8}>
    //             <div style={{
    //               width: '100vw',
    //               height: '300vw',
    //               background: '#2d140a',
    //             }} />
    //         </ParallaxDiv> */}

    //         {/* <ParallaxImage
    //             marginTop={"210vw"}
    //             scrollSpeed={0.5}
    //             src="/clound g.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"255vw"}
    //             scrollSpeed={0.57}
    //             src="/farm hills g copy 2.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"300vw"}
    //             scrollSpeed={0.66}
    //             src="/hills 2 h.png"
    //             height="200vw"
    //         />

    //         <ParallaxImage
    //             marginTop={"340vw"}
    //             scrollSpeed={0.8}
    //             src="/farm fore e copy 2.png"
    //             height="200vw"
    //         />

    //         <ParallaxSVG
    //             marginTop={"540vw"}
    //             scrollSpeed={0.9}
    //             background={"#0f1617"}
    //         >
    //             <Treetops color={"#0f1617"} />
    //         </ParallaxSVG> */}

    //         {/*

    //     <ParallaxImage
    //         marginTop={"140vw"}
    //         scrollSpeed={0.5}
    //         src="/trees 2 c copy 2.png"
    //         height="500vw"
    //     />

    //     <ParallaxImage
    //         marginTop={"100vw"}
    //         scrollSpeed={0.42}
    //         src="/farm hill 2 c.png"
    //         height="500vw"
    //     />
    //     <ParallaxImage
    //         marginTop={"100vw"}
    //         scrollSpeed={0.42}
    //         src="/cacao 2 c copy 2.png"
    //         height="500vw"
    //         fadeInThreshold={480}
    //     />

    //     <ParallaxImage
    //         marginTop={"210vw"}
    //         scrollSpeed={0.62}
    //         src="/trees 3 c copy.png"
    //         height="500vw"
    //     /> */}
    //         {/* <ParallaxImage
    //         marginTop={"160vw"}
    //         scrollSpeed={0.52}
    //         src="/farm hill 3 c.png"
    //         height="500vw"
    //     />
    //     <ParallaxImage
    //         marginTop={"160vw"}
    //         scrollSpeed={0.52}
    //         src="/cacao 3 c copy.png"
    //         height="500vw"
    //         fadeInThreshold={500}
    //     /> */}
    //         <ParallaxImage
    //             marginTop={"540vw"}
    //             scrollSpeed={0.64}
    //             src="/farm d.png"
    //             height="200vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"620vw"}
    //             scrollSpeed={0.78}
    //             src="/well d.png"
    //             height="500vw"
    //         />

    //         <ParallaxPreview
    //             marginTop={"216vw"}
    //             title="Chocolate Fresh from the Source"
    //             subTitle={["Soil", "beans", "ancient tradition"]}
    //             text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
    //             href="/demo"
    //         />
    //         {/* <ParallaxPreview
    //             marginTop={"410vw"}
    //             title="Forests Made of Chocolate"
    //             subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
    //             text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
    //             href="/demo"
    //         /> */}

    //         {/* <ParallaxPreview
    //             marginTop={"720vw"}
    //             title="Directly Traded"
    //             subTitle={["Meet our farmers"]}
    //             text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
    //             href="/demo"
    //         />
    //         <ParallaxPreview
    //             marginTop={"950vw"}
    //             title="Chocolate & Wellness"
    //             subTitle={["Your mind, body, spirit on chocolate"]}
    //             text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
    //             href="/demo"
    //         /> */}

    //         <ParallaxArrow />

    //         <ParallaxTitle />
    //     </div>
    // );
    // return (
    //     <div
    //         style={{
    //             height: "1350vw",
    //             position: "relative",
    //             overflow: "hidden",
    //             background: "#081017",
    //         }}
    //     >
    //         <ParallaxImage
    //             marginTop={"-60vw"}
    //             scrollSpeed={0.1}
    //             src="/sky x2.png"
    //             height="200vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"6vw"}
    //             scrollSpeed={0.14}
    //             src="/volc d.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"28vw"}
    //             scrollSpeed={0.18}
    //             src="/mounts d.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"12vw"}
    //             scrollSpeed={0.23}
    //             src="/hills c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"33vw"}
    //             scrollSpeed={0.28}
    //             src="/feild c.png"
    //             height="500vw"
    //         />

    //         <ParallaxImage
    //             marginTop={"46vw"}
    //             scrollSpeed={0.34}
    //             src="/farm hill 1.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"46vw"}
    //             scrollSpeed={0.34}
    //             src="/cacaos 1 c.png"
    //             height="500vw"
    //             fadeInThreshold={460}
    //         />

    //         <ParallaxImage
    //             marginTop={"140vw"}
    //             scrollSpeed={0.5}
    //             src="/trees 2 c copy 2.png"
    //             height="500vw"
    //         />

    //         <ParallaxImage
    //             marginTop={"100vw"}
    //             scrollSpeed={0.42}
    //             src="/farm hill 2 c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"100vw"}
    //             scrollSpeed={0.42}
    //             src="/cacao 2 c copy 2.png"
    //             height="500vw"
    //             fadeInThreshold={480}
    //         />

    //         <ParallaxImage
    //             marginTop={"210vw"}
    //             scrollSpeed={0.62}
    //             src="/trees 3 c copy.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"160vw"}
    //             scrollSpeed={0.52}
    //             src="/farm hill 3 c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"160vw"}
    //             scrollSpeed={0.52}
    //             src="/cacao 3 c copy.png"
    //             height="500vw"
    //             fadeInThreshold={500}
    //         />
    //         <ParallaxImage
    //             marginTop={"480vw"}
    //             scrollSpeed={0.64}
    //             src="/farm d.png"
    //             height="200vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"580vw"}
    //             scrollSpeed={0.78}
    //             src="/well d.png"
    //             height="500vw"
    //         />

    //         <ParallaxPreview
    //             marginTop={"220vw"}
    //             title="Chocolate Fresh from the Source"
    //             subTitle={["Soil", "beans", "ancient tradition"]}
    //             text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
    //             href="/demo"
    //         />
    //         <ParallaxPreview
    //             marginTop={"410vw"}
    //             title="Forests Made of Chocolate"
    //             subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
    //             text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
    //             href="/demo"
    //         />

    //         <ParallaxPreview
    //             marginTop={"890vw"}
    //             title="Directly Traded"
    //             subTitle={["Meet our farmers"]}
    //             text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
    //             href="/demo"
    //         />
    //         <ParallaxPreview
    //             marginTop={"1200vw"}
    //             title="Chocolate & Wellness"
    //             subTitle={["Your mind, body, spirit on chocolate"]}
    //             text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
    //             href="/demo"
    //         />

    //         <ParallaxArrow />

    //         <ParallaxTitle />
    //     </div>
    // );
    // return (
    //     <div
    //         style={{
    //             height: "780vw",
    //             position: "relative",
    //             overflow: "hidden",
    //             background: "#111905",
    //         }}
    //     >
    //         <ParallaxImage
    //             marginTop={"-60vw"}
    //             scrollSpeed={0.24}
    //             src="/sky x2.png"
    //             height="200vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"9vw"}
    //             scrollSpeed={0.28}
    //             src="/volc d.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"34vw"}
    //             scrollSpeed={0.33}
    //             src="/mounts d.png"
    //             height="100vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"15vw"}
    //             scrollSpeed={0.4}
    //             src="/hills c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"32vw"}
    //             scrollSpeed={0.48}
    //             src="/feild c.png"
    //             height="500vw"
    //         />

    //         <ParallaxImage
    //             marginTop={"40vw"}
    //             scrollSpeed={0.56}
    //             src="/farm hill 1.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"40vw"}
    //             scrollSpeed={0.56}
    //             src="/cacaos 1 c.png"
    //             height="500vw"
    //             fadeInThreshold={160}
    //         />

    //         <ParallaxImage
    //             marginTop={"95vw"}
    //             scrollSpeed={0.74}
    //             src="/trees 2 c.png"
    //             height="500vw"
    //         />

    //         <ParallaxImage
    //             marginTop={"65vw"}
    //             scrollSpeed={0.65}
    //             src="/farm hill 2 c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"65vw"}
    //             scrollSpeed={0.65}
    //             src="/cacao 2 c.png"
    //             height="500vw"
    //             fadeInThreshold={230}
    //         />

    //         <ParallaxImage
    //             marginTop={"140vw"}
    //             scrollSpeed={0.9}
    //             src="/trees 3 c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"90vw"}
    //             scrollSpeed={0.75}
    //             src="/farm hill 3 c.png"
    //             height="500vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"90vw"}
    //             scrollSpeed={0.75}
    //             src="/cacao 3 c.png"
    //             height="500vw"
    //             fadeInThreshold={290}
    //         />
    //         <ParallaxImage
    //             marginTop={"360vw"}
    //             scrollSpeed={0.87}
    //             src="/farm d.png"
    //             height="200vw"
    //         />
    //         <ParallaxImage
    //             marginTop={"370vw"}
    //             scrollSpeed={0.94}
    //             src="/well d.png"
    //             height="500vw"
    //         />

    //         <ParallaxPreview
    //             marginTop={"200vw"}
    //             title="Chocolate Fresh from the Source"
    //             subTitle={["Soil", "beans", "ancient tradition"]}
    //             text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
    //             href="/demo"
    //         />
    //         <ParallaxPreview
    //             marginTop={"380vw"}
    //             title="Forests Made of Chocolate"
    //             subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
    //             text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
    //             href="/demo"
    //         />

    //         <ParallaxPreview
    //             marginTop={"580vw"}
    //             title="Directly Traded"
    //             subTitle={["Meet our farmers"]}
    //             text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
    //             href="/demo"
    //         />
    //         <ParallaxPreview
    //             marginTop={"780vw"}
    //             title="Chocolate & Wellness"
    //             subTitle={["Your mind, body, spirit on chocolate"]}
    //             text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
    //             href="/demo"
    //         />

    //         <ParallaxArrow />

    //         <ParallaxTitle />
    //     </div>
    // );
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
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        </ParallaxDiv>
    );
};

const ParallaxSVG = ({
    marginTop,
    scrollSpeed,
    fadeInThreshold,
    background,
    children,
    invert,
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
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {children}
                {!invert && (
                    <div
                        style={{
                            width: "100vw",
                            height: "1000vw",
                            background: background,
                            marginTop: "-10px",
                        }}
                    />
                )}
            </div>
        </ParallaxDiv>
    );
};

const ParallaxPreview = ({ marginTop, title, subTitle, text, href }) => {
    return (
        <div
            style={{
                marginTop: marginTop,
                paddingInline: "3vw",
                color: "#faf1e3",
                zIndex: 1,
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
                {subTitle}
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
    );
};

const ParallaxArrow = () => {
    return (
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
                position: "absolute",
                top: 0,
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
    );
};

const ParallaxTitle = () => {
    return (
        <div
            style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingInline: "6vw",
                position: "absolute",
                top: "10vw",
            }}
        >
            <div
                style={{
                    width: "34vw",
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
                    Our Chocolates
                </div>
                <ArrowLongRightIcon width={"6vw"} />
            </Link>
        </div>
    );
};
