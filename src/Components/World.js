import React from 'react';
import "./component.css";
import "./World.css"
import worldBodyDatas from "./assets/WorldData.json";
export default function World() {
    return (
        <div className='container'>
        <div className="">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/index.html">News</a></li>
          <li className="breadcrumb-item active" aria-current="page">World News</li>
        </ol>
      </nav>   
    <div className="row mt-2">
       <div className="col-sm-3">
        <h6 className="text-dark h4 fw-bold display-inline mb-4">
              Trending <i className="bi bi-arrow-right-circle fs-5"></i>
            </h6>  

            { 
        worldBodyDatas.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            worldBodyDatas.map((Data) =>
            <div className="latest-new read-m border-bottom border-2 pb-3">
            <div className="col-3 float-start">
                <img
                  src={Data.img1}
                  alt="image" class="img-fluid"
                  />
              </div>
              <div className="padd col-9 float-end pl-10">
                <h6 className="h6 fw-bold">
                  <a href="news.html" className="nav-link p-0 text-dark text-justify">
                    {Data.news1}
                  </a>
                </h6>
              </div>
            </div>  )
        )
    }
        </div>
          <div class="col-sm-6">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              World News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
        worldBodyDatas.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            worldBodyDatas.map((Data) =>
            <div class="latest-new border-bottom border-2 pb-4">
<ul class="navbar-nav d-flex flex-row mt-2 mb-2">
  <li class="mx-1"><span class="mt-2 d-block">12 June, 2023</span></li>
</ul>
<div class="col-3 float-end">
  <img
    src={Data.img2}
    alt="image" class="img-fluid" 
    />
</div>
<h3 class="h4 fw-bold">
  <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.headline}</a>
</h3>
<p>{Data.news2}</p>
<a href="news.html" class="fw-bold">continue reading</a>
</div>
          )  )}
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
