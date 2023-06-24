import React from 'react'
import Datas from "./assets/datas.json";
import Gravitas from './Gravitas';
function Data() {
    console.log(Datas);
  return (
    <div>
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/index.html">News</a></li>
            <li class="breadcrumb-item active" aria-current="page">Gravitas News</li>
          </ol>
        </nav>
        <div class="row mt-2">
            <div class="col-sm-3">
            <h6 class="text-dark h4 fw-bold display-inline mb-4">
              Trending <i class="bi bi-arrow-right-circle fs-5"></i>
            </h6>
     {
        Datas.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            Datas.map((Data) =>
                <Gravitas Data={Data} key={Data.id} />)
            )
        }
        
        </div>
      </div>
    </div>
  )
}

export default Data
