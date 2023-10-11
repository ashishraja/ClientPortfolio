import React , {useEffect} from 'react'
import img2 from "../Assets/image01.png"
import "./picasso.css"
import img3 from "../Assets/pain-points.svg"
import rectangleImg from "../Assets/Rectangle4.png"
import solutions from "../Assets/solutions.svg"
import processImg from "../Assets/process-frame.svg"
import userImg from "../Assets/userflow-frame.svg"
import designImg from "../Assets/designsystem-frame.svg"
import productImg from "../Assets/product-frame (1).png"

const Picasso = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <section className="picasso-page">
        <div className="hero-section">
            <div>
                <div className="part3 part5 picasso-division">
                    <div>
                        <h1>Picasso</h1>
                        <p> A project aimed at generating editable images using AI technology where User’s can create(prompt) images and has customizable options to edit the images.</p>
                    </div>
                    <div className='img'>
                        <img src={img2} alt="image03" />
                    </div>
                </div>
            </div> 
            <div className='div2'>
                <img src={rectangleImg} alt="6.png" />
            </div>
        </div> 
        <div className="userpt-frame">
                <div className="heading">
                    <div>
                        <div>
                            <h1>User pain points</h1>
                        </div>
                        <div>
                            <p>
                            After understanding the problem statement, I started searching
                            for User Pain points.Did some couple of User Interviews and found
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
            <div>
                <img src={solutions} alt="wall-sol" />
            </div>
        </div>
    

        <div className="svgs">    
            <div>
                <div>
                    <img src={processImg} alt="process-img" />
                </div>
                <div>
                    <img className="userflow" src={userImg} alt="user-img" />
                </div>
            </div>
        
            <div>
                <div>
                    <img src={designImg} alt="design-img" />
                </div>
                <div>
                    <img src={productImg} alt="product-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Picasso