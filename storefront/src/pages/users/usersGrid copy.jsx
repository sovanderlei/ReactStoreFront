import React, { Component   } from 'react'  
import Table from 'react-bootstrap/Table' 
import {Button } from 'react-bootstrap' 
import '../../App.css';
import { FiFilePlus,FiEdit,FiFileText,FiTrash2,FiArrowLeftCircle } from "react-icons/fi";
import UserService from '../../services/UserService'


  
//const axios = require('axios').default; 
export default class UsersGrid2 extends Component {
    
    constructor (props) {
        super(props)
         
        this.state = {
            listUser: [], 
            error: null,
            isLoaded: false 
        }  
 
    }
  
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ listUser: res.data});
        });
    }

    deleteData(id) {
        //alert(`hello, ${id}`);
        UserService.deleteUser(id).then( res => {
            window.location = '/usersGrid'; 
            //console.log(res.data);
        });
    }
       
    render() {

        const listItem = this.state.listUser.map((item, index) => {
            return (
                <tr key={index} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                    <td>
                        <Button href={"/usersform/" + item.id + "/edit"} className="Buttonbtblue" title="Edit" variant="outline-secondary"><FiEdit /></Button>{' '}
                        <Button href={"/usersDetail/" + item.id} className="Buttonbtgreen" title="Detail" variant="outline-secondary"><FiFileText /></Button>{' '}
                        <Button onClick={() => this.deleteData(item.id)}   className="Buttonbtred" title="Delete" variant="outline-secondary"><FiTrash2 /></Button>
                    </td>
                </tr>
            )
          })

        return (
            <div className="ContainerPage"  >
             
                    <h3>Users - List</h3>
                    <h3>{this.state.nameStr}</h3>

                    <div className="tablegrupoform" > 
                        <Button href="/home" className="Buttonbtblue" 
                        title="Back" variant="outline-secondary">
                            <FiArrowLeftCircle /></Button>{' '}
                        <Button href="/usersform/0/new" className="Buttonbtblue"
                        title="New" variant="outline-secondary">
                            <FiFilePlus /></Button>{' '}
                    </div>
                    <div className='tableBox'>
                    <Table striped bordered hover size="sm">
                        <thead className='tablethead'>
                            <tr>
                            <th width={80} >Id</th>
                            <th>name</th>
                            <th width={160} >username</th>
                            <th width={160} >password</th>
                            <th width={260} >email</th>
                            <th style={{width:130,textAlign:'center'}} >Controller</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {listItem}
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

}
