import React from 'react';
import "./component.css";
import Data from './Data';
import GravitasData from './GravitasData';
export default function Gravitas(props) {
    return (
      <div className='container'>
            <div className="latest-new read-m border-bottom border-2 pb-3">
              <div className="col-4 float-start">
                <img
                  src="https://cdn.wionews.com/sites/default/files/styles/photo_1/public/2023/06/10/0906_WOYB_GRAVITAS_Trump_indicted_in_classified_03-1686335723-00000003.jpg?imwidth=640"
                  alt="image" className="img-fluid"/>
              </div>
              <div className="col-9 float-end pl-10">
                <h6 className="h6 fw-bold">
                  <a href="news.html" className="nav-link p-0 text-dark text-justify">
                    {props.Data.news}
                  </a>
                </h6>
              </div>
            </div>  
            <GravitasData/>
          </div> 
    );
}