/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
import React, {useState} from "react";
import './chatTag.css' ;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChartOrg } from './../../components/ChartOrg';

export default function ChatTag(tdAddChat){
    const [tddataChat, setTddataChat] =  useState([{id: 1, message: 'mesagem de teste 3', links: '', dateSend: '01/01/2022 01:00:000'} ]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleNewData(){ 
        const obiptSend = document.getElementById("iptSend");
        const textSend = obiptSend.value;
        const codSend = textSend.substring(
            textSend.lastIndexOf('?*') + 2,
            textSend.lastIndexOf('*?')
          );  
        console.log(codSend)
        obiptSend.value = "";
        const tdAddChat = [...tddataChat, {id: tddataChat.length, message: textSend, links: codSend, dateSend: '01/01/2022 01:00:000'} ];
        setTddataChat(tdAddChat);
    }
 
    return <>
            <div className='chatContext'  >
                <div className="row" >
                    <div className="col-lg-11 ">
                         
                         <div className="card card-stats bg-light" >
                            <div className="card-header">
                                <h4>Chat Tag - Control</h4>
                            </div> 
                                <div className="card-body ">
                                     
                                    {tddataChat.map((item, index) => { 
                                        return(
                                            <div key={index} className="row"> 
                                                <div className="col-12"   > 
                                                    <div>
                                                        <div className="alert alert-primary" role="alert" >
                                                            <h4 className="alert-heading">Well done!</h4>
                                                            <p>  {item.message}</p>
                            
                                                            <div > 
                                                                Link:
                                                                <p className="mb-0">
                                                                    <button type="button" className="btn btn-primary"  onClick={handleShow} >Click here - {item.links} </button>
                                                                </p>
                                                                <p className="mb-0">Product: {item.links} </p>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div> 
                                            </div>
                                        );
                                    })}

                                </div>
                                <div className="card-footer "> 
                                    <div className="col-md-5">
                                        <div className="form-group mx-sm-3 mb-2">
                                            <label className="sr-only">Send message</label>
                                            <input type="text" className="form-control" id="iptSend" name="iptSend"></input> 
                                            <button type="buton" className="btn btn-primary buttoncss"  onClick={handleNewData}  >Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Order - Historic</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <ChartOrg></ChartOrg>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Send Data to Chat
                </Button>
                </Modal.Footer>
            </Modal>

      </>

}