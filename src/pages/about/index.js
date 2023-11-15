import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Link from "next/link";
import Swatch2 from "@/components/svg/Swatch2";
import Bottom from "@/components/Bottom";
import Head from "next/head";

function About() {
    const { setColor } = useColor();

    useEffect(() => {
        setColor("#3C231D");
    }, []);
    return (
        <>
            <Head>
                <title>SIBÖ CHOCOLATE | About Us</title>
                <meta
                    name="description"
                    content='We started Sibö Chocolate in 2007 with a simple mantra “Do Something great! Make things better."'
                />
            </Head>
            <Layout>
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
                    <Section
                        title="Our Inspiration"
                        backgroundColor="#FCEBD2" // chocolate color
                        textColor="#2f0B02" // beige color for text for high contrast
                        imageUrl="/sibo-4.png"
                        imageHeight="100vw"
                        isHeader={true}
                    >
                        <div>{`"Do Something great! Make things better."`}</div>

                        <div>
                            {`This simple mantra became a guiding principle for us at
                        Sibö Chocolate, back when we started the company in
                        2007. My late father had challenged me to come up with a
                        business model that would be a positive force, not just
                        for me and my partners, but also for my adopted
                        home—Costa Rica.`}
                        </div>

                        <div>
                            {`“Costa Rica has been good to you,” he said. “Do
                        something that will be good for the country.” So, with
                        that in mind, my partner, Julio Fernandez, and I went to
                        work.`}
                        </div>

                        <div>
                            {`Using chocolate making as a vehicle for more ambitious
                        endeavors—such as creating economic opportunity,
                        incentivizing the creation of biological corridors, and
                        being kind to our workers and stakeholders—we are
                        striving to be a model for change in Costa Rica.`}
                        </div>

                        <div>
                            {`Through our operations, we have seized many
                        opportunities to give back to our industry, first by `}
                            <a
                                href="https://www.ecolechocolat.com/en/costarica-cacao.html"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                {`sharing our model with up-and-coming chocolatiers`}
                            </a>
                            ,<br></br> {`as well as `}
                            <a
                                href="https://www.facebook.com/ChocolateSibu/videos/246953475963237/"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                {`improving post/harvest processes with our suppliers`}
                            </a>
                            ,<br></br> {`and most recently by `}
                            <a
                                href="https://www.facebook.com/ICACAOCostaRica/?modal=admin_todo_tour"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                {`helping found ICACAO, Costa Rica’s Association of
                            Chocolate and Cacao`}
                            </a>
                            .
                        </div>

                        <div>
                            {`We take pride in putting quality and sustainability
                        above all considerations in order to create delicious
                        chocolates that are helping position Costa Rica among
                        the top chocolate producing countries of the world.`}
                        </div>
                    </Section>
                    <Section
                        title="Sibö on Sustainability"
                        backgroundColor="#321B1A" // chocolate color
                        textColor="#E8E2D9" // beige color for text for high contrast
                        imageUrl="/flowers.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "At Sibö Chocolate we believe that sustainability is woven into the fabric of a business. Sustainability involves business ethics and how we use our natural resources, as well as mitigating our impact on the environment and on communities, all while generating opportunities and guaranteeing quality in the long term. So how do we strive to be sustainable at Sibö Chocolate? It’s in everything we do."
                            }
                        </div>

                        <div>
                            {
                                "From how we source ingredients to using recycled materials for our packaging, and from staff development to waste management, sustainability is ever present in our vision for growth. Over the years, we have done a lot of specific things to show this commitment."
                            }
                        </div>
                    </Section>
                    <Section
                        title="Catie (2010 - 2011)"
                        backgroundColor="#B4D2C9" // chocolate color
                        textColor="#2f0B02" // beige color for text for high contrast
                        imageUrl="/light pods.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "To support the groundbreaking work in generating more resistant and productive varieties of cacao that benefit small scale cocoa producers, Sibö Chocolate donates one percent of its chocolate bar sales to the Center for Tropical Agriculture and Higher Education (CATIE). Based in Costa Rica, CATIE houses one of the world’s most important genetic banks for cacao, including rare and wild species."
                            }
                        </div>

                        <Link
                            style={{
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                            href="https://www.catie.ac.cr/"
                        >
                            Learn more about CATIE
                        </Link>
                    </Section>
                    <Section
                        title="Corcovado Foundation (2008 - 2016)"
                        backgroundColor="#f8dbd8" // chocolate color
                        textColor="#46052c" // beige color for text for high contrast
                        imageUrl="/turtle.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "Sibö Chocolate donates fine chocolates for the Corcovado Foundation’s annual wine-and-dine fundraiser to benefit its sea turtle protection program on the Osa Peninsula."
                            }
                        </div>

                        <Link
                            style={{
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                            href="http://corcovadofoundation.org/"
                        >
                            {`Find out more about the foundation’s programs`}
                        </Link>
                    </Section>
                    <Section
                        title="Recycling & Composting"
                        backgroundColor="#522834"
                        textColor="#e9f1fb"
                        imageUrl="/compost.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "All compostable food from our restaurant is converted into organic fertilizer on the premises that feeds our vegetable and herb garden. To minimize trash, we recycle plastic, aluminum and glass, as well as cardboard boxes and paper that are blended with cacao fiber to make our unique cacao paper boxes (see above). We also use a rainwater collection system to supply water in our bathrooms and have replaced our lighting with led technology in order to reduce our use of energy and water."
                            }
                        </div>
                    </Section>
                    <Section
                        title="Neotropica Foundation (2012)"
                        backgroundColor="#f7faf1"
                        textColor="#101d38"
                        imageUrl="/wetland.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "Donations of one U.S. dollar per chocolate bar were allotted to the Neotropica Foundations wetland protection program through sales at Automercado supermarkets as part of the campaign “Sweeten Your Day for a Good Cause.” The program works with communities to create awareness about the relationship between wetlands and people’s wellbeing."
                            }
                        </div>

                        <Link
                            style={{
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                            href="https://neotropica.org"
                        >
                            Learn more about Neotropica
                        </Link>
                    </Section>
                    <Section
                        title="Carbon Offsetting"
                        backgroundColor="#370d04" // chocolate color
                        textColor="#fef3ec" // beige color for text for high contrast
                        imageUrl="/carbon.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {
                                "For years, Sibö Chocolate compensated for the carbon dioxide emissions produced while delivering chocolates through the Programa Aliados Cambio Climático (ACC), a Costa Rican initiative seeking to help businesses counterbalance carbon dioxide emissions that contribute to climate change. The program allows businesses to calculate their carbon output and donate funds accordingly toward reforestation projects in Costa Rica."
                            }
                        </div>

                        <Link
                            style={{
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                            href="https://www.programaacc.org/"
                        >
                            Learn more about AAC
                        </Link>
                    </Section>
                    <Section
                        title="Company History"
                        backgroundColor="#a53100" // chocolate color
                        textColor="#fff9ee" // beige color for text for high contrast
                        imageUrl="/history2.png"
                        imageHeight="100vw"
                    >
                        <div>
                            {`Three years. It took three years for historian Julio Fernandez Amón and journalist George Soriano to take the plunge and leave their day jobs in Costa Rica to follow a dream of making chocolate. The decision would come just in time for the great recession of 2008.`}
                        </div>

                        <div>
                            {`Despite the odds, and ignoring the advice of friends and family, the two forged ahead with optimism and perhaps just the right amount of naiveté. And so Sibö Chocolate was born. The goal: the chocolate had to be made start-to-finish in Costa Rica with Costa Rican cacao. But most importantly, it had to be good enough to stand up to best chocolates int the international market. If not, then why bother?`}
                        </div>

                        <div>
                            {`The years prior to opening their business were filled with research—sampling chocolates from around the world, as well as studying the history of chocolate and cacao production. Training in the chocolate arts followed, taking the budding entrepreneurs to France, Italy and Belgium, to practice alongside Master Chocolatiers.`}
                        </div>

                        <div>
                            {`Upon returning to Costa Rica their quest began for the country’s finest cacao beans. While flavor and aroma were of utmost concern, the beans also had to be sustainably produced, and fermented and dried to perfection. They traveled undaunted to remote villages and wild lands on both coasts trying cacao beans and meeting with growers.`}
                        </div>

                        <div>
                            {`Julio and George’s next step would bring them back from the field and into the kitchen. With big ideas and a marble slab for tempering, the two went to work.`}
                        </div>

                        <div>
                            {`Inspired by the idea of pairing unusual flavors, they started playing with herbs and spices and tropical fruit to make the first bonbons. Inspiration came from the fresh ingredients that were available, as well as from historic records about chocolate written at the time of the Conquest.`}
                        </div>

                        <div>
                            {`They also focused on packaging. The bonbon boxes had to be free of plastic and bulk, and use upcycled materials. Julio’s experiments would eventually lead to crafting boxes out of cacao husks that are normally discarded in the process of making chocolate. At the time, he was actually hand painting details on every single box that left their workshop— something he remembers with a mixture of nostalgia and dread.`}
                        </div>

                        <div>
                            {`The two began applying native pre-Columbian patterns to decorate their creations. Every chocolate, they thought, should tell a story both in flavor and design. Today, those first signature `}
                            <Link
                                href="/shop"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                bonbons
                            </Link>
                            {` have expanded to a collection of 16 flavors that change seasonally.`}
                        </div>

                        <div>
                            {`Chocolate bar production followed in 2009, which opened up the growing company to export markets. When a buyer in Switzerland placed their chocolates in a Swiss market for Christmas, they thought, “We must be doing something right.” Today there are `}
                            <Link
                                href="/shop"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                26 bar flavors
                            </Link>
                            {`, ranging from 82% extra dark chocolate for purists, to wild inclusion bars like Chai Spice and sea salt Coffee-Toffee. The U.S. and Japan have become our principal export markets.`}
                        </div>

                        <div>
                            {`Chocolate tasting tours began in 2011, growing out of a desire to share their passion for chocolate with travelers to their country. Their hope is that every guest will leave with a great experience, and begin thinking about the relationship between food and culture, food and the environment, and the economics behind what we eat.`}
                        </div>

                        <div>
                            {`In 2014, Sibö opened its second store and a chocolate café at its San Isidro cottage workshop. The company developed a line of chocolate desserts and pastry that filled its café with weekenders.`}
                        </div>

                        <div>
                            {`In 2016 Sibö welcomed Alfredo Echeverria as part of the Sibö Chocolate team. Alfredo, a childhood friend of Julio’s, brought a strong background as a mechanical engineer and lifetime of experience running a factory for a multinational company with regional operations in Costa Rica.`}
                        </div>

                        <div>
                            {`In the years to come, Alfredo would diversify the business, broadening the production of chocolate bars, and creating new product lines of `}
                            <Link
                                href="/shop"
                                style={{
                                    textDecoration: "underline",
                                    fontWeight: 600,
                                }}
                            >
                                chocolate coated fruit and nuts
                            </Link>
                            {`, as well as sugar-free chocolates and spreads. Alfredo prepared the business for growing sales both locally and internationally, and managed investments in new chocolate making equipment with larger output capacity.`}
                        </div>

                        <div>
                            {`By 2019 the brand had grown substantially, with presence in local supermarket chains and hotel gift shops, as well as KETO diet clinics throughout the country. And exports would grow year after year.`}
                        </div>

                        <div>
                            {`In 2022, having weathered the Covid-19 pandemic, the business reorganized to prepare for new era in its history. With Alfredo now at the helm running the factory out of the business district of Escazu, George and Julio are focused on expanding into new markets and developing Sibö’s direct-to-consumer business online. If all goes well, you will be seeing a lot more of Sibö out in the wild. And when that happens, it will be thanks to you.`}
                        </div>
                    </Section>
                    <Bottom />
                </div>
            </Layout>
        </>
    );
}

export default About;
