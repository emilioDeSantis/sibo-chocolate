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
        <>
            <div
                className="mobile-product"
                ref={ref}
                id={product.name}
                style={{
                    position: "relative",
                    width: "100vw",
                    marginTop: "4.5rem",
                    marginBottom: "8vw",
                    zIndex: 1,
                    // background: 'red',
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-5rem",
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
                                fontSize: "1.2rem",
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
                                    fontSize: "2.4rem",
                                    lineHeight: "100%",
                                    textTransform: "uppercase",
                                    marginTop: "1.2rem",
                                }}
                            >
                                {name.split(" in ")[0]}
                            </h3>
                            {name.split(" in ").length > 1 && (
                                <p
                                    style={{
                                        fontWeight: 400,
                                        // letterSpacing: "0.08em",
                                        fontSize: "1.2rem",
                                        lineHeight: "110%",
                                        marginTop: "0.5rem",
                                        marginBottom: "1.2rem",
                                    }}
                                >
                                    in{" "}
                                    <b
                                        style={{
                                            fontWeight: 500,
                                            // letterSpacing: "0.08em",
                                            fontSize: "1.2rem",
                                            lineHeight: "110%",
                                            textTransform: "uppercase",
                                            marginTop: "0.5rem",
                                            marginBottom: "1.2rem",
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
                                fontSize: "1rem",
                                textTransform: "lowercase",
                                marginTop: "0",
                            }}
                        >
                            {category.name}
                        </h4>
                        <div
                            style={{
                                width: "auto",
                                height:"60vw",
                                position: "relative",
                                overflow: "hidden",
                                marginInline: "-14vw",
                                marginTop: "6vw",
                                marginBottom: "10vw",
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
                                fontSize: "1.1rem",
                                lineHeight: "136%",
                                marginTop: "0.2rem",
                                marginBottom: "1.4rem",
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
                                                    fontSize: "1.4rem",
                                                    lineHeight: "100%",
                                                    textTransform: "uppercase",
                                                    marginTop: "2.4rem",
                                                }}
                                            >
                                                {category.title}
                                            </h4>
                                            <p
                                                style={{
                                                    fontWeight: "400",
                                                    letterSpacing: "0.02em",
                                                    fontSize: "1.1rem",
                                                    lineHeight: "136%",
                                                    marginTop: "0.2rem",
                                                    marginBottom: "1.4rem",
                                                }}
                                            >
                                                {category.description}
                                            </p>
                                        </Fragment>
                                    )}
                                    {category.chocolates.map(
                                        (chocolate, index) => {
                                            return (
                                                <div
                                                    style={{
                                                        marginLeft: "1rem",
                                                    }}
                                                >
                                                    <h5
                                                        style={{
                                                            fontWeight: "900",
                                                            letterSpacing:
                                                                "0.08em",
                                                            fontSize: "1rem",
                                                            lineHeight: "100%",
                                                            textTransform:
                                                                "uppercase",
                                                            marginTop: "1.2rem",
                                                        }}
                                                    >
                                                        {chocolate.title}
                                                    </h5>
                                                    <p
                                                        style={{
                                                            fontWeight: "400",
                                                            letterSpacing:
                                                                "0.02em",
                                                            fontSize: "1rem",
                                                            lineHeight: "136%",
                                                            marginTop: "0.2rem",
                                                            marginBottom:
                                                                "1.4rem",
                                                        }}
                                                    >
                                                        {chocolate.description}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    )}
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
                                    fontSize: "1.2rem",
                                    marginTop: "0.7rem",
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
                                fontSize: "1.1rem",
                                marginTop: "0.5rem",
                                marginBottom: "1.4rem",
                            }}
                        >
                            NET WEIGHT{" "}
                            {Math.round(JSON.parse(product.weight).value)}g
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


            

            <div
                className="desktop"
                ref={ref}
                id={product.name}
                style={{
                    position: "relative",
                    width: "100vw",
                    marginTop: "calc( 40vh - 10rem)",
                    marginBottom: "20rem",
                    zIndex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    background: product.color,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-10rem",
                        left: "0",
                        right: "0",
                        overflow: "hidden",
                        zIndex: -1,
                    }}
                >
                    <div
                        style={{
                            width: "120rem",
                            transform: "translate(-10rem, 0)",
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
                        width: "30rem",
                        paddingInline: "3rem",
                        paddingTop: "3rem",
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
                                position: "relative",
                                zIndex: 10,
                            }}
                        >
                            <div
                                style={{
                                    zIndex: 10,
                                    fontWeight: "500",
                                    letterSpacing: "0.58em",
                                    fontSize: "1.2rem",
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
                                        fontSize: "2.4rem",
                                        lineHeight: "100%",
                                        textTransform: "uppercase",
                                        marginTop: "1.2rem",
                                    }}
                                >
                                    {name.split(" in ")[0]}
                                </h3>
                                {name.split(" in ").length > 1 && (
                                    <p
                                        style={{
                                            fontWeight: 400,
                                            // letterSpacing: "0.08em",
                                            fontSize: "1.2rem",
                                            lineHeight: "110%",
                                            marginTop: "0.5rem",
                                            marginBottom: "1.2rem",
                                        }}
                                    >
                                        in{" "}
                                        <b
                                            style={{
                                                fontWeight: 500,
                                                // letterSpacing: "0.08em",
                                                fontSize: "1.2rem",
                                                lineHeight: "110%",
                                                textTransform: "uppercase",
                                                marginTop: "0.5rem",
                                                marginBottom: "1.2rem",
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
                                    fontSize: "1rem",
                                    textTransform: "lowercase",
                                    marginTop: "0",
                                }}
                            >
                                {category.name}
                            </h4>
                        </div>
                        <div
                            style={{
                                width: "auto",
                                height: "16rem",
                                position: "relative",
                                overflow: "hidden",
                                marginInline: "0rem ",
                                marginTop: "2rem",
                                marginBottom:"2rem",
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

                        <div
                            style={{
                                position: "relative",
                                zIndex: 10,
                            }}
                        >
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
                                    fontSize: "1.1rem",
                                    lineHeight: "136%",
                                    marginTop: "0.2rem",
                                    marginBottom: "1.4rem",
                                }}
                            >
                                {description}
                            </p>
                            {product.chocolate_categories.map(
                                (category, index) => {
                                    return (
                                        <div>
                                            {category.description && (
                                                <Fragment>
                                                    <h4
                                                        style={{
                                                            fontWeight: "900",
                                                            letterSpacing:
                                                                "0.08em",
                                                            fontSize: "1.4rem",
                                                            lineHeight: "100%",
                                                            textTransform:
                                                                "uppercase",
                                                            marginTop: "2.4rem",
                                                        }}
                                                    >
                                                        {category.title}
                                                    </h4>
                                                    <p
                                                        style={{
                                                            fontWeight: "400",
                                                            letterSpacing:
                                                                "0.02em",
                                                            fontSize: "1.1rem",
                                                            lineHeight: "136%",
                                                            marginTop: "0.2rem",
                                                            marginBottom:
                                                                "1.4rem",
                                                        }}
                                                    >
                                                        {category.description}
                                                    </p>
                                                </Fragment>
                                            )}
                                            {category.chocolates.map(
                                                (chocolate, index) => {
                                                    return (
                                                        <div
                                                            style={{
                                                                marginLeft:
                                                                    "1rem",
                                                            }}
                                                        >
                                                            <h5
                                                                style={{
                                                                    fontWeight:
                                                                        "900",
                                                                    letterSpacing:
                                                                        "0.08em",
                                                                    fontSize:
                                                                        "1rem",
                                                                    lineHeight:
                                                                        "100%",
                                                                    textTransform:
                                                                        "uppercase",
                                                                    marginTop:
                                                                        "1.2rem",
                                                                }}
                                                            >
                                                                {
                                                                    chocolate.title
                                                                }
                                                            </h5>
                                                            <p
                                                                style={{
                                                                    fontWeight:
                                                                        "400",
                                                                    letterSpacing:
                                                                        "0.02em",
                                                                    fontSize:
                                                                        "1rem",
                                                                    lineHeight:
                                                                        "136%",
                                                                    marginTop:
                                                                        "0.2rem",
                                                                    marginBottom:
                                                                        "1.4rem",
                                                                }}
                                                            >
                                                                {
                                                                    chocolate.description
                                                                }
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
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
                                    fontSize: "1.2rem",
                                    marginTop: "0.7rem",
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
                                fontSize: "1.1rem",
                                marginTop: "0.5rem",
                                marginBottom: "1.4rem",
                            }}
                        >
                            NET WEIGHT{" "}
                            {Math.round(JSON.parse(product.weight).value)}g
                        </span>
                    )}
                </div>
                <div
                    style={{
                        position: "absolute",
                        // bottom: "8vw",
                        bottom: "2rem",
                        left: "0",
                        right: "0",
                        overflow: "hidden",
                        zIndex: "-1",
                        transform: "translateY(24rem)",
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
        </>
    );
});

export default ProductCard;
