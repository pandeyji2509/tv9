import React from 'react';
import "./component.css";
import Gravitas from './Gravitas';
export default function Newsbody() {
    return (
        <>
            <div className="tab-content" id="pills-tabContent">
                {/* <!-- News --> */}
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                    {/* id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" */}
                    <div className="row">
                        <div className="col-sm-4">styleclassName
                            <h6 className="text-dark h3 fw-bold col-12">
                                Live <i className="bi bi-arrow-right-circle fs-5"></i>
                            </h6>
                          
                    <div id="player"></div>
                    <div className="latest-new border-bottom border-2 pb-4 my-3">
                        <h3 className="h4 fw-bold">
                            <a href="#" className="nav-link p-0 m-0 text-dark">China: Marriages drop to historic low as nation deals
                                with
                                declining birth rate
                            </a>
                        </h3>
                        <p>The drop in couples tieing the knot, which follows Covid restrictions keeping tens of millions locked
                            in
                            their homes or compounds for weeks last year, comes as authorities deal with a declining birth rate and
                            a
                            falling population, the news agency Reuters reported.</p>
                        <a href="#" className="fw-bold">continue reading</a>
                    </div>
                    <div className="latest-new border-bottom border-2 pb-4 my-3">
                        
                        <h3 className="h4 fw-bold">
                            <a href="#" className="nav-link p-0 m-0 text-dark">US billionaire George Soros hands over $25
                                billion empire to younger son Alex
                            </a>
                        </h3>
                        <p>Alex Soros expressed concerns over the possible return of Donald Trump to White House, and has hinted
                            that his organisation would play a key...</p>
                        <a href="#" className="fw-bold">continue reading</a>
                    </div>
                </div>
                <div className="col-sm-4 latest_nws">
                    <h6 className="text-dark h3 fw-bold display-inline">
                        Latest News <i className="bi bi-arrow-right-circle fs-5"></i>
                    </h6>
                    <div className="latest-new border-bottom border-2 pb-4">
                        <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                            <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Business</a></li>
                            <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                        </ul>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358720-2023-06-11t125624z2lynxmpej5a04trtroptp4health-coronavirus-china-wedding-dresses.JPG?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                        <h3 className="h4 fw-bold">
                            <a href="news.html" className="nav-link p-0 m-0 text-dark">China: Marriages drop to historic low as nation
                                deals with declining birth rate </a>
                        </h3>
                        <p>According to the Ministry of Civil Affairs on Sunday (June 11), just 6.83 million couples completed
                            their marriage registrations in 2022, do...</p>
                        <a href="news.html" className="fw-bold">continue reading</a>
                    </div>
                    <div className="latest-new border-bottom border-2 pb-4">
                        <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                            <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Health</a></li>
                            <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                        </ul>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358693-untitled-design-2023-06-12t091902995.png?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                        <h3 className="h4 fw-bold">
                            <a href="news.html" className="nav-link p-0 m-0 text-dark">Mother of Amazon miracle children survived for
                                four days, told them to leave her to save themselves </a>
                        </h3>
                        <p>The children were travelling with their mother when their Cessna plane crashed on May 1</p>
                        <a href="news.html" className="fw-bold">continue reading</a>
                    </div>


                    <div className="latest-new border-bottom border-2 pb-4">
                        <ul className="navbar-nav d-flex flex-row mt-2 mb-2">
                            <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Politics</a></li>
                            <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                        </ul>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358704-untitled-design.png?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                        <h3 className="h4 fw-bold">
                            <a href="news.html" className="nav-link p-0 m-0 text-dark">Morning brief: 13 attacked in street party in New
                                York; Soros hands over empire to son, & more </a>
                        </h3>
                        <p>Good morning! Start your day with morning news brief.&nbsp;</p>
                        <a href="news.html" className="fw-bold">continue reading</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h6 className="text-dark h3 fw-bold col-12">
                        Most Read <i className="bi bi-arrow-right-circle fs-5"></i>
                    </h6>
                    <div className="latest-new read-m">
                        <div className="col-9 float-start">
                            <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                                <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Politics</a></li>
                                <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                            </ul>
                            <h5 className="h5 fw-bold">
                                <a href="news.html" className="nav-link p-0 m-0 text-dark">Can you trust your ears? AI voice scams rattle
                                    US</a>
                            </h5>
                            <a href="news.html" className="fw-bold">continue reading</a>
                        </div>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358706-untitled-design.jpg?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                    </div>


                    <div className="latest-new read-m">
                        <div className="col-9 float-start">
                            <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                                <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Business</a></li>
                                <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                            </ul>
                            <h5 className="h5 fw-bold">
                                <a href="news.html" className="nav-link p-0 m-0 text-dark">China: Marriages drop to historic low as nation
                                    deals with declining birth rate</a>
                            </h5>
                            <a href="news.html" className="fw-bold">continue reading</a>
                        </div>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358720-2023-06-11t125624z2lynxmpej5a04trtroptp4health-coronavirus-china-wedding-dresses.JPG?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                    </div>


                    <div className="latest-new read-m">
                        <div className="col-9 float-start">
                            <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                                <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Environment</a></li>
                                <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                            </ul>
                            <h5 className="h5 fw-bold">
                                <a href="news.html" className="nav-link p-0 m-0 text-dark">Mother of Amazon miracle children survived for
                                    four days, told them to leave her to save themselves</a>
                            </h5>
                            <a href="news.html" className="fw-bold">continue reading</a>
                        </div>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358693-untitled-design-2023-06-12t091902995.png?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                    </div>


                    <div className="latest-new read-m">
                        <div className="col-9 float-start">
                            <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                                <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Business</a></li>
                                <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                            </ul>
                            <h5 className="h5 fw-bold">
                                <a href="news.html" className="nav-link p-0 m-0 text-dark">US billionaire George Soros hands over $25
                                    billion empire to younger son Alex</a>
                            </h5>
                            <a href="news.html" className="fw-bold">continue reading</a>
                        </div>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358692-soros.png?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                    </div>


                    <div className="latest-new read-m">
                        <div className="col-9 float-start">
                            <ul className="navbar-nav d-flex flex-row mt-1 mb-1">
                                <li className=" dark"><a className="text-dark nav-link fs-6 fw-bold" href="#">Entertainment</a></li>
                                <li className="mx-1"><span className="mt-2 d-block">12 June, 2023</span></li>
                            </ul>
                            <h5 className="h5 fw-bold">
                                <a href="news.html" className="nav-link p-0 m-0 text-dark">Morning brief: 13 attacked in street party in
                                    New York; Soros hands over empire to son, & more</a>
                            </h5>
                            <a href="news.html" className="fw-bold">continue reading</a>
                        </div>
                        <div className="col-3 float-end">
                            <img
                                src="https://cdn.wionews.com/sites/default/files/styles/photo_2/public/2023/06/12/358704-untitled-design.png?imwidth=640"
                                alt="image" className="img-fluid "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-3 mt-3">
                <div className="row mt-2 bg-primary p-3">
                    <div className="col-sm-2 text-white">
                        <p className="mb-0" style={{color:"#9a91f9"}}><strong>Market Snapshot</strong></p>
                        <span style={{color:"#9a91f9"}}>11:40 PM</span>
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
                        <a href="#" className="block  fs-6 nav-link" style={{color:"#9a91f9"}}>View All</a>
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
                            <li className="bg-Success list-group-item p-4">
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
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}