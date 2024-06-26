import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React, { useEffect, useRef, useState } from "react";
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
import { fetchAllCollections, fetchFeaturedProducts } from "@/shopify/backend";
import { useCategories } from "@/components/Providers/CategoriesProvider";
import Section from "@/components/Section";
import Swatch2 from "@/components/svg/Swatch2";
import Bottom from "@/components/Bottom";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Map from "@/components/map";
import Map2 from "@/components/Map2";
import Graphic from "@/components/svg/Graphic";
import Cutout from "@/components/svg/Cutout";
import HomeDesktopContainer from "@/components/HomeDesktopContainer";
import SimpleCategories from "@/components/SimpleCategories";
// import categories from "@/data/categories";

const images = [
    {
        src: "/sibo-49.png",
        caption: "Fresh from the Source",
        prefix: "Chocolate made",
    },
    {
        src: "/sibo-44 home.png",
        caption: "Better for You",
        prefix: "Inspired by",
    },
    {
        src: "/sibo-3.png",
        caption: "Better for the Planet",
        prefix: "Crafted by",
    },
    {
        src: "/redbeans.png",
        caption: "Unique cacao varietals",
        prefix: "Using",
    },
    {
        src: "/leaf.png",
        caption: "Costa rican Farmers",
        prefix: "Grown by",
    },
];

