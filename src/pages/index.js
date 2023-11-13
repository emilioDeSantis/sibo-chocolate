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
import DesktopContainer from "@/components/DesktopContainer";
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
        <Layout>
            <div
                style={{
                    width: "100vw",
                    background: "#311d1c",
                    overflowX: "hidden",
                }}
            >
                <video
                    // className="hero"
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls={false}
                    // style={{
                    //     objectFit: "cover",
                    //     width: `100%`,
                    // }}
                    style={{
                        objectFit: "cover",
                        width: `100%`,
                        height: `86vh`,
                        marginTop: "12vw",
                    }}
                >
                    <source src="/hero.mp4" />
                </video>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "92vh",
                        width: "100vw",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "clamp(0rem,30vw,10rem)",
                        paddingBottom: "40px",
                        position: "absolute",
                        top: 0,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100vw",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* <div
                            style={{
                                width: "40vw",
                                filter: "blur(6px)",
                            }}
                        >
                            <Logo2 color={"#000000"} />
                        </div> */}

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
                            display: "flex",
                            flexDirection: "column",
                            width: "100vw",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        {/* <div
                            style={{
                                width: "100vw",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {images.map((image, index) => {
                                const currentPosition =
                                    (currentImage - index + images.length) %
                                    images.length;
                                return (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            position: "absolute",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                       
                                        <div
                                            key={index}
                                            style={{
                                                opacity:
                                                    currentPosition == 0
                                                        ? 1
                                                        : 0,
                                                transition:
                                                    "3s ease-in-out opacity",
                                                color: "white",
                                                // textTransform: "uppercase",
                                                // fontWeight: 900,
                                                textAlign: "center",
                                                fontSize: "12vw",
                                                lineHeight: "90%",
                                                textAlign: "center",
                                                marginInline: "8vw",
                                                textShadow: "0px 0px 20px #000",
                                                fontFamily: "pablo",
                                            }}
                                        >
                                            {images[index].caption}
                                        </div>
                                    </div>
                                );
                            })}
                        </div> */}
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
                </div>

                <DesktopContainer background={"#311d1c"}>
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
                                marginBottom: "clamp(-24rem, -80vw, -21rem)",
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
                                    width: "10rem",
                                    height: "7rem",
                                    border: "1px solid #ffffff99",
                                    marginTop: "22rem",
                                }}
                            >
                                <Image
                                    src={"/minimap.png"}
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
                                    fontSize: "12vw",
                                    paddingInline: "3vw",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link
                                    href="/chocolate"
                                    style={{
                                        marginTop: "36vw",
                                    }}
                                >
                                    Fresh from the Source ⟹
                                </Link>
                                <Link
                                    href="/wellness"
                                    style={{
                                        marginTop: "52vw",
                                        marginLeft: "24vw",
                                    }}
                                >
                                    Better for You ⟹
                                </Link>
                                <Link
                                    href="/sustainability"
                                    style={{
                                        marginTop: "48vw",
                                        marginLeft: "6vw",
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
                                fontSize: "8vw",
                                lineHeight: "100%",
                                marginInline: "3vw",
                                marginTop: "16vw",
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
                                fontSize: "5vw",
                                lineHeight: "169%",
                                marginInline: "3vw",
                                marginTop: "10vw",
                                marginBottom: "4vw",
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
                    <Bottom />
                </DesktopContainer>
            </div>
        </Layout>
    );
};

// export async function getServerSideProps() {
// const categories = await fetchAllCollections();

//     return {
//         props: {
//             categories,
//         },
//     };
// }

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

// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// import React, { useEffect, useRef, useState } from "react";
// import ParallaxDiv from "./ParallaxDiv";
// import Line from "@/components/Line";
// import Logo2 from "@/components/svg/Logo2";
// import {
//     ArrowLongDownIcon,
//     ArrowLongRightIcon,
//     ChevronDoubleDownIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { useColor } from "@/components/Providers/ColorProvider";
// import { motion } from "framer-motion";
// import Canopy from "@/components/svg/Canopy";
// import Treetops from "@/components/svg/Treetops";
// import Volcano from "@/components/svg/Volcano";
// import Mountains from "@/components/svg/Mountains";
// import Hills from "@/components/svg/Hills";
// import LeavesDark from "@/components/svg/LeavesDark";
// import Tree from "@/components/svg/Tree";
// import PodsBack from "@/components/svg/PodsBack";
// import PodsMiddle from "@/components/svg/PodsMiddle";
// import PodsFront from "@/components/svg/PodsFront";
// import LeavesFront from "@/components/svg/LeavesFront";
// import LeavesMiddle from "@/components/svg/LeavesMiddle";
// import TreesBack from "@/components/svg/TreesBack";
// import Foliage from "@/components/svg/Foliage";
// import Cloud from "@/components/svg/Cloud";
// import Farmer from "@/components/svg/Farmer";
// import FarmHill from "@/components/svg/FarmHill";
// import FarmHill2 from "@/components/svg/FarmHill2";
// import FoliageBottom from "@/components/svg/FoliageBottom";
// import ParallaxComponent from "./ParallaxComponent";
// import JungleBack from "@/components/svg/JungleBack";
// import Lotus from "@/components/svg/Lotus";
// import CacaoPod from "@/components/svg/CacaoPod";
// import JungleFront from "@/components/svg/JungleFront";
// import JungleBottom from "@/components/svg/JungleBottom";
// import Layout from "@/components/Layout";
// import Pattern2 from "@/components/Pattern2";
// import { fetchAllCollections } from "@/shopify/backend";
// import { useCategories } from "@/components/Providers/CategoriesProvider";
// // import categories from "@/data/categories";

// const images = [
//     { src: "/sibo-49.png", caption: "Ancient tradition" },
//     { src: "/redbeans.png", caption: "Unique cacao varietals" },
//     { src: "/sibo-3.png", caption: "Expert farmers & Chocolate makers" },
//     { src: "/blogs.png", caption: "Rich volcanic soil" },
// ];

// const Slideshow = ({ currentImage }) => {
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 width: "100vw",
//                 height: "100vh",
//                 overflow: "hidden",
//             }}
//         >
//             {images.map((image, index) => {
//                 const currentPosition =
//                     (currentImage - index + images.length) % images.length;
//                 return (
//                     <div
//                         key={index}
//                         style={{
//                             position: "absolute",
//                             top: 0,
//                             left: "-50vw",
//                             width: "200vw",
//                             height: "100vh",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             opacity: currentPosition == 0 ? 1 : 0,
//                             animation:
//                                 currentPosition == 0 || currentPosition == 1
//                                     ? "slideAnimation 12s linear"
//                                     : "none",
//                             transition: "3s ease-in-out opacity",
//                         }}
//                     >
//                         <Image
//                             src={image.src}
//                             alt={image.caption}
//                             fill
//                             style={{
//                                 objectFit: "cover",
//                             }}
//                         />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const inter = Inter({ subsets: ["latin"] });

// const Home = ({ categories }) => {
//     const [currentImage, setCurrentImage] = useState(0);

//     const { setColor } = useColor();
//     const { setCategories } = useCategories();

//     useEffect(() => {
//         setCategories(categories);
//         setColor("#100606");
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImage((prevIndex) => prevIndex + 1);
//         }, 6000); // 5 seconds for each slide, adjust as needed
//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <div
//             style={{
//                 perspective: "1px",
//                 height: "100vh",
//                 overflowX: "hidden",
//                 overflowY: "scroll",
//                 transformStyle: "preserve-3d",
//                 width: "100vw",
//                 background: "#100606",
//             }}
//         >
//             <Layout>
//                 <ParallaxComponent marginTop={"280vw"} scrollSpeed={0.8}>
//                     <div
//                         style={{
//                             background: "#FFE2B7",
//                             position: "relative",
//                             height: "200vw",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 height: "1.6vw",
//                             }}
//                         />
//                         <Pattern2 color={"#FFD79A"} />
//                         <Pattern2 color={"#FFD79A"} />
//                         <Pattern2 color={"#FFD79A"} />
//                         <Pattern2 color={"#FFD79A"} />
//                         <Pattern2 color={"#FFD79A"} />
//                     </div>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"380vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             textTransform: "uppercase",
//                             border: "none",
//                             color: "#3A2423",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             fontWeight: 900,
//                             fontSize: "9vw",
//                             lineHeight: "100%",
//                             marginInline: "3vw",
//                         }}
//                     >
//                         the world of costa rican chocolate
//                     </div>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"370vw"} scrollSpeed={0.85}>
//                     <div
//                         style={{
//                             position: "relative",
//                         }}
//                     >
//                         <Volcano color={"#B37A52"} />
//                     </div>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "40vw",
//                             background: "#B37A52",
//                             position: "absolute",
//                             marginTop: "-5vw",
//                         }}
//                     />
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"400vw"} scrollSpeed={0.9}>
//                     <div
//                         style={{
//                             position: "relative",
//                         }}
//                     >
//                         <Mountains color={"#7A4B37"} />
//                     </div>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "40vw",
//                             background: "#7A4B37",
//                             position: "absolute",
//                             marginTop: "-5vw",
//                         }}
//                     />
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"500vw"} scrollSpeed={0.95}>
//                     <div
//                         style={{
//                             position: "relative",
//                         }}
//                     >
//                         <Hills color={"#52312A"} />
//                     </div>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "40vw",
//                             background: "#52312A",
//                             position: "absolute",
//                             marginTop: "-5vw",
//                         }}
//                     />
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"530vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             position: "relative",
//                         }}
//                     >
//                         <Canopy color={"#3A2423"} />
//                     </div>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "30vw",
//                             background: "#3A2423",
//                             position: "absolute",
//                             marginTop: "-5vw",
//                         }}
//                     />

