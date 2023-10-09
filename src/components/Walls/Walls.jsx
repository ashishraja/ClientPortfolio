import React , {useEffect} from 'react'
import img2 from "../Assets/02..png"
import "./walls.css"
import img3 from "../Assets/walls-pain-pointes.png"
import wallSol from "../Assets/walls-solution.svg"
import processImg from "../Assets/process-frame.svg"
import userImg from "../Assets/userflows-frame.svg"
import designImg from "../Assets/design-system-frame.svg"
import productImg from "../Assets/product-frame-walls.svg"

const Walls = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
      }, []);

  return (
    <section className='walls-page'>
        <div className="hero-section">
            <div>
                    <div className='heading'>
                        <div>
                           <h1 className='picasso-heading'>Walls</h1>
                        </div>
                        <div className='img'>
                            <img src={img2} alt="image01" />
                        </div>
                        
                    </div>
                    <div>
                        <p> 
                            A project that allows to preview and set wallpapers.
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
                <img src={wallSol} alt="wall-sol" style={{paddingLeft:"60px"}} />
            </div>
        </div>
        <div style={{padding:"100px 40px"}}>
            <img src={processImg} alt="process-img" />
        </div>
        <div style={{padding:"200px 90px"}}>
            <img src={userImg} alt="user-img" />
        </div>
        <div style={{padding:"100px 0px 0 0px"}}>
            <img style={{width:"100%"}} src={designImg} alt="design-img" />
        </div>
        <div style={{padding:"100px 0 0 0px"}}>
            <img style={{width:"100%"}} src={productImg} alt="product-img" />
        </div>
    </section>
  )
}

export default Walls