const Slideshow = ({ currentImage }) => {
    return (
        <div
            style={{
                position: "relative",
                width: "100vw",
                height: "90vh",
                overflow: "hidden",
            }}
        >
            {images.map((image, index) => {
                const currentPosition =
                    (currentImage - index + images.length) % images.length;
                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: "-50vw",
                            width: "200vw",
                            height: "90vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: currentPosition == 0 ? 1 : 0,
                            animation:
                                currentPosition == 0 || currentPosition == 1
                                    ? "slideAnimation 12s linear"
                                    : "none",
                            transition: "2.5s ease-in-out opacity",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.caption}
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const LearnMore = ({ children, href, color }) => {
    return (
        <Link
            href={href}
            style={{
                fontSize: "4vw",
                textTransform: "uppercase",
                border: "none",
                color: color,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-4vw",
                fontWeight: 900,
            }}
        >
            {children}
        </Link>
    );
};

const inter = Inter({ subsets: ["latin"] });

const Home = ({ categories, products }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const { setColor } = useColor();
    const { setCategories } = useCategories();

    useEffect(() => {
        setCategories(categories);
        setColor("#311d1c");
    }, []);

    useEffect(() => {
        // Immediately change the image after a shorter interval
        const timeout = setTimeout(() => {
            setCurrentImage((prevIndex) => prevIndex + 1);

            // After the quick interval, set up a regular interval
            const interval = setInterval(() => {
                setCurrentImage((prevIndex) => prevIndex + 1);
            }, 4500);

            // Clear the interval when the component is unmounted
            return () => clearInterval(interval);
        }, 2500); // Set the time you want for the quick interval

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Head>
                <title>
                    SIBÖ CHOCOLATE | Costa Rican Chocolate Made Fresh from the
                    Source
                </title>
                <meta
                    name="description"
                    content="Costa Rica’s leading origin chocolate maker, fine artisan chocolates made fresh from the source in Costa Rica since 2007."
                />
            </Head>
            <Layout>
                <div
                    style={{
                        width: "100vw",
                        background: "#311d1c",
                        overflowX: "hidden",
                    }}
                >
                    <video
                        className="hero"
                        muted
                        autoPlay
                        loop
                        playsInline
                        controls={false}
                        style={{
                            objectFit: "cover",
                            width: `100%`,
                        }}
                        // style={{
                        //     objectFit: "cover",
                        //     width: `100%`,
                        //     height: `86vh`,
                        //     marginTop: "12vw",
                        // }}
                    >
                        <source src="/hero.mp4" />
                    </video>

                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "clamp(0rem,30vw,10rem)",
                            flexDirection: "column",
                            width: "100vw",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                width: "12rem",
                                position: "absolute",
                            }}
                        >
                            <Logo2 color={"#ffffff"} />
                        </div>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            bottom: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            width: "100vw",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Link href="/shop" passHref>
                            <div
                                style={{
                                    fontSize: "4.2rem",
                                    // textTransform: "uppercase",
                                    paddingTop: "0.4em",
                                    width: "84vw",
                                    paddingBottom: "0.2em",
                                    border: "none",
                                    // background: "#FFD79A",
                                    // background: "#33161299",
                                    // borderRadius: '100px',
                                    color: "#100606",
                                    color: "#fff",
                                    textShadow: "0px 0px 20px #000",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // marginTop: "5vw",
                                    // fontWeight: 500,
                                    // boxShadow: "0px 2px 8px #0009",
                                    fontFamily: "pablo",
                                }}
                            >
                                Shop Now ⟹
                            </div>
                        </Link>
                    </div>
                    {/* </div> */}

                    <HomeDesktopContainer background={"#311d1c"}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                // background: "#100606",
                                alignItems: "flex-start",
                                // marginBottom: "-25vw",
                                // marginBottom: "-18rem",
                            }}
                        >
                            <div
                                style={{
                                    zIndex: 11,
                                }}
                            >
                                <FeaturedProducts products={products} />
                            </div>

                            <div
                                style={{
                                    color: "#110905",
                                    // background: "#100606",
                                    fontSize: "3.6rem",
                                    fontWeight: 400,
                                    paddingInline: "3vw",
                                    lineHeight: "110%",
                                    marginTop: "6.2rem",
                                    // fontFamily: "pablo",
                                    // textShadow: "0px 0px 20px #442211",
                                    // top: '5vw',
                                    // zIndex: 1,
                                    width: "100%",
                                    zIndex: 2,
                                    fontFamily: "pablo",
                                }}
                            >
                                Meet the Farmers
                            </div>
                            <div
                                style={{
                                    color: "#110905dd",
                                    // background: "#100606",
                                    fontSize: "1.1rem",
                                    fontWeight: 800,
                                    paddingInline: "3vw",
                                    lineHeight: "110%",
                                    marginTop: "0vw",
                                    marginBottom:
                                        "clamp(-24rem, -80vw, -21rem)",
                                    // fontFamily: "pablo",
                                    // textShadow: "0px 0px 20px #442211",
                                    // top: '5vw',
                                    // zIndex: 1,
                                    width: "100%",
                                    zIndex: 2,
                                    // fontFamily: "pablo",
                                }}
                            >
                                Click on a farm to learn more
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    width: "100%",
                                    height: 0,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    paddingInline: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: "clamp(8rem,24vw, 18rem)",
                                        height: "clamp(8rem,24vw, 18rem)",
                                        border: "0.7px solid #ffffff",
                                        borderRadius: "100%",
                                        marginTop: "22rem",
                                    }}
                                >
                                    <Image
                                        src={"/minimap.png"}
                                        alt="sky"
                                        fill
                                        sizes="30vw"
                                        priority
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    marginBottom: "-14.5rem",
                                    width: "100%",
                                    marginTop: "12rem",
                                    zIndex: 1,
                                    height: "15rem",
                                }}
                            >
                                <Cutout />
                            </div>
                            <Map2 />
                            <div
                                style={{
                                    marginTop: "-4.2rem",
                                    zIndex: 1,
                                    width: "100%",
                                    position: "relative",
                                }}
                            >
                                <Graphic />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        fontFamily: "pablo",
                                        color: "#311d1c",
                                        // fontSize: "12vw",
                                        fontSize: "clamp(1rem, 12vw, 5rem)",
                                        paddingInline: "3vw",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Link
                                        href="/chocolate"
                                        style={{
                                            marginTop:
                                                "clamp(1rem, 36vw, 21rem)",
                                        }}
                                    >
                                        Fresh from the Source ⟹
                                    </Link>
                                    <Link
                                        href="/wellness"
                                        style={{
                                            marginTop:
                                                "clamp(1rem, 52vw, 30rem)",
                                            marginLeft:
                                                "clamp(1rem, 24vw, 12rem",
                                        }}
                                    >
                                        Better for You ⟹
                                    </Link>
                                    <Link
                                        href="/sustainability"
                                        style={{
                                            marginTop:
                                                "clamp(1rem, 48vw, 28rem)",
                                            marginLeft:
                                                "clamp(1rem, 6vw, 4rem)",
                                        }}
                                    >
                                        Better for the Planet ⟹
                                    </Link>
                                </div>
                            </div>

                            <div
                                style={{
                                    // textTransform: "uppercase",
                                    border: "none",
                                    color: "#FFE9CF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 900,
                                    fontSize: "1.8rem",
                                    lineHeight: "100%",
                                    marginInline: "3vw",
                                    marginTop: "3.6rem",
                                }}
                            >
                                Not all chocolate is created equal.
                            </div>
                            <div
                                style={{
                                    border: "none",
                                    color: "#BF9B86",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 400,
                                    fontSize: "1.1rem",
                                    lineHeight: "169%",
                                    marginInline: "3vw",
                                    marginTop: "2.4rem",
                                    marginBottom: "1rem",
                                    zIndex: 2,
                                }}
                            >
                                {`Sibö is proud to bring you a new world of chocolate flavor from Costa Rica. What makes Costa Rican chocolate so special? It starts with our unique cacao varietals grown in rich volcanic soil, as well as an ancient tradition of chocolate making that goes back 3,000 years.`}
                            </div>
                            {/* <div
                        style={{
                            zIndex: 1,
                            padding: "3vw",
                            marginBottom: "10vw",
                        }}
                    >
                        <LearnMore href="/chocolate" color="white">
                            READ MORE ABOUT OUR CHOCOLATE →
                        </LearnMore>
                    </div> */}
                        </div>
                        {/* <Section
                    title="Sibö, better for you"
                    backgroundColor="#39211c" // beige color
                    textColor="#fffae3" // saddlebrown color for text
                    imageUrl="/healthy.png"
                    imageHeight="90vw"
                    noSwatch={true}
                >
                    <div>{`Your mind, body & spirit on chocolate`}</div>

                    <div>
                        {`Modern science is proving what indigenous people in Costa Rica have known for Millennia: Chocolate gives you energy, makes you feel good, and can help keep your heart and mind healthy. Chocolate is also loaded with polyphenols (antioxidants) and minerals like magnesium, iron and potassium. Sibö chocolate is tested safe for cadmium and lead, which can be present in cacao grown in certain regions, but have not been found on Sibö partner farms.`}
                    </div>
                    <LearnMore href="/wellness" color="white">
                        READ MORE ABOUT CHOCOLATE & YOUR HEALTH →
                    </LearnMore>
                </Section>

                <Section
                    title="Sibö, better for the planet"
                    backgroundColor="#fffae3" // beige color
                    textColor="#39211c" // saddlebrown color for text
                    imageUrl="/better2.png"
                    imageHeight="100vw"
                    noSwatch={true}
                >
                    <div>{`Agroforestry, Upcycling & Equitable Sourcing`}</div>

                    <div>
                        {`Unlike some countries that clear cut forest to plant cacao, Costa Rica is looking to cacao as a means of agroforestry and regenerative farming. Sibö partner farms are actually changing Costa Rica’s landscape by transforming cattle pastures and banana fields into forests of cacao.`}
                    </div>
                    <LearnMore href="/sustainability" color="black">
                        READ MORE ABOUT Sibö’s SUSTAINABLE PRACTICES →
                    </LearnMore>
                </Section> */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "3rem",
                                background: "#100606",
                                paddingBottom: "3rem",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "36rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                <Image
                                    src={"/hero.png"}
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
                                style={{
                                    // display: "flex",
                                    position: "absolute",
                                    // flexDirection
                                    width: "100%",
                                }}
                            >
                                <div
                                    className="mobile"
                                    style={{
                                        marginTop: "-0.25rem",
                                        // zIndex: 2,
                                    }}
                                >
                                    <Pattern2 color={"#311d1c"} />
                                </div>

                                <div
                                    style={{
                                        // zIndex: 2,
                                        // textTransform: "uppercase",
                                        color: "#FFE9CF",
                                        fontSize: "7rem",
                                        paddingInline: "3vw",
                                        marginTop: "3rem",
                                        // lineHeight: "86%",
                                        marginBottom: "2rem",
                                        fontFamily: "pablo",
                                    }}
                                >
                                    Shop Now
                                </div>
                            </div>
                            <SimpleCategories
                                categories={categories}
                            ></SimpleCategories>
                        </div>
                    </HomeDesktopContainer>
                    <Bottom />
                </div>
            </Layout>
        </>
    );
};

export async function getServerSideProps() {
    // console.log('featured');
    const products = await fetchFeaturedProducts();
    const categories = await fetchAllCollections();

    // Return the products data as props
    return {
        props: {
            categories,
            products,
        },
    };
}

export default Home;
