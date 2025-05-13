import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import images from './images/2wallpaper.jpg'
import { createElement, useEffect } from 'react'
import "./App.css"
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom'
import App from'./App.jsx'
import Skill from'./skill.jsx'
import Contact from "./contact.jsx"
import Profile from './profile'
import Nav from './nav.jsx'




const home = () => {
    useEffect(()=>{
        AOS.init();
            },[])
  return (

<>
   
        
    <figure className='position-relative  front'>
       <img src={images} alt="" />      
       <figcaption className=' pe-5 pb-5 ms-5 '>
    
      <Nav/>
       <div className='content1 p-lg-5'>
       <h1 className=' name    ps-lg-5' data-aos="zoom-out"data-aos-delay="1000"><i><b>SEWAG ANTRO J</b></i></h1>
        <p className='text-white role ps-lg-5'data-aos="zoom-out"data-aos-delay="1200"><b>WEB DEVELOPER</b></p>
        <p className='text-white exp ps-lg-5'data-aos="fade-down"data-aos-delay="2000">i'm a web designer & front-end developer focused on crafting clean & user-friendly experiences,<br/>
     i am passionate about building excellent software that improves the lives of those around me.</p>
   <div className='mt-5  ps-lg-5' data-aos="fade-right" data-aos-delay="5000"> 
       <span className='line'><button href="#"  className='btn1  rounded-pill m-1  '>More</button></span>   
   </div>
       </div>
       </figcaption>          
    </figure>  
     
        
           
   
  
</>
  
  )
}

export default home