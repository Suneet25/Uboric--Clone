import React from 'react'
import { FaFacebook,FaInstagram,FaWhatsapp } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div>

<div className='container' style={{height:"auto",width:"100%",margin:"auto",marginTop:"40px",position:"relative",backgroundImage:"url(	https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/footer_bg_1920.png)"}}>
<div className='box'>

<h2 style={{margin:"auto",textAlign:"center",color:"white",marginTop:"40px"}}>Want style Ideas and Treats?</h2>
<div className='input' style={{display:"flex",gap:"10px",margin:"auto",alignItems:"center"}}>
<input type="email" placeholder='Enter Email *' style={{    padding: "17px 30px",
    width: "20%",
    border:"none",
       backgroundColor: "#303030",
    color: "var(--rz-color-lighter)",
    border: "1px solid #00000000",
    marginLeft:"500px",marginTop:"30px"}} />
    <button style={{padding: "17px 35px",
    backgroundColor: "#525252",
    color: "white",fontSize:"16px",marginTop:"30px",fontWeight:"500"}}>Subscribe</button>
</div>

</div>
<div className='last' style={{display:"flex",gap:"20px",height:"280px",width:"70%",margin:"auto",marginTop:"30px"}}>
<div style={{width:"300px",display:"flex",flexDirection:"column"}}>
    <img src="	https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png" width="100%" />
    <div style={{display:"flex",gap:"15px",marginTop:"20px"}}>
        <div style={{color:"#a0a0a0",fontSize:"26px"}}><FaFacebook/></div>
        <div  style={{color:"#a0a0a0",fontSize:"26px"}}><FaInstagram/></div>
    </div>
</div>
<div style={{width:"200px",color:"white"}}>
    <ul style={{listStyle:"none",textAlign:"left"}}>
        <li><h4>SHOP</h4></li>
        <li style={{color:"#a0a0a0"}}>My account</li>
  
    </ul>
</div>
<div style={{width:"200px",color:"white"}}>
<ul style={{listStyle:"none",textAlign:"left"}}>
        <li><h4>SUPPORT</h4></li>
        <li style={{color:"#a0a0a0"}}>About Us</li>
        <li style={{color:"#a0a0a0"}}>Contact Us</li>
    </ul>
</div>
<div style={{width:"200px",color:"white"}}>
<ul style={{listStyle:"none",textAlign:"left"}}>
        <li><h4>COMPANY</h4></li>
        <li style={{color:"#a0a0a0"}}>Shipping & Returns</li>
        <li style={{color:"#a0a0a0"}}>Privacy Policy</li>
        <li style={{color:"#a0a0a0"}}>Terms & Conditions</li>
    </ul>
</div>
<div style={{width:"200px",color:"white"}}>
<ul style={{listStyle:"none",textAlign:"left"}}>
        <li><h4>CONTACT</h4></li>
        <li style={{color:"#a0a0a0"}}>Customer Care</li>
        <li style={{color:"#a0a0a0"}}>Contact Support Available
</li>
        <li style={{color:"#a0a0a0"}}>Mon To Sat : 10:00 Am to 6:00 Pm</li>
        <li style={{color:"#a0a0a0"}}>E-mail</li>
        <li style={{color:"#a0a0a0"}}>uboricllp@gmail.com</li>
        <li style={{color:"#a0a0a0"}}>Mobile</li>
        <li style={{color:"#a0a0a0"}}>
+91 97243 82162</li>
        <li style={{color:"#a0a0a0"}}>+91 82000 99386</li>
    </ul>
</div>

</div>

<div style={{display:"flex",justifyContent:"space-between"}}>
    <div><button style={{borderRadius:"50px",fontSize:"20px",padding:"5px 30px",marginLeft:"20px",backgroundColor:"#25d366",color:"white"}}><FaWhatsapp/></button></div>
    <div><p style={{color:"#a0a0a0",marginRight:"500px"}}>© 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.</p></div>
    <div style={{display:"flex",gap:"15px",marginTop:"20px",marginRight:"200px"}}>
        <div style={{color:"#a0a0a0",fontSize:"26px"}}><FaFacebook/></div>
        <div  style={{color:"#a0a0a0",fontSize:"26px"}}><FaInstagram/></div>
    </div>
</div>

</div>


    </div>
  );
}
