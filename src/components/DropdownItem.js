// DropdownItem.js
import React from 'react';
import Link from 'next/link';
import { useColor } from "./Providers/ColorProvider";

const DropdownItem = ({ href, onClick, children }) => {

  const {color, textColor} = useColor()
  return (
    <Link href={href}>
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBlock: '5vw',
          paddingInline: '4vw',
          fontSize: '0.875rem',
          color: textColor,
          textDecoration: 'none',
          cursor: 'pointer',
          fontSize: '5vw',
          textAlign: 'center',
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default DropdownItem;
