import React from 'react'
import NewsbodyDatas from "./assets/newsbody.json";
import "./newBody.css";
function NewsbodyData() {
  console.log(NewsbodyDatas);
  return (
    <div className="container" id="">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="row">
          <div class="col-sm-4">
              <h6 className="text-dark h3 fw-bold col-12">
                Live <i className="bi bi-arrow-right-circle fs-5"></i>
              </h6>
              <div id="player"></div>
          { 
        NewsbodyDatas.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
          NewsbodyDatas.map((Data) =>
              <div class="latest-new border-bottom border-2 pb-4 my-3">
                <h3 class="h4 fw-bold">
                  <a href="#" class="nav-link p-0 m-0 text-dark">{Data.headline}</a>
                </h3>
                <p>{Data.news}</p>
                <a href="#" class="fw-bold">continue reading</a>
              </div>
            ))}
        </div>
      <div class="col-sm-4 latest_nws">
            <h6 class="text-dark h3 fw-bold display-inline">
              Latest News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
              NewsbodyDatas.length === 0 ? (
                  <p> Data is fetching.....</p>
                 ) : (
                  NewsbodyDatas.map((Data) =>
                  <div class="latest-new border-bottom border-2 pb-4">
                      <ul class="navbar-nav d-flex flex-row mt-2 mb-2">
                        <li class=" dark"><a class="text-dark nav-link fs-6 fw-bold" href="#">{Data.genre}</a></li>
                        <li class="mx-1"><span class="mt-2 d-block">{Data.date}</span></li>
                      </ul>
                      <div class="col-3 float-end">
                        <img
                          src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358720-2023-06-11t125624z2lynxmpej5a04trtroptp4health-coronavirus-china-wedding-dresses.JPG?imwidth=640"
                          alt="image" class="img-fluid "/>
                      </div>
                      <h3 class="h4 fw-bold">
                        <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.headline} </a>
                      </h3>
                      <p>{Data.news}</p>
                      <a href="news.html" class="fw-bold">continue reading</a>
                    </div>
             )
             )}
      </div>

      <div class="col-sm-4">
            <h6 class="text-dark h3 fw-bold col-12">
              Most Read <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            {
            NewsbodyDatas.length === 0 ? (
                  <p> Data is fetching.....</p>
                 ) : (
                  NewsbodyDatas.map((Data) =>
                  <div class="latest-new read-m">
              <div class="col-9 float-start">
                <ul class="navbar-nav d-flex flex-row mt-1 mb-1">
                  <li class=" dark"><a class="text-dark nav-link fs-6 fw-bold" href="#">{Data.genre}</a></li>
                  <li class="mx-1"><span class="mt-2 d-block">{Data.date}</span></li>
                </ul>
                <h5 class="h5 fw-bold">
                  <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.headline}</a>
                </h5>
                <a href="news.html" class="fw-bold">continue reading</a>
              </div>
              <div class="col-3 float-end">
                <img
                  src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358706-untitled-design.jpg?imwidth=640"
                  alt="image" class="img-fluid"
                  />
              </div>
            </div>
                ))}
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
    </div>
  )
}
export default NewsbodyData;
