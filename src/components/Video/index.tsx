"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleExit = () => {
    setOpen(false);
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 w-200">
        <div className="container">
          <SectionTitle
            title="Our AIM"
            paragraph="Our aim is to provide clients one stop solution to all of their advertising and other needs. Our expertise allow them to have impressive advertisements that will ultimately satisfy their target audience. We do not compromise with the quality of the services we offer. Further we ensure the customers for timely delivery of the job that meets their satisfaction levels."
            center
            mb="80px"
          />

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image
                    src="/images/video/thumbnail.png"
                    alt="video image"
                    fill
                  />
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-full max-w-3xl">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 text-white"
                >
                  Close
                </button>
                <Player
                  playsInline
                  autoPlay={true}  // Autoplay the video
                  poster="/images/video/thumbnail.png"
                  src="/images/video/promo-video-new.mp4"
                />
                <button
                  onClick={handleExit}
                  className="absolute bottom-2 right-2 text-white bg-red-500 px-4 py-2 rounded"
                >
                  Exit
                </button>
              </div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </section>

      {/*<section ref={nextSectionRef} className="py-16 md:py-20 lg:py-28">*/}
      {/*  <div className="container">*/}
      {/*    <h2 className="text-3xl font-bold">Next Section</h2>*/}
      {/*    <p>This is the next section after the video.</p>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};

export default Video;