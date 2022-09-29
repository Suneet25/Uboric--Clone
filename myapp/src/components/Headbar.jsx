import React from "react";

let style=
{
    backgroundColor:"black",
    color:"white",
    padding:"1px",
    
}


function HeadBar()
{

    return (
        <div>
            <div className="HeadBar" style={style}>
            <h4>FOR ONLINE PAYMENT EXTRA ₹5% DISCOUNT ON ORDERS ABOVE ₹500</h4>
            </div>
          
        </div>
    
    );
}

export default HeadBar;