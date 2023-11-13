import React from 'react';

const DesktopContainer = ({ children, background }) => {
  return (
    <div style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'center',
        // background: '#eeccaa',
        padding: 'none',
        margin: 'none',
    }}>
    <div style={{
      width: '56rem',  
      maxWidth: '100vw', 
      overflow: 'hidden',
      background: background,

    }}>
      {children}
    </div>
    </div>
  );
};

export default DesktopContainer;
