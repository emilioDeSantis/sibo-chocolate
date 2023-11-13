import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ to, children }) => {
    const style = {
        fontSize: "5vw",
        fontWeight: 400,
        lineHeight: "140%",
        letterSpacing: "0.05em",
        marginTop: "5vw",
        textTransform: "uppercase",
    };

    return (
        <div style={style}>
            <Link to={to} smooth={true}>{children} →</Link>
        </div>
    );
};

export default ScrollLink;
