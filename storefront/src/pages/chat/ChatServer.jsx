import React from 'react'; 
import './ChatServer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperclip,faPaperPlane,
        faChevronDown,faSearch,
        faUserPlus,faCog} from "@fortawesome/free-solid-svg-icons";

export default function ChatServer(){


    return(
        <div className='chatContext' >
            <div className="row" >
                <div className="col-sm-12 "></div>
                    <h4>Chat Server - Control</h4>
                    <div id="frame" >
                    <div id="sidepanel">
                        <div id="profile">
                            <div className="wrap">  
                                <img id="profile-img" src={require('../../images/fotovand.jpeg')}  className="online" alt="" />
                                <p>Vanderlei Soares</p>
                                <FontAwesomeIcon icon={faChevronDown} className="expand-button"  aria-hidden="true" />  
                                <div id="status-options">
                                    <ul>
                                        <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                                        <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                                        <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                                        <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                                    </ul>
                                </div>
                                <div id="expanded">
                                    <label id="twitter"> 
                                        <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                                        </label>
                                    <input name="twitter" type="text" defaultValue="vanderleiross" />
                                    <label id="twitter">  
                                        <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                                        </label>
                                    <input name="twitter" type="text" defaultValue="ross81" />
                                    <label id="twitter">      
                                        <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
                                        </label>
                                    <input name="twitter" type="text" defaultValue="vanderlei.ross" />
                                </div>
                            </div>
                        </div>
                        <div id="search">
                            <label id=""><FontAwesomeIcon icon={faSearch} aria-hidden="true" /></label>
                            <input type="text" placeholder="Search contacts..." />
                        </div>
                        <div id="contacts">
                            <ul>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src={require('../../images/avatar/avata09.png')}  alt="" />
                                        <div className="meta">
                                            <p className="name">Jussara Litt</p>
                                            <p className="preview">You just got LITT up, vanderlei.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact active">
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src={require('../../images/avatar/avata10.png')}  alt="" />
                                        <div className="meta">
                                            <p className="name">Davi Specter</p>
                                            <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status away"></span>
                                        <img src={require('../../images/avatar/avata12.png')}  alt="" />
                                        <div className="meta">
                                            <p className="name">Rachel Zane</p>
                                            <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status online"></span>
                                        <img src={require('../../images/avatar/avata14.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Ana Paulsen</p>
                                            <p className="preview">vanderlei, I know everything! I'm Donna..</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src={require('../../images/avatar/avata07.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Jessica Pearson</p>
                                            <p className="preview">Have you finished the draft on the Hinsenburg deal?</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src={require('../../images/avatar/avata13.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">João Gunderson</p>
                                            <p className="preview">Thanks vanderlei! :)</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src={require('../../images/avatar/avata08.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Jó Hardman</p>
                                            <p className="preview">We'll meet again, vanderlei. Tell Jessica I said 'Hi'.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status busy"></span>
                                        <img src={require('../../images/avatar/avata05.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Katrina Bennett</p>
                                            <p className="preview">I've sent you the files for the Garrett trial.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src={require('../../images/avatar/avata03.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Charles Forstman</p>
                                            <p className="preview">vanderlei, this isn't over.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="contact">
                                    <div className="wrap">
                                        <span className="contact-status"></span>
                                        <img src={require('../../images/avatar/avata06.png')} alt="" />
                                        <div className="meta">
                                            <p className="name">Jonathan Sidwell</p>
                                            <p className="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="bottom-bar">
                            <button id="addcontact"> 
                                <FontAwesomeIcon icon={faUserPlus}  className="fa-fw"  aria-hidden="true" />
                                <span>Add contact</span></button>
                            <button id="settings"> 
                                <FontAwesomeIcon icon={faCog}  className="fa-fw"  aria-hidden="true" />
                                <span>Settings</span></button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="contact-profile">
                            <img src={require('../../images/avatar/avata10.png')} alt="" />
                            <p>Davi Specter</p>
                            <div className="social-media">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="messages">
                            <ul>
                                <li className="sent">
                                    <img src={require('../../images/fotovand.jpeg')} alt="" />
                                    <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                                </li>
                                <li className="replies">
                                    <img src={require('../../images/avatar/avata10.png')} alt="" />
                                    <p>When you're backed against the wall, break the god damn thing down.</p>
                                </li>
                                <li className="replies">
                                    <img src={require('../../images/avatar/avata10.png')} alt="" />
                                    <p>Excuses don't win championships.</p>
                                </li>
                                <li className="sent">
                                    <img src={require('../../images/fotovand.jpeg')} alt="" />
                                    <p>Oh yeah, did Michael Jordan tell you that?</p>
                                </li>
                                <li className="replies">
                                    <img src={require('../../images/avatar/avata10.png')} alt="" />
                                    <p>No, I told him that.</p>
                                </li>
                                <li className="replies">
                                    <img src={require('../../images/avatar/avata10.png')} alt="" />
                                    <p>What are your choices when someone puts a gun to your head?</p>
                                </li>
                                <li className="sent">
                                    <img src={require('../../images/fotovand.jpeg')} alt="" />
                                    <p>What are you talking about? You do what they say or they shoot you.</p>
                                </li>
                                <li className="replies">
                                    <img src={require('../../images/avatar/avata10.png')} alt="" />
                                    <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="message-input">
                            <div className="wrap">
                            <input type="text" placeholder="Write your message..." /> 
                            <FontAwesomeIcon icon={faPaperclip} className="attachment"  aria-hidden="true" /> 
                            <button className="submit"> <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    )

}