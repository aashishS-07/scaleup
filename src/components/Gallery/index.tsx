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
  //title: string;
  width: number;
  height: number;
  caption: string;
}

const PhotoGallery: React.FC = () => {
  //stall design prototype
  const images1: Photo[] = [
    // {
    //   id: 1,
    //   src: "/images/gallery/Dosti_Buddier/dosti_buider (7).jpeg",
    //   width: 320,
    //   height: 174,
    //   caption: "After Rain (Jeshu John - designerspics.com)",
    // },
    {
      id: 4,
      src: "/images/gallery/images/3 (1).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 4,
      src: "/images/gallery/images/3 (2).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 5,
      src: "/images/gallery/images/3 (3).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 6,
      src: "/images/gallery/images/3 (4).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 7,
      src: "/images/gallery/images/3 (5).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 8,
      src: "/images/gallery/images/3 (6).jpg",
      width: 320,
      height: 212,
      caption: "",
    },
    {
      id: 9,
      src: "/images/gallery/images/3 (7).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 10,
      src: "/images/gallery/images/3 (7).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
  ];

  //exhibition stall design
  const images2: Photo[] = [
    {
      id: 4,
      src: "/images/gallery/images/1 (1).jpg",
      width: 320,
      height: 212,
      caption: "",
    },
    {
      id: 5,
      src: "/images/gallery/images/1 (2).jpg",
      width: 320,
      height: 212,
      caption: "",
    },
    {
      id: 6,
      src: "/images/gallery/images/1 (3).JPG",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 7,
      src: "/images/gallery/images/1 (4).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 7,
      src: "/images/gallery/images/1 (5).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 8,
      src: "/images/gallery/images/1 (6).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 9,
      src: "/images/gallery/images/1 (7).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 10,
      src: "/images/gallery/images/1 (8).JPG",
      width: 320,
      height: 174,
      caption: "",
    },

    {
      id: 11,
      src: "/images/gallery/images/1 (9).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 12,
      src: "/images/gallery/images/1 (10).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 13,
      src: "/images/gallery/images/1 (11).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 14,
      src: "/images/gallery/images/1 (12).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 15,
      src: "/images/gallery/images/1 (13).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 16,
      src: "/images/gallery/images/1 (14).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 17,
      src: "/images/gallery/images/1 (15).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 18,
      src: "/images/gallery/images/1 (16).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 19,
      src: "/images/gallery/images/1 (17).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
  ];
  //outdoor setup
  const images3: Photo[] = [
    {
      id: 7,
      src: "/images/gallery/images/2 (1).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 8,
      src: "/images/gallery/images/2 (2).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 9,
      src: "/images/gallery/images/2 (3).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 11,
      src: "/images/gallery/images/2 (4).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 11,
      src: "/images/gallery/images/2 (5).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 11,
      src: "/images/gallery/images/2 (6).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 11,
      src: "/images/gallery/images/2 (7).jpg",
      width: 320,
      height: 174,
      caption: "",
    },
  ];
  const images4: Photo[] = [

    {
      id: 2,
      src: "/images/gallery/images/4 (2).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 3,
      src: "/images/gallery/images/4 (3).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 4,
      src: "/images/gallery/images/4 (4).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 5,
      src: "/images/gallery/images/4 (5).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 6,
      src: "/images/gallery/images/4 (6).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
    {
      id: 7,
      src: "/images/gallery/images/4 (7).jpeg",
      width: 320,
      height: 174,
      caption: "",
    },
  ];

  return (

    <div className="container-fluid">
      <div className="p-4 col-md-12">
        {/* Event 1 */}

        <h1 className="text-xl font-semibold pl-6 mb-4">Stall Design Prototype</h1>
        <PhotoProvider>
          <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images1.map((item) => (
              <React.Fragment key={item.id}>
                <PhotoView src={item.src}>
                  <div>
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    />
                    <p className="caption">{item.caption}</p>
                  </div>
                </PhotoView>
              </React.Fragment>
            ))}
          </div>

        </PhotoProvider>
        {/* Event 2 */}
        <h2 className="text-xl font-semibold pl-6 mt-8 mb-4"> Exhibition </h2>
        <PhotoProvider>
          <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images2.map((item) => (
              <React.Fragment key={item.id}>
                <PhotoView src={item.src}>
                  <div>
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    />
                    <p className="caption">{item.caption}</p>
                  </div>
                </PhotoView>
              </React.Fragment>
            ))}
          </div>
        </PhotoProvider>
        {/* Event 3 */}
        <h2 className="text-xl font-semibold pl-6 mt-8 mb-4">Outdoor Setup </h2>
        <PhotoProvider>
          <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images3.map((item) => (
              <React.Fragment key={item.id}>
                <PhotoView src={item.src}>
                  <div>
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    />
                    <p className="caption">{item.caption}</p>
                  </div>
                </PhotoView>
              </React.Fragment>
            ))}
          </div>
        </PhotoProvider>

        {/* Shop Setup */}
        <h2 className="text-xl font-semibold pl-6 mt-8 mb-4">Shop Setup </h2>
        <PhotoProvider>
          <div className="gallery grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images4.map((item) => (
              <React.Fragment key={item.id}>
                <PhotoView src={item.src}>
                  <div>
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    />
                    <p className="caption">{item.caption}</p>
                  </div>
                </PhotoView>
              </React.Fragment>
            ))}
          </div>
        </PhotoProvider>

      </div>
    </div>
  );
};

export default PhotoGallery;
