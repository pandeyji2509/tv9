import React from 'react'
import NewsBodyDatas from './assets/newsbody.json';
import GravitasHome from './GravitasHome';
function gravitasData() {
  return (
    <div>
    { 
        NewsBodyDatas.length === 0 ? (
            <p> Data is fetching.....</p>
        ) : (
            NewsBodyDatas.map((Data) =>
                <GravitasHome Data={Data} key={Data.id} />)
        )
    }
    </div>
  )
}

export default gravitasData
