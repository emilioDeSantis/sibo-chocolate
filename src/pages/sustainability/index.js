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
import Bottom from "@/components/Bottom";
import FarmHill2 from "@/components/svg/FarmHill2";
import FarmHill from "@/components/svg/FarmHill";
import Hills from "@/components/svg/Hills";
import Mountains from "@/components/svg/Mountains";
import Title from "@/components/Title";

function Sustainability() {
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
                    style={{
                        perspective: "1px",
                        height: "100vh",
                        overflowX: "hidden",
                        overflowY: "scroll",
                        transformStyle: "preserve-3d",
                        width: "100vw",
                        marginTop: "10vw",
                    }}
                >
                    <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.4}>
                        <div
                            style={{
                                background: "#FFEBCF",
                                width: "100vw",
                                height: "80vw",
                            }}
                        />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-10vw"} scrollSpeed={0.4}>
                        <Mountains color={"#F9DBaa"} />
                    </ParallaxComponent>

                    <ParallaxComponent
                        marginTop={"-70vw"}
                        scrollSpeed={0.45}
                        invert={true}
                    >
                        <TreesBack color={"#C48C59"} />
                    </ParallaxComponent>

                    <ParallaxComponent
                        marginTop={"-60vw"}
                        scrollSpeed={0.55}
                        invert={true}
                    >
                        <LeavesFront color={"#7D4331"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-80vw"} scrollSpeed={0.5}>
                        <FarmHill color={"#D9A270"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"60vw"} scrollSpeed={0.62}>
                        <Hills color={"#7D4331"} />
                    </ParallaxComponent>

                    <ParallaxComponent
                        marginTop={"-65vw"}
                        scrollSpeed={0.63}
                        invert={true}
                    >
                        <Tree color={"#3C231D"} />
                    </ParallaxComponent>

                    <ParallaxComponent
                        marginTop={"-65vw"}
                        scrollSpeed={0.65}
                        invert={true}
                    >
                        <PodsMiddle color={"#ED6E5D"} />
                    </ParallaxComponent>

                    <ParallaxComponent
                        marginTop={"-15vw"}
                        scrollSpeed={0.8}
                        invert={true}
                    >
                        <LeavesDark color={"#3C231D"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-30vw"} scrollSpeed={0.8}>
                        <div
                            style={{
                                background: "#3C231D",
                                width: "100vw",
                                height: "30vw",
                            }}
                        />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"-110vw"} scrollSpeed={0.8}>
                        <FoliageBottom color={"#3C231D"} />
                    </ParallaxComponent>

                    <ParallaxComponent marginTop={"150vw"} scrollSpeed={0.8}>
                        <div
                            style={{
                                background: "#3C231D",
                                width: "100vw",
                                height: "180vw",
                            }}
                        />
                    </ParallaxComponent>

                    <div
                        style={{
                            marginTop: "110vw",
                            paddingInline: "3vw",
                            color: "#faf1e3",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <Title>{`Sibö, Better for Everyone`}</Title>
                        <div
                            style={{
                                // width: "100%",
                                fontSize: "5vw",
                                fontWeight: 400,
                                lineHeight: "140%",
                                letterSpacing: "0.05em",
                                marginTop: "10vw",
                                // textAlign: 'center',
                                textTransform: "uppercase",
                            }}
                        >
                            {`AGROFORESTRY, UPCYCLING & EQUITABLE SOURCING`}
                        </div>
                    </div>
                    {/* <div
                    style={{
                        marginTop: "-20vw",
                        marginBottom: "-25vw",
                    }}
                >
                    <Swatch2 color={"#3C231D"} />
                </div> */}

                    <Section
                        backgroundColor="#3C231D" // chocolate color
                        textColor="#faf1e3" // beige color for text for high contrast
                    >
                        <div>
                            {
                                "At Sibö Chocolate we are committed to AGROFORESTRY, UPCYCLING & EQUITABLE SOURCING. Following are just a few ways we pledge to do right by our country and our planet.  We’re proudly doing our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade. "
                            }
                        </div>
                    </Section>

                    <Section
                        title="Agroforestry"
                        backgroundColor="#ccffdd" // chocolate color
                        textColor="#123" // beige color for text for high contrast
                        imageUrl="/agro.png"
                        imageHeight="100vw"
                    >
                        {`When you plant cacao, you are planting forests that bear fruit for up to 50+ years. These planted forests house precious hardwood trees that provide cacao with optimal shade, as well as tropical fruit trees that promote a healthy and biodiverse farm environment. Cacao forests also provide safe haven for migrating birds and other animals, require little pesticides, and do best with rich organic fertilizers. When you buy Sibö chocolate, you are supporting regenerative farming in Costa Rica.`}
                    </Section>

                    <Section
                        title="Upcycling"
                        backgroundColor="#F5eeDC" // beige color
                        textColor="#421" // saddlebrown color for text
                        imageUrl="/upcyclinf.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {`At Sibö Chocolate use recycled paper and biodegradable materials for our packaging whenever possible and have been upcycling cacao husks to fashion gorgeous handmade cacao paper boxes for more than 15 years. We were proud to receive our first national recognition for our innovative packaging in 2012, followed by a top award for our environmental commitment in 2015 from Costa Rica’s business community. Sustainability has always been a central part of our DNA. We hope to inspire others in our industry to innovate their packaging and avoid using plastic whenever possible. Reusing or repurposing materials can yield beautiful results.`}
                        </div>
                    </Section>
                    <Section
                        backgroundColor="#F5eeDC" // beige color
                        textColor="#421" // saddlebrown color for text
                        imageUrl="/packaging.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {`Products that are overpackaged or use excessive use of plastic is usually a bad sign. Sibö Chocolate wraps its bars in recycled paper pouches that are lined with a thin layer of food wrap to seal in freshness. And instead of plastic, Sibö prefers compostable cellulose bags to display its chocolate coated nuts and fruit. Finally, Sibö Chocolate works closely with a natural paper producer to fashion handmade bonbon boxes using husks from the cacao bean that are usually thrown away as a byproduct when making chocolate. Reusing or repurposing materials can sometimes yield beautiful results.`}
                        </div>
                        <Link
                            style={{
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                            href="https://sustainablepackaging.org/wp-content/uploads/2017/09/Definition-of-Sustainable-Packaging.pdf"
                        >
                            {`Why is sustainable packaging important?`}
                        </Link>
                    </Section>

                    <Section
                        title="Equitable Sourcing"
                        backgroundColor="#663333" // skyblue color
                        textColor="#fff2f5" // saddlebrown color for text
                        imageUrl="/equitable.png"
                        imageHeight="100vw"
                    >
                        {`Cacao growers worldwide are subjected to fluctuating prices set by commodity markets based on international supply and demand. On top of that, producers usually sell to bean brokers who buy bulk cacao at rock bottom prices, just to resell the beans as a raw material to importers. The complex network of trading cacao notoriously leaves farmers with the smallest slice of the pie. We are proud to do our part in reimagining the way the cacao supply chain should work in Costa Rica and promote a new paradigm rooted in fair trade.`}
                    </Section>

                    <Section
                        title="History of Cacao & Chocolate in Costa Rica"
                        backgroundColor="#F5DEB3" // wheat color
                        textColor="#322" // saddlebrown color for text
                        imageUrl="/traditx.png"
                        imageHeight="100vw"
                    >
                        <div>
                            Long Before Coffee, Costa Ricans Drank Chocolate
                        </div>

                        <div>
                            {`In fact, chocolate was prepared as a sacred ceremonial drink throughout Central America and Mexico as far back as 3,000 years ago. How do we know? Archaeologists have found evidence of theobromine—a chemical that occurs only in cacao—in the shattered pieces of ornate pottery dating from 1100 BC. In some cases, these vessels had a lock-top, presumably to prevent this highly coveted “food of the gods” from spilling while being carried.`}
                        </div>

                        <div>
                            {
                                "The first record of the cultivation of cacao in Costa Rica was documented in 1563 in the central Pacific town of Quepos. But larger scale production came as early as 1610 in the Caribbean port of Matina. Cacao was mainly an export product destined for Portobello, Panama, and Cartagena, Colombia. (Excerpted from graduate study on Sibö Chocolate by Lisa Marrier, PAU-BAYONNE Ecole Universitaire de Management)"
                            }
                        </div>

                        <div>
                            {`By 1678, cacao cultivation had grown to about 134,000 trees, but most of the production had been taken over by foreigners who controlled 60% of the country’s production, with only 2% remaining in indigenous ownership.`}
                        </div>

                        <div>
                            {`By the end of the 17th century, production began to stagnate, due in part to orders from the authorities of Guatemala (Audiencia de Guatemala), proclaiming it illegal to use indigenous slave labor in the region. Investing in cacao also became less attractive because of difficult and costly logistics and rising competition from Venezuela and Ecuador.`}
                        </div>

                        <div>
                            {`But by the 1880s, cacao had made its first comeback, as
                        Costa Rica sought to diversify its agricultural
                        production. While coffee had become the country’s
                        principal crop, Costa Rica was also looking to bananas
                        and cacao, which would eventually rank second and third
                        in agricultural exports. During this period and up until
                        1935, most of the cacao was planted in medium and large
                        farms in the Atlantic province of Limón. This made it
                        easier to export cacao through the port of Moín. Costa
                        Rican cacao was sold mainly to the U.S. and England,
                        with some regional exports to Colombia and Central
                        America.`}
                        </div>

                        <div>
                            {`The time after WWII marked the second period of growth
                        for the cacao industry, with exports reaching a record
                        11,000 metric tons by 1962. According to the Center for
                        Tropical Agriculture and Higher Learning (CATIE), 20,000
                        hectares of cacao had been planted by that time.`}
                        </div>

                        <div>
                            {`By 1970 the world cacao market collapsed, putting
                        pressure on Costa Rica’s cacao industry. And then, a
                        catastrophe hit. Monilia—a devastating fungus that also
                        affected the rest of Mesoamerica, Venezuela, Colombia,
                        Ecuador, Peru, and Bolivia—decimated cacao yields. By
                        the end of the decade, exports fell by a whopping 96%,
                        prompting many farmers to abandon cacao for bananas,
                        plantains, and tubers. Only 1,200 hectares of cacao
                        remained.`}
                        </div>

                        <div>
                            {`To supply internal demand for chocolate, Costa Rica
                        began importing cacao from the Dominican Republic and
                        later from Peru and Colombia. By the new millennium
                        Costa Rica’s landscape had changed, as growing
                        investments in pineapple and bananas created hillsides
                        of green deserts throughout the Atlantic slope. These
                        crops are typically more dependent on pesticides and
                        other agrochemicals, and the lands where they are
                        planted are usually clear cut.`}
                        </div>

                        <div>
                            {`Today, thanks to a revival in demand for fine-flavor
                        cacao that is feeding the growing craft chocolate
                        market, cacao cultivation is back on the rise, reaching
                        4,500 hectares in 2017. While monilia is an ever-present
                        threat, more resistant and productive species of cacao
                        have been developed by CATIE. The center has been
                        instrumental in producing improved cacao genetics from
                        its clonal gardens for regional use. CATIE clones have
                        also won international awards for flavor. And the local
                        cacao community is actively selecting old cacao genetics
                        for fine flavor, in order to distinguish Costa Rican
                        cacao in the world marketplace.`}
                        </div>

                        <div>
                            {`As of 2007, Sibö Chocolate began doing its part to help
                        create demand for this native crop, by using only Costa
                        Rican beans for its internationally recognized chocolate
                        creations. Sibö Chocolate hopes to see cacao find a
                        permanent place among Costa Rica’s most important crops,
                        as well as a return to a landscape rich in biodiversity
                        where cacao plantations play an important role.`}
                        </div>

                        <div>
                            {`By 2019 fine-flavor beans from Costa Rica had been
                        highlighted on leading international chocolate labels,
                        as well as local export brands driven by quality and
                        sustainability.`}
                        </div>
                    </Section>
                    <Bottom />
                </div>
            </div>
        </Layout>
    );
}

export default Sustainability;
