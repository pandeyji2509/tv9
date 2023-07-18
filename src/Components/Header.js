import React, { useState } from 'react';
import "./component.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import { Dropdown } from "@nextui-org/react";
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
export default function Header() {
  const d = new Date();
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <>
      <div className="cont">
        <div className="row border-bottom pb-3">
          <div className="col-xs-4 col-sm-3 col-md-3 left-icon pl-0">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row mt-4 float-start">
              <li className="mx-3 mt-1"><a href="#"><i className="bi bi-search fs-6 text-dark"></i></a></li>
              {/* <li className="mx-3 mt-1"><a href="#"><i className="bi bi-bell-fill fs-6 text-dark"></i></a></li> */}
            </ul>
          </div>
          <div className="col-xs-4 col-sm-6 col-md-5 mt-3 text-center logo-main">
            <img height="45px" src={logo} />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-sm-2">
            <p id="current-date"><strong>{`${d.toDateString()}`.slice(0,3)}</strong><br />
            {`${d.toDateString()}`.slice(3,15)}
            </p>
          </div>
          <div className="col-sm-10">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                {/* <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">News</button> */}
                <Link to="/" className="nav-link active ban" id="pills-home-tab" data-bs-target="#pills-home"
                  role="tab" aria-controls="pills-home" aria-selected="true">News</Link>
              </li>
              <li className="nav-item" role="presentation">
                {/* <button className="nav-link" id="pills-gravitas-tab" data-bs-toggle="pill" data-bs-target="#pills-gravitas"
              type="button" role="tab" aria-controls="pills-gravitas" aria-selected="true">Gravitas</button> */}
                <Link as={Link} to={"/gravitas"} className="nav-link ban">Gravitas</Link>
                {/* <Link to="/gravitas" class="nav-link">Gravitas</Link> */}
              </li>
              <li className="nav-item" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/World"}>World</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Science"}>Science</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Entertainment"}>Entertainment</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Sports"}>Sports</Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Business"}>Business</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link as={Link} onClick={openModal} className="nav-link bi bi-tv fs-6 band" > Live Tv

                  {modal ? (
                    <section className="modal__bg">
                      <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                          <IoCloseOutline
                            className="modal__close"
                            arial-label="Close modal"
                            onClick={setModal}
                          />
                          <div className="modal__video-align">
                            {videoLoading ? (
                              <div className="modal__spinner">
                                <BiLoaderAlt
                                  className="modal__spinner-style"
                                  fadeIn="none"
                                />
                              </div>
                            ) : null}
                            <iframe
                              className="modal__video-style"
                              onLoad={spinner}
                              loading="lazy"
                              width="800"
                              height="500"
                              src="https://www.youtube.com/embed/4UZrsTqkcW4"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : null}
                </Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Future"}>Future</Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Social"}>Social</Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Education"}>Education</Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/Personal"}>Personal Finance</Link>
              </li>
              {/* <Dropdown>
                <Dropdown.Button flat><GiHamburgerMenu size={25} /></Dropdown.Button>
                <Dropdown.Menu  css={{ width:"$150"}}>
                  <Dropdown.Item key="new" > Future </Dropdown.Item>
                  <Dropdown.Item key="new"> Social </Dropdown.Item>
                  <Dropdown.Item key="new">Education </Dropdown.Item>
                  <Dropdown.Item key="new"> Personal Finance </Dropdown.Item>
                  <Dropdown.Item key="new"> Global Governance  </Dropdown.Item>
                  <Dropdown.Item key="new"> Civic Tech  </Dropdown.Item>
                  <Dropdown.Item key="new">Data Privacy  </Dropdown.Item>
                  <Dropdown.Item key="new">Indigenous Rights </Dropdown.Item>
                  <Dropdown.Item key="new">Mental Health </Dropdown.Item>
                  <Dropdown.Item key="new"> Emerging Markets </Dropdown.Item>
                  <Dropdown.Item key="new"> Humanitarian Innovation </Dropdown.Item>
                  <Dropdown.Item key="new"> Alternative Education </Dropdown.Item>
                  <Dropdown.Item key="new"> Circular Economy</Dropdown.Item>
                  <Dropdown.Item key="new"> Impactful Philanthropy </Dropdown.Item>
                  <Dropdown.Item key="new"> Biohacking </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}


            <div className='box' ><BiDotsHorizontalRounded     style={{
      position: 'absolute',
      top: '4.5px',
      right: '7px',
    }} size={30}/>
                  <Dropdown>
            <Dropdown.Button  light>
            </Dropdown.Button>
            <Dropdown.Menu>
                  <Dropdown.Item key="new"> Global Governance  </Dropdown.Item>
                  <Dropdown.Item key="new"> Civic Tech  </Dropdown.Item>
                  <Dropdown.Item key="new">Data Privacy  </Dropdown.Item>
                  <Dropdown.Item key="new">Indigenous Rights </Dropdown.Item>
                  <Dropdown.Item key="new">Mental Health </Dropdown.Item>
                  <Dropdown.Item key="new"> Emerging Markets </Dropdown.Item>
                  <Dropdown.Item key="new"> Humanitarian Innovation </Dropdown.Item>
                  <Dropdown.Item key="new"> Alternative Education </Dropdown.Item>
                  <Dropdown.Item key="new"> Circular Economy</Dropdown.Item>
                  <Dropdown.Item key="new"> Impactful Philanthropy </Dropdown.Item>
                  <Dropdown.Item key="new"> Biohacking </Dropdown.Item>
            </Dropdown.Menu>
             </Dropdown>
          </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}