//                     <div
//                         style={{
//                             width: "100vw",
//                             background: "#3A2423",
//                             position: "absolute",
//                             marginTop: "0vw",
//                         }}
//                     >
//                         <Pattern2 color={"#100606"} />
//                     </div>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"420vw"} scrollSpeed={0.85}>
//                     <Link
//                         style={{
//                             textTransform: "uppercase",
//                             color: "#fff",
//                             fontWeight: 900,
//                             fontSize: "6.2vw",
//                             paddingInline: "3vw",
//                             position: "absolute",
//                             zIndex: 1,
//                             lineHeight: "86%",
//                         }}
//                         href={"/chocolate"}
//                     >
//                         Aout our chocolate →
//                     </Link>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"470vw"} scrollSpeed={0.9}>
//                     <Link
//                         style={{
//                             textTransform: "uppercase",
//                             color: "#fff",
//                             fontWeight: 900,
//                             fontSize: "6.2vw",
//                             paddingInline: "3vw",
//                             position: "absolute",
//                             zIndex: 1,
//                             lineHeight: "86%",
//                         }}
//                         href={"/wellness"}
//                     >
//                         Wellness →
//                     </Link>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"535vw"} scrollSpeed={0.95}>
//                     <Link
//                         style={{
//                             textTransform: "uppercase",
//                             color: "#fff",
//                             fontWeight: 900,
//                             fontSize: "6.2vw",
//                             paddingInline: "3vw",
//                             position: "absolute",
//                             zIndex: 10,
//                             lineHeight: "86%",
//                         }}
//                         href={"/sustainability"}
//                     >
//                         Sustainability →
//                     </Link>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"600vw"} scrollSpeed={1}>
//                     <Link
//                         style={{
//                             textTransform: "uppercase",
//                             color: "#fff",
//                             fontWeight: 900,
//                             fontSize: "6.2vw",
//                             paddingInline: "3vw",
//                             position: "absolute",
//                             lineHeight: "86%",
//                         }}
//                         href={"/about"}
//                     >
//                         About →
//                     </Link>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"630vw"} scrollSpeed={1}>
//                     <Link
//                         style={{
//                             textTransform: "uppercase",
//                             color: "#fff",
//                             fontWeight: 900,
//                             fontSize: "6.2vw",
//                             paddingInline: "3vw",
//                             position: "absolute",
//                             lineHeight: "86%",
//                         }}
//                         href={"/blogs"}
//                     >
//                         Sibo Blog →
//                     </Link>
//                 </ParallaxComponent>

//                 {/* <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.8}>
//                     <div style={{ position: "relative", height: "180vw" }}>
//                         <Image
//                             src="/hero.png"
//                             alt="Landing Page Image"
//                             layout="fill"
//                             objectFit="cover"
//                         />
//                     </div>
//                 </ParallaxComponent> */}

//                 <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.8}>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "100vh",
//                         }}
//                     >
//                         <Slideshow currentImage={currentImage} />
//                     </div>
//                 </ParallaxComponent>

