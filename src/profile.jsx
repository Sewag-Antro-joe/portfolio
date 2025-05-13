import "./App.css"
import React, { useEffect } from "react";
import AOS from 'aos'
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom'

import 'aos/dist/aos.css'
import images from './images/cn9.jpg'

import Nav from './nav.jsx'

export default function Profile() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <>

            <main className="about p-lg-5   " id="Profile">

                <Nav />
                {/* <div className="d-flex justify-content-center ">
    <span className="line2 w-75"><h5 className="text-white ps-2 pe-2 mb-5">About </h5></span>
    </div> */}
                <figure>
                    <div className="row p-lg-5 m-0 d-flex">
                        <div className="col col1 ms-lg-5 mt-lg3 pb-lg-5 mb-lg-4 ms-md-5  bg-dark" data-aos="flip-left" data-aos-delay="1000">
                         
                            <p className="text-white p-5"><h1>Skills</h1>
                               <br /> Frontend:            React, BootstrapCSS
                              <br />  Backend:             Node, Express, MongoDB
                              <br />  Languages:	     JavaScript , Java (basic)
                              <br />  Soft Skills:	Problem-solving, Teamwork, Adaptability, Communication
                            </p>
                        </div>
                        <div className="col col2 mt-lg-5 mb-lg-5  me-lg-5 me-md-5 ms-md-3" data-aos="fade-up" data-aos-delay="1500">
                            <h1 className="text-white">About Me</h1>
                            <h4 className="text-white">Hi,My name is <span className="text-primary">sewag antro</span> </h4>
                            <p className="text-white" >Passionate Web Developer with expertise in React, Bootstrap, MongoDB, and Express, dedicated to building scalable and user-friendly applications.
                               <br />   Experienced in solving realworld challenges through innovative,modern frameworks and collaborative teamwork.</p>
                            <a href="/Resume (1).pdf" download >

                                <button className="rounded-pill pe-2 btn1  ps-2">Resume</button>
                            </a>
                        </div>

                    </div>
                </figure>
            </main>
        </>
    )
}