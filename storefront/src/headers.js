/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiLogOut } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { cookieDelet, cookieGet } from './components/Useful';
import Image from "react-bootstrap/Image";


export const Headers = () =>{ 
        const [showChat, setShowChat] = useState(true);

        useEffect(() => {
             
            setShowChat(true);
             if(cookieGet() !== ""){
                setShowChat(false);
             } 

        },[]);

        function handleGoOut(){
            console.log("saindo");
            cookieDelet();
            window.location = "http://localhost:3000/login"
        }
    
        const UserMenu = (
            <Image
              src={require('./images/fotovand.jpeg')}
              alt="UserName profile image"
              roundedCircle
              style={{ width: '40px', backgroundColor: 'white', padding:'2px' }}
            />  
        )
          
        if(showChat){
            return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">                    
                <img
                    src={require('./images/logo.png')}
                    width="30"
                    height="30"
                    className="d-inline-block align-top App-logo"
                    /> DashboardSmart
                </Navbar.Brand> 
             </Navbar> 
            );
        } 

        return ( 
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">                    
                <img
                    src={require('./images/logo.png')}
                    width="30"
                    height="30"
                    className="d-inline-block align-top App-logo"
                    /> DashboardSmart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link> 
                    <Nav.Link href="dashboard">dashboard </Nav.Link>  
                    <NavDropdown title="Registration" id="collasible-nav-dropdown"> 
                        <NavDropdown.Item href="empresagrid">Company</NavDropdown.Item> 
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Group">Group</NavDropdown.Item>
                        <NavDropdown.Item href="Permission">Permission</NavDropdown.Item>
                        <NavDropdown.Item href="usersgrid">Users</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Settings">Settings</NavDropdown.Item> 
                        <NavDropdown.Item href="Employee">Employee</NavDropdown.Item>  
                        <NavDropdown.Item href="listgrid">Pagination List</NavDropdown.Item> 
                        <NavDropdown.Item href="tablegrid">Pagination Table</NavDropdown.Item> 
                        
                    </NavDropdown>
                    <NavDropdown title="Financial" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ação 01</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ação 02</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ação 03</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ação 04</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Control" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="chatserver">chat Server</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ação 02</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ação 03</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ação 04</NavDropdown.Item>
                    </NavDropdown>
                    
                    </Nav> 
                    <NavDropdown  
                        className='ms-auto' 
                        title={UserMenu} id="collasible-nav-dropdown"> 
                        <NavDropdown.Item href="About">About</NavDropdown.Item> 
                        <NavDropdown.Divider /> 
                        <NavDropdown.Item href="#" onClick={handleGoOut} >
                                <i style={{ cursor: 'pointer' }}   >
                                    <FiLogOut  className='header-content' size={35} />
                                </i> Log out
                        </NavDropdown.Item> 
                    </NavDropdown>  
                    <Nav.Link href="/">Vanderlei Soares de Oliveira </Nav.Link> 
                </Navbar.Collapse>

             </Navbar> 
        );
 
}
 