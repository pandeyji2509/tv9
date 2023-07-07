import React,{useState,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom';
import Trending from "./assets/trending.json";
import GravitasData from "./assets/gravitas.json";
function Detail() {
    let { id } = useParams();
    const key = { id };
    console.log(key);
    const [trending, seTrending] = useState({
        loading: true,
        articles: [],
      });
      const [art, setArt] = useState({
        loading: true,
        articles: [],
      });
      async function fetTrend(){
        const resp=await fetch(
          `${process.env.REACT_APP_Base_Url}trending/`
        );
        // console.log(resp.json())
        return await resp.json();
      }
      async function fetart(){
        const resp=await fetch(
          `${process.env.REACT_APP_Base_Url}article/?id=${key.id}`
        );
        // console.log(resp.json())
        return await resp.json();
      }
      
      //trending
  useEffect(() => {
    (async () => {
      const trending = await fetTrend();
      console.log(eval(trending.result));
      seTrending({ loading: false, articles: eval(trending.result) });
    })();
  }, [id]);
  useEffect(() => {
    (async () => {
      const art = await fetart();
      console.log(eval(art.result));
      setArt({ loading: false, articles: eval(art.result) });
    })();
  }, [id]);
  console.log(art);

    // console.log(GravitasData[key.id-1]);
    // const Data=GravitasData[key.id-1];
    // const Myarray=Data.paragraph.split(".");
  return (
    <div className='container'>
      <div className="row mt-2">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item"><a href="index.html">News</a></li>
                <li className="breadcrumb-item"><a href="index.html">World News</a></li>
                <li className="breadcrumb-item active" aria-current="page">Title of the news</li>
            </ol>
        </nav>
        <div className="col-sm-8">
                <article>
                    <div className="main-heading">
                        { 
      art.loading ? (
    <p> Data is fetching.....</p>) : art.articles.length !== 0 ? (<h6 className="text-dark h2 fw-bold display-inline mb-4">{art.articles[0].fields.title}</h6>):(
<p>nothing to show</p>
    )
    }
        </div>
            <div className="container mb-3 pl-0">
                {art.loading?(<p>Data is fetching....</p>):art.articles.length!==0?( <p>{art.articles[0].fields.author} | Updated on: <i class="bi bi-calendar4-event" > </i>{art.articles[0].fields.created_at}</p>):(<p> Nothing to show... </p>)} 
            </div>
            <div class="container pl-0">
        <figure>
            <img src={art.loading ? ("") : art.articles.length!==0 ? (`${process.env.REACT_APP_IMAGE}${art.articles[0].fields.cover_image}`) : ("") }
            alt="Image" class="img-fluid"/>
            <figcaption class="figure-caption">File photo...</figcaption>
        </figure>
                <div class="container px-0">
                        {
                            art.loading?(<p>Data is fetching..</p>):art.articles.length!==0 ? (<p class="text-justify fs-6">{art.articles[0].fields.content}</p>):(<p>No data available....</p>)
                        }
                        </div>
                    </div>
                </article>
            </div>

        <div class="col-sm-4">
                <h6 class="text-dark h4 fw-bold display-inline mb-4">
                    Trending <i class="bi bi-arrow-right-circle fs-5"></i>
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
                  <Link to={`/DetailScience/${Data.pk}`} className="nav-link p-0 text-dark text-justify">
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
    </div>
    </div>
  )
}

export default Detail
