import React, { useState, useEffect } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import Logo from "./svg/Logo";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CategoryDropdown from "./CategoryDropdown";
import categories from "@/data/categories";
import { useColor } from "./Providers/ColorProvider";
import { useRouter } from "next/router";
import { client } from "@/shopify/client";
import { useBagUpdate } from "./Providers/BagProvider";
import useWindowSize from "./hooks/useWindowSize";
import { useIsDesktop } from "./hooks/useIsDesktop";

const Header = ({ showBanner }) => {
    const router = useRouter();
    const { color, setColor, textColor } = useColor();
    const { bagUpdate } = useBagUpdate();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);

    const [checkout, setCheckout] = useState(null);
    const isDesktop = useIsDesktop();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tasting Tour", href: "/tour" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
        // { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const checkoutId = localStorage.getItem("checkoutId");
        if (checkoutId) {
            client.checkout.fetch(checkoutId).then((checkout) => {
                setCheckout(checkout);
            });
        }
    }, [bagUpdate]);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    const showSensitivity = 4; // Increase this value to make the header easier to show
    const hideSensitivity = 10; // Increase this value to make the header harder to hide

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
                // top: visible ? 0 : "-35vw",
                top: visible || isDesktop ? 0 : "-35vw",
                transition: "top 0.3s",
                zIndex: 1000,
                width: "100vw",
            }}
        >
            {showBanner && (
                <div
                    style={{
                        backgroundColor: "#842", // or any color you prefer
                        color: "#fffc",
                        textAlign: "center",
                        padding: "1.6vw",
                        // position: "fixed",
                        width: "100%",
                        fontWeight: 600,
                        fontSize: "4vw",
                        zIndex: 1001, // to make sure it appears above everything else
                    }}
                >
                    *cost of shipping to the U.S. can be expensive
                </div>
            )}

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    color: "white",
                    zIndex: 1000,
                    letterSpacing: "0.1em",
                    display: "flex",
                    // flexDirection: 'column',
                    justifyContent: "space-between",
                    // paddingInline: "4vw",
                    // paddingBottom: "3vw",
                    background: color,
                    // paddingTop: "1vw",
                    paddingInline: isDesktop ? "5rem" : 0,
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                        href="/"
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            padding: '0.5rem',
                        }}
                    >
                        <div
                            style={{
                                width: "4.2rem",
                                height: "2rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Logo color={textColor} />
                        </div>
                    </Link>
                </div>
                <div
                    style={{
                        // flexDirection: 'column',
                        justifyContent: "space-between",
                        alignItems: "center",
                        // paddingInline: "4vw",
                        // paddingBottom: "3vw",
                        // background: color,
                        // paddingTop: "1vw",
                        // gap: "1vw",
                    }}
                >
                    {router.pathname.includes("shop") && <CategoryDropdown />}
                    {!router.pathname.includes("shop") && (
                        <Link
                            style={{
                                cursor: "pointer",
                                background: "none",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "none",
                                // borderRadius: "1vw",
                                color: textColor,
                                height: "100%",
                                fontSize: "1rem",
                                fontWeight: "500",
                                zIndex: 11,
                                textTransform: "uppercase",
                                paddingInline: "1rem",
                            }}
                            href={"/shop"}
                        >
                            Shop
                        </Link>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "0vw",
                    }}
                >
                    {checkout &&
                        checkout.lineItems.length > 0 &&
                        !router.pathname.includes("bag") && (
                            <Link
                                href="/bag"
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
                                <div
                                    style={{
                                        color: textColor,
                                    }}
                                >
                                    {checkout.lineItems.length}
                                </div>
                                <ShoppingBagIcon
                                    color={textColor}
                                    height={"7vw"}
                                />
                            </Link>
                        )}
                    <div className="mobile">
                        <DropdownMenu />
                    </div>
                </div>

                <nav
                    className="desktop"
                    style={{
                        color: "#EEFDFF",
                        gap: "2.4rem",
                        fontSize: "0.7rem",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                    }}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={
                                link.href == router.pathname ? "" : "nav-link"
                            }
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "clamp(0rem,1.6vw, 1rem)",
                                color: textColor,
                            }}
                            href={link.href}
                        >
                            <div>{link.name}</div>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* <header
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
                {router.pathname.includes("shop") && <CategoryDropdown />}
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
                            textTransform: "uppercase",
                            paddingLeft: "30vw",
                        }}
                        href={"/shop"}
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
                    {checkout &&
                        checkout.lineItems.length > 0 &&
                        !router.pathname.includes("bag") && (
                            <Link
                                href="/bag"
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
                                <div
                                    style={{
                                        color: textColor,
                                    }}
                                >
                                    {checkout.lineItems.length}
                                </div>
                                <ShoppingBagIcon
                                    color={textColor}
                                    height={"7vw"}
                                />
                            </Link>
                        )}
                    <DropdownMenu />
                </div>
            </header> */}
        </div>
    );
};

export default Header;
