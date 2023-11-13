import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Link from "next/link";
import Swatch2 from "@/components/svg/Swatch2";
import Review from "@/components/Review";

function Blogs() {
    const { setColor } = useColor();

    useEffect(() => {
        setColor("#3C231D");
    }, []);
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
                    marginTop: "10vw",
                }}
            >
                <Section
                    title="KEEPING IT REAL WITH SIBÖ CHOCOLATE"
                    backgroundColor="#1c2d2b" // chocolate color
                    textColor="#fffde0" // beige color for text for high contrast
                    imageUrl="/blogs.png"
                    imageHeight="100vw"
                    isHeader={true}
                >
                    <div>{`It can be hard to navigate all the marketing hype around chocolate these days. Aside from the growing claims about chocolate as a super food, there are a lot of taglines being thrown around in order to get you to choose one brand over another. Following are blog posts about what we think you should consider when selecting a fine chocolate:`}</div>
                </Section>
                <Section
                    title={"Certifications"}
                    backgroundColor="#ede1b3"
                    textColor="#2b0c0e"
                    imageUrl="/yellow pods.png"
                    imageHeight="120vw"
                >
                    <div>{`Sadly, getting a cacao farm certified as FDA Organic or Fair Trade is out of reach for most small farmers. These certifications carry with them a significant financial investment and documentation requirements that are not manageable for most rural farmers. Farms that do get certified are usually more sophisticated operations with more money behind them. Certifications do not necessarily mean that the chocolate tastes better, or that the farmer who produced those beans made a better wage than his neighbor.`}</div>
                </Section>

                <Section
                    title={"Single origin, single plantation"}
                    backgroundColor="#350f12"
                    textColor="#ebe2df"
                    imageUrl="/hands.png"
                    imageHeight="100vw"
                >
                    <div>{`This usually refers to where the beans come from, but does not necessarily mean that the beans are great quality. In general, cacao beans from Latin America belong to a type of cacao called Trinitario, which has the potential to have more complex and less bitter flavors than chocolates made from Forastero beans. Forastero cacao is generally used to make commercial chocolate and candy bars, since those products have more sugar to hide the bitterness. Sibö Chocolate uses only fine-flavor beans from Costa Rica.`}</div>
                </Section>

                <Section
                    title={"Ingredient list"}
                    backgroundColor="#a4f3ce"
                    textColor="#1a0406"
                    imageUrl="/ingredients.png"
                    imageHeight="100vw"
                >
                    <div>{`A great chocolate should only have a few ingredients. For dark chocolate those ingredients are simply cacao beans, sugar (or other natural sweetener), and perhaps cocoa butter, which is the natural fat extracted from the cocoa bean. A milk chocolate will add milk powder to this list. Sibö Chocolate uses only natural ingredients with no preservatives, stabilizers of emulsifiers.`}</div>
                </Section>

                <Section
                    title={"Packaging"}
                    backgroundColor="#44150b"
                    textColor="#f3f6e9"
                    imageUrl="/package.png"
                    imageHeight="100vw"
                >
                    <div>{`Over packaging and excessive use of plastic is usually a bad sign. Sibö Chocolate wraps its bars in recycled paper pouches that are lined with a thin layer of food wrap to seal in freshness. And instead of plastic, Sibö prefers compostable cellulose bags to display its chocolate coated products. Finally, Sibö Chocolate works closely with a natural paper producer to fashion handmade bonbon boxes using husks from the cacao bean that are usually thrown away as a byproduct when making chocolate. Reusing or repurposing materials can sometimes yield beautiful results.`}</div>

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
                    title={"Transparency"}
                    backgroundColor="#edbacc"
                    textColor="#000000"
                    imageUrl="/trans.png"
                    imageHeight="100vw"
                >
                    <div>{`The best way to support small farmers is to look for companies producing high quality chocolate in the countries of origin. Companies like Sibö Chocolate typically provide better prices to farmers and usually develop more personal relationships based on trust. We trade directly with three farms in Costa Rica, and pay above local market price. We also provide technical support when necessary and don’t haggle when international market prices go up or down. To see how responsible companies manage this in the U.S., check out the transparency reports of`}</div>

                    <Link
                        style={{
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                        href="https://askinosie.com/learn/transparency-report.html"
                    >
                        Askinosie Chocolate
                    </Link>
                    <Link
                        style={{
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                        href="https://drive.google.com/file/d/0BwiANG8zxEaSNXdfRkYxaUtJbnNqM3hnSE9fc0pYSXRqQlVj/view"
                    >
                        and Dandelion Chocolate
                    </Link>
                </Section>
            </div>
        </Layout>
    );
}

const FAQ = ({ faq, children }) => {
    return (
        <div>
            <b>{faq}</b>
            <div style={{ marginTop: "5vw" }}>{children}</div>
        </div>
    );
};

export default Blogs;
