import React, { useState } from "react";
const Button = ({ info, id }) => {
    const [information, setInformation] = useState(false);
    
    return (
        <div>
        <li key={id}>
            {  information ? info : `${info.substring(0,250)}...`}
                <button onClick={() => setInformation((information) => !information)}>
               {information ? "Show Less" : "Read More"}
                </button> 
        </li>
        
        
        </div>
    )
}
export default Button;