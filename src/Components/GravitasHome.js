import React from 'react'

function gravitasHome(props) {
    console.log(props);
  return (
    <div>
        <div className="latest-new border-bottom border-2 pb-4">
              <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                <li className="mx-1"><span className="mt-2 d-block">10 June, 2023</span></li>
              </ul>
              <div className="col-3 float-end">
                <img
                  src="https://cdn.wionews.com/sites/default/files/styles/photo_1/public/2023/06/10/1006_GPLUS_MODI_US_VISIT_FNL-1686411007-00000003.jpg?imwidth=640"
                  alt="image" className="img-fluid "/>
              </div>
              <h3 className="h4 fw-bold">
                <a href="news.html" className="nav-link p-0 m-0 text-dark">{props.Data.headline} </a>
              </h3>
              <p>{props.Data.news}</p>
              <a href="news.html" className="fw-bold">continue reading</a>
            </div>
    </div>
  )
}

export default gravitasHome;
