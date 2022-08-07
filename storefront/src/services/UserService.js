//import axios from 'axios';
import axios from '../dbconexao/dbbase'
 

class UserService {
 
    getUserByLogin(username,password){
        return  fetch("http://localhost:8089/loginvalid/"+username+"/"+password+"").then(res=>res.json());
     }
    
    getUsers(){
        return axios.get("/usersall");
    }
     
    getUserById(userId){
        return axios.get("/getuser/" + userId);
    }

    createUser(user){
        return axios.post("/createaccount", user);
    }
 
    updateUser(user){
        return axios.post("/saveuser", user);
    }

    deleteUser(userId){
        return axios.post("/deleteuser/" + userId);
        //delete
    }
}

export default new UserService()