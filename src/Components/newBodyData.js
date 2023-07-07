import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewsbodyDatas from "./assets/newsbody.json";
import "./newBody.css";
import dummy from './assets/dummy.json';
function NewsbodyData() {

  async function fet(){
    const resp=await fetch(
      `${process.env.REACT_APP_Base_Url}show_10_articles/`
    );
    // console.log(resp.json())
    return await resp.json();
  }
  const [newbod, setnewbod] = useState({
    loading: true,
    articles: [],
  });
  // fet();
  useEffect(() => {
    (async () => {
      const newbod = await fet();
      console.log(eval(newbod.result));
      setnewbod({ loading: false, articles: eval(newbod.result) });
    })();
  }, []);
  console.log(newbod);

 
  return (
    <div className="container" id="">
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="row">
          <div className="col-sm-4">
              <h6 className="text-dark h3 fw-bold col-12">
                Live <i className="bi bi-arrow-right-circle fs-5"></i>
              </h6>
              <div id="player"></div>
          { 
            newbod.loading ? (
            <p> Data is fetching.....</p>
        ) : newbod !== 0 ? (
           newbod.articles.map((Data) =>
              <div className="latest-new border-bottom border-2 pb-4 my-3">
                <h3 className="h4 fw-bold">
                <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark">{Data.fields.title}</Link>
                </h3>
                <p>{`${Data.fields.content}`.slice(0,100)}......</p>
                <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading</Link>
              </div>
            ))
            :(
              <p>No results to show</p>
            )}
        </div>
      <div className="col-sm-4 latest_nws">
            <h6 className="text-dark h3 fw-bold display-inline">
              Latest News <i className="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
              newbod.loading ? (
                  <p> Data is fetching.....</p>
                 ) : newbod.articles.length !== 0 ?  (
                  newbod.articles.map((Data) =>
                  <div className="latest-new border-bottom border-2 pb-4">
                      <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                        <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">{Data.fields.categories}</a></li>
                        <li className="mx-1"><span className="mt-2 d-block">{Data.fields.created_at}</span></li>
                      </ul>
                      <div className="col-3 float-end">
                        <img
                          src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
                          alt="image" className="img-fluid "/>
                      </div>
                      <h3 className="h4 fw-bold">
                        <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark">{Data.fields.title} </Link>
                      </h3>
                      <p>{`${Data.fields.content}`.slice(0,100)}......</p>
                      <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading...</Link>
                    </div>
             )
             ):(
              <p>No articles found</p>
             )}
      </div>

      <div className="col-sm-4">
            <h6 className="text-dark h3 fw-bold col-12">
              Most Read <i className="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            {
              newbod.loading ? (
                  <p> Data is fetching.....</p>
                 ) : newbod.articles.length !== 0 ?  (
                 newbod.articles.map((Data) =>
                  <div className="latest-new read-m">
              <div className="col-9 float-start">
                <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                  <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">{Data.fields.categories}</a></li>
                  <li className="mx-1"><span className="mt-2 d-block">{Data.fields.created_at}</span></li>
                </ul>
                <h5 className="h5 fw-bold">
                <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark">{Data.fields.title}</Link>
                </h5>
                <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading</Link>
              </div>
              <div className="col-3 float-end">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
                  alt="image" className="img-fluid"
                  />
              </div>
            </div>
                )):(
                  <p>No results to show</p>
                )}
            </div>
        </div>
        <div className="container mb-3 mt-3">
          <div className="row mt-2 bg-primary p-3">
            <div className="col-sm-2 text-white">
              <p className="mb-0"><strong>Market Snapshot</strong></p>
              <span>11:40 PM</span>
            </div>
            <div className="col-sm-8">
              <ul className="nav justify-content-center text-white">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Futures</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Americs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Europe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Asia</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Commodities
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 d-flex navbar-nav  flex-row-reverse">
              <a href="#" className="block  fs-6 nav-link" >View All</a>
            </div>
            <div className="col-sm-12">
              <ul className="p-0  card-li-b">
                <li className="bg-white list-group-item p-4">
                  <div className="col-12">
                    <p className="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span className="mx-1">-0.57</span></p>
                    <div className=""><i className="bi bi-clock"></i> 10:20PM <i className="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li className="bg-white list-group-item p-4">
                  <div className="col-12">
                    <p className="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span className="mx-1">-0.57</span></p>
                    <div className=""><i className="bi bi-clock"></i> 10:20PM <i className="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li className="bg-danger list-group-item p-4">
                  <div className="col-12 text-white">
                    <p className="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span className="mx-1">-0.57</span></p>
                    <div className=""><i className="bi bi-clock"></i> 10:20PM <i className="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                </li>
                <li className="bg-Success list-group-item p-4"></li>
                  <div className="col-12">
                    <p className="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span className="mx-1">-0.57</span></p>
                    <div className=""><i className="bi bi-clock"></i> 10:20PM <i className="bi bi-graph-up fs-3 mx-3"></i></div>
                  </div>
                <li className="bg-danger list-group-item p-4"></li>
                  <div className="col-12 text-white">
                    <p className="mb-0">
                      <strong>Doller Rate</strong> <span>+0.00</span>
                    </p>
                    <p>2548.55 <span className="mx-1">-0.57</span></p>
                    <div className=""><i className="bi bi-clock"></i> 10:20PM <i className="bi bi-graph-up fs-3 mx-3"></i></div>
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
