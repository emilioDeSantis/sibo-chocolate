import React, { useRef, useState, useEffect } from "react";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Swatch2 from "./svg/Swatch2";

const Map = () => {
    const [popup, setPopup] = useState(null);
    const [animate, setAnimate] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimate(true);
                }
            },
            {
                threshold: 1, // Adjust the threshold to control when the animation should start
            }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => {
            if (mapRef.current) {
                observer.unobserve(mapRef.current);
            }
        };
    }, []);

    const pinLocations = [
        {
            left: "45%",
            top: "35%",
            title: "TALAMANCA",
            content:
                "Between the Talamanca Mountains and the Bananito River is a small farm that provides us with gorgeous beans, expertly fermented and dried by the Moore family. They also produce, vanilla, nutmeg and other tropical fruits and spices on the same farm. The family have been working in cacao for generations. Some of their trees are more than 40 years old, which means that we get some rare floral and herbal flavor notes that are lacking in the types of commercial cacao currently being planted throughout the Central American region. This cacao is used for our 70% Talamanca origin bar.",
        },
        {
            left: "40%",
            top: "65%",
            title: "TURRIALBA",
            content:
                "Set near Guayabo National Park, an important archeological site for the indigenous Cabecar peoples, this gorgeous farm is a model for regenerative agriculture and agroforestry. Here, the third generation of the Rossi family has been producing award-winning cacao with strict quality standards that yields unmistakable fruity notes. Most of the cacao has been planted since 2019, selected for its organoleptic qualities. These include: TSH-565, citrus fruit and intense floral notes; CATIE R6, spices and a slight fruity acidity; ICS-95, citrus fruit with pronounced acidity. This cacao is used for our 70% Turrialba origin bar.",
        },
        {
            left: "25%",
            top: "19%",
            title: "HUETAR",
            content:
                "Finca La Dorada has been producing award-winning beans since 2013 on its 90-acre property in the San Carlos region of Costa Rica. The Mejia family are proud to export beans to the European Union, and we are lucky to have them close by. Their agroforestry project aims to be a model for modern cacao production and frequently receives cacao producers from other regions in Costa Rica as well as other countries, to share their process and philosophy. Their cacao genetics include clones developed by Costa Rica’s Center for Tropical Agriculture (CATIE), which produces strong chocolate base with nutty flavor notes. This cacao is used for our 70% Huetar origin bar.",
        },
    ];

    const handlePinClick = (popupData) => {
        setPopup(popupData);
    };

    const handleClosePopup = () => {
        setPopup(null);
    };

    return (
        <div
            style={{
                width: "100vw",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: "100vw",
                    marginTop: "-52vw",
                    zIndex: 1,
                }}
            >
                <Swatch2 color={"#F5eeDC"} />
            </div>
            <div
                ref={mapRef}
                style={{
                    width: "100vw",
                    height: "130vw",
                    overflow: "hidden",
                    position: "relative",
                    marginTop: "30vw",
                    // background: animate ? 'red' : 'blue',
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        animation: animate ? "zoom 4s ease-in-out" : "none",
                        transform: animate ? "scale(1.1)" : "scale(0.06)",
                    }}
                >
                    <img
                        src="/map.png"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <img
                        src="/map mid.png"
                        alt="Map Layer 2"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "scale(4.32)",
                            opacity: 0,
                            animation: animate ? "fade-layer2 4s" : "none",
                        }}
                    />
                    <img
                        src="/map out.png"
                        alt="Map Layer 3"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: animate ? 0 : 1,
                            transform: "scale(20)",
                            // filter: 'hue-rotate(180deg)',
                            animation: animate ? "fade-layer3 4s" : "none",
                        }}
                    />
                    {pinLocations.map((location, index) => (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                left: location.left,
                                top: location.top,
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2vw",
                                width: "30vw",
                            }}
                            onClick={() => handlePinClick(location)}
                        >
                            <MapPinIcon
                                style={{
                                    width: "8vw",
                                    height: "8vw",
                                    color: "#D3987F",
                                }}
                            />
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "#D3987F",
                                    fontWeight: "bold",
                                }}
                            >
                                {location.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                style={{
                    width: "100vw",
                    height: "12vw",
                    marginTop: "0vw",
                    background: "#F5eeDC",
                    marginBottom: '-30vw',
                }}
            />

            {/* <div
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: '8vw',
                    marginTop: "-17vw",
                    zIndex: 1,
                }}
            >
                <Swatch2 color={"#F5eeDC"} />
            </div> */}
            {popup && (
                <div
                    style={{
                        position: "absolute",
                        left: "3vw",
                        right: "3vw",
                        top: "30vw",
                        background: "#f1f0cd", // Background color
                        padding: "3vw",
                        color: "#190a02", // Text color
                        zIndex: 1000,
                        fontSize: "5vw",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid black",
                            padding: "5vw",
                            zIndex: 1000,
                            fontSize: "5vw",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                width: "100%",
                                justifyContent: "space-between",
                                marginBottom: "3vw",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "8vw",
                                    fontWeight: 900,
                                    paddingBlock: "2vw",
                                }}
                            >
                                {popup.title}
                            </h3>
                            <div onClick={handleClosePopup} style={{}}>
                                <XMarkIcon
                                    style={{
                                        width: "8vw",
                                        height: "8vw",
                                        color: "#000000",
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                height: "1px",
                                background: "black",
                                width: "100%",
                            }}
                        />
                        <p
                            style={{
                                marginBottom: "6vw",
                                lineHeight: "150%",
                                marginTop: "10vw",
                            }}
                        >
                            {popup.content}
                        </p>

                        <div
                            style={{
                                height: "1px",
                                background: "black",
                                width: "100%",
                                marginBottom: "10vw",
                            }}
                        />

                        <Link
                            style={{
                                background: "#190c03",
                                color: "#ffffff",
                                padding: "3vw",
                                paddingInline: "8vw",
                                textAlign: "center",
                                width: "100%",
                            }}
                            href="/shop"
                        >
                            Our Chocolates →
                        </Link>

                        <div
                            style={{
                                height: "6vw",
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Map;
