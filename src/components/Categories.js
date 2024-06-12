import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pattern2 from "./Pattern2";

const Categories = ({ categories }) => {
    return (
        <>
            {categories.map((category) => (
                <Link
                key={category.slug}
                    href={`/shop/${category.slug}`}
                    style={{
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
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
                            fontSize: "2rem",
                            paddingInline: "3vw",
                            position: "absolute",
                            zIndex: 1,
                            marginTop: "16vw",
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
            ))}
        </>
    );
};

export default Categories;
