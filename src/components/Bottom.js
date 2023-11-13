import React from "react";
import Link from "next/link";
import Logo from "./svg/Logo";
import { SocialLinks } from "./SocialLinks";

const Bottom = () => {
    return (
        <div
            style={{
                width: "100%",
                padding: "3vw",
                backgroundColor: "#302220",
                color: "#FFECB3",
                position: "relative",
                bottom: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5vw",
            }}
        >
            <div
                style={{
                    width: "30vw",
                    height: "15vw",
                    marginBottom: "5vw",
                    marginTop: "10vw",
                }}
            >
                <Logo color="#FFECB3" />
            </div>

            <div style={{ marginBottom: "6vw" }}>
                <h2 style={{ color: "#FFF8E1", fontSize: "6vw" }}>
                    Contact Us
                </h2>
                <p style={{ fontSize: "4.5vw" }}>
                    San Isidro de Heredia: +(506) 22681335
                </p>
                <p style={{ fontSize: "4.5vw" }}>Escazú: +(506) 22899010</p>
                <p style={{ fontSize: "4.5vw" }}>
                    Email:{" "}
                    <a
                        href="mailto:info@sibochocolate.com"
                        style={{ color: "#FFD180" }}
                    >
                        info@sibochocolate.com
                    </a>
                </p>
            </div>

            <div style={{ marginBottom: "7vw", textAlign: "center" }}>
                <h2 style={{ color: "#FFF8E1", fontSize: "6vw" }}>
                    Newsletter Signup
                </h2>
                <input
                    type="email"
                    placeholder="Enter your email..."
                    style={{
                        padding: "3vw",
                        margin: "3vw 0",
                        width: "90%",
                        backgroundColor: "#4E342E",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "4vw",
                        color: "#FFECB3",
                    }}
                />
                <button
                    style={{
                        display: "block",
                        margin: "3vw auto",
                        padding: "3vw 6vw",
                        backgroundColor: "#6D4C41",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "4.5vw",
                        color: "#FFD180",
                        cursor: "pointer",
                    }}
                >
                    Subscribe
                </button>
            </div>

            <SocialLinks />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    marginBottom: "6vw",
                    fontSize: "4vw",
                    textTransform: "uppercase",
                    gap: "2vw",
                }}
            >
                <Link href="/">Home</Link> | 
                <Link href="/shop">Shop</Link> | 
                <Link href="/chocolate">About Our Chocolate</Link>
                <Link href="/wellness">Wellness</Link> | 
                <Link href="/sustainability">Sustainability</Link> | 
                <Link href="/about">About</Link> | 
                <Link href="/tour">Tour</Link>
                <Link href="/reviews">Reviews</Link>
            </div>

            <p style={{ fontSize: "3.5vw", marginBottom: "36vw" }}>
                © 2023 SIBO Chocolate Costa Rica. All rights reserved.
            </p>
        </div>
    );
};

export default Bottom;

// Note: The <Logo /> component is a placeholder and should be defined elsewhere.
