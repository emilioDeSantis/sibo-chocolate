import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Link from "next/link";
import Swatch2 from "@/components/svg/Swatch2";
import Review from "@/components/Review";
import Bottom from "@/components/Bottom";

function Reviews() {
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
                    title="Reviews"
                    backgroundColor="#20060a" // chocolate color
                    textColor="#fffde0" // beige color for text for high contrast
                    imageUrl="/sibo-3.png"
                    imageHeight="100vw"
                    isHeader={true}
                >
                    <Review
                        name="Maura S"
                        date="June 2022"
                        source="Trip Advisor"
                    >
                        {`"The chocolate is divine! And now that we've tasted a variety of the company's offerings, and learned about the history of chocolate and Sibö’s sustainability practices, we doubt we'll ever buy another brand. We HIGHLY recommend their chocolate tour! It was such a pleasure to see a Costa Rican business that actively strives for zero waste and uses virtually no plastics in its operations or presentation."`}
                    </Review>
                    <Review name="Kimberly A" date="Sept. 2022" source="Google">
                        {`"This is literally the best chocolate I've ever eaten. And I've had a lot of chocolate. If you’re vacationing in Costa Rica and have a chance to go here, I absolutely recommend stopping by and buying some for yourselves and for gifts. The packaging is really nice as well. I dream about these chocolates. My mouth is watering just writing this review."`}
                    </Review>
                </Section>

                <Section
                    title="Awards"
                    backgroundColor="#ffe09b" // chocolate color
                    textColor="#2f0B02" // beige color for text for high contrast
                    imageUrl="/molin.png"
                    imageHeight="100vw"
                >
                    <Award date="2010">
                        {`National Prize for Innovation, Costa Rica INNOVA, National Conference on Innovation`}
                    </Award>
                    <Award date="2011">
                        {`Most Innovative Product, Costa Rica Hotel & Restaurant Expo (EXPOHORE)`}
                    </Award>
                    <Award date="2012">
                        {`Most Environmentally friendly Business, 6thAnnual Small Business Awards, Citigroup Costa Rica, ADRI Association`}
                    </Award>
                    <Award date="2012">
                        {`Entrepreneurs Award for Creativity & Innovation in Business, Softland Costa Rica, Top 5 businesses`}
                    </Award>
                    <Award date="2015">
                        {`Environmental Excellence Award, Costa Rica Chamber of Industry`}
                    </Award>
                    <Award date="2017-2018">
                        {`International Chocolate Awards, Central America Competitions, GOLD: Spiced rum truffle, Irish coffee caramel, Sea-salt caramel, SILVER: Extra dark bar 85%, Milk bar 45%, Coffee Toffee bar, Passion fruit-tarragon truffle; BRONZE: Guácimo 70%, Talamanca 63%, Roasted Almond, 70%.`}
                    </Award>
                    <Award date="2017-2019">
                        {`International Chocolate Awards, Americas, New York. SILVER: Lime-Apple caramel, Sea-salt caramel, Tequila-shot truffle, Lime-basil truffle`}
                    </Award>
                </Section>
                <Bottom/>
            </div>
        </Layout>
    );
}

const Award = ({ date, children }) => {
    return (
        <div>
            <b>{date}</b>
            <div>{children}</div>
        </div>
    );
};

export default Reviews;
