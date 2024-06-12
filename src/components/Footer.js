import React, { useEffect, useState } from "react";
import { useColor } from "./Providers/ColorProvider";
import { client } from "@/shopify/client";
import { useBagUpdate } from "./Providers/BagProvider";
import { useLocation } from "./Providers/LocationProvider";

const Footer = ({ currentProduct }) => {
    const [checkout, setCheckout] = useState(null);
    const { triggerBagUpdate } = useBagUpdate();
    const { location } = useLocation();

    // State to manage the display of the notification
    const [showNotification, setShowNotification] = useState(false);

    // Initialize a new checkout or use existing one
    useEffect(() => {
        const existingCheckoutId = localStorage.getItem("checkoutId");

        if (existingCheckoutId) {
            client.checkout
                .fetch(existingCheckoutId)
                .then((existingCheckout) => {
                    setCheckout(existingCheckout);
                })
                .catch((error) => {
                    // Handle or log error for fetching existing checkout
                    console.error("Error fetching existing checkout:", error);
                    // Optionally, reset the checkoutId in localStorage if it's invalid
                    // localStorage.removeItem("checkoutId");
                });
        } else {
            client.checkout
                .create()
                .then((newCheckout) => {
                    localStorage.setItem("checkoutId", newCheckout.id);
                    setCheckout(newCheckout);
                })
                .catch((error) => {
                    // Handle or log error for creating new checkout
                    console.error("Error creating new checkout:", error);
                });
        }
        console.log("checkout", checkout);
    }, []);

    useEffect(() => {
        console.log(currentProduct.available_in_us);
    }, [currentProduct.available_in_us]);

    const handleAddToBag = () => {
        console.log("currnetyfpri", checkout);
        if (!currentProduct || !checkout) return;

        const lineItemsToAdd = [
            {
                variantId: currentProduct.variantid,
                quantity: 1,
            },
        ];

        client.checkout
            .addLineItems(checkout.id, lineItemsToAdd)
            .then((newCheckout) => {
                setCheckout(newCheckout);
                triggerBagUpdate();

                // Display the notification
                setShowNotification(true);

                // Hide the notification after 3 seconds
                setTimeout(() => {
                    setShowNotification(false);
                }, 1000);
            });
    };

    const { color, textColor } = useColor();

    if (!currentProduct) return null;

    return (
        <footer
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                paddingInline: "5vw",
                backgroundColor: color,
                zIndex: 2,
            }}
        >
            {showNotification && (
                <div
                    style={{
                        position: "fixed",
                        top: "12rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#fff",
                        color: "#310",
                        padding: "1.2rem 2.4rem",
                        zIndex: 3, // ensure it's above other elements
                        opacity: 1,
                        transition: "opacity 0.3s",
                        fontSize: "1.5rem",
                        width: "20rem",
                        // border: '5px solid #221409',
                        boxShadow: "0 3px 40px #321",
                        fontWeight: 600,
                    }}
                >
                    {currentProduct.name} added to bag!
                </div>
            )}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "0.5rem",
                }}
            >
                <span
                    style={{
                        textTransform: "uppercase",
                        color: textColor,
                        fontWeight: 900,
                        fontSize: "1.4rem",
                    }}
                >
                    {currentProduct.name}
                </span>
                <span
                    style={{
                        color: textColor,
                        fontSize: "1.2rem",
                    }}
                >
                    {/* {location =='us' ? '$' : "₡"}{location =='us' ? currentProduct.price : Math.floor(currentProduct.price)} */}
                    ${parseFloat(currentProduct.price).toFixed(2)}
                </span>
            </div>
            {currentProduct.available_in_us != "true" && (
                <p
                    style={{
                        color: textColor,
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        width: "100%",
                        marginBottom: "1rem",
                        marginTop: "-0.5rem",
                        opacity: 0.8,
                    }}
                >{`*Available in Costa Rica Only`}</p>
            )}
            <button
                style={{
                    backgroundColor: showNotification ? "#0006" : "#fff4",
                    color: showNotification ? "white" : textColor,
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                    width: "18rem",
                    height: "2.5rem",
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    letterSpacing: "0.05em",
                    boxShadow: "0 2px 6px #3217",
                    fontWeight: 600,
                }}
                onClick={handleAddToBag}
            >
                {showNotification ? "Item Added to Bag ✓" : "Add to Bag"}
            </button>
        </footer>
    );
};

export default Footer;
