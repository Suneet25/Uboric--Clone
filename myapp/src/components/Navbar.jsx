import React from 'react'
import {FaRegHeart} from 'react-icons/fa';
import {BiUser} from 'react-icons/bi';
import {BiSearch} from 'react-icons/bi';
import {BsBag} from 'react-icons/bs';
// import "./App.css"


const Navbar = () => {
  return (
    <div>
        <div className="container" style={{
 display:"flex",
 gap:"30px"
  }}>
         <div className='logoSection' style={{  display:"flex",
         width:"400px"}}>
          <img className='image' style={{ width:"200px",
  height:"60px",
  margin:"auto"}} src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png"></img>
         </div>
         <div className='feedSection' style={{ 
          display:"flex",
         justifyContent:"space-evenly",
         alignItems:"center",
        
         width:"800px"}}>
         <div><h4>Home</h4></div> 
          <div><h4>About Us</h4></div>
          <div><h4>Shop</h4></div>
          <div><h4>Categories</h4></div>
          <div><h4>Contact Us</h4></div>
         </div>
         <div className='iconSection' style={{    display:"flex",
         justifyContent:"space-evenly",
         alignItems:"center",
        
         width:"200px" }}>
              <div><BiSearch/></div>
              <div><BiUser/></div>
              <div><FaRegHeart/></div>
              <div><BsBag/></div>
              {/* <div><AiOutlineHeart/></div> */}
              <div></div>
         </div>
         
        </div>
    </div>
  );
}

export default Navbar;