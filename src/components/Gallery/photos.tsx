"use client";

import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./gallery.css";
import "./custom.css";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";

interface Photo {
  id: number;
  src: string;

  width: number;
  height: number;
  caption: string;
}

const PhotoGallery: React.FC = () => {
  const images1: Photo[] = [
    {
      id: 1,
      src: "/images/gallery/Dosti_Buddier/dosti_buider (7).jpeg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
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
  ];

  const images2: Photo[] = [
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
      src: "/images/gallery/Dosti_Buddier/dosti_buider (1).jpeg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];

  return (
    <div className="p-4">
      {/* Event 1 */}
      <h2 className="text-xl font-semibold mb-4">Event 1</h2>
      <PhotoProvider>
        <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images1.map((item) => (
            <React.Fragment key={item.id}>
              <PhotoView src={item.src}>
                <div>
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  />
                  <p className="caption">{item.caption}</p>
                </div>
              </PhotoView>
            </React.Fragment>
          ))}
        </div>
      </PhotoProvider>

      {/* Event 2 */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Event 2</h2>
      <PhotoProvider>
        <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images2.map((item) => (
            <React.Fragment key={item.id}>
              <PhotoView src={item.src}>
                <div>
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  />
                  <p className="caption">{item.caption}</p>
                </div>
              </PhotoView>
            </React.Fragment>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGallery;
