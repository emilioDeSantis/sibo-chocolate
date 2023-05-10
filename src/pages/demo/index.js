import React from 'react';
import { useRouter } from 'next/router';

const Demo = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      fontSize: '1.5rem',
      color: 'black',
    }}>
      <p>This page isn't available yet because it's just a demo.</p>
      <button onClick={goBack} style={{
        marginTop: '2rem',
        fontSize: '1.2rem',
        color: '#0070f3',
        backgroundColor: 'transparent',
        border: '1px solid #0070f3',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Back
      </button>
    </div>
  );
};

export default Demo;
