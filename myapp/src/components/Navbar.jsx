import React from 'react'
import { FaCat,AiOutlineHeart } from 'react-icons/fa';
// import "./App.css"

let style=
{
  
    display: "flex",
    justifyContent:" space-Between"
} 
let feedSection={
  display:"flex",
  justifyContent:"spaceBetween",
  alignItem:"center",
  gap:"50px",
  marginTop:"20px",
  marginLeft:"-280px"
}
let image=
{
  width:"200px",
  height:"60px",
  margin:"auto",
  
}

 let logoSection=
{
  display:"flex",
  justifyContent:"center",
  alignItem:"center",
  marginTop:"20px",
 marginLeft:"150px"

}
let iconSection=
{
  marginTop:"40px",
  marginRight:"100px"
}

const Navbar = () => {
  return (
    <div>
        <div className="container" style={style}>
         <div className='logoSection' style={logoSection}>
          <img className='image' style={image} src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png"></img>
         </div>
         <div className='feedSection' style={feedSection}>
          <h5>Home</h5>
          <h5>About Us</h5>
          <h5>Shop</h5>
          <h5>Categories</h5>
          <h5>Contact Us</h5>
         </div>
         <div className='iconSection' style={iconSection}>
              <div><FaCat/></div>
              <div></div>
              {/* <div><AiOutlineHeart/></div> */}
              <div></div>
         </div>
         
        </div>
    </div>
  );
}

export default Navbar;