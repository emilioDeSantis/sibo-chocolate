import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useColor } from "@/components/Providers/ColorProvider";
import Pattern2 from "@/components/Pattern2";
import { SocialLinks } from "@/components/SocialLinks";

const Contact = () => {
    const { setColor } = useColor();

    useEffect(() => {
        setColor("#301d18");
    }, []);
    return (
        <Layout>
            <div
                style={{
                    width: "100%",
                    height: "88vh",
                    padding: "3vw",
                    backgroundColor: "#301d18",
                    color: "#faf2ed",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        marginInline: "-3vw",
                        marginBottom: "-20vw",
                        marginTop: "18vw",
                    }}
                >
                    <Pattern2 color={"#55332399"} />
                </div>
                <h1
                    style={{
                        fontSize: "12vw",
                        textTransform: "uppercase",
                        fontWeight: 900,
                        marginBottom: "8vw",
                    }}
                >
                    Contact Us
                </h1>

                <p style={{ fontSize: "5vw", color: "#b87", fontWeight: 600 }}>
                    Email:{" "}
                    <a
                        href="mailto:info@sibochocolate.com"
                        style={{ color: "#faf2ed", fontWeight: 400 }}
                    >
                        info@sibochocolate.com
                    </a>
                </p>

                <div style={{ marginBottom: "6vw", textAlign: "left" }}>
                    <h3
                        style={{
                            fontSize: "6vw",
                            // marginBottom: "1vw",
                            marginTop: "5vw",
                        }}
                    >
                        Shop & Tours
                    </h3>
                    <p style={{ fontSize: "5vw", color: "#faf2ed99" }}>
                        San Isidro de Heredia, Costa Rica
                    </p>
                    <p style={{ fontSize: "5vw", color: "#faf2edcc" }}>
                        +(506) 22899010
                    </p>
                    <h3
                        style={{
                            fontSize: "6vw",
                            // marginBottom: "1vw",
                            marginTop: "5vw",
                        }}
                    >
                        Factory & Shop
                    </h3>
                    <p style={{ fontSize: "5vw", color: "#faf2ed99" }}>
                    Plaza Itskatzu, Escazú, Costa Rica
                    </p>
                    <p style={{ fontSize: "5vw", color: "#faf2edcc" }}>
                    +(506) 22681335
                    </p>
                </div>
                <div
                    style={{
                        width: "100%",
                        marginTop: "2vw",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SocialLinks />
                </div>

                <div
                    style={{
                        marginBottom: "7vw",
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <h2 style={{ color: "#b87", fontSize: "6vw" }}>
                        Newsletter Signup
                    </h2>
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        style={{
                            padding: "3vw",
                            margin: "3vw 0",
                            width: "90%",
                            backgroundColor: "#EFEFEF55",
                            border: "2px solid #DDD4",
                            borderRadius: "8px",
                            fontSize: "4vw",
                            color: "#333",
                        }}
                    />
                    <button
                        style={{
                            display: "block",
                            margin: "3vw auto",
                            padding: "2vw 4vw",
                            backgroundColor: "#b87",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "4vw",
                            color: "#FFF",
                            cursor: "pointer",
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
