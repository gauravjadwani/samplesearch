import React from 'react';
// import {Col,Image} from 'react-bootstrap';

function _CustomQuote(props) {
  console.log('_CustomQuote',props);
  return (
      <div className={props.className}>
       {`Quote # ${props.id}`}
      </div>
  );
}

export default _CustomQuote;
