/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState, useEffect }  from 'react';     
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ChatClient.css';
import { cookieGet } from '../../components/Useful';
 


export const ChatClient = () => { 
        const [swhodiv, setSwhodiv] = useState("none"); 
        const [showChat, setShowChat] = useState(true);

        useEffect(() => {
             
            setShowChat(true);
             if(cookieGet() !== ""){
                setShowChat(false);
             } 

        },[]);
        
        function getMessaged(){

            const tbdados = [
                {id: '01', idmspai: '0', msnstatus:'sent' ,msnname: 'Vanderlei', message: 'I cant find my glasses and I cant see anything. Can you help me find a few things?'},
                {id: '02', idmspai: '0', msnstatus:'receive' ,msnname: 'Davi', message: 'No problem. What are you looking for?' },
                {id: '03', idmspai: '0', msnstatus:'sent' ,msnname: 'Vanderlei', message: 'My laptop, do you see it?' },
                {id: '04', idmspai: '0', msnstatus:'sent' ,msnname: 'Vanderlei', message: 'Yes, your laptop is on the chair.' },
                {id: '05', idmspai: '0', msnstatus:'receive' ,msnname: 'Davi', message: 'Theres a pencil in front of the lamp.' },
                {id: '06', idmspai: '0', msnstatus:'receive' ,msnname: 'Davi', message: 'How about my backpack? Do you know where that is?' },
                {id: '07', idmspai: '0', msnstatus:'sent' ,msnname: 'Vanderlei', message: 'That chair over there, but please be careful with it. It was a gift from my mother-in-law.' },
                {id: '08', idmspai: '0', msnstatus:'sent' ,msnname: 'Vanderlei', message: 'Youre moving now? I knew you were moving, but I thought you said you were moving next month.' },
              ];

              return tbdados.map((item, index) => {
                if(item.msnstatus === "sent")
                    return (
                            <div key={index} style={{padding:8 }}>
 
                                <div class="row chatmsg_container chatbase_sent">
                                    <div class="col-md-10 col-xs-10">
                                        <div class="chatmessages chatmsg_sent">
                                            <p> {item.message}  </p>
                                            <time datetime="2009-11-13T20:00">{item.msnname} • Yesterday 10:05:22</time>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-xs-2 chatavatar">
                                        <img src={require('../../images/fotovand.jpeg')} class="chatimg img-responsive " />
                                    </div>
                                </div> 
                                

                            </div>
                    )
                    else
                    return (
                        <div key={index} style={{padding:8 }}>
 
                            
                            <div class="row chatmsg_container chatbase_receive">
                                <div class="col-md-2 col-xs-2 avatar">
                                    <img src={require('../../images/avatar/avata10.png')} class="chatimg img-responsive " />
                                </div>
                                <div class="col-md-10 col-xs-10">
                                    <div class="chatmessages chatmsg_receive">
                                        <p>Hi sir,</p>
                                        <time datetime="2009-11-13T20:00">{item.msnname} M • Yesterday 10:05:28</time>
                                    </div>
                                </div>
                            </div>


                        </div>
                )
                }) 
        }
 
        function handleChatClickTitle(swhodiv) {  
            const obDivchat = document.getElementById("divchat");  
            const obdivChatBoxFoot = document.getElementById("divChatBoxFoot");  
            const obdivChatBoxBody = document.getElementById("divChatBoxBody"); 
           if(obDivchat.style.height === "600px"){ 
                 
                obDivchat.style.height = "80px";
                obdivChatBoxFoot.style.visibility = 'hidden';
                obdivChatBoxBody.style.visibility = 'hidden'; 
                setSwhodiv("");
               
           }else{ 
                
                obDivchat.style.height = "600px";
                obdivChatBoxFoot.style.visibility = 'visible';
                obdivChatBoxBody.style.visibility = 'visible';  
                setSwhodiv("");
           }
           

        }

        if(showChat){
            return (
                <div > 
                </div>
            );
        } 
      
        return (
                 
                <div id="divchat" className='chatFixedRight' > 
                    <div className='chatBoxBackg' >
                        <a href='#' style={{textDecoration:'none'}} onClick={handleChatClickTitle}  >
                            <div className="row chatBoxTitle"  >
                                <div className="col-sm-3 chatBoxImgLog">
                                    <img
                                        src={require('../../images/fotovand.jpeg')}  
                                        width="60"
                                        height="60" 
                                        style={{backgroundColor:'white', padding:'2px'}}
                                    />   
                                </div>
                                <div className="col-sm-9 chatBoxTitleLog"> 
                                    <h4>Vanderlei S. Oliveira</h4>
                                    <div  className="row" >
                                        <div className="col-sm-2 chatBoxCicleAut" >
                                            <div class="rounded-circle chatBoxCicleGreen" ></div>
                                        </div>
                                        <div className="col-sm-9 " style={{ padding:0}}>
                                            <h6>Can I help you!</h6> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a> 
                        <div id="divChatBoxBody" className='chatBoxBody' style={{display: swhodiv, overflowY: 'scroll'}}  >

                            {getMessaged()}

                        </div>
                        <div id="divChatBoxFoot" className='chatBoxFoot'  style={{display: swhodiv}}  >
                                <form className="form-inline" action=""> 
                                    <div  className="row" >
                                        <div className="col-sm-9 ">
                                            <input type="text" 
                                            className="form-control mb-3 mr-sm-3" 
                                            placeholder="Enter text here"  
                                            id="textSend" />  
                                        </div>
                                        <div className="col-sm-3" style={{margin:0,padding:0 }}>                              
                                            <button   className="btn btn-primary mb-2">Submit</button>
                                        </div>
                                    </div>
                                </form>                       
                        </div>
                    </div>
                </div>
  
        );

        
};
 
 
 