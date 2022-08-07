import React, { Component } from 'react';
import {Button,Form,Col} from 'react-bootstrap';
import { FiArrowLeftCircle } from "react-icons/fi"; 
import '../../App.css';
import UserService from '../../services/UserService';
import {getIdUrl} from '../../components/Useful';
 
export default class UsersForm extends Component {
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

    mySubmitHandler = (event) => {
        event.preventDefault();
        let user = 
            { 
                ativo: this.state.ativo,
                dtlogin: this.state.dtlogin,
                dtregister: this.state.dtregister,
                email: this.state.email,
                id: this.state.id,
                idcompany: this.state.idcompany,
                image: this.state.image,
                name: this.state.name,
                password: this.state.password,
                status: this.state.status,
                token: this.state.token,
                username: this.state.username,
            };
        
        //console.log('user => ' + JSON.stringify(user));
        if(this.state.id === null){ 
            UserService.createUser(user).then(res =>{ 
                //console.log("criado novo 2");
            });
        }else{ 
            UserService.updateUser(user).then( res => { 
                //console.log(res.data);
            });
        }
        window.location = '/usersGrid'; 
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});  
    }   
    
    render() {
        return (
            <div className="ContainerPage"  >
                <h3>User </h3>
               
                {
                    <div>
                        
                        <div className="grupoform" > 
                            <Button  className="Buttonbtblue"  href="/usersgrid" title="Voltar" ><FiArrowLeftCircle /></Button>{' '}  
                        </div>
                        <br></br>
                        <div>
                            <Form  onSubmit={this.mySubmitHandler}>
                                
                                <Col sm="1" style={{display:'none'}} >
                                    <Form.Group >
                                        <Form.Label>idcompany</Form.Label>
                                        <Form.Control 
                                        type="text"   
                                        id='idcompany' 
                                        name='idcompany' 
                                        value={this.state.idcompany}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="1">
                                    <Form.Group >
                                        <Form.Label>id</Form.Label>
                                        <Form.Control 
                                        type="text"   
                                        id='id' 
                                        name='id' 
                                        value={this.state.id}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="4">
                                    <Form.Group  >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="name" 
                                        id='name'  
                                        name='name' 
                                        value={this.state.name}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="2">
                                    <Form.Group  >
                                        <Form.Label>Login</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="username" 
                                        id='username'  
                                        name='username' 
                                        value={this.state.username}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="2">
                                    <Form.Group  >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                        type="password" 
                                        placeholder="password" 
                                        id='password'  
                                        name='password' 
                                        value={this.state.password}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="3">
                                    <Form.Group  >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                        type="text"   
                                        placeholder="Email"   
                                        name='email' 
                                        value={this.state.email}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col sm="2">
                                    <Form.Group  >
                                        <Form.Label>Date Register</Form.Label>
                                        <Form.Control 
                                        type="date" 
                                        placeholder="Date Register"   
                                        name='dtregister' 
                                        value={this.state.dtregister}
                                        onChange={this.myChangeHandler}
                                            />
                                    </Form.Group> 
                                </Col>     
                                <Col sm="2">  
                                    <Form.Label>Ativo</Form.Label>   
                                    <br></br>
                                    <select 
                                    className='form-control'
                                    name='ativo'
                                    id="ativo"
                                    defaultValue={"SIM"}
                                    value={this.state.ativo} 
                                    onChange={this.myChangeHandler}>
                                    <option value="SIM">SIM</option>
                                    <option value="NAO">NAO</option> 
                                </select> 
                                </Col>


                                <br></br>
                                <Button  variant="primary" type="submit">
                                    Gravar
                                </Button>
                            </Form> 
                            <br></br>

                        </div>
                    
                    </div>

                }

            </div>
        )
    }
}
