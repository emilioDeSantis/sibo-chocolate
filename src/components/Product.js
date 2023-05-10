// components/ProductCard.js
import React, { forwardRef } from "react";
import Image from "next/image";
import Swatch from "./Swatch"; // Import your Swatch SVG component
import CocoaIcon from "./CocoaIcon";
import FlowerIcon from "./FlowerIcon";

function isDarkerThan50(hexColor) {
    // Convert the hex color to RGB
    const rgbColor = hexToRgb(hexColor);

    // Calculate the brightness using the RGB color
    const brightness =
        (rgbColor.r * 299 + rgbColor.g * 587 + rgbColor.b * 114) / 1000;

    // Return true if the brightness is less than 128 (50% brightness)
    return brightness < 145;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

const ProductCard = forwardRef(({ product, category }, ref) => {
    const {
        index,
        name,
        description,
        icon,
        cacaoPercentage,
        weightInGrams,
        flavorIcon,
        flavorProfile,
        totalProducts,
        color,
    } = product;

    const formattedIndex = index.toString().padStart(2, "0");
    const formattedTotalProducts = totalProducts.toString().padStart(2, "0");

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width: "100vw",
                marginTop: "18vw",
                marginBottom: "8vw",
                zIndex: 1,
                // background: 'red',
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "-20vw",
                    left: "0",
                    right: "0",
                    overflow: "hidden",
                    zIndex: -1,

                }}
            >
                <div
                    style={{
                        width: "230vw",
                        transform: "translate(-40vw, 0)",
                    }}
                >
                    <Swatch fill={color} />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "10vw",
                    color: isDarkerThan50(color) ? 'white' : category.color,
                    backgroundColor: color,
                }}
            >
                <div>
                    <div
                        style={{
                            fontWeight: "500",
                            letterSpacing: "0.58em",
                            fontSize: "5vw",
                        }}
                    >
                        {formattedIndex}
                        <br />
                        {/* <p style={{color: "#D3E4B3", textShadow: "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px  0.5px 0 white, 0.5px  0.5px 0 white",}}>{formattedTotalProducts}</p> */}
                        <p style={{ color: isDarkerThan50(color) ? category.color : 'white' }}>
                            {formattedTotalProducts}
                        </p>
                    </div>
                    <h3
                        style={{
                            fontWeight: "900",
                            letterSpacing: "0.08em",
                            fontSize: "12vw",
                            lineHeight: "100%",
                            textTransform: "uppercase",
                            marginTop: "5vw",
                        }}
                    >
                        {name}
                    </h3>
                    <h4
                        style={{
                            fontWeight: "400",
                            letterSpacing: "0.2em",
                            fontSize: "4vw",
                            textTransform: "lowercase",
                            marginTop: "0vw",
                        }}
                    >
                        {category.name}
                    </h4>
                    <div
                        style={{
                            width: "auto",
                            height: "60vw",
                            position: "relative",
                            overflow: "hidden",
                            marginInline: "-14.4vw",
                        }}
                    >
                        <Image
                            src={product.backgroundImageUrl}
                            alt={name}
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                                backgroundColor: color,
                            }}
                        />
                    </div>
                    <p
                        style={{
                            fontWeight: "400",
                            letterSpacing: "0.02em",
                            fontSize: "4.6vw",
                            lineHeight: "136%",
                            marginTop: "1vw",
                            marginBottom: "6vw",
                        }}
                    >
                        {description}
                    </p>
                </div>
                <CocoaIcon color={isDarkerThan50(color) ? 'white' : category.color }/>
                <span
                    style={{
                        fontWeight: "900",
                        letterSpacing: "0.1em",
                        fontSize: "5vw",
                        marginTop: "3vw",
                    }}
                >
                    {cacaoPercentage}% CACAO
                </span>
                <span
                    style={{
                        fontWeight: "400",
                        letterSpacing: "0.1em",
                        fontSize: "4.5vw",
                        marginTop: "2vw",
                        marginBottom: "6vw",
                    }}
                >
                    NET WEIGHT {weightInGrams}g
                </span>
                <FlowerIcon color={isDarkerThan50(color) ? 'white' : category.color }/>
                <span
                    style={{
                        fontWeight: "500",
                        letterSpacing: "0.02em",
                        fontSize: "3.5vw",
                        lineHeight: "136%",
                        marginTop: "3vw",
                    }}
                >
                    FLAVOR PROFILE
                </span>
                <span
                    style={{
                        fontWeight: "900",
                        letterSpacing: "0.02em",
                        fontSize: "4.6vw",
                        lineHeight: "136%",
                        marginTop: "1vw",
                    }}
                >
                    {flavorProfile}
                </span>
            </div>
            <div
                style={{
                    height: "30vw",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    bottom: "8vw",
                    left: "0",
                    right: "0",
                    overflow: "hidden",
                    zIndex: "-1",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "230vw",
                        transform: "translate(-80vw, 0)",
                    }}
                >
                    <Swatch fill={color} />
                </div>
            </div>
        </div>
    );
});

export default ProductCard;
