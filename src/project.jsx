
import "./App.css"

import { BrowserRouter,Routes,Router,Route,Link} from 'react-router-dom'
import Nav from './nav.jsx'

import React,{useEffect} from "react";
import images from './images/shite shuttle.png'
import images2 from './images/3wallpaper.jpg'
import images3 from './images/1wallpaper.jpg'
import images4 from './images/cn9.jpg'
import images5 from './images/cn2.jpg'
import images6 from './images/wallpaper.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Project(){
    useEffect(()=>{
        AOS.init()
    },[])
    return(
<>
        <main className=" project-row p-lg-5  "id="Project">
        <Nav/>         
        {/* <div className="d-flex  justify-content-center  ">
            <h1 className="fs-1 text-white mb-4">PROJECTS</h1>
        </div> */}
        <div className="row  m-0  ps-lg-5 ">
            <div className="col mt-3 col-md-3 col-lg-3 col-sm-8  ms-lg-5 ms-md-5" data-aos="zoom-in"data-aos-delay="500">
            <div className="card  position-relative ">
            <img src={images} height={190} alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white"><h5>shite shuttle</h5> <p>construction site website using Html,css and js</p>
                </p>
               <a href="https://antrojoe.neocities.org/site%20shuttle/home" target="_blank">
                <button className="rounded-pill ps-2 pe-2">view</button>
                </a> 
                </div>
            </div>
            </div>
            <div className="col mt-3 col-md-3 col-lg-3 col-sm-8  ms-lg-5 ms-md-5"data-aos="zoom-in"data-aos-delay="600">
            <div className="card  position-relative ">
            <img src={images6}  height={190} alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                </p>
                <button className="rounded-pill ps-2 pe-2">view</button>
                </div>
            </div>
            </div>
            <div className=" col mt-3 col-h col-lg-3 col-sm-8 col-md-3 ms-lg-5 ms-md-5"data-aos="zoom-in"data-aos-delay="700">
            <div className="card  position-relative ">
            <img src={images2} height={190}  alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                </p>
                <button className="rounded-pill ps-2 pe-2">view</button>
                </div>
            </div>
            </div>
        </div>
        <div className="row  m-0  ps-lg-5 ">
            <div className="col  mt-3  col-md-3 col-lg-3 col-sm-8 ms-lg-5 ms-md-5"data-aos="zoom-in" data-aos-delay="800">
            <div className="card  position-relative ">
            <img src={images3} height={190}  alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                </p>
                <button className="rounded-pill ps-2 pe-2">view</button>
                </div>
            </div>
            </div>
            <div className="col mt-3 col-md-3 col-lg-3 col-sm-8 ms-lg-5 ms-md-5"data-aos="zoom-in"data-aos-delay="900">
            <div className="card  position-relative ">
            <img src={images4} height={190}  alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                </p>
                <button className="rounded-pill ps-2 pe-2">view</button>
                </div>
            </div>
            </div>
            <div className=" col  mt-3  col-h col-lg-3 col-sm-8 col-md-3 ms-lg-5 ms-md-5"data-aos="zoom-in"data-aos-delay="1000">
            <div className="card  position-relative ">
            <img src={images5} height={190}  alt="" />
            <div className="card-body position-absolute " >
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                </p>
                <button className="rounded-pill ps-2 pe-2">view</button>
                </div>
            </div>
            </div>
        </div>
       
        </main>
      

</>
        
        
    )
}