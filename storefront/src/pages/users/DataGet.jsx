import React from 'react';
import Table from 'react-bootstrap/Table' 
import { FiEdit,FiFileText,FiTrash2 } from "react-icons/fi";
import {Button } from 'react-bootstrap' 
import '../../App.css';
import Loading from '../../components/Loading'

const DataGet = ({ currentData, loading }) => {
  
  if (loading || currentData.length <= 0) {
    return <Loading />;
  }

  const listItem = currentData.map((item, index) => {
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
  );
};

export default DataGet;