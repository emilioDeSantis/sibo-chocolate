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
                    width: "8rem",
                    height: "4rem",
                    marginBottom: "2rem",
                    marginTop: "2rem",
                }}
            >
                <Logo color="#FFECB3" />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ color: "#FFF8E1", fontSize: "1.4rem" }}>
                    Contact Us
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                    San Isidro de Heredia: +(506) 22681335
                </p>
                <p style={{ fontSize: "1.1rem" }}>Escazú: +(506) 22899010</p>
                <p style={{ fontSize: "1.1rem" }}>
                    Email:{" "}
                    <a
                        href="mailto:info@sibochocolate.com"
                        style={{ color: "#FFD180" }}
                    >
                        info@sibochocolate.com
                    </a>
                </p>
            </div>

            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                <h2 style={{ color: "#FFF8E1", fontSize: "1.4rem" }}>
                    Newsletter Signup
                </h2>
                <input
                    type="email"
                    placeholder="Enter your email..."
                    style={{
                        padding: "0.7rem",
                        margin: "0.7rem 0",
                        width: "90%",
                        backgroundColor: "#4E342E",
                        border: "none",
                        borderRadius: "8px",
                        color: "#FFECB3",
                    }}
                />
                <button
                    style={{
                        display: "block",
                        margin: "0.7rem auto",
                        padding: "0.7rem 1.5rem",
                        backgroundColor: "#6D4C41",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "1.1rem",
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
                    marginBottom: "2rem",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    gap: "0.4rem",
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

            <p style={{ fontSize: "0.8rem", marginBottom: "3rem" }}>
                © 2023 SIBO Chocolate Costa Rica. All rights reserved.
            </p>
        </div>
    );
};

export default Bottom;

// Note: The <Logo /> component is a placeholder and should be defined elsewhere.
