import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
   
  return ( 
          <div>
             <Row>
                <Col sm={2}> <h2>Loading...</h2></Col>
                <Col sm={4}><Spinner animation="border" size="lg" /></Col>
             </Row> 
          </div>   
  );
};

export default Loading;