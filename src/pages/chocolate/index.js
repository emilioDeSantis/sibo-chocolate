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

function Chocolate() {
    const { setColor } = useColor();
    const router = useRouter();

    useEffect(() => {
        setColor("#f6eabe");
    }, [setColor]); // Dependency on setColor only


    return (
        <Layout>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflowY: 'hidden'
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
                        WebkitTransformStyle: "preserve-3d",
                        WebkitTransform: "translate3d(0,0,0)",
                    }}
                >
                    <ParallaxComponent marginTop={"0vw"} scrollSpeed={0.4}>
                        <div
                            style={{
                                background: "#f6eabe",
                                width: "100vw",
                                height: "120vw",
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
                    <ParallaxComponent marginTop={"110vw"} scrollSpeed={0.8}>
                        <div
                            style={{
                                background: "#3C231D",
                                width: "100vw",
                                height: "230vw",
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
                        <Title>Chocolate Fresh from the Source</Title>
                        <div
                            style={{
                                // width: "100%",
                                fontSize: "5vw",
                                fontWeight: 400,
                                lineHeight: "140%",
                                letterSpacing: "0.05em",
                                marginTop: "8vw",
                                // textAlign: 'center',
                                textTransform: "uppercase",
                            }}
                        >
                            {`Unique cacao varietals`} /{" "}
                            {`Expert farmers & Chocolate makers`} /{" "}
                            {`Rich volcanic soil`} / {`Ancient tradition`}
                        </div>

                        <div
                            style={{
                                fontSize: "5vw",
                                lineHeight: "147%",
                                fontWeight: 400,
                                marginTop: "12vw",
                            }}
                        >
                            {`In keeping with our roots, Sibö Chocolate never overprocesses its chocolate. We adhere to a time-honored tradition of grinding and conching cacao beans, aspiring to preserve the incredible flavor of our cacao in every bar and hand-made confection. We find inspiration in historical recipes, cultural traditions and fresh, local ingredients. Simple, natural, and an enduring source of energy, right from the source.`}
                        </div>
                        <div
                            style={{
                                fontSize: "5vw",
                                lineHeight: "147%",
                                fontWeight: 400,
                                marginTop: "8vw",
                                marginBottom:'3rem',
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
                                marginBottom:'1rem',
                            }}
                            src={'/Procesobarrasyrecubiertos.mp4'}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div
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
                        imageHeight="130vw"
                    >
                        <div>
                            {`Sibö partner farms are experts at fermenting and drying cacao to unlock its flavor potential. Our job at Sibö is to further develop that flavor, bringing out the best in those beans, and craft a chocolate bar that will hopefully make you stop in your tracks.`}
                        </div>

                        {/* <div
                        style={{
                            fontWeight: 900,
                            textTransform: "uppercase",
                            fontSize: "12vw",
                            lineHeight: "90%",
                            marginTop: "10vw",
                        }}
                    >
                        {`Meet the farmers`}
                    </div> */}

                        {/* <div
                        style={{
                            marginBottom: "-32vw",
                            marginTop: "0vw",
                        }}
                    >
                        click on a farm to find out more
                    </div> */}
                    </Section>

                    {/* <Map></Map> */}
                    {/* <div
                    style={{
                        height: "30vw",
                    }}
                ></div> */}

                    <Section
                        title="Unique Cacao Varietals"
                        backgroundColor="#532" // chocolate color
                        textColor="#fdfaec" // beige color for text for high contrast
                        imageUrl="/cacao pretty2.png"
                        imageHeight="100vw"
                    >
                        {`Costa Rica is one of the few countries that produces exclusively fine-flavor cacao, a superior category of beans representing only 12% of the world cocoa market. That means that our chocolate has a rich and balanced base of chocolate flavor along with hints of more complex flavor notes, such as fruit, caramel, roasted coffee and nuts. While some of the flavor magic lies in the rare genetics of our country’s cacao, the quality of our chocolate depends on what happens after the beans are harvested.`}
                    </Section>

                    <Section
                        title="Terroir"
                        backgroundColor="#712a00" // chocolate color
                        textColor="#fdfaec" // beige color for text for high contrast
                        imageUrl="/map-light6.png"
                        imageHeight="80vw"
                    >
                        {`For thousands of years, ancient lava flows and volcanic ash have fed these lands with nutrients and minerals to form a rare type of soil called Andisol. This rich earth and year-round warm, tropical weather contribute to our cacao’s unique terroir. From region to region, and even from farm to farm, you’ll find surprising flavor notes that distinguish our Costa Rican chocolates from other cacao producing countries around the world.`}
                    </Section>

                    <Section
                        title="Ancient Tradition"
                        backgroundColor="#def7e8" // chocolate color
                        textColor="#100f1b" // beige color for text for high contrast
                        imageUrl="/ancient tardition.png"
                        imageHeight="120vw"
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
                    >
                        <div>
                            {`SIBÖ’S quality assurance staff has completed exhaustive training as auditors in Best Manufacturing Practices for food safety with Costa Rica’s National Learning Institute (INA). All Sibö Chocolate employees hold certificates in food handling and adhere to strict guidelines to guarantee food safety and traceability.`}
                        </div>
                        <div>
                            {`Members of our staff have also completed coursework with international specialists through Costa Rica’s Universidad Nacional, to form part of an official panel of expert cacao tasters for the country.`}
                        </div>
                    </Section>

                    {/* <Section
                    backgroundColor="#F5eeDC" // beige color
                    textColor="#421" // saddlebrown color for text
                    imageUrl="/packaging.png"
                    imageHeight="100vw"
                >
                    <div>
                        Products that are overpackaged or use excessive use of
                        plastic is usually a bad sign. Sibö Chocolate wraps its
                        bars in recycled paper pouches that are lined with a
                        thin layer of food wrap to seal in freshness. And
                        instead of plastic, Sibö prefers compostable cellulose
                        bags to display its chocolate coated nuts and fruit.
                        Finally, Sibö Chocolate works closely with a natural
                        paper producer to fashion handmade bonbon boxes using
                        husks from the cacao bean that are usually thrown away
                        as a byproduct when making chocolate. Reusing or
                        repurposing materials can sometimes yield beautiful
                        results.
                    </div>
                    <Link
                        style={{
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                        href="https://sustainablepackaging.org/wp-content/uploads/2017/09/Definition-of-Sustainable-Packaging.pdf"
                    >
                        Why is sustainable packaging important?
                    </Link>
                </Section>

                <Section
                    title="Equitable Sourcing"
                    backgroundColor="#633" // skyblue color
                    textColor="#fff2f5" // saddlebrown color for text
                    imageUrl="/beans3.png"
                    imageHeight="100vw"
                >
                    Cacao growers worldwide are subjected to fluctuating prices
                    set by commodity markets based on international supply and
                    demand. On top of that, producers usually sell to bean
                    brokers who buy bulk cacao at rock bottom prices, just to
                    resell the beans as a raw material to importers. The complex
                    network of trading cacao notoriously leaves farmers with the
                    smallest slice of the pie. We are proud to do our part in
                    reimagining the way the cacao supply chain should work in
                    Costa Rica and promote a new paradigm rooted in fair trade.
                </Section>

                <Section
                    title="History of Cacao & Chocolate in Costa Rica"
                    backgroundColor="#F5DEB3" // wheat color
                    textColor="#322" // saddlebrown color for text
                    imageUrl="/beans3.png"
                    imageHeight="100vw"
                >
                    <div>Long Before Coffee, Costa Ricans Drank Chocolate</div>

                    <div>
                        In fact, chocolate was prepared as a sacred ceremonial
                        drink throughout Central America and Mexico as far back
                        as 3,000 years ago. How do we know? Archaeologists have
                        found evidence of theobromine—a chemical that occurs
                        only in cacao—in the shattered pieces of ornate pottery
                        dating from 1100 BC. In some cases, these vessels had a
                        lock-top, presumably to prevent this highly coveted
                        “food of the gods” from spilling while being carried.
                    </div>

                    <div>
                        {
                            "The first record of the cultivation of cacao in Costa Rica was documented in 1563 in the central Pacific town of Quepos. But larger scale production came as early as 1610 in the Caribbean port of Matina. Cacao was mainly an export product destined for Portobello, Panama, and Cartagena, Colombia. (Excerpted from graduate study on Sibö Chocolate by Lisa Marrier, PAU-BAYONNE Ecole Universitaire de Management)"
                        }
                    </div>

                    <div>
                        By 1678, cacao cultivation had grown to about 134,000
                        trees, but most of the production had been taken over by
                        foreigners who controlled 60% of the country’s
                        production, with only 2% remaining in indigenous
                        ownership.{" "}
                    </div>

                    <div>
                        By the end of the 17th century, production began to
                        stagnate, due in part to orders from the authorities of
                        Guatemala (Audiencia de Guatemala), proclaiming it
                        illegal to use indigenous slave labor in the region.
                        Investing in cacao also became less attractive because
                        of difficult and costly logistics and rising competition
                        from Venezuela and Ecuador.
                    </div>

                    <div>
                        But by the 1880s, cacao had made its first comeback, as
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
                        America.
                    </div>

                    <div>
                        The time after WWII marked the second period of growth
                        for the cacao industry, with exports reaching a record
                        11,000 metric tons by 1962. According to the Center for
                        Tropical Agriculture and Higher Learning (CATIE), 20,000
                        hectares of cacao had been planted by that time.
                    </div>

                    <div>
                        By 1970 the world cacao market collapsed, putting
                        pressure on Costa Rica’s cacao industry. And then, a
                        catastrophe hit. Monilia—a devastating fungus that also
                        affected the rest of Mesoamerica, Venezuela, Colombia,
                        Ecuador, Peru, and Bolivia—decimated cacao yields. By
                        the end of the decade, exports fell by a whopping 96%,
                        prompting many farmers to abandon cacao for bananas,
                        plantains, and tubers. Only 1,200 hectares of cacao
                        remained.{" "}
                    </div>

                    <div>
                        To supply internal demand for chocolate, Costa Rica
                        began importing cacao from the Dominican Republic and
                        later from Peru and Colombia. By the new millennium
                        Costa Rica’s landscape had changed, as growing
                        investments in pineapple and bananas created hillsides
                        of green deserts throughout the Atlantic slope. These
                        crops are typically more dependent on pesticides and
                        other agrochemicals, and the lands where they are
                        planted are usually clear cut.
                    </div>

                    <div>
                        Today, thanks to a revival in demand for fine-flavor
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
                        cacao in the world marketplace.
                    </div>

                    <div>
                        As of 2007, Sibö Chocolate began doing its part to help
                        create demand for this native crop, by using only Costa
                        Rican beans for its internationally recognized chocolate
                        creations. Sibö Chocolate hopes to see cacao find a
                        permanent place among Costa Rica’s most important crops,
                        as well as a return to a landscape rich in biodiversity
                        where cacao plantations play an important role.
                    </div>

                    <div>
                        By 2019 fine-flavor beans from Costa Rica had been
                        highlighted on leading international chocolate labels,
                        as well as local export brands driven by quality and
                        sustainability.
                    </div>
                </Section> */}
                    <Bottom />
                </div>
            </div>
        </Layout>
    );
}

export default Chocolate;
