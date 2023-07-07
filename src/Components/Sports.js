import React,{useState,useEffect} from 'react';
import "./component.css";
import "./World.css"
import SportsData from "./assets/SportsData.json";
import Trending from "./assets/trending.json";
import Videos from "./assets/videos.json";
import { Link } from 'react-router-dom';
export default function Sports() {
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
      `${process.env.REACT_APP_Base_Url}show_category_articles/?category=sports`
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
      trending.loading ? (
    <p> Data is fetching.....</p>
) : trending.articles.length !== 0 ? (
    trending.articles.map((Data) =>
            <div className="latest-new read-m border-bottom border-2 pb-3">
            <div className="col-3 float-start">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
                  alt="image" class="img-fluid"
                  />
              </div>
              <div className="padd col-9 float-end pl-10">
                <h6 className="h6 fw-bold">
                  <Link to={`/DetailSports/${Data.pk}`} className="nav-link p-0 text-dark text-justify">
                    {Data.fields.title}
                  </Link>
                </h6>
              </div>
            </div>  )
        ):(
          <p>No results to show</p>
        )
    }
        </div>
          <div class="col-sm-6">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Sports News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
              newbod.loading ? (
                  <p> Data is fetching.....</p>
) :  newbod.articles.length !== 0 ?  (
    newbod.articles.map((Data) =>
            <div class="latest-new border-bottom border-2 pb-4">
<ul class="navbar-nav d-flex flex-row mt-2 mb-2">
  <li class="mx-1"><span class="mt-2 d-block">12 June, 2023</span></li>
</ul>
<div class="col-3 float-end">
  <img
    src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
    alt="image" class="img-fluid" 
    />
</div>
<h3 class="h4 fw-bold">
  <a href="#" class="nav-link p-0 m-0 text-dark">{Data.fields.title}</a>
</h3>
<p>{`${Data.fields.content}`.slice(0,100)}......</p>
<Link to={`/DetailSports/${Data.pk}`} class="fw-bold">continue reading...</Link>
</div>
          )  ):(
            <p>No articles found</p>
          )}
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
    );
}
