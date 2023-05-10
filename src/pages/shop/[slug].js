import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import ProductCard from "@/components/Product";

import categories from "@/data/categories";
import CategoryDropdown from "@/components/CategoryDropdown";
import Footer from "@/components/Footer";
import Pattern1 from "@/components/Pattern1";
import Layout from "@/components/Layout";
import { useColor } from "@/components/Providers/ColorProvider";

const Category = ({ category}) => {
const {color, setColor} = useColor()

    function isDarkerThan50(hexColor) {
        // Convert the hex color to RGB
        const rgbColor = hexToRgb(hexColor);

        // Calculate the brightness using the RGB color
        const brightness =
            (rgbColor.r * 299 + rgbColor.g * 587 + rgbColor.b * 114) / 1000;

        // Return true if the brightness is less than 128 (50% brightness)
        return brightness < 128;
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }

    const [currentProduct, setCurrentProduct] = useState(category.products[0]);
    const productRefs = useRef([]);

    useEffect(() => {
      document.body.style.backgroundColor = currentProduct.color;
  }, [currentProduct]);


  useEffect(() => {
      setColor(currentProduct.color)
  }, [currentProduct]);

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
                rootMargin: "0px",
                threshold: 0.25,
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
        <Layout>
            <div
                style={{
                    position: "absolute",
                    background: category.color,
                    zIndex: -2,
                }}
            >
                {category.products.map(() => (
                    <>
                        <Pattern1 />
                        <Pattern1 />
                        <Pattern1 />
                        <Pattern1 />
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
                            width: '100%',
                            borderRadius: '1vw'
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
                                textAlign: 'center',
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
                {category.products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (productRefs.current[index] = el)}
                        data-id={product.id}
                        data-name={product.name}
                        data-price={product.price}
                        data-color={product.color}
                    >
                        <ProductCard
                            product={{
                                ...product,
                                index: index + 1,
                                totalProducts: category.products.length,
                            }}
                            category={category}
                        />
                    </div>
                ))}
            </main>
            <Footer currentProduct={currentProduct} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const category = categories.find((category) => category.slug === slug);

    // If category is not found, return a 404 error
    if (!category) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            category,
        },
    };
}

export default Category;
