import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React, { useEffect, useRef } from "react";
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
import ParallaxComponent from "../ParallaxComponent";
import Swatch2 from "@/components/svg/Swatch2";
import Layout from "@/components/Layout";

export default function Costa() {
    return (

        <Layout>
        <div
            style={{
                perspective: "1px",
                height: "100vh",
                overflowX: "hidden",
                overflowY: "scroll",
                transformStyle: "preserve-3d",
                width: "100vw",
                marginTop: '10vw'
            }}
        >
            <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "70vw",
                    }}
                >
                    <Image
                        src={"/waterfall.png"}
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

            <ParallaxComponent marginTop={"135vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "150vw",
                    }}
                >
                    <Image
                        src={"/volcanox.png"}
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

            <ParallaxComponent marginTop={"360vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "110vw",
                    }}
                >
                    <Image
                        src={"/pods.png"}
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

            <ParallaxComponent marginTop={"580vw"} scrollSpeed={0.8}>
                <div
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "150vw",
                    }}
                >
                    <Image
                        src={"/sibo.png"}
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

            <ParallaxComponent marginTop={"50vw"} scrollSpeed={1}>
                <Swatch2 color={"#FFDA92"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"80vw"} scrollSpeed={1}>
                <Swatch2 color={"#FFDA92"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"110vw"} scrollSpeed={1}>
                <Swatch2 color={"#FFDA92"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"120vw"} scrollSpeed={1}>
                <Swatch2 color={"#FFDA92"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"280vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"310vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"340vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"360vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"380vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"400vw"} scrollSpeed={1}>
                <Swatch2 color={"#49211E"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"520vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"540vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"560vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"580vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"610vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"640vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"660vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"680vw"} scrollSpeed={1}>
                <Swatch2 color={"#87DFBA"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"850vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"860vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"880vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"910vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"940vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"960vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"990vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1010vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1040vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1060vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1090vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1110vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1140vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1160vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"1190vw"} scrollSpeed={1}>
                <Swatch2 color={"#452B2D"} />
            </ParallaxComponent>

            <ParallaxComponent marginTop={"85vw"} scrollSpeed={1}>
                <div
                    style={{
                        paddingInline: "3vw",
                        height: "1000vw",
                    }}
                >
                    <div
                        style={{
                            fontSize: "21vw",
                            color: "black",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            lineHeight: "86%",
                        }}
                    >
                        Fresh from the source
                    </div>
                    <div
                        style={{
                            marginTop: "160vw",
                            fontSize: "8vw",
                            color: "white",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            lineHeight: "86%",
                        }}
                    >
                        Rich volcanic soil
                    </div>
                    <div
                        style={{
                            marginTop: "10vw",
                            fontSize: "5vw",
                            color: "white",
                            lineHeight: "147%",
                        }}
                    >
                        What makes Costa Rican chocolate so special? Let’s start
                        with the country’s soil. For thousands of years, ancient
                        lava flows and volcanic ash have fed these lands with
                        nutrients and minerals to form a rare type of soil
                        called Andisol. This rich earth and year-round warm,
                        tropical weather contribute to our cacao’s unique
                        terroir. From region to region, and even from farm to
                        farm, you’ll find surprising flavor notes that
                        distinguish our Costa Rican chocolates from other cacao
                        producing countries around the world.
                    </div>

                    <div
                        style={{
                            marginTop: "130vw",
                            fontSize: "8vw",
                            color: "black",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            lineHeight: "86%",
                        }}
                    >
                        Fine-flavor beans
                    </div>
                    <div
                        style={{
                            marginTop: "10vw",
                            fontSize: "5vw",
                            color: "black",
                            lineHeight: "147%",
                        }}
                    >
                        Costa Rica is one of the few countries that produces
                        exclusively fine-flavor cacao, a superior category of
                        beans representing only 12% of the world cocoa market.
                        That means that our chocolate has a rich and balanced
                        chocolate base and more complex flavor notes, such as
                        dried fruit, caramel, roasted coffee and nuts. While
                        some of the flavor magic lies in the rare genetics of
                        our country’s cacao, the quality of our chocolate
                        depends on what happens after the beans are harvested.
                        Sibö partner farms are experts at fermenting and drying
                        cacao to unlock its flavor potential. Our job at Sibö is
                        to further develop that flavor, bringing out the best in
                        those beans, and craft a chocolate bar that will
                        hopefully make you stop in your tracks.
                    </div>

                    <div
                        style={{
                            marginTop: "170vw",
                            fontSize: "8vw",
                            color: "white",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            lineHeight: "86%",
                        }}
                    >
                        Ancient tradition
                    </div>
                    <div
                        style={{
                            marginTop: "10vw",
                            fontSize: "5vw",
                            color: "white",
                            lineHeight: "147%",
                        }}
                    >
                        Long before the Europeans transformed chocolate into
                        what we know today, peoples native to these lands were
                        preparing a pungent elixir called xocolatl (meaning
                        “bitter water” in the Nahua language). This stimulating
                        libation was made by grinding dry fermented cacao beans
                        into an unctuous paste and melting it into water,
                        together with fragrant vanilla beans, dried chili
                        peppers, and pulverized maize. The drink was a source of
                        energy and pleasure served on special occasions, often
                        reserved for warriors before battle.
                    </div>

                    <div
                        style={{
                            marginTop: "10vw",
                            fontSize: "5vw",
                            color: "white",
                            lineHeight: "147%",
                        }}
                    >
                        Today, indigenous Costa Ricans still prepare their own
                        chocolate, plucking ripe cacao pods from wild trees
                        planted by their elders. These trees and the forest at
                        large are considered a most precious gift from Father
                        Nature, also known as Sibö. For most, the process of
                        making chocolate remains unchanged, fermenting and
                        drying the beans under the sun before grinding them on a
                        warm stone slab and blending the brown paste into water.
                        Special occasions are still often marked with chocolate
                        in Costa Rica’s indigenous communities and some cultures
                        continue to use chocolate in funerary rituals.
                    </div>

                    <div
                        style={{
                            marginTop: "10vw",
                            fontSize: "5vw",
                            color: "white",
                            lineHeight: "147%",
                        }}
                    >
                        In keeping with our roots, Sibö Chocolate never over
                        processes its chocolate. We adhere to a time-honored
                        tradition of grinding and conching cacao beans, aspiring
                        to preserve the incredible flavor of our cacao in every
                        bar and hand-made confection. We find inspiration in
                        historical recipes, traditions and fresh, local
                        ingredients. Simple, natural, and an enduring source of
                        energy and pleasure, right from the source.
                    </div>
                </div>
            </ParallaxComponent>
        </div>
        </Layout>
    );
}
