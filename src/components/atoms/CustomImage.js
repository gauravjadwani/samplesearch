import React from 'react';
import {Col,Image} from 'react-bootstrap';

function _Image(props) {
  console.log(props);
  return (
      <Image src="http://www.gstatic.com/tv/thumb/persons/170518/170518_v9_ba.jpg" {...props}/>
  );
}

export default _Image;
