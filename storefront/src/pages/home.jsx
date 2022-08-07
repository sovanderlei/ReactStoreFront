/* eslint-disable jsx-a11y/alt-text */ 
import React, {  useContext } from 'react'; 
import { Row,Col } from 'react-bootstrap'; 
import { Context } from '../context/AuthContext'; 
 
export default function LoginPage() {
  const {  userLogin } = useContext(Context);
    
    return (
      <div className="ContainerPage" style={{height: 800}}  >
      <Row>
        <Col>      
          <img
              src={require('../images/logo1.png')}  
              width="40"
              height="40"  
          />   
        </Col>  
      </Row>
      <Row> 
        <Col>
            <img
              src={require('../images/logo2.png')}  
              width="130"
              height="130" 
            />        
        </Col>
      </Row> 
      <Row>
        <Col><h1>Be welcome!!!{userLogin.name} </h1></Col> 
      </Row>           
      <Row>
        <Col xs={2}>Company: Company name</Col> 
      </Row>
      <Row> 
        <Col xs={4} >Employee: Employee name</Col> 
      </Row>      
      <Row> 
        <Col> </Col>
      </Row>
      
     </div>
    );
 
}