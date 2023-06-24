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
                        <div class="container mb-3 mt-3">
          <div class="row mt-2 bg-primary p-3">
            <div class="col-sm-2 text-white">
              <p class="mb-0"><strong>Market Snapshot</strong></p>
              <span>11:40 PM</span>
            </div>
            <div class="col-sm-8">
              <ul class="nav justify-content-center text-white">
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" href="#">Futures</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Americs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Europe
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Asia</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Commodities
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-2 d-flex navbar-nav  flex-row-reverse">
              <a href="#" class="block  fs-6 nav-link" >View All</a>
            </div>
            <div class="col-sm-12">
              <ul class="p-0  card-li-b">
                <li class="bg-white list-group-item p-4">
                  <div class="col-12">
                    <p class="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span class="mx-1">-0.57</span></p>
                    <div class=""><i class="bi bi-clock"></i> 10:20PM <i class="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li class="bg-white list-group-item p-4">
                  <div class="col-12">
                    <p class="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span class="mx-1">-0.57</span></p>
                    <div class=""><i class="bi bi-clock"></i> 10:20PM <i class="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li class="bg-danger list-group-item p-4">
                  <div class="col-12 text-white">
                    <p class="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span class="mx-1">-0.57</span></p>
                    <div class=""><i class="bi bi-clock"></i> 10:20PM <i class="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li class="bg-Success list-group-item p-4"></li>
                  <div class="col-12">
                    <p class="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span class="mx-1">-0.57</span></p>
                    <div class=""><i class="bi bi-clock"></i> 10:20PM <i class="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                <li class="bg-danger list-group-item p-4"></li>
                  <div class="col-12 text-white">
                    <p class="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span class="mx-1">-0.57</span></p>
                    <div class=""><i class="bi bi-clock"></i> 10:20PM <i class="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
              </ul>
            </div>
          </div>
        </div>
                    </div>
        </div>
    )
}
export default NewsbodyData;