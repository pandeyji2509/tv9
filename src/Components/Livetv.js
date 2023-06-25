import React from 'react'
import LiveVideos from "./assets/LiveVideos.json";
import LiveTrending from "./assets/LiveTrending.json" 
function Livetv() {
    return (
        <div className='container'>
            <div class="tab-pane " id="pills-live" role="tabpanel" aria-labelledby="pills-live-tab">
                <div class="row mt-2">
                    <h6 class="text-dark h4 fw-bold display-inline mb-4">
                        Live TV <i class="bi bi-arrow-right-circle fs-5"></i>
                    </h6>
                    <div class="row">
                        <div class="col-sm-9">
                            <div sty id="live-tv"></div>
                            <div class="row">
                                <h6 class="text-dark h4 fw-bold display-inline my-4">
                                    Latest Videos <i class="bi bi-arrow-right-circle fs-5"></i>
                                </h6>
                                {
                                LiveVideos.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            LiveVideos.map((Data) =>
            <div class="col-sm-4">
                  <figure class="figure">
                    <iframe src={Data.video} title={Data.title}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <figcaption class="figure-caption">
                      <h6 class="h6 fw-bold">
                        <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.content}</a>
                      </h6>
                    </figcaption>
                  </figure>
                </div>
            ))}
                </div>
            </div>
            <div class="col-sm-3">
              <h6 class="text-dark h4 fw-bold display-inline mb-4">
                Trending Videos <i class="bi bi-arrow-right-circle fs-5"></i>
              </h6>
              {
                                LiveVideos.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            LiveTrending.map((Data) =>
            <div class="video-wrapper">
                <figure class="figure">
                  <iframe src={Data.video} title={Data.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  <figcaption class="figure-caption">
                    <h6 class="h6 fw-bold">
                      <a href="news.html" class="nav-link p-0 m-0 text-dark">{Data.content}</a>
                    </h6>
                  </figcaption>
                </figure>
              </div>
            ))}
              </div>
        </div>
    </div>
            </div>
        </div>
    )
}

export default Livetv
