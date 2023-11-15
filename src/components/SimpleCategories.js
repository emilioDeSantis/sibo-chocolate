import React from "react";
import Link from "next/link";

const SimpleCategories = ({ categories }) => {
    return (
        <div style={{ 
            padding: "3vw" 
            }}>
            {categories.map((category) => (
                <Link
                    key={category.slug}
                    href={`/shop/${category.slug}`}
                    style={{
                        textTransform: "uppercase",
                        color: "#f3ce99", // You can change the color as you like
                        fontWeight: 900,
                        fontSize: "1.4rem", // You can adjust the font size as needed
                        margin: "2rem 0",
                        display: "block", 
                        lineHeight: "86%",
                    }}
                >
                    {category.title} →
                </Link>
            ))}
        </div>
    );
};

export default SimpleCategories;
