import React from 'react'
import App from '../App'
const Login = () => {

let handleClick=()=>{

    <App/>
}

  return (
    <div>
<div>
<h3>Sign in</h3>

</div>
<div style={{display:"flex",flexDirection:"column",gap:"20px",width:"400px",margin:"auto",padding:"30px"}}>
    <input type="text" placeholder='Username' style={{padding:"10px",lineHeight:"26px"}} />
    <input type="password" placeholder='Password'  style={{padding:"10px",lineHeight:"26px"}}/>
    <div style={{display:"flex"}}> 
    <input type="checkbox" />
    <p style={{marginLeft:"10px"}}>Remember me</p>
    
    </div>

    <button  className='signinPage' style={{padding:"10px",lineHeight:"26px",color:"white",backgroundColor:"black"}} onClick={handleClick}><b>Sign in</b>
    </button>
</div>

    </div>
  )
}

export default Login 