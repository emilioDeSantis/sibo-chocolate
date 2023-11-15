// pages/shop.js
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Pattern2 from "@/components/Pattern2";
import Image from "next/image";
import { client } from "@/shopify/client";
import { fetchAllCollections } from "@/shopify/backend";
import { useCategories } from "@/components/Providers/CategoriesProvider";
import { useEffect } from "react";
import { useColor } from "@/components/Providers/ColorProvider";
import Bottom from "@/components/Bottom";
import Categories from "@/components/Categories";

export default function Shop({ collections }) {
    const { setCategories } = useCategories();
    const { setColor } = useColor();

    useEffect(() => {
        setCategories(collections);
        setColor("#100606");
    }, []);
    return (
        <>
            <Head>
                <title>SIBÖ CHOCOLATE | Chocolate Gifts</title>
                <meta
                    name="description"
                    content="Buy Sibö Chocolate for delivery in the U.S. and Canada. Chocolate bars, chocolate coated nuts and fruit, fine truffles and caramels, hot chocolate mixes and more."
                />
            </Head>
            <Layout>
                <main
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#100606",
                    }}
                >
                    <div
                        style={{
                            textTransform: "uppercase",
                            color: "#FFE9CF",
                            fontWeight: 900,
                            fontSize: "18vw",
                            paddingInline: "3vw",
                            marginTop: "26vw",
                            lineHeight: "86%",
                        }}
                    >
                        Shop
                    </div>

                    <div
                        style={{
                            color: "#FFE9CF",
                            fontWeight: 300,
                            fontSize: "4.6vw",
                            paddingInline: "3vw",
                            marginTop: "18vw",
                            marginBottom: "0vw",
                            lineHeight: "140%",
                        }}
                    >
                        Select a catagory to explore our assortment of
                        chocolates.
                    </div>
                    {/* {collections.map((category) => (
                    <Link
                        href={`/shop/${category.slug}`}
                        style={{
                            marginTop: "6vw",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                zIndex: 1,
                            }}
                        >
                            <Pattern2 color={"#331F1C"} />
                        </div>
                        <div
                            style={{
                                textTransform: "uppercase",
                                color: "#FFD79A",
                                fontWeight: 900,
                                fontSize: "9vw",
                                paddingInline: "3vw",
                                position: "absolute",
                                zIndex: 1,
                                marginTop: "24vw",
                                lineHeight: "86%",
                            }}
                        >
                            {category.title} →
                        </div>

                        <div
                            style={{
                                position: "relative",
                                width: "100vw",
                                height: "66vw",
                                marginTop: "14vw",
                                mixBlendMode: 'lighten',
                            }}
                        >
                            <Image
                                src={category.backgroundImageUrl}
                                alt="sky"
                                fill
                                sizes="100vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </Link>
                ))} */}

                    <Categories categories={collections} />

                    <Bottom />
                </main>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const collections = await fetchAllCollections();

    return {
        props: {
            collections,
        },
    };
}
