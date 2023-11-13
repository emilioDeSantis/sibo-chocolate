import React, { Fragment } from 'react';

const Review = ({ name, date, source, children }) => {
  return (
    <Fragment>
      <b style={{ fontSize: '6vw',marginTop: '10vw', }}>{name}</b>
      <div style={{ }}>{date}</div>
      <div style={{}}>{children}</div>
      <div style={{ fontSize: '4vw', fontStyle: 'italic', }}>{`Excerpted from ${source}`}</div>
    </Fragment>
  );
};

export default Review;
