import React from 'react';
import {Col,Row} from 'react-bootstrap';
import CustomImage from './../atoms/CustomImage';
import CustomHeroTitle from './../atoms/CustomHeroTitle';
import CustomQuote from './../atoms/CustomQuote';
import CustomProgressBar from './../atoms/CustomProgressBar';

function CustomRow(props) {
  console.log(props);
  return (
    <Row className="CutomRow">
      <div className="ImageContainer">
        <CustomImage src="http://www.gstatic.com/tv/thumb/persons/170518/170518_v9_ba.jpg" 
          rounded={true} height={60} width={50}/>
      </div>
    <CustomHeroTitle className="HeroTitleContainer">
      gaurav
    </CustomHeroTitle>
    <div className="ImageContainer">
      <CustomImage src="http://www.gstatic.com/tv/thumb/persons/170518/170518_v9_ba.jpg" 
        roundedCircle={true} height={60} width={50}/>
    </div>
    <div className="QuoteContainer">
      <CustomQuote id="12345"/>
    </div>
    <div className="ga">
      <CustomProgressBar/>
    </div>
    </Row>
  );
}

export default CustomRow;
