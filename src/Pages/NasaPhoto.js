import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LikePhoto from "./LikePhoto"

// if wanted to hide API key:
//const apiKey = process.env.REACT_APP_NASA_KEY;

const apiKey = 'iKliHzd4DwjCdUJlf9CipcrQTIHlYgGJAsyHwLBE';

export default function NasaAPI() {
  // 
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      // wait for the fetch 
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []); // only want to fetch once

  // if returns nothing from fetching then will return an empty div
  if (!photoData) return <div />;

  return (
    <>
    <NavBar />
    <div className="nasa-photo">
      {photoData.media_type === "image" ? ( <img src={photoData.url} alt={photoData.title} className="photo"/> ) : (<iframe title="space-video" src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>)}
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
        <div class="heart-btn">
          <div class="content">
            <span class="heart">Like</span>
            <img src="/heart.png" width="20" height="20"></img>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
