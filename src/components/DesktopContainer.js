import React from "react";

const DesktopContainer = ({ children, background }) => {
    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                justifyContent: "center",
                // background: "#442211",
                zIndex: -1,
                padding: "none",
                margin: "none",
            }}
        >
            <div
                style={{
                    width: "56rem",
                    maxWidth: "100vw",
                    overflow: "hidden",
                    background: background,
                    zIndex: 2,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default DesktopContainer;
