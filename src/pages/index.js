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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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


{/* <ParallaxSVG marginTop={"190vw"} scrollSpeed={0.44} invert={true}>
                <LeavesMiddle color={"#B1FDC6"} />
            </ParallaxSVG> */}

            {/* <ParallaxSVG marginTop={"125vw"} scrollSpeed={0.46} invert={true}>
                <PodsBack color={"#FF806F"} />
            </ParallaxSVG> */}




            {/* <ParallaxSVG marginTop={"180vw"} scrollSpeed={0.5} invert={true}>
                <LeavesMiddle color={"#5DA16C"} />
            </ParallaxSVG> */}


<ParallaxSVG marginTop={"115vw"} scrollSpeed={0.45} invert={true}>
                <TreesBack color={"#ADCA7D"} />
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

            <ParallaxSVG marginTop={"160vw"} scrollSpeed={0.55} invert={true}>
                <LeavesFront color={"#274127"} />
            </ParallaxSVG>

            <ParallaxSVG marginTop={"185vw"} scrollSpeed={0.63} invert={true}>
                <Tree color={"#40262F"} />
            </ParallaxSVG>


            <ParallaxSVG marginTop={"195vw"} scrollSpeed={0.65} invert={true}>
                <PodsMiddle color={"#FF5F49"} />
            </ParallaxSVG>


            {/* <ParallaxSVG marginTop={"215vw"} scrollSpeed={0.68} invert={true}>
                <PodsFront color={"#C12F38"} />
            </ParallaxSVG> */}

            <ParallaxSVG marginTop={"280vw"} scrollSpeed={0.8} invert={true}>
                <LeavesDark color={"#29130C"} />
            </ParallaxSVG>




            <ParallaxDiv marginTop={"410vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        background: "#461B18",
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

            <ParallaxArrow />

            <ParallaxTitle />
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
            {/* <ParallaxImage
                marginTop={"-60vw"}
                scrollSpeed={0.3}
                src="/sky x2.png"
                height="200vw"
            /> */}

            <ParallaxSVG
                marginTop={"60vw"}
                scrollSpeed={0.4}
                background={"#f5a090"}
            >
                <Volcano color={"#f5a090"} />
            </ParallaxSVG>
            {/* <ParallaxImage
                marginTop={"26vw"}
                scrollSpeed={0.4}
                src="/volc d.png"
                height="100vw"
            /> */}

            <ParallaxSVG
                marginTop={"50vw"}
                scrollSpeed={0.5}
                background={"#926382"}
            >
                <Mountains color={"#926382"} />
            </ParallaxSVG>
            {/* <ParallaxImage
                marginTop={"50vw"}
                scrollSpeed={0.5}
                src="/mounts d.png"
                height="100vw"
            /> */}
            {/* <ParallaxImage
                marginTop={"33vw"}
                scrollSpeed={0.65}
                src="/hills c.png"
                height="500vw"
            /> */}
            <ParallaxSVG
                marginTop={"120vw"}
                scrollSpeed={0.65}
                background={"#435"}
            >
                <Hills color={"#435"} />
            </ParallaxSVG>

            <ParallaxSVG
                marginTop={"125vw"}
                scrollSpeed={0.8}
                background={"#29130C"}
            >
                <Canopy color={"#29130C"} />
            </ParallaxSVG>
            {/* <ParallaxImage
                marginTop={"120vw"}
                scrollSpeed={0.8}
                src="/treetop sill d.png"
                height="100vw"
            />

            <ParallaxDiv marginTop={"220vw"} scrollSpeed={0.8}>
                <div style={{
                  width: '100vw',
                  height: '300vw',
                  background: '#2d140a',
                }} />
            </ParallaxDiv> */}

            {/* <ParallaxImage
                marginTop={"210vw"}
                scrollSpeed={0.5}
                src="/clound g.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"255vw"}
                scrollSpeed={0.57}
                src="/farm hills g copy 2.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"300vw"}
                scrollSpeed={0.66}
                src="/hills 2 h.png"
                height="200vw"
            />

            <ParallaxImage
                marginTop={"340vw"}
                scrollSpeed={0.8}
                src="/farm fore e copy 2.png"
                height="200vw"
            />

            <ParallaxSVG
                marginTop={"540vw"}
                scrollSpeed={0.9}
                background={"#0f1617"}
            >
                <Treetops color={"#0f1617"} />
            </ParallaxSVG> */}

            {/* 


        <ParallaxImage
            marginTop={"140vw"}
            scrollSpeed={0.5}
            src="/trees 2 c copy 2.png"
            height="500vw"
        />

        <ParallaxImage
            marginTop={"100vw"}
            scrollSpeed={0.42}
            src="/farm hill 2 c.png"
            height="500vw"
        />
        <ParallaxImage
            marginTop={"100vw"}
            scrollSpeed={0.42}
            src="/cacao 2 c copy 2.png"
            height="500vw"
            fadeInThreshold={480}
        />

        <ParallaxImage
            marginTop={"210vw"}
            scrollSpeed={0.62}
            src="/trees 3 c copy.png"
            height="500vw"
        /> */}
            {/* <ParallaxImage
            marginTop={"160vw"}
            scrollSpeed={0.52}
            src="/farm hill 3 c.png"
            height="500vw"
        />
        <ParallaxImage
            marginTop={"160vw"}
            scrollSpeed={0.52}
            src="/cacao 3 c copy.png"
            height="500vw"
            fadeInThreshold={500}
        /> */}
            <ParallaxImage
                marginTop={"540vw"}
                scrollSpeed={0.64}
                src="/farm d.png"
                height="200vw"
            />
            <ParallaxImage
                marginTop={"620vw"}
                scrollSpeed={0.78}
                src="/well d.png"
                height="500vw"
            />

            <ParallaxPreview
                marginTop={"216vw"}
                title="Chocolate Fresh from the Source"
                subTitle={["Soil", "beans", "ancient tradition"]}
                text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                href="/demo"
            />
            {/* <ParallaxPreview
                marginTop={"410vw"}
                title="Forests Made of Chocolate"
                subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
                text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                href="/demo"
            /> */}

            {/* <ParallaxPreview
                marginTop={"720vw"}
                title="Directly Traded"
                subTitle={["Meet our farmers"]}
                text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"950vw"}
                title="Chocolate & Wellness"
                subTitle={["Your mind, body, spirit on chocolate"]}
                text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
                href="/demo"
            /> */}

            <ParallaxArrow />

            <ParallaxTitle />
        </div>
    );
    return (
        <div
            style={{
                height: "1350vw",
                position: "relative",
                overflow: "hidden",
                background: "#081017",
            }}
        >
            <ParallaxImage
                marginTop={"-60vw"}
                scrollSpeed={0.1}
                src="/sky x2.png"
                height="200vw"
            />
            <ParallaxImage
                marginTop={"6vw"}
                scrollSpeed={0.14}
                src="/volc d.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"28vw"}
                scrollSpeed={0.18}
                src="/mounts d.png"
                height="100vw"
            />
            <ParallaxImage
                marginTop={"12vw"}
                scrollSpeed={0.23}
                src="/hills c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"33vw"}
                scrollSpeed={0.28}
                src="/feild c.png"
                height="500vw"
            />

            <ParallaxImage
                marginTop={"46vw"}
                scrollSpeed={0.34}
                src="/farm hill 1.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"46vw"}
                scrollSpeed={0.34}
                src="/cacaos 1 c.png"
                height="500vw"
                fadeInThreshold={460}
            />

            <ParallaxImage
                marginTop={"140vw"}
                scrollSpeed={0.5}
                src="/trees 2 c copy 2.png"
                height="500vw"
            />

            <ParallaxImage
                marginTop={"100vw"}
                scrollSpeed={0.42}
                src="/farm hill 2 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"100vw"}
                scrollSpeed={0.42}
                src="/cacao 2 c copy 2.png"
                height="500vw"
                fadeInThreshold={480}
            />

            <ParallaxImage
                marginTop={"210vw"}
                scrollSpeed={0.62}
                src="/trees 3 c copy.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"160vw"}
                scrollSpeed={0.52}
                src="/farm hill 3 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"160vw"}
                scrollSpeed={0.52}
                src="/cacao 3 c copy.png"
                height="500vw"
                fadeInThreshold={500}
            />
            <ParallaxImage
                marginTop={"480vw"}
                scrollSpeed={0.64}
                src="/farm d.png"
                height="200vw"
            />
            <ParallaxImage
                marginTop={"580vw"}
                scrollSpeed={0.78}
                src="/well d.png"
                height="500vw"
            />

            <ParallaxPreview
                marginTop={"220vw"}
                title="Chocolate Fresh from the Source"
                subTitle={["Soil", "beans", "ancient tradition"]}
                text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"410vw"}
                title="Forests Made of Chocolate"
                subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
                text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                href="/demo"
            />

            <ParallaxPreview
                marginTop={"890vw"}
                title="Directly Traded"
                subTitle={["Meet our farmers"]}
                text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"1200vw"}
                title="Chocolate & Wellness"
                subTitle={["Your mind, body, spirit on chocolate"]}
                text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
                href="/demo"
            />

            <ParallaxArrow />

            <ParallaxTitle />
        </div>
    );
    return (
        <div
            style={{
                height: "780vw",
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
                fadeInThreshold={160}
            />

            <ParallaxImage
                marginTop={"95vw"}
                scrollSpeed={0.74}
                src="/trees 2 c.png"
                height="500vw"
            />

            <ParallaxImage
                marginTop={"65vw"}
                scrollSpeed={0.65}
                src="/farm hill 2 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"65vw"}
                scrollSpeed={0.65}
                src="/cacao 2 c.png"
                height="500vw"
                fadeInThreshold={230}
            />

            <ParallaxImage
                marginTop={"140vw"}
                scrollSpeed={0.9}
                src="/trees 3 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"90vw"}
                scrollSpeed={0.75}
                src="/farm hill 3 c.png"
                height="500vw"
            />
            <ParallaxImage
                marginTop={"90vw"}
                scrollSpeed={0.75}
                src="/cacao 3 c.png"
                height="500vw"
                fadeInThreshold={290}
            />
            <ParallaxImage
                marginTop={"360vw"}
                scrollSpeed={0.87}
                src="/farm d.png"
                height="200vw"
            />
            <ParallaxImage
                marginTop={"370vw"}
                scrollSpeed={0.94}
                src="/well d.png"
                height="500vw"
            />

            <ParallaxPreview
                marginTop={"200vw"}
                title="Chocolate Fresh from the Source"
                subTitle={["Soil", "beans", "ancient tradition"]}
                text="Not all chocolate is created equal. Costa Rica’s nutrient rich volcanic soil, superior quality cacao beans and a 3,000 year-tradition of preparing xocolatl as a source of energy and pleasure have inspired us to bring you a new world of chocolate flavor. You’ll never think about chocolate the same way again."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"380vw"}
                title="Forests Made of Chocolate"
                subTitle={["Agroforestry", "Upcycling", "Regenerative farming"]}
                text="Unlike some countries that clear cut forest to plant cacao, Costa Rica sees cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao. How we source cacao and how we package our finished products are part of our commitment to our country and our planet."
                href="/demo"
            />

            <ParallaxPreview
                marginTop={"580vw"}
                title="Directly Traded"
                subTitle={["Meet our farmers"]}
                text="At Sibö chocolate, we trade directly with our partner farmers, which means we are able to pay stable, above-market prices that incentivizes cacao production in Costa Rica. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade."
                href="/demo"
            />
            <ParallaxPreview
                marginTop={"780vw"}
                title="Chocolate & Wellness"
                subTitle={["Your mind, body, spirit on chocolate"]}
                text="Modern science is proving what indigenous people in Central America have known for Millenia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals, like magnesium, iron and potassium. Sibö chocolate is tested safe for heavy metals that have gotten some press in recent years."
                href="/demo"
            />

            <ParallaxArrow />

            <ParallaxTitle />
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
            marginTop={"10vw"}
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
        </ParallaxDiv>
    );
};
