import React, { useState, useEffect } from "react";
import Button from "./components/Button";

function Gallery(){ // Sets up a state variable to hold the fetched gallery data
    const [gallery, setGallery] = useState([]);
    const [information, setInformation] = useState(false);

     // useEffect is used to fetch data from the API when the component mounts
    useEffect(() => {
         // Fetches data from the API endpoint
        fetch('https://api.allorigins.win/get?url=https://course-api.com/react-tours-project')
          .then(response => response.json()) // Converts the response to JSON
          .then(data => {
            // Sets the gallery data to state after parsing the API response
            setGallery(JSON.parse(data.contents));
          })
          .catch(error => {
            alert (`Error: ${error}`)
            .finally(() => {
                <div><h2>
                    Page Loading...
                </h2></div>
            })
          })
        }, []); // Empty dependency array ensures this runs only once, after the initial render

        function handleInterest(id){ // button used to remove tours 
            setGallery(gallery.filter(tour => tour.id !== id));
            console.log(`Tour ${id} Removed`)
        };


          // Return JSX for rendering the gallery
    return ( // remove tour button and levels of interest on types of tours
       <div>
             <h1>Tour Comparison App </h1>

             {gallery.map(gall => (
                   <div key={gall.id}>
                 
                   <center><tr><div className = "polaroid"><img src={gall.image} alt= {`Tour ${gall.id}`} />
                   
                   <div className = "container">
                       <h2>{gall.name}</h2>
                   </div>
                   </div></tr></center>
                   <center>
                   <h3><b>Price:</b> ${gall.price}</h3>                  
                    </center>
               
                   <Button key={gall.id} {...gall}/>
                      
                        
                      <br></br>
                      <button onClick={() => handleInterest(gall.id)}>Not Interested</button>                   
                     <hr></hr>
                    </div>
                      ))}
                      
       </div>
       
    );
}
        
export default Gallery;