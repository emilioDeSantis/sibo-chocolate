import React, { useState, useEffect } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CategoryDropdown from "./CategoryDropdown";
import categories from "@/data/categories";
import { useColor } from "./Providers/ColorProvider";

const Header = ({}) => {
    const { color, setColor } = useColor();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);

    const showSensitivity = 10; // Increase this value to make the header easier to show
    const hideSensitivity = 40; // Increase this value to make the header harder to hide

    const handleScroll = () => {
        const currentScrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        const scrollDifference = Math.abs(
            currentScrollPosition - scrollPosition
        );

        if (
            scrollPosition > currentScrollPosition &&
            scrollDifference > showSensitivity
        ) {
            setVisible(true);
        } else if (
            scrollPosition < currentScrollPosition &&
            scrollDifference > hideSensitivity
        ) {
            setVisible(false);
        }

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition, visible, handleScroll]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // gap: "4vw",
                position: "fixed",
                left: 0,
                right: 0,
                paddingTop: "0vw",
                top: visible ? 0 : "-35vw",
                transition: "top 0.3s",
                zIndex: 1000,
                width: "100vw",
            }}
        >
            <header
                style={{
                    display: "flex",
                    // flexDirection: 'column',
                    justifyContent: "space-between",
                    alignItems: "center",
                    // paddingInline: "4vw",
                    paddingBottom:'3vw',
                    background: color,
                    paddingTop:'1vw',
                    // gap: "1vw",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                        href="/demo"
                        style={{
                            width: "26vw",
                            height: "12vw",
                            // backgroundColor: "#551611",
                            borderRadius: "10000px",
                            borderRadius: "1vw",
                            cursor: "pointer",
                            paddingInline: "4vw",
                            paddingBottom: '1vw',
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Logo color={"black"} />
                    </Link>
                </div>
                <CategoryDropdown categories={categories} />
                <div
                    style={{
                        display: "flex",
                        gap: "0vw",
                    }}
                >
                    <Link
                        href="/demo"
                        style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "8vw",
                            height: "12vw",
                            // backgroundColor: "#551611",
                            borderRadius: "10000px",
                            borderRadius: "1vw",
                            // boxShadow: '0 1vw 3vw #5215',
                            cursor: "pointer",
                            border: "none",
                        }}
                    >
                        <ShoppingBagIcon color="black" height={"7vw"} />
                    </Link>

                    {/* <div
                style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "2vw",
                    height: "12vw",
                }}
            >
                
            <div
                style={{
                  color: 'white',
                }}
            >
                2
            </div>
            </div> */}
                    <DropdownMenu />
                </div>
            </header>
            {/* <div
                style={{
                    paddingInline: "4vw",
                    paddingBottom: '4vw',
                    paddingTop: '4vw',
                }}
            >
                <CategoryDropdown categories={categories} />
            </div> */}
        </div>
    );
};

export default Header;
