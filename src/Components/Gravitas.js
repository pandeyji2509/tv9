import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./component.css";
import GravitasData from './assets/trending.json';
import Gravi from "./assets/gravitas.json"
import Videos from "./assets/videos.json";
import Pagination from './Pagination';
export default function Gravitas() {
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
      `${process.env.REACT_APP_Base_Url}show_category_articles/?category=gravitas`
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
  
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  var nPages  ;
  var currentRecords=[] ;
  console.log(currentRecords)
  if(!newbod.loading){
    var curr=newbod.articles;
    console.log(curr,indexOfFirstRecord,indexOfLastRecord);
    currentRecords=curr.slice(indexOfFirstRecord,indexOfLastRecord);
    nPages=Math.ceil(curr.length / recordsPerPage)
    console.log(currentRecords)
  }
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
      trending.loading ? (
    <p> Data is fetching.....</p>
) : trending.articles.length !== 0 ? (
    trending.articles.map((Data) =>
    <div class="latest-new read-m border-bottom border-2 pb-3">
      <div class="col-3 float-start">
        <img
          src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
          alt="image" class="img-fluid"/>
      </div>
      <div  class="col-9 float-end pl-10 padd">
        <h6 class="h6 fw-bold">
          <Link to={`/Detail/${Data.pk}`} class="nav-link p-0 text-dark text-justify">
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
              Gravitas News <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
              newbod.loading ? (
                  <p> Data is fetching.....</p>
) :  newbod.articles.length !== 0 ?  (
    currentRecords.map((Data) =>
    <div class="latest-new border-bottom border-2 pb-4">
              <ul class="navbar-nav d-flex flex-row mt-2 mb-2">
                <li class="mx-1"><span class="mt-2 d-block">{`${Data.fields.created_at}`.slice(0,10)}</span></li>
              </ul>
              <div class="col-3 float-end">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
                  alt="image" class="img-fluid "/>
              </div>
              <h3 class="h4 fw-bold">
                <Link to={`/Detail/${Data.pk}`} class="nav-link p-0 m-0 text-dark">{Data.fields.title}
         </Link>
              </h3>
              <p>{`${Data.fields.content}`.slice(0,100)}......</p>
              <Link to={`/Detail/${Data.pk}`} class="fw-bold">continue reading</Link>
            </div>
    )):(
      <p>No articles found</p>
    )}
    {newbod.loading?(<p>fetching..</p>):(
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
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
                    <a href="news.html" class="nav-link p-0 m-0 text-dark">
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

