import React from 'react';
// import "react-step-progress-bar/styles.css";
// import  {ProgressBar}  from "react-step-progress-bar";
// // import {Spinner} from "react-bootstrap";
// import "react-step-progress-bar/styles.css";
// import { ProgressBar } from "react-step-progress-bar";
import ProgressBar from 'react-bootstrap/ProgressBar';

function _CustomProgressBar(props) {
  console.log(props);
  return (
  <ProgressBar now={60} />
  );
}

export default _CustomProgressBar;
