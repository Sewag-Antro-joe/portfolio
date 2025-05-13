import React from 'react'
import Contact from './contact'
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom'

function menu() {

    let menu1 = document.getElementById('menu')
    menu1.style.display = 'block'




}
function menu2() {
    let menu2 = document.getElementById('menu')
    menu2.style.display = 'none'
    menu2.style.right = '5rem'
    menu2.style.transition = '2s'

}

const nav = () => {
    return (
        <div>
            <ol className=' menu2' id="menu2">
                <li className='p-2'><Link to='/Skill'>Skills</Link></li>
                <li className='p-2'><Link to='/Profile'>Profile</Link></li>
                <li className='p-2'><Link to='/Project'>projects</Link></li>
                <li className='p-2'><Link to='/Contact'>contact</Link></li>

            </ol>
            <nav className='navbar ' >
                <div className='container-fluid justify-content-start nav-in '>
                    <button className='navbar-toggler' onClick={menu} type='button' data-bs-toggle="collapse" data-bs-target="#navbarnav">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                </div>

                <div className='menu ' >

                    <ol className='pt-3 ps-3' id="menu">
                        <div className=''> <button className='close-btn  ps-2 pe-2 ' onClick={menu2}><b>X</b></button></div>

                        <li className='m-3 ps-5 pe-5 pt-2 pb-2'><Link to='/'>Home</Link></li>
                        <li className='m-3 ps-5 pe-5 pt-2 pb-2'><Link to='/Skill'>Skills</Link></li>
                        <li className='m-3 ps-5 pe-5 pt-2 pb-2'><Link to='/Profile'>Profile</Link></li>
                        <li className='m-3 ps-5 pe-5 pt-2 pb-2'><Link to='/Project'>projects</Link></li>
                        <li className='m-3 ps-5 pe-5 pt-2 pb-2'><Link to='/Contact'>contact</Link></li>

                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default nav
