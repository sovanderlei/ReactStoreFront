import React from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe,faRefresh,
  faVectorSquare,faMoneyBillTrendUp,
  faFileWaveform} from "@fortawesome/free-solid-svg-icons";

export function Dashboard() { 
    

    function getCardsDasboard(){
      const tbdata = [
        {id:'01', category:'Capacity',title:'150GB', foot:'Update Now',iconname:'faGlobe', classcard:'card card-stats bg-light', clasname:'nc-icon nc-globe text-warning' } ,
        {id:'01', category:'Revenue',title:'$ 1,345', foot:'Last day',iconname:'faMoneyBillTrendUp', classcard:'card card-stats bg-primary', clasname:'nc-icon nc-money-coins text-light' }, 
        {id:'01', category:'Errors',title:'23', foot:'In the last hour',iconname:'faVectorSquare', classcard:'card card-stats bg-warning', clasname:'nc-icon nc-vector text-danger' }, 
        {id:'01', category:'Followers',title:'+45K', foot:'Update now',iconname:'faFileWaveform', classcard:'card card-stats bg-danger', clasname:'nc-icon nc-favourite-28 text-primary' } 
      ]
     
      return tbdata.map((item, index) => {
        let icon = faGlobe;
        if(item.iconname === 'faGlobe'){
          icon = faGlobe;
        } 
        if(item.iconname === 'faMoneyBillTrendUp'){
          icon = faMoneyBillTrendUp;
        } 
        if(item.iconname === 'faVectorSquare'){
          icon = faVectorSquare;
        } 
        if(item.iconname === 'faFileWaveform'){
          icon = faFileWaveform;
        }         
        
        return( 
            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div className={item.classcard} >
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning"> 
                          <FontAwesomeIcon icon={icon}  className={item.clasname}  aria-hidden="true" />
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">{item.category}</p>
                          <p className="card-title">{item.title}</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer "> 
                    <div className="stats"> 
                        <FontAwesomeIcon icon={faRefresh}  className="fa fa-refresh"  aria-hidden="true" />
                         {"  "+item.foot}
                    </div>
                  </div>
                </div>
            </div>
 
        )
      });

    }

    return (
      <div style={{padding:10}} > 
       
        <div className="row">

            {getCardsDasboard()}
             

        </div>        
        
      </div>
    );
   
}

