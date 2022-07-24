import React from 'react'
import { Footer } from './Footer.js';
import './About.css';
import { Header } from './Header.js';

export const About = () => {
  return (
   <>
   <Header/>
   <div className='cardss'>
    <div className='cardmain1'>
        <img className='imagem' src='https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
    </div>
    </div>
    <div>
    <h1 className='text-center p-4'>Our Team</h1>

    </div>
    <div className='team'>
        
            <div className='cardm'>
                <img className='image' src='https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                 <p>You would be hard-pressed to find a company that doesn’t at least partially rely on computers, IT software, and the networks that connect them during their day-to-day tasks. Simply put, most businesses and organizations would crumble without functioning IT systems. So, what exactly is information technology?</p>
            </div>
            <div className='cardm'>
                <img className='image' src='https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                 <p>You would be hard-pressed to find a company that doesn’t at least partially rely on computers, IT software, and the networks that connect them during their day-to-day tasks. Simply put, most businesses and organizations would crumble without functioning IT systems. So, what exactly is information technology?</p>
            </div>
        </div>
        <div className='cardla'>
                <img className='imagel' src='https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'/>
                 <p>You would be hard-pressed to find a company that doesn’t at least partially rely on computers, IT software, and the networks that connect them during their day-to-day tasks. Simply put, most businesses and organizations would crumble without functioning IT systems. So, what exactly is information technology?</p>
            </div>
    <Footer/>
   </>
  )
}