//                 {/* <ParallaxComponent marginTop={"0vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                         }}
//                     >
//                         <div style={{ position: "relative", height: "200vw" }}>
//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     top: 0,
//                                     left: 0,
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     alignItems: "center",
//                                     width: "100%",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         marginTop: "30vw",
//                                         width: "40vw",
//                                     }}
//                                 >
//                                     <Logo2 color={"#FCEBD2"} />
//                                 </div>
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         justifyContent: "center",
//                                         marginTop: "2em",
//                                     }}
//                                 >
//                                     <Link href="/shop" passHref>
//                                         <div
//                                             style={{
//                                                 fontSize: "1em",
//                                                 textTransform: "uppercase",
//                                                 paddingTop: "0.7em",
//                                                 width: "84vw",
//                                                 paddingBottom: "0.5em",
//                                                 border: "none",
//                                                 background: "#FFD79A",
//                                                 color: "#100606",
//                                                 cursor: "pointer",
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center",
//                                                 marginTop: "5vw",
//                                                 fontWeight: 500,
//                                             }}
//                                         >
//                                             Our Chocolates
//                                             <svg
//                                                 width="24"
//                                                 height="24"
//                                                 fill="none"
//                                                 style={{ marginLeft: "0.5em" }}
//                                             >
//                                                 <path
//                                                     d="M5 12h14M12 5l7 7-7 7"
//                                                     stroke="#100606"
//                                                     strokeWidth="2"
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ParallaxComponent> */}

//                 {/* <ParallaxComponent marginTop={"0vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             height: '100vh',
//                             width: '100vw',
//                         }}
//                     >
//                         <div style={{ position: "relative", height: "200vw" }}>
//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     top: 0,
//                                     left: 0,
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     alignItems: "center",
//                                     width: "100%",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         marginTop: "30vw",
//                                         width: "40vw",
//                                     }}
//                                 >
//                                     <Logo2 color={"#FCEBD2"} />
//                                 </div>
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         justifyContent: "center",
//                                         marginTop: "2em",
//                                     }}
//                                 >
//                                     <Link href="/shop" passHref>
//                                         <div
//                                             style={{
//                                                 fontSize: "1em",
//                                                 textTransform: "uppercase",
//                                                 paddingTop: "0.7em",
//                                                 width: "84vw",
//                                                 paddingBottom: "0.5em",
//                                                 border: "none",
//                                                 background: "#FFD79A",
//                                                 color: "#100606",
//                                                 cursor: "pointer",
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center",
//                                                 marginTop: "5vw",
//                                                 fontWeight: 500,
//                                             }}
//                                         >
//                                             Our Chocolates
//                                             <svg
//                                                 width="24"
//                                                 height="24"
//                                                 fill="none"
//                                                 style={{ marginLeft: "0.5em" }}
//                                             >
//                                                 <path
//                                                     d="M5 12h14M12 5l7 7-7 7"
//                                                     stroke="#100606"
//                                                     strokeWidth="2"
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ParallaxComponent> */}

//                 <ParallaxComponent marginTop={"0vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             height: "100vh",
//                             width: "100vw",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             paddingBlock: "30vw",
//                             background: "#0005",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 width: "100vw",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     width: "40vw",
//                                 }}
//                             >
//                                 <Logo2 color={"#FCEBD2"} />
//                             </div>
//                             <div
//                                 style={{
//                                     textTransform: "uppercase",
//                                     color: "#fff",
//                                     fontWeight: 400,
//                                     fontSize: "4.8vw",
//                                     paddingInline: "3vw",
//                                     zIndex: 1,
//                                     marginTop: "10vw",
//                                     lineHeight: "86%",
//                                     width: '100%',
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 Fresh from the source Since 2007
//                             </div>
//                         </div>

