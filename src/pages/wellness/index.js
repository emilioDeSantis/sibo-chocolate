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
import Canopy from "@/components/svg/Canopy";
import JungleBack from "@/components/svg/JungleBack";
import Lotus from "@/components/svg/Lotus";
import CacaoPod from "@/components/svg/CacaoPod";
import Bottom from "@/components/Bottom";
import WellnessPods from "@/components/svg/WellnessPods";
import Title from "@/components/Title";
import DesktopContainer from "@/components/DesktopContainer";

function Wellness() {
    const { setColor } = useColor();

    useEffect(() => {
        setColor("#3C231D");
    }, []);
    return (
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
                        width: "100",
                    }}
                >
                    <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.5}>
                        <div
                            style={{
                                background: "#F9DBAA",
                                width: "100vw",
                                height: "100vw",
                            }}
                        />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-70vw"} scrollSpeed={0.5}>
                        <JungleBack color={"#D9A270"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"30vw"} scrollSpeed={0.65}>
                        <Lotus color={"#643238"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-0vw"} scrollSpeed={0.68}>
                        <WellnessPods color={"4c2927"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-70vw"} scrollSpeed={0.8}>
                        <JungleFront color={"#3C231D"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-80vw"} scrollSpeed={0.8}>
                        <JungleBottom color={"#2E1D1C"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"130vw"} scrollSpeed={0.8}>
                        <div
                        className="mobile"
                            style={{
                                background: "#2E1D1C",
                                width: "100vw",
                                height: "240vw",
                            }}
                        />
                    </ParallaxComponent>
                    <ParallaxComponent marginTop={"130vw"} scrollSpeed={0.8}>
                        <div
                        className="desktop"
                            style={{
                                background: "#2E1D1C",
                                width: "100vw",
                                height: "60vw",
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
                            <Title>Sibö, Better for You</Title>
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
                                {`Your mind, body, spirit on chocolate`}
                            </div>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    fontWeight: 400,
                                    marginTop: "12vw",
                                    marginBottom: "3rem",
                                }}>
                                {
                                    "A study of 20,000 people published in the Journal of Nutrition, found 6.7 grams -- about 1/4 of an ounce -- of chocolate per day is the ideal amount for a protective effect against inflammation -- a risk factor for cardiovascular disease."
                                }
                            </div>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    fontWeight: 400,
                                    marginTop: "2rem",
                                    marginBottom: "3rem",
                                }}>
                                {
                                    "People having moderate amounts of dark chocolate regularly have significantly lower levels of C-reactive protein in their blood -- a biomarker for inflammation."
                                }
                            </div>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    fontWeight: 400,
                                    marginTop: "2rem",
                                    marginBottom: "3rem",
                                }}>
                                {
                                    '"The 17 percent average reduction observed may appear quite small but it is enough to decrease the risk of cardiovascular disease for one-third in women and one-fourth in men. It is undoubtedly a remarkable outcome," lead author Romina di Giuseppe said in a statement.'
                                }
                            </div>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    fontWeight: 400,
                                    marginTop: "2rem",
                                    marginBottom: "3rem",
                                }}>
                                {
                                    '"The best effect is obtained by consuming an average amount of 6.7 grams of chocolate per day, corresponding to a small square of chocolate twice or three times a week but beyond these amounts the beneficial effect tends to disappear."'
                                }
                            </div>

                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    marginTop: "2rem",
                                    marginBottom: "3rem",
                                }}
                                href="https://www.upi.com/Health_News/2008/09/23/67-grams-of-dark-chocolate-cut-heart-risk/40521222190277/#:~:text=The%20study%2C%20published%20in%20the%20Journal%20of%20Nutrition%2C,inflammation%20--%20a%20risk%20factor%20for%20cardiovascular%20disease."
                            >
                                6.7 grams of dark chocolate cut heart risk -
                                UPI.com
                            </Link>
                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                    fontSize: "1.2rem",
                                    lineHeight: "147%",
                                    marginTop: "2rem",
                                    marginBottom: "3rem",
                                }}
                                href="https://news.harvard.edu/gazette/story/2021/06/starting-the-day-off-with-chocolate-may-have-unexpected-benefits/"
                            >
                                Starting the day off with chocolate may have
                                unexpected benefits – Harvard Gazette
                            </Link>
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
                            <Swatch2 color={"#2E1D1C"} />

                        </div>

                        <Section
                            title="Your Mind on Chocolate"
                            backgroundColor="#A8F7F7" // beige color
                            textColor="#17181B" // saddlebrown color for text
                            imageUrl="/daily2.png"
                            imageHeight="160vw"
                            aspectRatio={0.85}
                        >
                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                }}
                                href="https://www.forbes.com/sites/alicegwalton/2018/04/27/dark-chocolate-may-boost-brain-function-immunity-and-mood/?sh=546b42ed4608"
                            >
                                Dark Chocolate May Boost Brain Function,
                                Immunity, And Mood
                            </Link>
                        </Section>

                        <Section
                            title="Your Body on Chocolate"
                            backgroundColor="#F5eeDC" // beige color
                            textColor="#421" // saddlebrown color for text
                            imageUrl="/theo2.png"
                            imageHeight="105vw"
                            aspectRatio={0.6}
                        >
                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                }}
                                href="https://health.clevelandclinic.org/dark-milk-or-white-which-chocolate-is-best-for-your-heart/"
                            >
                                CARDIOVASCULAR
                            </Link>
                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                }}
                                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5699188/"
                            >
                                DIET & DIABETES
                            </Link>
                        </Section>

                        <Section
                            title="Your Spirit on Chocolate"
                            backgroundColor="#49211E" // beige color
                            textColor="#ffe0bf" // saddlebrown color for text
                            imageUrl="/lotus.png"
                            imageHeight="100vw"
                            aspectRatio={1}
                        >
                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                }}
                                href="https://news.harvard.edu/gazette/story/2021/06/starting-the-day-off-with-chocolate-may-have-unexpected-benefits/"
                            >
                                Starting the day off with chocolate may have
                                unexpected benefits – Harvard Gazette
                            </Link>

                            <Link
                                style={{
                                    fontWeight: 600,
                                    textDecoration: "underline",
                                }}
                                href="https://www.scienceofcooking.com/chocolate/drugs-found-in-chocolate.htm"
                            >
                                Chocolate as antianxiety
                            </Link>
                        </Section>

                        <Section
                            title="No Cadmium or Lead in our Chocolate"
                            backgroundColor="#F9DBAA" // beige color
                            textColor="#332323" // saddlebrown color for text
                            imageUrl="/cadmium.png"
                            imageHeight="100vw"
                            aspectRatio={1}
                        >
                            <div>
                                {`Sibö chocolate is tested safe for cadmium and lead, which have been found in other chocolate brands and have raised concern by consumer advocacy groups.`}
                            </div>

                            <div>
                                {`Cadmium is naturally present in some soils, which means it can be absorbed into agricultural goods produced on farms where cadmium is present. But not all soils contain cadmium. Sibö partner farms are located in regions of Costa Rica that have not shown any presence of cadmium. And lab results have confirmed that Sibö chocolate samples are cadmium free.`}
                            </div>

                            <div>
                                {`Our clients can also rest assured that our manufacturing and traceability standards prevent exposure to contaminants, including lead. We have never found the presence of lead in any Sibö products.`}
                            </div>
                        </Section>
                    </DesktopContainer>
                    <Bottom />
                </div>
            </div>
        </Layout>
    );
}

export default Wellness;
