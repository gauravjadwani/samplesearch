import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomRow from './components/molecules/Row';
import {Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CustomRow/>
        <CustomRow/>
      </div>
    </div>
  );
}

export default App;
