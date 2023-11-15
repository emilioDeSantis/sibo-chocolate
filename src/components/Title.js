import React from 'react';

const Title = ({ children }) => {
    return (
        <div
            style={{
                fontSize: "4rem",
                // fontWeight: "900",
                // lineHeight: "96%",
                letterSpacing: "0.0em",
                // textTransform: "uppercase",
                fontFamily: "pablo",
                paddingBlock: "1rem",
                marginBlock: "-1rem",
                // If you decide to use text alignment or width, you can uncomment these:
                // textAlign: 'center',
                // width: "100%",
            }}
        >
            {children}
        </div>
    );
};

export default Title;
