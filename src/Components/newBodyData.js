import React from 'react'
import NewsbodyDatas from "./assets/newsbody.json";
import Newsbody from './Newsbody';
import "./newBody.css";
function NewsbodyData() {
    console.log(NewsbodyDatas);
    return (
        <div className='box'>
            <div className="container" id="">
                {/* <!-- News --> */}
                <div className="" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                    {/* id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" */}
            
               
                            <h6 className="text-dark h3 fw-bold col-12">
                                Live <i className="bi bi-arrow-right-circle fs-5"></i>
                            </h6>
                            <div id="player"></div>
                            <div class="">
            <h6 class="text-dark h3 fw-bold display-inline">
              Latest News 
            </h6>
                            {
                                NewsbodyDatas.length === 0 ? (
                                    <p> Data is fetching.....</p>
                                ) : (
                                    NewsbodyDatas.map((Data) =>
                                        <Newsbody Data={Data} key={Data.id} />)
                                )
                            }
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default NewsbodyData;