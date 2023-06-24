import React from 'react'
import Datas from "./assets/datas.json";
import Gravitas from './Gravitas';
function Data() {
    console.log(Datas);
  return (
    <div>
     {
        Datas.length === 0 ? (
            <p>data is fetching.....</p>
        ) : (
            Datas.map((Data) =>
                <Gravitas Data={Data} key={Data.id} />)
            )
        }
    </div>
  )
}

export default Data
