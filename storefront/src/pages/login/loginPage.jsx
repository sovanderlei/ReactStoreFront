/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'; 
import './styleLogin.css'  
import { Context } from '../../context/AuthContext'; 
import UserService from '../../services/UserService'

export default function LoginPage() {

    const {  handleLogin,setUserLogin } = useContext(Context);
     
    const handleSubmit = (event) => { 
        event.preventDefault();  
        let username = event.target.username.value;
        let password = event.target.password.value; 
        let userLog = {
            username: event.target.username.value
        };
        
        setUserLogin(userLog);  
        
        UserService.getUserByLogin(username,password).then(res =>{  
            console.log(res);   
            handleLogin(res, res.token);
        });  
    }

    // rederize = rederaize 
    // measure = miger medir 
    // vertical = vârtical igual parson
    // radius reidius 
    // button bâtân 
    // context contéxti
    // for me to não esquecer o "to"

    return (
        <div id="login" className="Auth-form-container">
            <form onSubmit={handleSubmit}  className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                
                <div className="form-group mt-3">
                    <label>Login</label>
                    <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Login"
                    id="username"

                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    id="password"

                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="Submit"  className="btn btn-primary">
                    Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
        </div>
    )
   
} 