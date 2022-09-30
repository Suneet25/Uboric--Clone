import React,{useState} from 'react';
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
const  container=
{
    height:"300px",
    width:"96%",
    display:"flex",
    justifyContent:"spaceEvenly",
    margin:"auto",
marginTop:"20px",
gap:"20px",
border:"2px solid black"
}



export const Middle = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };



  return (
    <div>
  <div className='container' style={container}>
        <div className='imgs' ><img style={{height:"300px",width:"473px"}}  src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/kithchen-tools.jpg" /></div>
        <div className='imgs' ><img style={{height:"300px",width:"473px"}}  src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Air-Tight-Containers.jpg" /></div>
        <div className='imgs' ><img style={{height:"300px",width:"473px"}}  src="https://www.uboric.com/wp-content/uploads/2022/08/81UV5oidWoL._SL1500_.jpg" /></div>
    </div>
    <div style={{marginTop:"100px"}}>
        <h1 >Shop By Category</h1>
        <p><u style={{color:"#ff6f61"}}><b>Clothing</b></u></p>
    </div>
    <div className='categories' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"80px"}}>
      <div><h3         style={{
            color: isHovering ? '#ff6f61' : 'black'
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >Men's Fashion (120)</h3></div>
      <div><h3     style={{
            color: isHovering ? '#ff6f61' : 'black'
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}   >shirt & boxer (4)</h3></div>
      <div><h3     style={{
            color: isHovering ? '#ff6f61' : 'black'
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}  >T-shirts (13)</h3></div>
      <div><h3     style={{
            color: isHovering ? '#ff6f61' : 'black'
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}  >Trunks & Briefs (59)</h3></div>
      <div><h3     style={{
            color: isHovering ? '#ff6f61' : 'black'
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}  >Shirts (41)</h3></div>
    </div>
    <div className='arrows' style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
      <div style={{marginLeft:"100px"}} ><FaAngleLeft style={{ width:"42px",height:"42px",color:"#a0a0a0"}}  /></div>
      <div style={{marginRight:"100px"}}><FaAngleRight style={{ width:"42px",height:"42px" ,color:"#a0a0a0"}} /></div>
    </div>
    </div>
  
  )
}
