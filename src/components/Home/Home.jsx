import React, { useState } from 'react'
import Header from '../Header/Header';
import "./home.css";
import img from "../Assets/image01.png"
import img1 from "../Assets/02..png"
import img2 from "../Assets/03..png"
import {Element} from "react-scroll"
import { Link } from 'react-router-dom';

const Home = () => {
    // const [link , setLink] = useState();
    // const navigateHandler = () => {
        
    // }

  return (
    <section className="section">
        <div className='home'>
            <Header className="header" />
            <div className="main">
                  <p>Namaste</p>
                  <h1>
                    <span>I’M a designer, </span>
                    <span>specialized in UI/UX and </span>
                    <span>strongly focused on creating</span>
                    <span>beautiful, functional UI’s.</span>
                  </h1>
            </div>
        </div>
    
        <Link to="./picasso" style={{cursor:"pointer"}}>
            <div className="part2"></div>
        </Link>
        
        <Element name="project" className="part3">
            <div>
                <Link style={{textDecoration:"none"}} to="./picasso">
                    <h1>Picasso</h1>
                </Link>
                <p> A project aimed at generating editable images using AI technology.</p>
            </div>
            <div className='img'>
                <img src={img} alt="image01" />
            </div>
        </Element>
    
        <Link to="./walls" style={{cursor:"pointer"}}>
            <div className="part4"></div>
        </Link>
    
        <div className="part3 part5">
            <div>
                <Link style={{textDecoration:"none"}} to="./walls" >
                    <h1>walls</h1>
                </Link>
                <p> A project that allows to preview and set wallpapers.</p>
            </div>
            <div className='img'>
                <img src={img1} alt="image01" />
            </div>
        </div>

        <Link style={{cursor:"pointer"}} to="./flickfuse" >
            <div className="part6"></div>
        </Link>

    
        <div className="part3 part7">
            <div>
                <Link style={{textDecoration:"none"}} to="./flickfuse">
                    <h1>FlickFuse</h1>
                </Link>
                <p> A project that allows to watch movies and series.</p>
            </div>
            <div className='img'>
                <img src={img2} alt="image01" />
            </div>
        </div>
        
        <div className="part8">
            <h1>Contact at</h1>
            <div>
                <a href="mailto:uxdesigner.parthiv@gmail.com" className='link'>
                    <p>uxdesigner.parthiv@gmail.com</p>
                </a>
            </div>
        </div>
    
        <div className='part9'>
            <h3>Have a great day!</h3>
            <a href="https://portfolio-chi-lyart-11.vercel.app/" >
                Site created by Ashish Santani
            </a>
        </div>
    </section>

  )
}

export default Home