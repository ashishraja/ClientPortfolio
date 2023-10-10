import React , {useEffect} from 'react'
import img2 from "../Assets/03..png"
import "./flickfuse.css"
import img3 from "../Assets/flickfuse-painpoints.svg"
import wallSol from "../Assets/flickfuse-solutions.png"
import processImg from "../Assets/process-frame.svg"
import userImg from "../Assets/userflow-frame-fuse.svg"
import designImg from "../Assets/design-system.svg"
import productImg from "../Assets/product.png"
import rectangleImg from "../Assets/Rectangle6.png"


const FlickFuse = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <section className='flickfuse-page'>
        <div className="hero-section">
            <div>
                <div className="part3 part5">
                    <div>
                        <h1>Flickfuse</h1>
                        <p> A project that allows to watch movies and series.</p>
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
                            <p className='user-frame-para'>
                            After understanding the problem statement, I started searching
                            for User Pain points.Did some couple of User Interviews and found
                            out what are distinguish yet common pain points.
                            </p>
                        </div>
                    </div> 
                    <div>
                        <img className="pain-points" src={img3} alt="" />    
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
                 <img className="pain-points" src={wallSol} alt="" />    
            </div>
        </div>

        
        <div className="svgs">    
            <div>
                <div>
                    <img src={processImg} alt="process-img" />
                </div>
                <div class="userflow">
                    <img src={userImg} alt="user-img" />
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

export default FlickFuse