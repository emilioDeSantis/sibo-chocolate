import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useColor } from "@/components/Providers/ColorProvider";
import Pattern2 from "@/components/Pattern2";
import { SocialLinks } from "@/components/SocialLinks";
import Head from "next/head";

const Contact = () => {
    const { setColor } = useColor();

    useEffect(() => {
        setColor("#301d18");
    }, []);
    return (
        <>
            <Head>
                <title>SIBÖ CHOCOLATE | Contact</title>
                <meta
                    name="description"
                    content={`Contact Sibö Chocolate in Costa Rica, text us on WhatsApp, follow us on Instagram, YouTube and Facebook.`}
                />
            </Head>
            <Layout>
                    <div
                        style={{
                            maxWidth: "100%",
                            paddingInline: "7vw",
                            paddingTop: "6rem",
                            backgroundColor: "#301d18",
                            color: "#faf2ed",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "2.8rem",
                                textTransform: "uppercase",
                                fontWeight: 900,
                                marginBottom: "2rem",
                            }}
                        >
                            Contact Us
                        </h1>

                        <p
                            style={{
                                fontSize: "1.2rem",
                                color: "#b87",
                                fontWeight: 600,
                            }}
                        >
                            Email:{" "}
                            <a
                                href="mailto:info@sibochocolate.com"
                                style={{ color: "#faf2ed", fontWeight: 400 }}
                            >
                                info@sibochocolate.com
                            </a>
                        </p>

                        <div style={{ marginBottom: "1.4rem", textAlign: "left" }}>
                            <h3
                                style={{
                                    fontSize: "1.5rem",
                                    // marginBottom: "1vw",
                                    marginTop: "1.2rem",
                                }}
                            >
                                Shop & Tours
                            </h3>
                            <p style={{ fontSize: "1.2rem", color: "#faf2ed99" }}>
                                San Isidro de Heredia, Costa Rica
                            </p>
                            <p style={{ fontSize: "1.2rem", color: "#faf2edcc" }}>
                                +(506) 22899010
                            </p>
                            <h3
                                style={{
                                    fontSize: "1.5rem",
                                    // marginBottom: "1vw",
                                    marginTop: "1.2rem",
                                }}
                            >
                                Factory & Shop
                            </h3>
                            <p style={{ fontSize: "1.2rem", color: "#faf2ed99" }}>
                                Plaza Itskatzu, Escazú, Costa Rica
                            </p>
                            <p style={{ fontSize: "1.2rem", color: "#faf2edcc" }}>
                                +(506) 22681335
                            </p>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                marginTop: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SocialLinks />
                        </div>

                        <div
                            style={{
                                marginBottom: "2rem",
                                textAlign: "center",
                                width: "100%",
                            }}
                        >
                            <h2 style={{ color: "#b87", fontSize: "1.5rem" }}>
                                Newsletter Signup
                            </h2>
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                style={{
                                    padding: "0.7rem",
                                    margin: "0.7rem 0",
                                    width: "18rem",
                                    backgroundColor: "#EFEFEF55",
                                    border: "2px solid #DDD4",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    color: "#333",
                                }}
                            />
                            <button
                                style={{
                                    display: "block",
                                    margin: "0.7rem auto",
                                    padding: "0.7rem 1rem",
                                    backgroundColor: "#b87",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    color: "#FFF",
                                    cursor: "pointer",
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
            </Layout>
        </>
    );
};

export default Contact;
