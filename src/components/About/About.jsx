import React from 'react'
import Header from '../Header/Header';
import "./about.css"
import img5 from "./mail-image.svg"
import img4 from "./behance-image.svg"
import img3 from "./linkedin-image.png"
import img2 from "./insta-image.svg"
import img1 from "./dribble-image.svg"
import img from "./parthiv.png"
const About = () => {
  return (
    <section className='about-page'> 
        <div className="about-header">
            <Header />
        </div>
        <div className="main">
            <div className='content-and-img'>
                <img src={img} alt="parthiv-img" />
            </div>
            <div className="about">
                <h1>Parthiv B Borda</h1>
                <h2>from Surat, Gujarat</h2>
                <h3>My academic history in Computer Engineering started at Tapi Diploma College in Surat, where I maintained a CGPA of 9+ throughout my diploma program.<br /><br />
What ignited my passion for UX/UI design was my fascination with Anime's innovative art style. <br /><br />
My main interest lies in <span>creating user-friendly interfaces that improve user experiences.</span> To achieve my career goal of being a successful freelance UX/UI designer, I have completed various UI design projects that have boosted my technical skills and taught me how to work cohesively with others. <br /><br />
Don't hesitate to shoot me an email at <span>uxdesigner.parthiv@gmail.com</span> or connect with me on LinkedIn if you're interested in collaborating on any design work or discussing UX/UI design news. Take this creative journey with me!</h3>
            </div>
        </div>

        <div className="about-part1">
            <div className="bar">

            </div>
            <h1>Let's Talk</h1>
            <div className="bar1">

            </div>
        </div>

        <div className="about-part2">
            <a href="https://dribbble.com/parthiv_borda">
               <img className='dribble-img' src={img1} alt="dribble-img" />
               <p>DRIBBLE</p>
            </a>
            <a href="https://www.instagram.com/parthiv.ui/">
               <img src={img2} alt="insta-img" />
               <p style={{marginLeft:"45px"}} className='insta' >INSTAGRAM</p>
            </a>
            <a href="https://www.linkedin.com/in/parthiv-borda-1696b123a/">
               <img src={img3} alt="linkedIn-img" />
               <p>LINKEDIN</p>
            </a>
            <a href="https://www.behance.net/parthivborda">
               <img src={img4} alt="behance-img" />
               <p>BEHANCE</p>
            </a>
            <a href="mailto:uxdesigner.parthiv@gmail.com">
               <img src={img5} alt="mail-img" />
               <p style={{marginLeft:"100px"}}>MAIL</p>
            </a>
            
        </div>

        <div className='about-part3'>
        
        </div>
        <div className="about-part4">
           <p>I do, what it's need to be done. Cause, that’s how universe works.</p>
        </div>

    </section>
  )
}

export default About