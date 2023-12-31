import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewsbodyDatas from "./assets/newsbody.json";
import "./newBody.css";
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
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
     
      // console.log(eval(newbod.result.reverse));
      setnewbod({ loading: false, articles: eval(newbod.result) });
      // console.log(eval(newbod.result));
      // 
    })();
  }, []);
  console.log(newbod);
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
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'am' : 'pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  return (
    <div className="cont" id="">
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="row">
          <div className="col-sm-4">
              <h6 className="text-dark h3 fw-bold col-12">
                Live <i className="bi bi-arrow-right-circle fs-5"></i>
              </h6>
              {/* player */}
              <div id="play"><img className='globe' src="https://st3.depositphotos.com/10080544/35323/i/450/depositphotos_353231920-stock-photo-technology-network-data-social-media.jpg" /></div>
          { 
            newbod.loading ? (
            <p> Data is fetching.....</p>
        ) : newbod !== 0 ? (
           currentRecords.map((Data) =>
              <div className="latest-new border-bottom  border-2 pb-4 my-3 fon">
                <h3 className="h4 fw-bold ">
                <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark titl" >{Data.fields.title}</Link>
                </h3>
                <p className='para'>{`${Data.fields.content}`.slice(0,100)}......</p>
                <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading</Link>
              </div>
            ))
            :(
              <p>No results to show</p>
            )}
        </div>
      <div className="col-sm-4 border-start border-end latest_nws">
            <h6 className="text-dark lat h3 fw-bold display-inline">
              Latest News <i className="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            { 
              newbod.loading ? (
                  <p> Data is fetching.....</p>
                 ) : newbod.articles.length !== 0 ?  (
                  currentRecords.map((Data) =>
                   
                  <div className="latest-new border-left  border-bottom border-right border-2 pb-4 fon">
                      <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                        <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">{`${Data.fields.categories}`.toUpperCase()}</a></li>
                        <li className="mx-1"><span className="mt-2 d-block date1 ">{`${Data.fields.created_at}`.slice(8,10)} {month[parseInt(`${Data.fields.created_at}`.slice(5,7))-1]} {`${Data.fields.created_at}`.slice(0,4)}   {tConvert(`${Data.fields.created_at}`.slice(11,16))}</span></li>
                      </ul>
                      <div className="col-3 float-end">
                      </div>
                      <h3 className="h4 fw-bold">
                        <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark titl">{Data.fields.title} </Link>
                      </h3>
                      <p className='para'>{`${Data.fields.content}`.slice(0,100)}......</p>
                      <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading...</Link>
                    </div>
             )
             ):(
              <p>No articles found</p>
             )}
      </div>

      <div className="col-sm-4">
            <h6 className="text-dark h3 fw-bold lat col-12 titl">
              Most Read <i className="bi bi-arrow-right-circle fs-5"></i>
            </h6>
            {
              newbod.loading ? (
                  <p> Data is fetching.....</p>
                 ) : newbod.articles.length !== 0 ?  (
                 currentRecords.map((Data) =>
                  <div className="latest-new read-m">
              <div className="col-9 float-start">
                <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                  <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">{Data.fields.categories.toUpperCase()}</a></li>
                  <li className="mx-1"><span className="mt-2 d-block date1 ">{`${Data.fields.created_at}`.slice(8,10)} {month[parseInt(`${Data.fields.created_at}`.slice(5,7))-1]} {`${Data.fields.created_at}`.slice(0,4)}   {tConvert(`${Data.fields.created_at}`.slice(11,16))}</span></li>
                </ul>
                <h5 className="h5 fw-bold">
                <Link to={`/Detailhome/${Data.pk}`} className="nav-link p-0 m-0 text-dark fon">{Data.fields.title}</Link>
                </h5>
                <Link to={`/Detailhome/${Data.pk}`} className="fw-bold">continue reading...</Link>
              </div>
              <div className="col-3 float-end">
                <img
                  src={`${process.env.REACT_APP_IMAGE}${Data.fields.cover_image}`}
                  // src="data:image/jpeg;base64,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"
                  alt="image" className="img-fluid imgs"
                  />
              </div>
            </div>
                )):(
                  <p>No results to show</p>
                )}
            </div>
            {newbod.loading?(<p>fetching..</p>):(
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            )}
        </div>
     {/* <div className="container mb-3 mt-3">
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
        </div> */}
        </div> 
      </div> 
    </div>
  )
}
export default NewsbodyData;
