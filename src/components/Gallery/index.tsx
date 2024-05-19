"use client";

import React, { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./gallery.css";

interface Photo {
  id: number;
  src: string;
  title: string;
  width: number;
  height: number;
  caption: string;
}

const PhotoGallery: React.FC = () => {
  const onInit = () => {
    //console.log('lightGallery has been initialized');
  };

  const images = [
    {
      id: 1,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (1).jpeg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    // {
    //   src: "/images/gallery/Dosti_Buddier/dosti_buider (2).jpeg",
    //   width: 320,
    //   height: 212,
    //   caption: "Boats (Jeshu John - designerspics.com)",
    // },
    {
      id: 2,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (3).jpeg",
      width: 320,
      height: 212,
      caption: "Dosti Buddier",
    },
    {
      id: 3,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (4).jpeg",
      width: 320,
      height: 174,

      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      id: 4,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (5).jpeg",
      width: 320,
      height: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      id: 5,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (6).jpeg",
      width: 320,
      height: 212,
      caption: "Dosti Buddier",
    },
    {
      id: 6,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (7).jpeg",
      width: 320,
      height: 174,

      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];


  const [mode, setMode] = useState(false);
  const [currentImage, setCurrentImage] = useState<Photo | null>(null);


  function getImg({ item }) {
    // console.log(photo);
    // setCurrentImage(photo);
    window.location.href = item.src;
  };







  return (
    //center this div
    <>
      {mode && currentImage && (
        <div className="model open">
          <img src={currentImage.src} alt={currentImage.title} />
          <button className="close" onClick={() => setMode(false)}>
            Close
          </button>
        </div>
      )}
      <div className="gallery">
        {images.map((item) => (
          <div className="pics" key={item.id} onClick={() => getImg({ item })}>


            <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PhotoGallery;
