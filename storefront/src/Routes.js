import React, { useContext }  from 'react';  
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Context } from './context/AuthContext';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
 
import {Headers} from './headers.js';

import LoginPage from './pages/login/loginPage';
import Home from './pages/home';
import UsersGrid from './pages/users/usersGrid';
import UsersForm from './pages/users/usersForm';
import UsersDetail from './pages/users/usersDetail';
import ListGrid from './pages/paginatiomodel/ListGrid';
import TableGrid from './pages/paginatiomodel/TableGrid'; 
import ChatServer from './pages/chat/ChatServer';
import {ChatClient} from './pages/chat/ChatClient';
import {Dashboard}  from './pages/dashboard/Dashboard'

 
import {AuthProvider} from './context/AuthContext'; 
import BuggyCounterShow from './pages/erroPage/BuggyCounterShow';
import ErrorBoundary from './pages/erroPage/ErrorBoundary';
 

const ProtectedRoute = ({ privat, children }) => {
        const {loading, authenticated } = useContext(Context);
          
        if(loading){
           return <h1>Loading....</h1>
        }
 
        if (privat && !authenticated) {  
          return <Navigate to="/login" replace />;
        }
      
        return children;
};

const RoutesApp = () =>{
 
        return (
                <div className="App" >  
                   <Headers></Headers> 
                <div className="Container" >
                        <ErrorBoundary>
                                <BrowserRouter>
                                        <AuthProvider>
                                        <Routes>  
                                        
                                        {/* <Route path="/login" exact element={<LoginPage />} />;    */}
                                        {/* <Route path="/login" exact element={<Dashboard /> } />; */}
                                        <Route path="/login" exact element={<BuggyCounterShow /> } />;
                                        <Route path="/" exact element={<ProtectedRoute privat={true}><Home /></ProtectedRoute>} />;
                                        <Route path="/home" exact element={<ProtectedRoute privat={true}><Home /></ProtectedRoute>} />;
                                        <Route path="/chatserver" exact element={<ProtectedRoute privat={true}><ChatServer /></ProtectedRoute>} />;  
                                        <Route path="/usersgrid" exact element={<ProtectedRoute privat={true}><UsersGrid /></ProtectedRoute>}  />;
                                        <Route path="/usersform/:id/:title"  element={<ProtectedRoute privat={true}><UsersForm /></ProtectedRoute>}  />;
                                        <Route path="/usersDetail/:id"  element={<ProtectedRoute privat={true}><UsersDetail /></ProtectedRoute>}  />;
                                        <Route path="/listgrid"  element={<ProtectedRoute privat={true}><ListGrid /></ProtectedRoute>}  />;
                                        <Route path="/tablegrid"  element={<ProtectedRoute privat={true}><TableGrid /></ProtectedRoute>}  />;
                                        {/* <Route path="/dashboard"  element={<ProtectedRoute privat={true}><Dashboard /></ProtectedRoute>}  />; */}
                                        
                                        
                                        </Routes>
                                        </AuthProvider>
                                </BrowserRouter>
                        </ErrorBoundary>
                </div>
                <ChatClient></ChatClient>
             </div>
        );

        
}



export default RoutesApp;
 
 