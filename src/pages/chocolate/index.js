import Layout from "@/components/Layout";
import Section from "@/components/Section";
import ParallaxComponent from "../ParallaxComponent";
import TreesBack from "@/components/svg/TreesBack";
import LeavesFront from "@/components/svg/LeavesFront";
import Tree from "@/components/svg/Tree";
import PodsMiddle from "@/components/svg/PodsMiddle";
import LeavesDark from "@/components/svg/LeavesDark";
import Foliage from "@/components/svg/Foliage";
import FoliageBottom from "@/components/svg/FoliageBottom";
import JungleFront from "@/components/svg/JungleFront";
import JungleBottom from "@/components/svg/JungleBottom";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Link from "next/link";
import Swatch2 from "@/components/svg/Swatch2";
import Volcano from "@/components/svg/Volcano";
import Cloud from "@/components/svg/Cloud";
import Mountains from "@/components/svg/Mountains";
import Hills from "@/components/svg/Hills";
import Canopy from "@/components/svg/Canopy";
import Map from "@/components/map";
import Bottom from "@/components/Bottom";
import ScrollLink from "@/components/ScrollLink";
import { Element } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";
import Title from "@/components/Title";
import DesktopContainer from "@/components/DesktopContainer";

function Chocolate() {
    const { setColor } = useColor();
    const router = useRouter();

    useEffect(() => {
        setColor("#f6eabe");
    }, [setColor]); // Dependency on setColor only

    return (
        <>
            <Head>
                <title>
                    SIBÖ CHOCOLATE | Our Chocolates
                </title>
                <meta
                    name="description"
                    content="Costa Rica’s best chocolate following ancient tradition, made with unique cacao varietals grown in rich volcanic soil."
                />
            </Head>
            <Layout>
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        overflowY: "hidden",
                    }}
                >
                    <div
                        className="roku-margin"
                        style={{
                            perspective: "1px",
                            overflowX: "hidden",
                            overflowY: "scroll",
                            transformStyle: "preserve-3d",
                            width: "100vw",
                            // marginTop: "2rem",
                            WebkitTransformStyle: "preserve-3d",
                            WebkitTransform: "translate3d(0,0,0)",
                        }}
                    >
                        <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.4}>
                            <div
                                style={{
                                    background: "#f6eabe",
                                    width: "100vw",
                                    height: "70vw",
                                }}
                            />
                        </ParallaxComponent>
                        <ParallaxComponent marginTop={"20vw"} scrollSpeed={0.4}>
                            <Volcano color={"#e5b077"} />
                        </ParallaxComponent>

                        <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.5}>
                            <Mountains color={"#c27248"} />
                        </ParallaxComponent>

                        <ParallaxComponent
                            marginTop={"55vw"}
                            scrollSpeed={0.65}
                            background={"#435"}
                            invert={true}
                        >
                            <Hills color={"#673724"} />
                        </ParallaxComponent>

                        <ParallaxComponent
                            marginTop={"40vw"}
                            scrollSpeed={0.8}
                            background={"#29130C"}
                            invert={true}
                        >
                            <Canopy color={"#3C231D"} />
                        </ParallaxComponent>
                        <ParallaxComponent
                            marginTop={"110vw"}
                            scrollSpeed={0.8}
                        >
                            <div
                                className="mobile"
                                style={{
                                    background: "#3C231D",
                                    width: "100vw",
                                    height: "230vw",
                                }}
                            />
                        </ParallaxComponent>
                        <ParallaxComponent
                            marginTop={"110vw"}
                            scrollSpeed={0.8}
                        >
                            <div
                                className="desktop"
                                style={{
                                    background: "#3C231D",
                                    width: "100vw",
                                    height: "70vw",
                                }}
                            />
                        </ParallaxComponent>

                        <DesktopContainer>
                            <div
                                style={{
                                    marginTop: "clamp(1rem, 110vw, 146vh)",
                                    paddingInline: "3vw",
                                    color: "#faf1e3",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                <Title>Chocolate Fresh from the Source</Title>
                                <div
                                    style={{
                                        // width: "100%",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: "140%",
                                        letterSpacing: "0.05em",
                                        marginTop: "1.8rem",
                                        // textAlign: 'center',
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {`Unique cacao varietals`} /{" "}
                                    {`Expert farmers & Chocolate makers`} /{" "}
                                    {`Rich volcanic soil`} /{" "}
                                    {`Ancient tradition`}
                                </div>

                                <div
                                    style={{
                                        fontSize: "1.2rem",
                                        lineHeight: "147%",
                                        fontWeight: 400,
                                        marginTop: "12vw",
                                    }}
                                >
                                    {`In keeping with our roots, Sibö Chocolate never overprocesses its chocolate. We adhere to a time-honored tradition of grinding and conching cacao beans, aspiring to preserve the incredible flavor of our cacao in every bar and hand-made confection. We find inspiration in historical recipes, cultural traditions and fresh, local ingredients. Simple, natural, and an enduring source of energy, right from the source.`}
                                </div>
                                <div
                                    style={{
                                        fontSize: "1.2rem",
                                        lineHeight: "147%",
                                        fontWeight: 400,
                                        marginTop: "2rem",
                                        marginBottom: "3rem",
                                    }}
                                >
                                    {`We trade directly with expert farmers who provide our professional chocolate makers with only the best fine-flavor beans to produce chocolate that is uniquely Costa Rican. `}
                                </div>
                                <Title>Visit the Factory</Title>
                                <video
                                    controls
                                    poster="/factorythumb.png"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        objectFit: "cover",
                                        background: "#fff1",
                                        marginTop: "2rem",
                                        marginBottom: "1rem",
                                    }}
                                    src={"/Procesobarrasyrecubiertos.mp4"}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div
                                className="desktop"
                                style={{
                                    height: "24vw",
                                }}
                            />
                            <div
                                // className="mobile"
                                style={{
                                    marginTop: "-46vw",
                                    marginBottom: "-25vw",
                                }}
                            >
                                <Swatch2 color={"#3C231D"} />
                            </div>

                            <Section
                                title="Expert Farmers"
                                backgroundColor="#F5eeDC" // beige color
                                textColor="#442211" // saddlebrown color for text
                                imageUrl="/ecpert f.png"
                                imageHeight="32rem"
                                aspectRatio={0.8}
                            >
                                <div>
                                    {`Sibö partner farms are experts at fermenting and drying cacao to unlock its flavor potential. Our job at Sibö is to further develop that flavor, bringing out the best in those beans, and craft a chocolate bar that will hopefully make you stop in your tracks.`}
                                </div>
                            </Section>

                            <Section
                                title="Unique Cacao Varietals"
                                backgroundColor="#532" // chocolate color
                                textColor="#fdfaec" // beige color for text for high contrast
                                imageUrl="/cacao pretty2.png"
                                imageHeight="100vw"
                                aspectRatio={1}
                            >
                                {`Costa Rica is one of the few countries that produces exclusively fine-flavor cacao, a superior category of beans representing only 12% of the world cocoa market. That means that our chocolate has a rich and balanced base of chocolate flavor along with hints of more complex flavor notes, such as fruit, caramel, roasted coffee and nuts. While some of the flavor magic lies in the rare genetics of our country’s cacao, the quality of our chocolate depends on what happens after the beans are harvested.`}
                            </Section>

                            <Section
                                title="Terroir"
                                backgroundColor="#712a00" // chocolate color
                                textColor="#fdfaec" // beige color for text for high contrast
                                imageUrl="/map-light6.png"
                                imageHeight="80vw"
                                aspectRatio={1.3}
                            >
                                {`For thousands of years, ancient lava flows and volcanic ash have fed these lands with nutrients and minerals to form a rare type of soil called Andisol. This rich earth and year-round warm, tropical weather contribute to our cacao’s unique terroir. From region to region, and even from farm to farm, you’ll find surprising flavor notes that distinguish our Costa Rican chocolates from other cacao producing countries around the world.`}
                            </Section>

                            <Section
                                title="Ancient Tradition"
                                backgroundColor="#def7e8" // chocolate color
                                textColor="#100f1b" // beige color for text for high contrast
                                imageUrl="/ancient tardition.png"
                                imageHeight="120vw"
                                aspectRatio={0.8}
                            >
                                <div>
                                    {`Long before the Europeans transformed chocolate into what we know today, peoples native to these lands were preparing a pungent elixir called xocolatl (meaning “bitter water” in the Nahua language). This stimulating libation was made by grinding dry fermented cacao beans into an unctuous paste and melting it into water, together with fragrant vanilla beans, dried chili peppers, and pulverized maize. The drink was a source of energy served on special occasions, often reserved for warriors before battle.`}
                                </div>
                                <div>
                                    {`Today, indigenous Costa Ricans still prepare their own chocolate, plucking ripe cacao pods from wild trees planted by their elders. These trees and the forest at large are considered a most precious gift from Father Nature, also known as Sibö. For many, the process of making chocolate remains unchanged, fermenting and drying the beans under the sun before grinding them on a warm stone slab and blending the brown paste into water. Special occasions are still often marked with chocolate in Costa Rica’s indigenous communities and some cultures continue to use chocolate in funerary rituals.`}
                                </div>
                            </Section>

                            <Section
                                title="Professional Chocolate Makers"
                                backgroundColor="#291405" // chocolate color
                                textColor="#f3f1ea" // beige color for text for high contrast
                                imageUrl="/expert3.png"
                                imageHeight="120vw"
                                aspectRatio={0.8}
                            >
                                <div>
                                    {`Making chocolate is a labor of love. From farm to table, there are nine steps in getting a delicious chocolate bar to you—and each one is critical. A delicious chocolate depends on great cacao beans, but also how those beans are processed and how the chocolate is made.`}
                                </div>
                            </Section>

                            <Section
                                title="Harvesting, Fermentation & Drying"
                                backgroundColor="#291405" // chocolate color
                                textColor="#f3f1ea" // beige color for text for high contrast
                                imageUrl="/harvest.png"
                                imageHeight="100vw"
                                aspectRatio={1}
                            >
                                <div>
                                    {`Cacao pods, which mature at different rates, have to be harvested by hand at just the right time. Each pod is cracked opened by hand and the fresh beans have to be scooped out and placed in fermentation boxes with care. For the fermentation process to yield the best results, the right temperatures and time for aerobic and anaerobic phases are required. Drying the beans is also an essential step—too slow could lead to moldy beans, too fast could seal in some moisture.`}
                                </div>
                            </Section>

                            <Section
                                title="Roasting & Winnowing"
                                backgroundColor="#291405" // chocolate color
                                textColor="#f3f1ea" // beige color for text for high contrast
                                imageUrl="/roasting and wino.png"
                                imageHeight="100vw"
                                aspectRatio={1}
                            >
                                <div>
                                    {`Assuming all this has been done right, the roasting process is critical. Reaching just the right temperature for just the right time will enhance all those great flavors in the bean without masking them behind a high roast. Winnowing follows, which requires removing as much of the shell as possible without losing pieces of the bean (cocoa nibs). This is an imperfect process.`}
                                </div>
                            </Section>

                            <Section
                                title="Grinding & Conching"
                                backgroundColor="#291405" // chocolate color
                                textColor="#f3f1ea" // beige color for text for high contrast
                                imageUrl="/grinding.png"
                                imageHeight="100vw"
                                aspectRatio={1}
                            >
                                <div>
                                    {`Special equipment is used to achieve the right texture and balance of flavor during these steps. This part of the process is a big moment for defining the overall quality of the chocolate. The goal is to refine the cacao pieces and sugar until the paste feels smooth and silky on the tongue, all while reducing bitterness and astringency. But that can be hard to accomplish without also losing some of the pleasant acidity. Too much conching and the chocolate will fall flat.`}
                                </div>
                            </Section>

                            <Section
                                title="Tempering & Molding"
                                backgroundColor="#291405" // chocolate color
                                textColor="#f3f1ea" // beige color for text for high contrast
                                imageUrl="/sibu_54x.png"
                                imageHeight="110vw"
                                aspectRatio={0.9}
                            >
                                <div>
                                    {`Finally, the tempering process is crucial to giving the chocolate all the characteristics that we love: the shine, the snap and the perfect melt in your mouth.`}
                                </div>
                                <div>
                                    {`Every bar of Sibö chocolate adheres to the highest standards of quality in order to deliver excellent chocolate every time. While we celebrate the unique flavors developed in each batch we make, we take care in monitoring all steps in the chocolate making process, in order to guarantee outstanding flavor each and every year.`}
                                </div>
                            </Section>

                            <Section
                                title="Quality Assurance Training"
                                backgroundColor="#eee790" // chocolate color
                                textColor="#280802" // beige color for text for high contrast
                                imageUrl="/quality.png"
                                imageHeight="100vw"
                                aspectRatio={1}
                            >
                                <div>
                                    {`SIBÖ’S quality assurance staff has completed exhaustive training as auditors in Best Manufacturing Practices for food safety with Costa Rica’s National Learning Institute (INA). All Sibö Chocolate employees hold certificates in food handling and adhere to strict guidelines to guarantee food safety and traceability.`}
                                </div>
                                <div>
                                    {`Members of our staff have also completed coursework with international specialists through Costa Rica’s Universidad Nacional, to form part of an official panel of expert cacao tasters for the country.`}
                                </div>
                            </Section>
                        </DesktopContainer>
                        <Bottom />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Chocolate;
