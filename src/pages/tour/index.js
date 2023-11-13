import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Link from "next/link";
import Swatch2 from "@/components/svg/Swatch2";
import Review from "@/components/Review";
import Bottom from "@/components/Bottom";

function Tour() {
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
                    title="Tasting Tour"
                    backgroundColor="#20060a" // chocolate color
                    textColor="#fffde0" // beige color for text for high contrast
                    imageUrl="/tour.png"
                    imageHeight="100vw"
                    isHeader={true}
                >
                    <div>
                        <div>{`“Like a wine tasting but with chocolate, where each taste tells part of the fascinating story of chocolate.”`}</div>
                    
                        <Link href="/contact" passHref>
                            <div
                                style={{
                                    fontSize: "1em",
                                    textTransform: "uppercase",
                                    paddingTop: "0.7em",
                                    // width: "84vw",
                                    paddingBottom: "0.5em",
                                    border: "none",
                                    background: "#FFD79A",
                                    color: "#100606",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // marginTop: "5vw",
                                    fontWeight: 500,
                                    marginTop:'18vw',
                                }}
                            >
                                Reserve a Tour →
                            </div>
                        </Link>
                    </div>
                </Section>

                <Section
                    backgroundColor="#bdeacc" // chocolate color
                    textColor="#000000" // beige color for text for high contrast
                    imageUrl="/hands.png"
                    imageHeight="100vw"
                >
                    <div>{`Sibö’s Chocolate Tasting Tour is an interactive tasting experience and presentation on the history of chocolate at our artisan chocolate workshop, set in a garden just outside the quaint village of San Isidro de Heredia.`}</div>
                    <div>{`During the hour-long experience, our master chocolatiers share samples of fresh cacao fruit (when available) as well as roasted cacao beans, indigenous hot chocolate, as well as European-style bonbons freshly made on the premises.`}</div>
                    <div>{`We’ll trace the flavor evolution of chocolate, from its role as a sacred ceremonial drink for indigenous Costa Ricans to its use as a stimulating elixir for European aristocracy, all the way to innovative recipes today’s craft chocolate movement.`}</div>
                    <div>{`Our guests leave with a deeper appreciation for chocolate and an expanded sensibility about this “food of the gods”.`}</div>
                </Section>

                <Section
                    title="FAQS About the Tour"
                    backgroundColor="#3a1012" // chocolate color
                    textColor="#f4ede3" // beige color for text for high contrast
                    imageUrl="/hut.png"
                    imageHeight="100vw"
                >
                    <FAQ faq="LOCATION">
                        {`Tasting tours are at our artisan chocolate workshop and restaurant in the hills of San Isidro de Heredia, just 30 minutes north of downtown San José and one mile off the highway to Guápiles (Route 32).`}
                    </FAQ>

                    <FAQ faq="SCHEDULE">
                        {`At 10:30 a.m., Tuesdays through Sundays. Closed Mondays. (Special times can be arranged for groups of 18 or more). Reservations are required and a minimum of four guests are needed to run the tour. To inquire about availability, call 2268-1335, e-mail sales@sibochocolate.com, or send a WhatsApp message to +1(506) 8466-6161.`}
                    </FAQ>

                    <FAQ faq="WHAT’S INCLUDED">
                        {`A tasting tray with bonbons and chocolate tasting squares, samples of both our classic and indigenous hot chocolates, guided tasting experience with our Master chocolatier/expert on Central American history, as well as coffee and cookies at the end of the tasting experience. Our San Isidro de Heredia location offers seating on an open-air terrace surrounded by gardens and a small Sibö Chocolate store.`}
                    </FAQ>

                    <FAQ faq="HOW LONG DOES THE TASTING EXPERIENCE LAST?">
                        {`An hour to an hour-and-a-half, depending on questions`}
                    </FAQ>

                    <FAQ faq="EXERTION LEVEL">
                        {`This is a seated tour with no walking or hiking required. We offer a perfect day of relaxing at our artisan workshop amid a lovely garden setting, following adventuring in other parts of the country.`}
                    </FAQ>

                    <FAQ faq="WHAT TO BRING?">
                        {`This tour is a chocolate tasting under roof in a cool mountain setting. Make sure to bring a wind breaker or sweater as it can get cold on rainy days due to the high elevation (approximately 4,500 ft. above sea level).`}
                    </FAQ>

                    <FAQ faq="WHO SHOULD COME?">
                        {`Foodies, chocolate lovers and lovers of history, culture and conversation. This experience is not recommended for small children.`}
                    </FAQ>

                    <FAQ faq="LUNCH">
                        {`Restaurant service is available onsite at Tournant del Campo. Check out their menu on Instagram at @tournantcr OPEN: Wednesday-Friday, 11 a.m. – 6 p.m. for lunch and afternoon café fare. Saturday and Sunday, 10 a.m. – 6 p.m. for Brunch, lunch and afternoon café fare. Please call to check special hours or make a group reservation at 2268-1335.`}
                    </FAQ>
                </Section>
                <Bottom />
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

export default Tour;
