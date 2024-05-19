// 'use client'
import { Gallery } from "react-grid-gallery";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import PhotoGallery from "@/components/Gallery";
import "./gallery.css";



const images = [
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (1).jpeg",
    width: 320,
    height: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (2).jpeg",
    width: 320,
    height: 212,
    // tags: [
    //    { value: "Ocean", title: "Ocean" },
    //    { value: "People", title: "People" },
    // ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (3).jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (4).jpeg",
    width: 320,
    height: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (5).jpeg",
    width: 320,
    height: 212,
    // tags: [
    //    { value: "Ocean", title: "Ocean" },
    //    { value: "People", title: "People" },
    // ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (6).jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "/images/gallery/Dosti_Buddier/dosti_buider (7).jpeg",
    width: 320,
    height: 174,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];
const photos = [
  { src: "/images/gallery/outdoor_setup/outdoor_setup (1).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (2).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (3).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (4).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (5).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (6).jpg", width: 1536, height: 2040 },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (7).jpg", width: 1536, height: 2040, alt: "Outdoor setup" },
  { src: "/images/gallery/outdoor_setup/outdoor_setup (8).jpg", width: 1536, height: 2040, alt: "Outdoor setup" },


];
export const metadata: Metadata = {
  title: "Gallery Page | ScaleUP Event and Exhibition",
  description: "This is Gallery Page for ScaleUP Event and Exhibition",
};

const GalleryComponent = () => {
  // const [metadata, setMetadata] = useState({ title: "", description: "" });

  // Simulated fetch function using useEffect
  // useEffect(() => {
  //   // Your fetch logic here
  //   // Example:
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3001/api/gallery-metadata');
  //     console.log(response);
  //     const data = await response.json();
  //     setMetadata(data);
  //   };
  //
  //   fetchData();
  // }, []);

  return (

    <>
      <Breadcrumb
        pageName="Photo Gallery"
        description="List of Photos of Event Organisation."
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="gallery-header">
            <div>
              <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Photos
              </h3>
              <PhotoGallery />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
