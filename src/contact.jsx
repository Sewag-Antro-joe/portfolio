import "./App.css"
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom'

import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import images from './images/cn2.jpg'
import Nav from './nav.jsx'

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        //     <main className="contact ">
        //         <div className="position-relative">
        //          


        // </div>
        //     </main>
        <>
            <div id="contact" className=" " >
            <figure className="position-relative contact d-flex justify-content-center  " >
                <img src={images} alt="" />

                <figcaption className="position-absolute  ">
                <Nav/>
                    <form className="form  p-lg-5 " action=" ">

                        <div className="row  p-lg-5 row-lg-9 p-1">

                            <div className="col col1 pb-5  p-lg-5 pt-lg-3 ps-md-5 pe-md-5 pb-md-5 pt-md-2">

                                <h3 className="text-white pb-2  d-flex justify-content-center ">lets's have a talk</h3>
                                <div className="m-1"><h6>FULLNAME</h6> <input type="text" placeholder="" /></div>
                                <div className="m-1"><h6>E-MAIL</h6><input type="text " /></div>
                                <div className="m-1"><h6>TEXT AREA</h6><textarea name="" id="" cols="24" rows=""></textarea></div>
                            </div>
                            <div className="col col2 ms-1 p-lg-3 pt-lg-3 ps-md-5 pe-md-5 pb-md-5 pt-md-2 ">

                                <h3 className="text-white pb-2  d-flex justify-content-center "></h3>
                                <div className="m-1"><h6>8438677678</h6></div><br />
                                <div className="m-1"><h6>antromahi@gmail.com</h6></div><br />


                                <div className="-1"><h6>Devakottai,Sivagangai,<br />Tamil Nadu <br />630303</h6></div>
                                <div className=""> <div className="mb-2"><button className="contact-btn1 rounded-pill ps-5 pe-5 mt-md-5 mt-lg-5  mt-3 ">contact</button></div>
                                </div>


                            </div>

                        </div>
                    </form>

                </figcaption>
            </figure></div>
        </>
    )

}