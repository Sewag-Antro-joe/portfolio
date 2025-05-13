import "./App.css"
import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './nav.jsx'
import { BrowserRouter,Routes,Router,Route,Link} from 'react-router-dom'

 
export default function Skill(){
    useEffect(()=>{
        AOS.init();
            },[])
    return(
        <>
            <div className="  skill  p-lg-5 ">
            <Nav/>
        {/* <h1 className=" text-white d-flex justify-content-center mb-5">Skills</h1> */}
        <div className="row d-flex skill-row row-12 m-5  " >
            <div className="col col-lg-5 col-sm-6 col-md-8   mb-5"data-aos="fade-right" data-aos-delay="700">
                <h5>Html </h5>
                <span className="bar "><span className="html"></span></span>

            </div>
            <div className="col col-lg-5 col-sm-6  col-md-8 ms-5 mb-5"data-aos="fade-left" data-aos-delay="600">
                <h5>Css </h5>
                  <span className="bar "><span className="css"></span></span>
            </div>
           
           
        </div>
        <div className="row d-flex skill-row row-12 m-5  mb-5">
            <div className="col col-lg-5 col-sm-6 col-md-8   mb-5"data-aos="fade-right" data-aos-delay="700">
                <h5>js </h5>
                <span className="bar "><span className="js"></span></span>

            </div>
            <div className="col col-lg-5 col-sm-6  col-md-8 ms-5 mb-5"data-aos="fade-left" data-aos-delay="600">
                <h5>React </h5>
                  <span className="bar "><span className="rct"></span></span>
            </div>
           
           
        </div>
        <div className="row d-flex skill-row row-12 m-5  " >
            <div className="col col-lg-5 col-sm-6 col-md-8   mb-5"data-aos="fade-right" data-aos-delay="700">
                <h5>Node.js</h5>
                <span className="bar "><span className="node"></span></span>

            </div>
            <div className="col col-lg-5 col-sm-6  col-md-8 ms-5 mb-5"data-aos="fade-left" data-aos-delay="600">
                <h5>Figma </h5>
                  <span className="bar "><span className="figma"></span></span>
            </div>
           
           
        </div>
    </div>
    </>
    )

}