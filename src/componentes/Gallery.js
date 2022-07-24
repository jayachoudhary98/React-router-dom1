import React from 'react'
import { Footer } from './Footer';
import { Header } from './Header';
import './Gallery.css';

export const Gallery = () => {
  return (
    <>
    <Header/>
    <div>
        <img  className='mainimg' src='https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
    </div>
    <div className='secsect'>
        <div className='parafirst'>
            <h2>Today's Technology Importance</h2>
            <p>Technology is the result of accumulated knowledge and application of skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of all machines, with or without detailed knowledge of their function, for the intended purpose of an organization</p>
        </div>
        <div className='imgsec'>
            <img className='imgagee' src='https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        </div>
    </div>
    <h1 className='text-center p-4'>Explore the Technology</h1>

<div className='cards'>
    <div className='cardmain'>
        <img className='image-height' src='https://images.unsplash.com/photo-1646373716853-3ae9572036ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
    </div>
    <div className='cardmain'>
    <img className='image-height' src='https://images.unsplash.com/photo-1524561506982-601111bed7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
    </div>
    <div className='cardmain'>
        <img className='image-height' src='https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=899&q=80'/>
    </div>
    <div className='cardmain'>
        <img className='image-height' src='https://images.unsplash.com/photo-1646373716853-3ae9572036ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
    </div>
</div>

    <Footer/>
    </>
  )
}
