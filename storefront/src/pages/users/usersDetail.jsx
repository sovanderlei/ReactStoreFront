import React, { Component } from 'react'
import {Button,Container,Row,Col} from 'react-bootstrap'
import { FiArrowLeftCircle } from "react-icons/fi"; 
import '../../App.css';
import UserService from '../../services/UserService'
import {getIdUrl} from '../../components/Useful';

export default class UsersDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            User: [], 
            error: "",
            isLoaded: false,
            ativo: "SIM",
            dtlogin: new Date(),
            dtregister: new Date(),
            email: "",
            id: 0,
            idcompany: 1,
            image: "",
            name: "",
            password: "",
            status: "ATIVO",
            token: "",
            username: "",
        }  

        this.getData();

    }

    getData () {
        
        var id = getIdUrl(window.location.pathname); 
        if(id > 0){
            UserService.getUserById(id).then((res) => {
                 
                var user = [
                    { 
                        ativo: res.data.ativo,
                        dtlogin: res.data.dtlogin,
                        dtregister: res.data.dtregister,
                        email: res.data.email,
                        id: res.data.id,
                        idcompany: res.data.idcompany,
                        image: res.data.image,
                        name: res.data.name,
                        password: res.data.password,
                        status: res.data.status,
                        token: res.data.token,
                        username: res.data.username,
                    }];

                    this.setState({ User: user, isLoaded: true}); 

                    this.setState({ ativo: res.data.ativo, isLoaded: true}); 
                    this.setState({ dtlogin: res.data.dtlogin, isLoaded: true}); 
                    this.setState({ dtregister: res.data.dtregister, isLoaded: true}); 
                    this.setState({ email: res.data.email, isLoaded: true}); 
                    this.setState({ id: res.data.id, isLoaded: true}); 
                    this.setState({ idcompany: res.data.idcompany, isLoaded: true}); 
                    this.setState({ image: res.data.image, isLoaded: true}); 
                    this.setState({ name: res.data.name, isLoaded: true}); 
                    this.setState({ password: res.data.password, isLoaded: true}); 
                    this.setState({ status: res.data.status, isLoaded: true}); 
                    this.setState({ token: res.data.token, isLoaded: true}); 
                    this.setState({ username: res.data.username, isLoaded: true});                
 
                 
            });
        };
    }    
    
    componentDidMount(){
        this.getData(); 
    }


    render() {
        return ( 
            <div className="ContainerPage"  >
                <h3>User </h3>
               
                {
                    <div>
                        
                        <div className="grupoform" > 
                            <Button  className="Buttonbtblue"  href="/usersgrid" title="Voltar" >
                                <FiArrowLeftCircle />
                            </Button>{' '}  
                        </div>
                        <br></br>
                        <div>
                        <Container>
                        <Row>
                            <Col sm={2} style={{textAlign:'right',background:'#B4CDCD',border:'1'}}  >Id</Col>
                            <Col sm={4}>{this.state.id}</Col>
                        </Row>
                        <Row>
                            <Col sm={2} style={{textAlign:'right',background:'#B4CDCD'}}  >name</Col>
                            <Col sm={4}>{this.state.name}</Col>
                        </Row>
                        <Row>
                            <Col sm={2} style={{textAlign:'right',background:'#B4CDCD'}}  >username</Col>
                            <Col sm={4}>{this.state.username}</Col>
                        </Row>       
                        <Row>
                            <Col sm={2} style={{textAlign:'right',background:'#B4CDCD'}}  >password</Col>
                            <Col sm={4}>{this.state.password}</Col>
                        </Row> 
                        <Row>
                            <Col sm={2} style={{textAlign:'right',background:'#B4CDCD'}}  >email</Col>
                            <Col sm={4}>{this.state.email}</Col>
                        </Row>                                                                      
                        </Container>
                                                   
                                   
                        </div>
                    
                    </div>

                }

            </div>   
        )
    }
}
