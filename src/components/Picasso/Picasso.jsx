import React , {useEffect} from 'react'
import img2 from "../Assets/image01.png"
import "./picasso.css"
import img3 from "../Assets/pain-points.svg"
import solution1 from "../Assets/solution1.svg"
import solution2 from "../Assets/solution2.svg"
import solution3 from "../Assets/solution3.svg"
import solution4 from "../Assets/solution4.svg"
import processImg from "../Assets/process-frame.svg"
import userImg from "../Assets/userflow-frame.svg"
import designImg from "../Assets/designsystem-frame.svg"
import productImg from "../Assets/product-frame.svg"

const Picasso = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
      }, []);

  return (
    <section className='picasso-page'>
        <div className="hero-section">
            <div>
                    <div className='heading'>
                        <div>
                           <h1 className='picasso-heading'>Picasso</h1>
                        </div>
                        <div className='img'>
                            <img src={img2} alt="image01" />
                        </div>
                        
                    </div>
                    <div>
                        <p className='picasso-content'> A project aimed at generating editable images using 
                        AI technology where User’s can create(prompt) 
                        images and has customizable options to edit the images.
                        </p>
                    </div>
            </div> 
            <div className='div2'></div>
        </div> 
        <div className="userpt-frame">
                <div className="heading">
                    <div>
                        <div>
                            <h1>User pain points</h1>
                        </div>
                        <div>
                            <p>
                            After understanding the problem statement, I started searching for
                            User Pain points. Did some couple of User Interviews and found
                            out what are distinguish yet common pain points.
                            </p>
                        </div>
                    </div>
                    <div className="userframe-img">
                        <img src={img3} alt="painpt-img" />
                    </div>
                </div>
        </div> 
        <div className='solution-part'>
            <div>
                <h1>Solutions</h1>
                <p>
                    So there were some common pain points from multiple users. 
                    Then, I started ideating on solutions for each individual problem.
                </p>
            </div>
            <div  style={{margin:"0 0 150px 40px"}}>
              <img src={solution1} alt="solution-part1" />
            </div>
            <div  style={{margin:"0 0 150px 40px"}}>
              <img src={solution2} alt="solution-part1" />
            </div>
            <div  style={{margin:"0 0 150px 40px"}}>
              <img src={solution3} alt="solution-part1" />
            </div>
            <div  style={{margin:"0 0 150px 40px"}}>
              <img src={solution4} alt="solution-part1" />
            </div>
        </div>
        <div className='process-frame' style={{padding:"100px 40px"}}>
            <img src={processImg} alt="process-img" />
        </div>
        <div className='user-frame' style={{padding:"200px 90px"}}>
            <img src={userImg} alt="user-img" />
        </div>
        <div className='design-frame' style={{padding:"150px 0px 100px 0px"}}>
            <img style={{width:"100%"}} src={designImg} alt="design-img" />
        </div>
        <div className='design-frame' style={{padding:"100px 0 0 0px"}}>
            <img style={{width:"100%"}} src={productImg} alt="design-img" />
        </div>
    </section>
  )
}

export default Picasso