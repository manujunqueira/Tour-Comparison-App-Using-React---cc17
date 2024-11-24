import React, { useState, useEffect } from "react";
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
        };


          // Return JSX for rendering the gallery
    return ( // remove tour button and levels of interest on types of tours
        <table>
        <h1>Tour Management Gallery</h1>
        <hr></hr>
        <dl>
                {gallery.map(gall => (
                   <dt key={gall.id}>
                   <h2>{gall.name}</h2>
                   <dd>Price: ${gall.price}</dd>
                   <dd> 
                       {information ? gall.info : `${gall.info.substring(0,250)}...`}
                       <button onClick={() => setInformation(!information)}>
                           {information ? "Show Less" : "Read More"}
                       </button>
                   </dd>
                   <dd><img src={gall.image} alt= "tour" /></dd>
                   <br></br>
                   <button onClick={() => handleInterest(gall.id)}>Not Interested</button>
                   <br></br>
               </dt>
           ))}
           </dl>
        </table>
    );
}
        
export default Gallery;