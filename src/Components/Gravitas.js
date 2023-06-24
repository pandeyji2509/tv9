import React from 'react';
import "./component.css";
import GravitasData from './assets/trending.json';
import Gravi from "./assets/gravitas.json"
export default function Gravitas() {
    return (
     <div className='container'>
      <div class="tab-pane" id="pills-gravitas" role="tabpanel" aria-labelledby="pills-gravitas-tab">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/index.html">News</a></li>
            <li class="breadcrumb-item active" aria-current="page">Gravitas News</li>
          </ol>
        </nav>
        <div class="row mt-2">
<div class="col-sm-3" >
    <h6 class="text-dark h4 fw-bold display-inline mb-4">
      Trending <i class="bi bi-arrow-right-circle fs-5"></i>
    </h6>
    { 
    GravitasData.length === 0 ? (
    <p> Data is fetching.....</p>
) : (
    GravitasData.map((Data) =>
    <div class="latest-new read-m border-bottom border-2 pb-3">
      <div class="col-3 float-start">
        <img
          src={Data.img}
          alt="image" class="img-fluid"/>
      </div>
      <div  class="col-9 float-end pl-10 padd">
        <h6 class="h6 fw-bold">
          <a href="news.html" class="nav-link p-0 text-dark text-justify">
            {Data.news1}
          </a>
        </h6>
      </div>
    </div>
    ))}
    </div>

    <div class="col-sm-6">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Gravitas News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
    Gravi.length === 0 ? (
    <p> Data is fetching.....</p>
) : (
    Gravi.map((Data) =>
    <div class="latest-new border-bottom border-2 pb-4">
              <ul class="navbar-nav d-flex flex-row mt-2 mb-2">
                <li class="mx-1"><span class="mt-2 d-block">{Data.date}</span></li>
              </ul>
              <div class="col-3 float-end">
                <img
                  src={Data.img}
                  alt="image" class="img-fluid "/>
              </div>
              <h3 class="h4 fw-bold">
                <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.headline}
         </a>
              </h3>
              <p>{Data.news}</p>
              <a href="news.html" class="fw-bold">continue reading</a>
            </div>
    ))}
            <nav class="mt-3 mb-5" aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"><i class="bi bi-arrow-left-circle"></i></span>
                    <span class="visually-hidden">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i class="bi bi-arrow-right-circle"></i></span>
                    <span class="visually-hidden">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            </div>
            <div class="col-sm-3">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Videos <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            <div class="video-wrapper">
              <figure class="figure">
                <iframe src="https://www.youtube.com/embed/4p5g04skIrs" title="@kcr _in _maharastra @KCRWORLD"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <figcaption class="figure-caption">
                  <h6 class="h6 fw-bold">
                    <a href="news.html" class="nav-link p-0 m-0 text-dark">Lorem Ipsum is simply dummy text of and
                      typesetting
                      industry. </a>
                  </h6>
                </figcaption>
              </figure>
            </div>
            <div class="video-wrapper">
              <figure class="figure">
                <iframe src="https://www.youtube.com/embed/erW-YQewNMg" title="కెసిఆర్ మునుగోడు సభ #highlights"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
                <figcaption class="figure-caption">
                  <h6 class="h6 fw-bold">
                    <a href="news.html" class="nav-link p-0 m-0 text-dark">Lorem Ipsum is simply dummy text of and
                      typesetting
                      industry. </a>
                  </h6>
                </figcaption>
              </figure>
            </div>
            <div class="video-wrapper">
              <figure class="figure"></figure>
              <iframe src="https://www.youtube.com/embed/GWz9zmlvLC4"
                title="పోచారంమున్సిపల్ కార్మికులతో వినూత్న కార్యక్రమాలతో  మేడే జరుపుకున్న చైర్మెన్ బోయపల్లి కొండల్ రెడ్డి"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <figcaption class="figure-caption">
                <h6 class="h6 fw-bold">
                  <a href="news.html" class="nav-link p-0 m-0 text-dark">Lorem Ipsum is simply dummy text of and
                    typesetting
                    industry. </a>
                </h6>
               </figcaption>
            </div>
          </div>
</div> 
        </div>
        </div>
        
    );
}

