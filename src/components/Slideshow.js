// Slideshow.js

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    { src: "/sibo-3.png", caption: "Delicious Milk Chocolate" },
    { src: "/blogs.png", caption: "Rich Dark Chocolate" },
    { src: "/molin.png", caption: "Creamy White Chocolate" },
];

const Slideshow = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1));
        }, 6000); // 5 seconds for each slide, adjust as needed
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {images.map((image, index) => {
                const currentPosition = (currentImage - index + images.length) % images.length
                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: "-50vw",
                            width: "200vw",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: currentPosition == 0 ? 1 : 0,
                            animation: currentPosition == 0 || currentPosition == 1 ? "slideAnimation 12s linear" : "none",
                            transition: "3s ease-in-out opacity",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.caption}
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Slideshow;
