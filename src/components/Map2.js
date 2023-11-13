import React, { useRef, useState, useEffect, use } from "react";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Swatch2 from "./svg/Swatch2";
import Image from "next/image";
import { useIsDesktop } from "./hooks/useIsDesktop";

const Map2 = () => {
    const [popup, setPopup] = useState(null);
    const [animate, setAnimate] = useState(false);
    const mapRef = useRef(null);
    const isDesktop = useIsDesktop();

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
            left: "68%",
            top: "71%",
            title: "Talamanca",
            content:
                "Between the Talamanca Mountains and the Bananito River is a small farm that provides us with gorgeous beans, expertly fermented and dried by the Moore family. They also produce, vanilla, nutmeg and other tropical fruits and spices on the same farm. The family have been working in cacao for generations. Some of their trees are more than 40 years old, which means that we get some rare floral and herbal flavor notes that are lacking in the types of commercial cacao currently being planted throughout the Central American region. This cacao is used for our 70% Talamanca origin bar.",
        },
        {
            left: "48%",
            top: "56%",
            title: "Turrialba",
            content:
                "Set near Guayabo National Park, an important archeological site for the indigenous Cabecar peoples, this gorgeous farm is a model for regenerative agriculture and agroforestry. Here, the third generation of the Rossi family has been producing award-winning cacao with strict quality standards that yields unmistakable fruity notes. Most of the cacao has been planted since 2019, selected for its organoleptic qualities. These include: TSH-565, citrus fruit and intense floral notes; CATIE R6, spices and a slight fruity acidity; ICS-95, citrus fruit with pronounced acidity. This cacao is used for our 70% Turrialba origin bar.",
        },
        {
            left: "9%",
            top: "35%",
            title: "Huetar",
            url: "/FINCA LA DORADA.mp4",
            content:
                "Finca La Dorada has been producing award-winning beans since 2013 on its 90-acre property in the San Carlos region of Costa Rica. The Mejia family are proud to export beans to the European Union, and we are lucky to have them close by. Their agroforestry project aims to be a model for modern cacao production and frequently receives cacao producers from other regions in Costa Rica as well as other countries, to share their process and philosophy. Their cacao genetics include clones developed by Costa Rica’s Center for Tropical Agriculture (CATIE), which produces strong chocolate base with nutty flavor notes. This cacao is used for our 70% Huetar origin bar.",
        },
    ];
    const pinLocationsDesktop = [
        {
            left: "62%",
            top: "72%",
            title: "Talamanca",
            content:
                "Between the Talamanca Mountains and the Bananito River is a small farm that provides us with gorgeous beans, expertly fermented and dried by the Moore family. They also produce, vanilla, nutmeg and other tropical fruits and spices on the same farm. The family have been working in cacao for generations. Some of their trees are more than 40 years old, which means that we get some rare floral and herbal flavor notes that are lacking in the types of commercial cacao currently being planted throughout the Central American region. This cacao is used for our 70% Talamanca origin bar.",
        },
        {
            left: "49%",
            top: "57%",
            title: "Turrialba",
            content:
                "Set near Guayabo National Park, an important archeological site for the indigenous Cabecar peoples, this gorgeous farm is a model for regenerative agriculture and agroforestry. Here, the third generation of the Rossi family has been producing award-winning cacao with strict quality standards that yields unmistakable fruity notes. Most of the cacao has been planted since 2019, selected for its organoleptic qualities. These include: TSH-565, citrus fruit and intense floral notes; CATIE R6, spices and a slight fruity acidity; ICS-95, citrus fruit with pronounced acidity. This cacao is used for our 70% Turrialba origin bar.",
        },
        {
            left: "26%",
            top: "36%",
            title: "Huetar",
            url: "/FINCA LA DORADA.mp4",
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
                width: "100%",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: isDesktop ? "100vh" : "140vw", // Adjust as needed
                    // aspectRatio: "1/1.4",
                    position: "relative",
                }}
            >
                <Image
                    src="/map-light6.png"
                    alt="Map"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />
                {(isDesktop ? pinLocationsDesktop : pinLocations).map(
                    (location, index) => (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                left: location.left,
                                top: location.top,
                                cursor: "pointer",
                                zIndex: 1000,
                            }}
                            onClick={() => handlePinClick(location)}
                        >
                            <MapPinIcon
                                style={{
                                    width: "1.8rem", // Adjust icon size as needed
                                    height: "1.8rem",
                                    color: "#332211",
                                }}
                            />
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "#332211",
                                    fontSize: "2.6rem",
                                    // fontWeight: "bold",
                                    fontFamily: "pablo",
                                }}
                            >
                                {location.title}
                            </div>
                        </div>
                    )
                )}
            </div>

            {popup && (
                <div
                    style={{
                        position: "absolute",
                        left: "3vw",
                        right: "3vw",
                        top: "8rem",
                        background: "#f1f0cd",
                        padding: "0.5rem",
                        zIndex: 1000,
                        fontSize: "1.1rem",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid black",
                            padding: "1rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                marginBottom: "0.7rem",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: 900,
                                    paddingBlock: "0.5rem",
                                }}
                            >
                                {popup.title}
                            </h3>
                            <XMarkIcon
                                onClick={handleClosePopup}
                                style={{
                                    width: "2rem",
                                    height: "2rem",
                                    color: "#000000",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                height: "1px",
                                background: "black",
                                width: "100%",
                            }}
                        /> 
                        {popup.url && (
                        <video
                            controls
                            poster="/cacaothumb.png"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                objectFit: "cover",
                                background: "#fff1",
                                marginTop: "2rem",
                            }}
                            src={popup.url}
                        >
                            Your browser does not support the video tag.
                        </video>

                        )}
                        <p
                            style={{
                                marginBottom: "1.4rem",
                                lineHeight: "150%",
                                marginTop: "2.4rem",
                            }}
                        >
                            {popup.content}
                        </p>
                        <Link
                            href="/shop"
                            style={{
                                display: "inline-block",
                                background: "#190c03",
                                color: "#ffffff",
                                padding: "0.8rem 2rem",
                                textAlign: "center",
                            }}
                        >
                            Our Chocolates →
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Map2;
