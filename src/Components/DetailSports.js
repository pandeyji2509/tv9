import React from 'react'
import { useParams } from 'react-router-dom';
import Trending from "./assets/trending.json";
import SportsData from "./assets/SportsData.json";
function Detail() {
    let { id } = useParams();
    const key = { id };
    console.log(key);
    console.log(SportsData[key.id-1]);
    const Data=SportsData[key.id-1];
    const Myarray=Data.paragraph.split(".");
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
                        <h6 className="text-dark h2 fw-bold display-inline mb-4">
                            {Data.headline}
                        </h6>
                    </div>
                    <div className="container mb-3 pl-0">
                        <p>{Data.author} | Updated on: <i class="bi bi-calendar4-event"></i>{Data.date}
                        </p>
                    </div>
                    <div class="container pl-0">
                        <figure>
                            <img src={Data.img}
                                alt="Image" class="img-fluid"/>
                            <figcaption class="figure-caption">File photo of a wedding in China.</figcaption>
                        </figure>
                        <div class="container px-0">
                        { 
        Myarray.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            Myarray.map((para) =>
            <p class="text-justify fs-6">{para}</p>
            ))}


                            {/* <p class="text-justify fs-6">The drop in couples tieing the knot, which follows Covid
                                 restrictions keeping tens of millions locked in their homes or compounds for weeks last
                                year, comes as authorities deal with a declining birth rate and a falling population,
                                the news agency Reuters reported.
                                </p> */}

 
                            {/* <p class="text-justify fs-6">The projects would focus on tasks including prompting marrying
                                and having children at an appropriate age, encouraging parents to share child-rearing
                                responsibilities, and curbing high prices and other outdated customs, as per a report by
                                the Global Times on May 14.
                            </p>
                            <p class="text-justify fs-6">Some provinces are also giving young newlyweds an extension of
                                paid marriage leave.
                            </p>
                            <p class="text-justify fs-6">Last year, China's population fell for the first time in six
                                decades, a drop that is expected to mark the start of a long period of decline in its
                                citizen numbers with implications for its economy. Reuters reported the country's birth
                                rate fell last year to 6.77 births per 1,000 people, the lowest on record, from 7.52 in
                                2021.
                            </p>
                            <p class="text-justify fs-6">Demographers warned China would get old before it gets rich, as
                                its workforce shrank and indebted local governments spent more on their elderly
                                population.
                            </p> */}
                        </div>
                    </div>
                </article>
            </div>

        <div class="col-sm-4">
                <h6 class="text-dark h4 fw-bold display-inline mb-4">
                    Trending <i class="bi bi-arrow-right-circle fs-5"></i>
                </h6>
                { 
        Trending.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            Trending.map((Data) =>
            <div className="latest-new read-m border-bottom border-2 pb-3">
            <div className="col-3 float-start">
                <img
                  src={Data.img}
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
    </div>
    </div>
  )
}

export default Detail
