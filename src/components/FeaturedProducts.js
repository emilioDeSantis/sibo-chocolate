import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = ({ products }) => {
    return (
        <div
            style={{
                // textAlign: "center",
                // background: "#0f0707",
                // background: "#d2fcea",
                width: "120vh", // Full width
                maxWidth: "100vw", 
            }}
        >
            <h2
                style={{
                  color: "#ffdfd1",
                  // color: "#442211",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    fontSize: "2rem",
                    fontWeight: 900,
                    paddingInline: '3vw',
                    lineHeight: '120%',
                }}
            >
                Explore our<br/>Signature Chocolates
            </h2>
            <div
                style={{
                    display: "flex",
                    overflowX: "auto", // Horizontal scroll
                    gap: "1rem", // Adds space between product items
                    paddingBottom: "1rem",
                    paddingTop:'1.4rem',
                    textAlign: "center",
                    paddingInline: '3vw',
                }}
            >
                {products.map((product) => (
                    <Link
                    href={`/shop/${product.collection}/#${product.name}`}
                        key={product.id}
                        style={{ flex: "0 0 auto", width: "9rem" }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "9rem",
                                height: "9rem",
                                borderRadius: "50%",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={product.image}
                                alt={`${product.name} product`}
                                fill // Using fill layout
                                style={{ objectFit: "cover" }} // Object fit goes into the style object
                            />
                        </div>
                        <p
                            style={{
                                marginTop: "1rem",
                                fontSize: ".96rem",
                                color: "#bb8877",
                                fontWeight: 600,
                            }}
                        >
                            {product.nameAndCategory ? product.nameAndCategory : product.name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