//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 width: "100vw",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 height: '36vw',
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     width: "100vw",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 {images.map((image, index) => {
//                                     const currentPosition =
//                                         (currentImage - index + images.length) %
//                                         images.length;
//                                     return (
//                                         <div
//                                             key={index}
//                                             style={{
//                                                 position: "absolute",
//                                                 opacity:
//                                                     currentPosition == 0
//                                                         ? 1
//                                                         : 0,
//                                                 transition:
//                                                     "3s ease-in-out opacity",
//                                                 color: "white",
//                                                 textTransform: "uppercase",
//                                                 fontWeight: 900,
//                                                 textAlign: 'center',
//                                                 fontSize: "10vw",
//                                                 lineHeight: "90%",
//                                                 textAlign: "center",
//                                                 marginInline: "8vw",
//                                             }}
//                                         >
//                                             {images[index].caption}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                             <Link href="/shop" passHref>
//                                 <div
//                                     style={{
//                                         fontSize: "1em",
//                                         textTransform: "uppercase",
//                                         paddingTop: "0.7em",
//                                         width: "84vw",
//                                         paddingBottom: "0.5em",
//                                         border: "none",
//                                         background: "#FFD79A",
//                                         color: "#100606",
//                                         cursor: "pointer",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         // marginTop: "5vw",
//                                         fontWeight: 500,
//                                     }}
//                                 >
//                                     Our Chocolates
//                                     <svg
//                                         width="24"
//                                         height="24"
//                                         fill="none"
//                                         style={{ marginLeft: "0.5em" }}
//                                     >
//                                         <path
//                                             d="M5 12h14M12 5l7 7-7 7"
//                                             stroke="#100606"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </ParallaxComponent>

//                 <ParallaxComponent marginTop={"180vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             background: "#100606",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 textTransform: "uppercase",
//                                 border: "none",
//                                 color: "#FFE9CF",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 fontWeight: 900,
//                                 fontSize: "16vw",
//                                 lineHeight: "100%",
//                                 marginInline: "3vw",
//                                 marginTop: "30vw",
//                             }}
//                         >
//                             Fresh from the source
//                         </div>
//                         <div
//                             style={{
//                                 border: "none",
//                                 color: "#BF9B86",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 fontWeight: 400,
//                                 fontSize: "5vw",
//                                 lineHeight: "169%",
//                                 marginInline: "3vw",
//                                 marginTop: "10vw",
//                                 marginBottom: "30vw",
//                             }}
//                         >
//                             Welcome to Sibo, where the pure taste of Costa Rica
//                             comes to life in every bite of our world-class
//                             chocolates. We are a team dedicated to preserving
//                             our rich heritage through every delightful bite.
//                             Handcrafted from fresh local ingredients, our
//                             chocolates embody the lush, fertile paradise of
//                             Costa Rica in each piece.
//                         </div>
//                     </div>
//                 </ParallaxComponent>
//                 <ParallaxComponent marginTop={"660vw"} scrollSpeed={1}>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 textTransform: "uppercase",
//                                 color: "#FFE9CF",
//                                 fontWeight: 900,
//                                 fontSize: "12vw",
//                                 paddingInline: "3vw",
//                                 marginTop: "26vw",
//                                 lineHeight: "86%",
//                                 marginBottom: "10vw",
//                             }}
//                         >
//                             Explore Our Collection
//                         </div>

//                         {categories.map((category) => (
//                             <Link
//                                 href={`/shop/${category.slug}`}
//                                 style={{
//                                     marginTop: "6vw",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         position: "absolute",
//                                         zIndex: 1,
//                                     }}
//                                 >
//                                     <Pattern2 color={"#331F1C"} />
//                                 </div>
//                                 <div
//                                     style={{
//                                         textTransform: "uppercase",
//                                         color: "#FFD79A",
//                                         fontWeight: 900,
//                                         fontSize: "9vw",
//                                         paddingInline: "3vw",
//                                         position: "absolute",
//                                         zIndex: 1,
//                                         marginTop: "24vw",
//                                         lineHeight: "86%",
//                                     }}
//                                 >
//                                     {category.title} →
//                                 </div>

//                                 <div
//                                     style={{
//                                         position: "relative",
//                                         width: "100vw",
//                                         height: "66vw",
//                                         marginTop: "14vw",
//                                     }}
//                                 >
//                                     <Image
//                                         src={category.backgroundImageUrl}
//                                         alt="sky"
//                                         fill
//                                         sizes="100vw"
//                                         priority
//                                         style={{
//                                             objectFit: "cover",
//                                         }}
//                                     />
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </ParallaxComponent>
//             </Layout>
//         </div>
//     );
// };

// export async function getServerSideProps() {
//     const categories = await fetchAllCollections();

//     return {
//         props: {
//             categories,
//         },
//     };
// }

// export default Home;
