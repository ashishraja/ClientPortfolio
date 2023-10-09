import React , {useEffect} from 'react'
import img2 from "../Assets/03..png"
import "./flickfuse.css"
import img3 from "../Assets/flickfuse-painpoints.svg"
import wallSol from "../Assets/flickfuse-solutions.png"
import processImg from "../Assets/process-frame.svg"
import userImg from "../Assets/userflow-frame-fuse.svg"
import designImg from "../Assets/design-system.svg"
import productImg from "../Assets/product.png"


const FlickFuse = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <section className='flickfuse-page'>
        <div className="hero-section">
            <div>
                    <div className='heading'>
                        <div>
                           <h1 className='picasso-heading'>FlickFuse</h1>
                        </div>
                        <div className='img'>
                            <img src={img2} alt="image01" />
                        </div>
                        
                    </div>
                    <div>
                        <p> 
                           A project that allows to watch movie and series.
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
                <img src={wallSol} alt="wall-sol" style={{paddingLeft:"20px"}} />
            </div>
        </div>
        <div  style={{padding:"100px 40px"}}>
            <img src={processImg} alt="process-img" />
        </div>
        <div  style={{padding:"200px 90px"}}>
            <img src={userImg} alt="user-img" />
        </div>
        <div  style={{padding:"100px 0px 0 0px"}}>
            <img style={{width:"100%"}} src={designImg} alt="design-img" />
        </div>
        <div  style={{padding:"200px 0 0 0px"}}>
            <img style={{width:"100%"}} src={productImg} alt="product-img" />
        </div>
    </section>
  )
}

export default FlickFuse