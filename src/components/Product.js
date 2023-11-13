// components/ProductCard.js
import React, { Fragment, forwardRef, useEffect } from "react";
import Image from "next/image";
import Swatch from "./Swatch"; // Import your Swatch SVG component
import CocoaIcon from "./CocoaIcon";
import FlowerIcon from "./FlowerIcon";
import { isDarkerThan50 } from "./Providers/ColorProvider";



const ProductCard = forwardRef(({ product, category }, ref) => {
    useEffect(() => {
        console.log(product);
    }, []);

    const {
        index,
        name,
        description,
        icon,
        cacao,
        weight,
        flavorIcon,
        flavorProfile,
        totalProducts,
        color,
        image,
    } = product;

    const formattedIndex = index.toString().padStart(2, "0");
    const formattedTotalProducts = totalProducts.toString().padStart(2, "0");

    return (
        <div
            ref={ref}
            id={product.name}
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
                    color: isDarkerThan50(color)
                        ? isDarkerThan50(category.color)
                            ? "white"
                            : category.color
                        : isDarkerThan50(category.color)
                        ? category.color
                        : "#321",
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
                        <p
                            style={{
                                color: isDarkerThan50(color)
                                    ? category.color
                                    : "white",
                            }}
                        >
                            {formattedTotalProducts}
                        </p>
                    </div>
                    <div>
                        <h3
                            style={{
                                fontWeight: "900",
                                letterSpacing: "0.08em",
                                fontSize: "10vw",
                                lineHeight: "100%",
                                textTransform: "uppercase",
                                marginTop: "5vw",
                            }}
                        >
                            {name.split(" in ")[0]}
                        </h3>
                        {name.split(" in ").length > 1 && (
                            <p
                                style={{
                                    fontWeight: 400,
                                    // letterSpacing: "0.08em",
                                    fontSize: "5vw",
                                    lineHeight: "110%",
                                    marginTop: "2vw",
                                    marginBottom: "5vw",
                                }}
                            >
                                in{" "}
                                <b
                                    style={{
                                        fontWeight: 500,
                                        // letterSpacing: "0.08em",
                                        fontSize: "5vw",
                                        lineHeight: "110%",
                                        textTransform: "uppercase",
                                        marginTop: "2vw",
                                        marginBottom: "5vw",
                                    }}
                                >
                                    {name.split(" in ")[1]}
                                </b>
                            </p>
                        )}
                    </div>
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
                            height:
                                category.name == "Dark Chocolate Bars" ||
                                category.name == "Milk Chocolate Bars" ||
                                category.name ==
                                    "Keto Sugar-Free Chocolate Bars" ||
                                category.name == "White Chocolate Bars"
                                    ? "60vw"
                                    : "80vw",
                            position: "relative",
                            overflow: "hidden",
                            marginInline:
                                category.name == "Dark Chocolate Bars" ||
                                category.name == "Milk Chocolate Bars" ||
                                category.name ==
                                    "Keto Sugar-Free Chocolate Bars" ||
                                category.name == "White Chocolate Bars"
                                    ? "-14.4vw"
                                    : "-10vw",
                            marginTop:
                                category.name == "Dark Chocolate Bars" ||
                                category.name == "Milk Chocolate Bars" ||
                                category.name ==
                                    "Keto Sugar-Free Chocolate Bars" ||
                                category.name == "White Chocolate Bars"
                                    ? "0"
                                    : "10vw",
                            marginBottom:
                                category.name == "Dark Chocolate Bars" ||
                                category.name == "Milk Chocolate Bars" ||
                                category.name ==
                                    "Keto Sugar-Free Chocolate Bars" ||
                                category.name == "White Chocolate Bars"
                                    ? "0"
                                    : "10vw",
                        }}
                    >
                        <Image
                            src={image}
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

                    <FlowerIcon
                        color={
                            isDarkerThan50(color)
                                ? isDarkerThan50(category.color)
                                    ? "white"
                                    : category.color
                                : isDarkerThan50(category.color)
                                ? category.color
                                : "#321"
                        }
                    />
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
                    {product.chocolate_categories.map((category, index) => {
                        return (
                            <div>
                                {category.description && (
                                    <Fragment>
                                        <h4
                                            style={{
                                                fontWeight: "900",
                                                letterSpacing: "0.08em",
                                                fontSize: "6vw",
                                                lineHeight: "100%",
                                                textTransform: "uppercase",
                                                marginTop: "10vw",
                                            }}
                                        >
                                            {category.title}
                                        </h4>
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
                                            {category.description}
                                        </p>
                                    </Fragment>
                                )}
                                {category.chocolates.map((chocolate, index) => {
                                    return (
                                        <div
                                            style={{
                                                marginLeft: "4vw",
                                            }}
                                        >
                                            <h5
                                                style={{
                                                    fontWeight: "900",
                                                    letterSpacing: "0.08em",
                                                    fontSize: "4vw",
                                                    lineHeight: "100%",
                                                    textTransform: "uppercase",
                                                    marginTop: "5vw",
                                                }}
                                            >
                                                {chocolate.title}
                                            </h5>
                                            <p
                                                style={{
                                                    fontWeight: "400",
                                                    letterSpacing: "0.02em",
                                                    fontSize: "4vw",
                                                    lineHeight: "136%",
                                                    marginTop: "1vw",
                                                    marginBottom: "6vw",
                                                }}
                                            >
                                                {chocolate.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {product.cacao && (
                    <Fragment>
                        <CocoaIcon
                            color={
                                isDarkerThan50(color)
                                    ? isDarkerThan50(category.color)
                                        ? "white"
                                        : category.color
                                    : isDarkerThan50(category.color)
                                    ? category.color
                                    : "#321"
                            }
                        />
                        <span
                            style={{
                                fontWeight: "900",
                                letterSpacing: "0.1em",
                                fontSize: "5vw",
                                marginTop: "3vw",
                            }}
                        >
                            {Math.round(cacao * 100)}% CACAO
                        </span>
                    </Fragment>
                )}
                {JSON.parse(product.weight).value > 0 && (
                    <span
                        style={{
                            fontWeight: "400",
                            letterSpacing: "0.1em",
                            fontSize: "4.5vw",
                            marginTop: "2vw",
                            marginBottom: "6vw",
                        }}
                    >
                        NET WEIGHT {Math.round(JSON.parse(product.weight).value)}g
                    </span>
                )}
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
