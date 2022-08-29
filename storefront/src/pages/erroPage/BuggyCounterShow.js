import React, { Component } from 'react';
import BuggyCounter from './BuggyCounter'; 
import DataGet from './../users/DataGet';
import UserService from '../../services/UserService';
import Pagination from './../../components/Pagination'; 

export default class BuggyCounterShow extends Component {

    constructor (props) {
        super(props)
         
        this.state = {
            listUser: [], 
            errorLoc: null, 
            loading: false,
            currentPage: 1,
            datasPerPage: 10 
        }   
    }

    componentDidMount(){ 
        UserService.getUsers().then((res) => {
            this.setState({ listUser: res.data});
        }).catch((error) => {

            //console.log("**************");
            //console.log(error.request.toJSON());
            console.log("******ANTES ********");

            if (error.response) {
                console.log("*******response*******");
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.headers);
                console.log(error.response);
            } else if (error.request) {
                console.log("*******request*******");
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                console.log("*******error.message*******");
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }            

            //error.response
            let errorGet = '{"message": "vanderlei testando "}';
            this.setState({errorLoc: errorGet});

        });
    }

    
  render() {

   // Get current Datas
    const indexOfLastData = this.state.currentPage * this.state.datasPerPage;
    const indexOfFirstData = indexOfLastData - this.state.datasPerPage;
    const currentData = this.state.listUser.slice(indexOfFirstData, indexOfLastData);
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber});   
    if (this.state.errorLoc !== null) {
        // Simulate a JS error 
        throw new Error(this.state.errorLoc);
    }
    return (
      <div> 
        <div>
            <p>
            <b>
                Error test click on zero until 5 appears and then it will give the error
                <br /><br />  
                    <DataGet currentData={currentData} loading={this.state.loading} />
                    <Pagination
                            datasPerPage={this.state.datasPerPage}
                            totalDatas={this.state.listUser.length}
                            paginate={paginate}
                        /> 
            </b>
            </p>
            <hr /> 
                <BuggyCounter />
                <BuggyCounter /> 
            <hr />
             
        </div>       
      </div>
    );
  }
}
