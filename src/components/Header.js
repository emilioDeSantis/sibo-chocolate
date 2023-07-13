import React, { useState, useEffect } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import Logo from "./svg/Logo";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CategoryDropdown from "./CategoryDropdown";
import categories from "@/data/categories";
import { useColor } from "./Providers/ColorProvider";
import { useRouter } from "next/router";

const Header = ({}) => {
    const router = useRouter();
    const { color, setColor, textColor } = useColor();

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
                    paddingBottom: "3vw",
                    background: color,
                    paddingTop: "1vw",
                    // gap: "1vw",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                        href="/"
                        style={{
                            width: "26vw",
                            height: "12vw",
                            // backgroundColor: "#551611",
                            borderRadius: "10000px",
                            borderRadius: "1vw",
                            cursor: "pointer",
                            paddingInline: "4vw",
                            paddingBottom: "1vw",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Logo color={textColor} />
                    </Link>
                </div>
                {router.pathname.includes("shop") && (
                    <CategoryDropdown categories={categories} />
                )}
                {!router.pathname.includes("shop") && (
                    <Link
                        style={{
                            cursor: "pointer",
                            background: "none",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "none",
                            borderRadius: "1vw",
                            color: textColor,
                            height: "12vw",
                            width: "100%",
                            fontSize: "4vw",
                            fontWeight: "500",
                            zIndex: 11,
                            textTransform: 'uppercase',
                            paddingLeft: '30vw',
                        }}
                        href={'/shop'}
                    >
                        Shop
                    </Link>
                )}
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
                        <ShoppingBagIcon color={textColor} height={"7vw"} />
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
