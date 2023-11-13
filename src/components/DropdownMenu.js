import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DropdownItem from "./DropdownItem";
import { useColor } from "./Providers/ColorProvider";

const DropdownMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);
    const {color, textColor} = useColor()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                textAlign: "left",
            }}
            ref={menuRef}
        >
            <div
                onClick={toggleMenu}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "16vw",
                    height: "100%",
                    // backgroundColor: "#551611",
                    borderRadius: "10000px",
                    borderRadius: "1vw",
                    // boxShadow: '0 1vw 3vw #5215',
                    cursor: "pointer",
                    border: 'none',
                }}
            >
                {menuVisible ? (
                    <XMarkIcon color={textColor} height={'7vw'}/>
                ) : (
                    <Bars3Icon color={textColor} height={'7vw'}/>
                )}
            </div>
            <div
                className="dropdown-menu"
                style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "2vw",
                    minWidth: "100vw",
                    backgroundColor: color,
                    zIndex: 1000,
                    overflow: "hidden",
                    transform: menuVisible ? "translate(0, -20vw)" : "translate(0, -100vw)",
                    transformOrigin: "top",
                    transition: "transform 0.3s ease-in-out",
                    zIndex: -1,
                    paddingTop: '26vw',
                    paddingBottom: '4vw',
                  }}
            >
            <DropdownItem href="/about" onClick={closeMenu}>
                About
            </DropdownItem>
                <DropdownItem href="/tour" onClick={closeMenu}>
                    Tasting Tour
                </DropdownItem>
            <DropdownItem href="/reviews" onClick={closeMenu}>
                Reviews
            </DropdownItem>
                <DropdownItem href="/contact" onClick={closeMenu}>
                    Contact
                </DropdownItem>
            </div>
            <div style={{
                position: 'fixed',
                background: '#0005',
                top: 0,
                right: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -2,
                display: menuVisible? 'flex':'none',
                // opacity: menuVisible? '30%': '0%',
                transition: '0.3s ease-in-out',
            }} 
            onClick={closeMenu}/>
        </div>
    );
};

export default DropdownMenu;
