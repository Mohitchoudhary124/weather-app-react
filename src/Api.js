import React, { useEffect, useState } from 'react';

function Api() {
    fetch('http://localhost:5000')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
    const [ photos, setPhotos ] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=> {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setPhotos(data)
        })
    },[])
    return (
       <>
       {photos.map((choudhary) => 
        (<>
        <img key={choudhary.id} src={choudhary.url} alt={choudhary.title} style={{height:"300px",width:"300px",borderRadius:"30px",display:"flex",margin:"50px"}}/>
        <p>Author: {choudhary.completed}</p>
        
        </>
       ))}
       </>
    )
}

export default Api; 
