import React from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {

  const images = [
    {
      id: 1,
      url: "images/img1.jpg",
      title: "Sunset Hills",
      description: "Golden sunset over rolling hills"
    },

    {
      id: 2,
      url: "images/img2.jpg",
      title: "Ocean Breeze",
      description: "Calm waves under a clear sky"
    },
    {
      id: 3,
      url: "/images/img3.jpg",
      title: "Forest Path",
      description: "A peaceful walk through greenery"
    },
    {
      id: 4,
      url: "/images/img4.jpg",
      title: "Mountain Peak",
      description: "Snowy mountains touching the sky"
    },
    {
      id: 5,
      url: "/images/img5.jpg",
      title: "Green Valley",
      description: "Lush green valley with fresh air"
    },
    {
      id: 6,
      url: "/images/img6.jpg",
      title: "Waterfall View",
      description: "Flowing water in a natural setting"
    },
    {
      id: 7,
      url: "/images/img7.jpg",
      title: "Morning Dew",
      description: "Fresh drops on green leaves"
    },
    {
      id: 8,
      url: "/images/img8.jpg",
      title: "Wild Nature",
      description: "Untouched beauty of the wild"
    },
    {
      id: 9,
      url: "/images/img9.jpg",
      title: "Peaceful Lake",
      description: "Still water reflecting the sky"
    }
  ];

  return (
    <div className="container">
      <h1>Image Gallery</h1>

      <div className="gallery">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;