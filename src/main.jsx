
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from'./App.jsx'
import "./App.css"
import { StrictMode } from 'react'
// import Profile from "./profile.jsx"
// import { createElement, useEffect } from 'react'
// import Skill from'./skill.jsx'
// import Contact from "./contact.jsx"
// import Project from './project'


// import Nav from "./nav.jsx"
import { Container } from 'react-bootstrap'

import 'aos/dist/aos.css'
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom'
// import Home from './home.jsx'

createRoot(document.getElementById('root')).render(
    <>
        {/* <App/>
        <Home/>
        <Project/>
        <Skill/>
        <Profile />
        <Contact/>
          
           */}
<StrictMode>
<App />

</StrictMode>,
    
        </>

)




