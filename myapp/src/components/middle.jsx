import React,{useState} from 'react';
import {FaAngleLeft,FaAngleRight,FaRegHeart} from "react-icons/fa"
const  container=
{
    height:"300px",
    width:"96%",
    display:"flex",
    justifyContent:"spaceEvenly",
    margin:"auto",
marginTop:"20px",
gap:"20px",

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

    <div className='accessories' style={{height:"800px",width:"75%",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",margin:"auto",marginTop:"120px"}}> 
    
            <div style={{position:"relative"}}>
                <div><img src="https://www.uboric.com/wp-content/uploads/2022/08/banner2-1.jpg" style={{width:"100%",display:"block"}}/></div>
                <div style={{position:"absolute",top:"260px",left:"80px",backgroundColor:"white",padding:"5px 30px"}}>
                  <h1>Bathroom Accessories</h1>
                  <h5 style={{marginTop:"-10px"}}>Shop Now</h5>
                </div>
              </div>
            <div style={{position:"relative"}}>
                <div><img src="https://www.uboric.com/wp-content/uploads/2022/08/banner1-1-1.jpg" style={{width:"100%",display:"block"}}/></div>
                <div style={{position:"absolute",top:"260px",left:"100px",backgroundColor:"white",padding:"5px 30px",width:"300px"}}>
                  <h1>Electric Appliences</h1>
                  <h5 style={{marginTop:"-10px"}}>Shop Now</h5>
                </div>
              </div>
            <div style={{position:"relative"}}>
                <div><img src="https://www.uboric.com/wp-content/uploads/2022/08/banner3-1.jpg" style={{width:"100%",display:"block"}}/></div>
                <div style={{position:"absolute",top:"260px",left:"100px",backgroundColor:"white",padding:"5px 30px",width:"300px"}}>
                  <h1>Clothing</h1>
                  <h5 style={{marginTop:"-10px"}}>Shop Now</h5>
                </div>
              </div>
            <div style={{position:"relative"}}>
                <div><img src="https://www.uboric.com/wp-content/uploads/2022/08/banner2-1.jpg" style={{width:"100%",display:"block"}}/></div>
                <div style={{position:"absolute",top:"260px",left:"100px",backgroundColor:"white",padding:"5px 30px",width:"300px"}}>
                  <h1>Jewellwery</h1>
                  <h5 style={{marginTop:"-10px"}}>Shop Now</h5>
                </div>
              </div>
        </div>

          <div style={{marginTop:"60px"}}>
          <h1>Best Selling Product</h1>  
          </div>          
        <div style={{display:"flex",width:"75%",height:"auto",margin:"auto",marginTop:"100px",justifyContent:'space-between'}}>
          <div>
            <img src="	https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-06-1-370x370.jpg" width="100%" />
            <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b>
            </p>
          </div>
          <div>
          <img src="	https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-06-1-370x370.jpg"  width="100%"/>
          <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b>
            </p>
          </div>
          <div>
          <img src="	https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-06-1-370x370.jpg" width="100%" />
          <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b>
            </p>
          </div>

        </div>

            <div style={{marginTop:"40px"}}><h1>New Arrivals</h1></div>     
            <div className='newArrivals' style={{display:"flex",height:"auto",gap:"20px",justifyContent:"space-between"}}>
              <div style={{width:"300px"}}>
              <img src="https://www.uboric.com/wp-content/uploads/2022/09/51OLhLYsZXL.jpg" width="100%"/>
                <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b></p>
              </div>
              <div style={{width:"300px"}}>
                <img src="https://www.uboric.com/wp-content/uploads/2022/09/61nbV0UE0zL-370x370.jpg" width="100%"/>
                <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b></p>
              </div>
              <div style={{width:"300px"}}>
              <img src="	https://www.uboric.com/wp-content/uploads/2022/09/photo_2022-09-18_10-32-30-370x370.jpg" width="100%"/>
                <p><b>Quick And Easy 6 Blade Push Chopper 1000ML</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b></p>
              </div>
              <div style={{width:"300px"}}>
              <img src="https://www.uboric.com/wp-content/uploads/2022/09/5hto1_512_webp-370x282.jpg" width="100%"/>
                <p><b>Men's Casual Shoes</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹799.00</s>  <b style={{color:"#ff6f61"}}>₹349.00</b></p>
              </div>
              <div style={{width:"300px"}}>
              <img src="https://www.uboric.com/wp-content/uploads/2022/09/tqpgz_512_webp-370x342.jpg" width="100%"/>
                <p><b>Men's Casual Shoes</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹2,079.00</s>  <b style={{color:"#ff6f61"}}>₹1,039.00</b></p>
              </div>
              <div style={{width:"300px"}}>
              <img src="https://www.uboric.com/wp-content/uploads/2022/09/vmfgz_512_webp-370x262.jpg" width="100%"/>
                <p><b>Men's Casual Shoes</b></p>
            <p><s style={{color:"#a0a0a0"}}>₹2,079.00</s>  <b style={{color:"#ff6f61"}}>₹1,039.00</b></p>
              </div>
            </div>
          
          <div>
            <h1>The Ultimate Domestic Online Shopping Experience Platform in India</h1>
            <p style={{color:"c",marginTop:"30px",width:"70%",lineHeight:"40px",margin:"auto",textAlign:"left"}}>Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest trending variety of unique products ends right here. A wide range of international products from global brands are available at your fingertips. We provide you with a world-class online shopping experience, along with superior service, to suit all your specific requirements. Our products are very reasonably priced and are not easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture, electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 24×7 Customer Care: For all your queries and concerns regarding your shopping orders.</p>
            </div>

            <div style={{display:"flex",width:"70%",height:"480px",margin:"auto",marginTop:"50px"}}>
              <div style={{width:"50%"}}>

                <h1 style={{textAlign:"left",marginLeft:"40px"}}>Benefits Of Shopping</h1>
                <ul style={{listStyle:"none",textAlign:"left",lineHeight:"40px",color:"#a0a0a0"}}>
                  <li>User-Friendly</li>
                  <li>Safe & Secure Shopping</li>
                  <li>Check Out Closely</li>
                  <li>Multiple Payment Options</li>
                  <li>Order History</li>
                </ul>
<button style={{color:"white",backgroundColor:"black",padding:"10px 30px",marginLeft:"-320px",borderRadius:"4px"}}>Shop Now</button>

              </div>
              <div style={{width:"50%"}}>
                <img src="https://www.uboric.com/wp-content/uploads/2022/08/61OR0aPLJAL._SL1500_-768x659.jpg" width="100%" display="block"/>
              </div>
            </div>



    </div>
  
  )
}
