import React from 'react';
// import {Col,Image} from 'react-bootstrap';

function _HeroTitle(props) {
  console.log('_HeroTitle',props);
  return (
      <div className={props.className}>
       {props.children}
      </div>
  );
}

export default _HeroTitle;
