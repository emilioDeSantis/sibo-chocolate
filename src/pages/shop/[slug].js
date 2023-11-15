import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import ProductCard from "@/components/Product";

import categories from "@/data/categories";
import CategoryDropdown from "@/components/CategoryDropdown";
import Footer from "@/components/Footer";
import Pattern1 from "@/components/Pattern1";
import Layout from "@/components/Layout";
import { isDarkerThan50, useColor } from "@/components/Providers/ColorProvider";
import { client } from "@/shopify/client";

import { useCategories } from "@/components/Providers/CategoriesProvider";
import {
    fetchAllCollections,
    fetchCollectionWithProducts,
} from "@/shopify/backend";
import Bottom from "@/components/Bottom";
import { useLocation } from "@/components/Providers/LocationProvider";

const Category = ({ category }) => {
    const { color, setColor } = useColor();
    const { location, setLocation } = useLocation();
    const { categories, setCategories } = useCategories();

    useEffect(() => {
        const fetchCollections = async () => {
            const collections = await fetchAllCollections();
            setCategories(collections);
        };

        if (categories.length < 1) {
            fetchCollections();
        }
    }, []);

    const [currentProduct, setCurrentProduct] = useState(category.products[0]);
    const productRefs = useRef([]);

    //     useEffect(() => {
    //       document.body.style.backgroundColor = currentProduct.color;
    //   }, [currentProduct]);

    useEffect(() => {
        setColor(currentProduct.color);
    }, [currentProduct]);

    // useEffect(() => {
    //     console.log("test");
    //     console.log(category.products);
    // }, []);

    useEffect(() => {
        if (!category) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentProduct(entry.target.dataset);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0% -40% 0%",
                threshold: 0,
            }
        );

        productRefs.current.forEach((ref) => {
            if (ref instanceof Element) {
                observer.observe(ref);
            }
        });

        return () => {
            productRefs.current.forEach((ref) => {
                if (ref instanceof Element) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [category]);

    if (!category) return null;

    return (
        <>
            <Head>
                <title>SIBÖ CHOCOLATE | {category.name}</title>
                <meta
                    name="description"
                    content={`Buy Sibö Chocolate's ${category.name} for delivery in the U.S. and Canada.`}
                />
            </Head>
            <Layout>
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            background: category.color,
                            height: "100%",
                            overflowY: "hidden",
                            zIndex: -2,
                        }}
                    >
                        {category.products
                            .sort(
                                (a, b) =>
                                    (b.available_in_us == "true" ? 1 : 0) -
                                    (a.available_in_us == "true" ? 1 : 0)
                            )
                            .map(() => (
                                <>
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                    <Pattern1 color={category.pattern_color} />
                                </>
                            ))}
                    </div>
                    <Head>
                        <title>{category.name}</title>
                    </Head>
                    <div
                        style={{
                            paddingTop: "25vw",
                            paddingBottom: "0vw",
                        }}
                    >
                        <header
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    background: category.color,
                                    marginInline: "4vw",
                                    paddingTop: "3vw",
                                    paddingBottom: "1vw",
                                    alignItems: "center",
                                    // border: '1px solid white',
                                    width: "100%",
                                    borderRadius: "1vw",
                                    // background: 'white',
                                }}
                            >
                                <div
                                    style={{
                                        textTransform: "uppercase",
                                        fontSize: "12vw",
                                        fontWeight: "900",
                                        color: isDarkerThan50(category.color)
                                            ? "white"
                                            : "#551611",
                                        letterSpacing: "0.08em",
                                        textAlign: "center",
                                    }}
                                >
                                    {category.name}
                                </div>
                            </div>
                        </header>
                    </div>
                    <main
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {category.products.map((product, index) => {
                            return (
                                <div
                                    key={product.id}
                                    ref={(el) =>
                                        (productRefs.current[index] = el)
                                    }
                                    data-id={product.id}
                                    data-name={product.name}
                                    data-description={product.description}
                                    data-price={product.price}
                                    data-color={product.color}
                                    data-weight={product.weight}
                                    data-cacao={product.cacao}
                                    data-available_in_us={
                                        product.available_in_us
                                    }
                                    data-chocolate_categories={
                                        product.chocolate_categories
                                    }
                                    data-image={product.image}
                                    data-variantid={product.variantId}
                                >
                                    <ProductCard
                                        product={{
                                            ...product,
                                            index: index + 1,
                                            totalProducts:
                                                category.products.length,
                                        }}
                                        category={category}
                                    />
                                </div>
                            );
                        })}
                        <Bottom />
                    </main>
                </div>
                <Footer currentProduct={currentProduct} />
                {/* <div
                style={{
                    position: "fixed",
                    top: "28vw",
                    right: "3vw",
                    zIndex: 1000,
                }}
            >
                <div style={{ marginBottom: "3vw" }}>
                    <button
                        style={{
                            borderRadius: "50%",
                            width: "12vw",
                            height: "12vw",
                            fontSize: "8vw",
                            border: "none",
                            opacity: location === "us" ? 1 : 0.6,
                            background: "#fff",
                            boxShadow: "0 2px 6px #0009",
                        }}
                        onClick={() => setLocation("us")}
                    >
                        🇺🇸
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            borderRadius: "50%",
                            width: "12vw",
                            height: "12vw",
                            border: "none",
                            fontSize: "8vw",
                            opacity: location === "cr" ? 1 : 0.6,
                            background: "white",

                            boxShadow: '0 2px 6px #0009',
                        }}
                        onClick={() => setLocation("cr")}
                    >
                        🇨🇷
                    </button>
                </div>
            </div> */}
            </Layout>
        </>
    );
};

// export async function getServerSideProps(context) {
//     const { slug } = context.params;
//     const category = categories.find((category) => category.slug === slug);

//     // If category is not found, return a 404 error
//     if (!category) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: {
//             category,
//         },
//     };
// }

export async function getServerSideProps(context) {
    const { slug } = context.params;

    const category = await fetchCollectionWithProducts(slug);

    return {
        props: {
            category,
        },
    };
}

export default Category;

// const Demo = () => {

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//                 textAlign: "center",
//                 fontSize: "1.5rem",
//                 color: "black",
//             }}
//         >
//             <p>This page isn't available yet because it's just a demo.</p>
//             <button
//                 style={{
//                     marginTop: "2rem",
//                     fontSize: "1.2rem",
//                     color: "#0070f3",
//                     backgroundColor: "transparent",
//                     border: "1px solid #0070f3",
//                     padding: "0.5rem 1rem",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                 }}
//             >
//                 Back
//             </button>
//         </div>
//     );
// };

// export default Demo;
