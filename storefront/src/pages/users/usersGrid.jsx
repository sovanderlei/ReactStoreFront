import React, { Component   } from 'react'  
import {Button } from 'react-bootstrap' 
import '../../App.css';
import { FiFilePlus, FiArrowLeftCircle } from "react-icons/fi";
import UserService from '../../services/UserService'
import Pagination from '../../components/Pagination';
import DataGet from './DataGet';
   
export default class UsersGrid extends Component {
    
    constructor (props) {
        super(props)
         
        this.state = {
            listUser: [], 
            error: null, 
            loading: false,
            currentPage: 1,
            datasPerPage: 10 
        }   
    }
  
    componentDidMount(){ 
        UserService.getUsers().then((res) => {
            this.setState({ listUser: res.data});
        });
    }

    deleteData(id) { 
        UserService.deleteUser(id).then( res => {
            window.location = '/usersGrid';  
        });
    }
       
    render() {
    // Get current Datas
    const indexOfLastData = this.state.currentPage * this.state.datasPerPage;
    const indexOfFirstData = indexOfLastData - this.state.datasPerPage;
    const currentData = this.state.listUser.slice(indexOfFirstData, indexOfLastData);
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber});   
 
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
                    <div className='tableBoxNavigate' >
                        <DataGet currentData={currentData} loading={this.state.loading} />
                        <Pagination
                                datasPerPage={this.state.datasPerPage}
                                totalDatas={this.state.listUser.length}
                                paginate={paginate}
                            />
                    </div>
            </div>
        )
    }

}
