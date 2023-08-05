import React, { useState ,useEffect} from 'react';
import "./component.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { Dropdown } from "@nextui-org/react";
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
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
  const[hov,sethov]= useState(false);
  const[hove,sethove]= useState(false);
  const hover=()=>{
    sethov(true);
  }
  const hover1=()=>{
    sethove(true);
  }
  const location = useLocation();
  useEffect(() => {
    sethov(false);
    console.log("location",location);
  }, [location.pathname]);
  useEffect(()=>{
    sethove(false);
    console.log("location",location);
  },[location.pathname])
  // $('.in,.open').removeClass('in open');
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const months = date.getMonth();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = date.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dat = date.getDate();
  return (
    <>
      <div className="cont">
        <div className="row border-bottom sx">
          <div className="col-xs-4 col-sm-3 col-md-3 left-icon pl-0">
          <div className='fg '>
        <div class="dropdown navvv">
          <button class="dropbtn"><GiHamburgerMenu size={25} /></button>
          <div class={`dropdown-content ${hove?"noHover":""}`}>
          <ul>
            <li onClick={()=>hover1()}><Link to="/gravitas" >Gravitas</Link></li>
            <li onClick={()=>hover1()}><Link to="/world" >World</Link></li>
            <li onClick={()=>hover1()}><Link to="/science" >Science</Link></li>
            <li onClick={()=>hover1()}><Link to="/entertainment" >Entertainment</Link></li>
            <li onClick={()=>hover1()}><Link to="/sports" >Sports</Link></li>
            <li onClick={()=>hover1()}><Link to="/buisness" >Buisness</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Future" >Future</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Social" >Social</Link></li>
            <li onClick={()=>hover1()}><Link  to="/pages/Education">Education</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Personal Finance">Personal Finance</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Global" >Global</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Civic Tech and digital democracy" >Civic</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Data Privacy" >Data Privacy</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Indigeneous rights and culture" >Indigeneous rights</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Mental Health" >Mental Health</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Emerging Markets" >Emerging Markets</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Humanitarian innovation" >Humanitarian innovation</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Alternative Education" >Alternative Education</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Circular Economy" >Circular Economy</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Impactful Philanthropy" >Impactful Philanthropy</Link></li>
            <li onClick={()=>hover1()}><Link to="/pages/Biohacking and Transhumanism" >Biohacking</Link></li>
            <li onClick={()=>hover1()}><Link to="/Livetv" as={Link}  className="nav-link bi bi-tv fs-6 band" > Live Tv </Link></li>
          </ul>

          </div>
        </div>
        <p className='sea'><a href="#"><i className="bi bi-search fs-6 text-dark sea navvv"></i></a></p>
            <p id="current-date" className='mn vvvv navvv'><strong>{`${weekday[day]}`}</strong><br />
              {`${dat} ${month[months]} ${year}`}
            </p>  
        </div>
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row mt-4 float-start">
               <li className="mx-3 mt-1"><a href="#"><i className="bi bi-bell-fill fs-6 text-dark"></i></a></li> 
            </ul>   */}
        </div>
      
          <div className="col-xs-4 col-sm-6 col-md-5 mt-3 text-center logo-main">
            <Link to="/" className='tv'><h1 className='head'>TV 369</h1></Link>
          </div> 
        </div>   
        <p className='navvv'><strong>{`${weekday[day]}`}</strong><br />
              {`${dat} ${month[months]} ${year}`}
            </p> 
        <div className="row mt-1 navv">
          <div className="col-sm-2">
            <p id="current-date"><strong>{`${weekday[day]}`}</strong><br />
              {`${dat} ${month[months]} ${year}`}
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
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/pages/Future"}>Future</Link>
              </li>
              <li className="nav-item ban" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/pages/Social"}>Social</Link>
              </li>
              <li className="nav-item ban " role="presentation">
                <Link as={Link} className="nav-link ban vvvv" to={"/pages/Education"}>Education</Link>
              </li>
              <li className="nav-item ban qqq" role="presentation">
                <Link as={Link} className="nav-link ban" to={"/pages/Personal Finance"}>Personal Finance</Link>
              </li>
             
              <li className="nav-item" role="presentation">
                <Link as={Link} onClick={openModal} className="nav-link bi bi-tv fs-6 band" > Live Tv
                  {modal ? (
                    <section className="modal__bg ">
                      <div className="modal__align ">
                        <div className="modal__content" modal={modal}>
                          <IoCloseOutline
                            className="modal__close"
                            arial-label="Close modal"
                            onClick={setModal}
                          />
                          <div className="modal__video-align " >
                            {videoLoading ? (
                              <div className="modal__spinner ">
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
              <div className='box' >
                <div class="dropdown ">
                  <button class="dropbtn"><BiDotsHorizontalRounded size={25} /></button>
                  <div class={`dropdown-content  dop ${hov?"noHover":""}`}>
                  <ul>
                    <li className='asd1' onClick={()=>hover()}><Link  to="/pages/Education">Education</Link></li>
                    <li className='asd' onClick={()=>hover()}><Link to="/pages/Personal Finance">Personal Finance</Link></li>
                    <li className='' onClick={()=>hover()}><Link className='qqq' to="/pages/Global" >Global</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Civic Tech and digital democracy" >Civic</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Data Privacy" >Data Privacy</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Indigeneous rights and culture" >Indigeneous rights</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Mental Health" >Mental Health</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Emerging Markets" >Emerging Markets</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Humanitarian innovation" >Humanitarian innovation</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Alternative Education" >Alternative Education</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Circular Economy" >Circular Economy</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Impactful Philanthropy" >Impactful Philanthropy</Link></li>
                    <li onClick={()=>hover()}><Link to="/pages/Biohacking and Transhumanism" >Biohacking</Link></li>
                  </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}