

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useColor } from "./Providers/ColorProvider";
import { useRouter } from "next/router";


const CategoryDropdown = ({ categories }) => {

  const {color, textColor} = useColor()
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <button
                onClick={toggleDropdown}
                style={{
                    cursor: "pointer",
                    background: "none",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: "none",
                    borderRadius: "1vw",
                    color: textColor,
                    height: '12vw',
                    width: '100%',
                    fontSize: '3.5vw',
                    fontWeight: '500',
                    zIndex: 11,
                }}
            >
                <div style={{
                  display: 'flex',
                }}>
                  <div style={{
                    paddingTop:'0.8vw',
                    paddingRight:'1.2vw',
                    whiteSpace: 'nowrap',
                  }}>
                  {isOpen ? 'CLOSE MENU': 'ALL CHOCOLATES' }
                  </div>
                  {isOpen &&<ChevronUpIcon color={textColor} height="6vw"/>}
                  {!isOpen &&<ChevronDownIcon color={textColor} height="6vw"/>}
                </div>
            </button>

                <div
                    // onClick={closeDropdown}
                    style={{
                        position: "fixed",
                        top: isOpen ? "0" : "-100vh",
                        transition: "top 0.3s ease-in-out",
                        left: 0,
                        right: 0,
                        zIndex: -1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                        style={{
                            backgroundColor: color,
                            width: "100%",
                            height: "100vh",
                            paddingTop: "20vw",
                            color: "#333",
                            fontSize: "9vw",
                            textTransform: "uppercase",
                            overflowY: "scroll",
                            position: "absolute",
                            top: 0,
                            fontWeight: '900',
                            lineHeight: '100%',
                            paddingInline: "4vw",
                            color: '#551611',
                            width: '100%',
                            // textAlign: 'center',
                        }}
                    >
                      {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/shop/${category.slug}`}
                                passHref
                            >
                                <div
                                    onClick={closeDropdown}
                                    style={{
                                        paddingTop: "6vw",
                                        cursor: "pointer",
                                        color: router.asPath === `/shop/${category.slug}` ? "#a43" : "#551611",
                                    }}
                                >
                                    {category.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default CategoryDropdown;
