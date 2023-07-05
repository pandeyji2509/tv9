import React, {useState,useEffect} from 'react'
import Trending from "./assets/trending.json";
import ScienceData from "./assets/ScienceData.json";
import Videos from "./assets/videos.json";
import {Link} from "react-router-dom"
function Science() {
  const [newbod, setnewbod] = useState({
    loading: true,
    articles: [],
  });
  const [trending, seTrending] = useState({
    loading: true,
    articles: [],
  });
  async function fet(){
    const resp=await fetch(
      `${process.env.REACT_APP_Base_Url}show_category_articles/?category=Sww`
    );
    // console.log(resp.json())
    return await resp.json();
  }
  async function fetTrend(){
    const resp=await fetch(
      `${process.env.REACT_APP_Base_Url}trending/`
    );
    // console.log(resp.json())
    return await resp.json();
  }
  //newsdata
  useEffect(() => {
    (async () => {
      const newbod = await fet();
      console.log(eval(newbod.result));
      setnewbod({ loading: false, articles: eval(newbod.result) });
    })();
  }, []);
  console.log(newbod);
//trending
  useEffect(() => {
    (async () => {
      const trending = await fetTrend();
      console.log(eval(trending.result));
      seTrending({ loading: false, articles: eval(trending.result) });
    })();
  }, []);
  console.log(trending);
  return (
    <div className='container'>
        <div class="tab-pane" id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">News</a></li>
            <li class="breadcrumb-item active" aria-current="page">Science News</li>
          </ol>
        </nav>
        <div class="row mt-2">
          <div class="col-sm-3">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Trending <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
      trending.loading ? (
    <p> Data is fetching.....</p>
) : trending.articles.length !== 0 ? (
    trending.articles.map((Data) =>
<div class="latest-new read-m border-bottom border-2 pb-3">
              <div class="col-3 float-start">
                <img
                  src={Data.fields.cover_image}
                  alt="image" class="img-fluid"/>
              </div>
              <div class="col-9 float-end pl-10 padd">
                <h6 class="h6 fw-bold">
                  <Link to={`/DetailScience/${Data.pk}`} class="nav-link p-0 text-dark text-justify">
                    {Data.fields.title}
                  </Link>
                </h6>
              </div>
            </div>
)):(
  <p>No results to show</p>
)}
            </div>

            <div class="col-sm-6">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Science News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
            newbod.loading ? (
                  <p> Data is fetching.....</p>
) :  newbod.articles.length !== 0 ?  (
    newbod.articles.map((Data) =>
<div class="latest-new border-bottom border-2 pb-4">
              <ul class="navbar-nav d-flex flex-row mt-2 mb-2">
                <li class="mx-1"><span class="mt-2 d-block">{Data.fields.created_at}</span></li>
              </ul>
              <div class="col-3 float-end">
                <img
                  src={Data.fields.cover_image}
                  alt="image" class="img-fluid"/>
              </div>
              <h3 class="h4 fw-bold">
                <a href="#" class="nav-link p-0 m-0 text-dark">{Data.fields.title} </a>
              </h3>
              <p>{Data.fields.content}</p>
              <Link to={`/DetailScience/${Data.pk}`} class="fw-bold">continue reading</Link>
            </div>
)):(
  <p>No articles found</p>
)}
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
            { 
        Videos.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            Videos.map((Data) =>
            <div class="video-wrapper">
              <figure class="figure">
                <iframe src={Data.video} title={Data.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <figcaption class="figure-caption">
                  <h6 class="h6 fw-bold">
                    <a href="news.html" class="nav-link p-0 m-0 text-dark">Lorem Ipsum is simply dummy text of and
                      {Data.content} </a>
                  </h6>
                </figcaption>
              </figure>
            </div>
            ))}
          </div>
            </div>
        </div>
    </div>
  )
}

export default Science
