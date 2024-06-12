import React, { Fragment } from 'react';

const Review = ({ name, date, source, children }) => {
  return (
    <Fragment>
      <b style={{ fontSize: '1.5rem',marginTop: '2.4rem', }}>{name}</b>
      <div style={{ }}>{date}</div>
      <div style={{}}>{children}</div>
      <div style={{ fontSize: '1rem', fontStyle: 'italic', }}>{`Excerpted from ${source}`}</div>
    </Fragment>
  );
};

export default Review;
