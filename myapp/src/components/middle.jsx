import React from 'react'
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

    </div>
  
  )
}
