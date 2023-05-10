import React from "react";

const Footer = ({ currentProduct }) => {
    if (!currentProduct) return null;

    return (
        // <div style={{
        //     position: "fixed",
        // }}>
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
                padding: "4vw",
                backgroundColor: currentProduct.color,
                zIndex: 2,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "2vw",
                }}
            >
                <span
                    style={{
                        textTransform: "uppercase",
                        color: "black",
                        fontWeight: 900,
                        fontSize: "6vw",
                    }}
                >
                    {currentProduct.name}
                </span>
                <span
                    style={{
                        color: "black",
                        fontSize: "5vw",
                    }}
                >
                    ${currentProduct.price}
                </span>
            </div>
            <button
                style={{
                    backgroundColor: "#fff4",
                    color: "black",
                    padding: "0.5rem 1rem",
                    borderRadius: "1vw",
                    cursor: "pointer",
                    border: "none",
                    width: "100%",
                    height: "11vw",
                    textTransform: "uppercase",
                    fontSize: '5vw',
                    fontWeight: '500',
                    letterSpacing: '0.05em',
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#fff8";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#fff4";
                }}
            >
                Add to Bag
            </button>
        </footer>
        // </div>
    );
};

export default Footer;
