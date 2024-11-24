import React, { useState, useEffect } from "react";
function Gallery(){ // Sets up a state variable to hold the fetched gallery data
    const [gallery, setGallery] = useState([]);

     // useEffect is used to fetch data from the API when the component mounts
    useEffect(() => {
         // Fetches data from the API endpoint
        fetch('https://course-api.com/react-tours-project')
          .then(response => response.json()) // Converts the response to JSON
          .then(data => {
            // Sets the gallery data to state after parsing the API response
            setGallery(JSON.parse(data.contents));
          });
        }, []); // Empty dependency array ensures this runs only once, after the initial render


          // Return JSX for rendering the gallery
    return (
        <div>
            <h2>Daily Sales</h2>
            <ul>
                {gallery.map(gall => (
                    <li key={gall.id}>
                        {gall.name}: {gall.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Gallery;