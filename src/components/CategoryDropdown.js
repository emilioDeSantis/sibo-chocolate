import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { isDarkerThan50, useColor } from "./Providers/ColorProvider";
import { useRouter } from "next/router";
import { client } from "@/shopify/client";
import { useCategories } from "./Providers/CategoriesProvider";

const CategoryDropdown = ({}) => {
    const { categories } = useCategories();

    const { color, textColor } = useColor();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <button
                onClick={toggleDropdown}
                style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    border: "none",
                    color: textColor,
                    height: "100%",
                    width: "100%",
                    fontSize: "1rem",
                    fontWeight: "500",
                    zIndex: 11,
                    background: color,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            // paddingTop:'0.8vw',
                            paddingRight: "1.2vw",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {isOpen ? "CLOSE MENU" : "ALL CHOCOLATES"}
                    </div>
                    {isOpen && (
                        <ChevronUpIcon
                            color={textColor}
                            height="1.6rem"
                        />
                    )}
                    {!isOpen && (
                        <ChevronDownIcon
                            color={textColor}
                            height="1.6rem"
                        />
                    )}
                </div>
            </button>

            <div
                // onClick={closeDropdown}
                style={{
                    position: "fixed",
                    top: isOpen ? "0" : "-100vh",
                    transition: "top 0.3s ease-in-out",
                    left: 0,
                    right: 0,
                    zIndex: -1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                    style={{
                        backgroundColor: color,
                        width: "100%",
                        height: "100vh",
                        paddingTop: "5rem",
                        color: "#333",
                        fontSize: "1.6rem",
                        textTransform: "uppercase",
                        overflowY: "scroll",
                        position: "absolute",
                        top: 0,
                        fontWeight: "900",
                        lineHeight: "100%",
                        paddingInline: "4vw",
                        color: "#551611",
                        width: "100%",
                        // textAlign: 'center',
                    }}
                >
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/shop/${category.slug}`}
                            passHref
                        >
                            <div
                                onClick={closeDropdown}
                                style={{
                                    paddingTop: "1.5rem",
                                    cursor: "pointer",
                                    color:
                                        router.asPath ===
                                        `/shop/${category.slug}`
                                            ? isDarkerThan50(color)
                                                ? "#fefcf3"
                                                : "#913600"
                                            : isDarkerThan50(color)
                                            ? "#fdf4d2"
                                            : "#551611",
                                }}
                            >
                                {category.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;
