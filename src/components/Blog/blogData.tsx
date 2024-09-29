import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    "id": 1,
    "title": "Bengaluru Tech Summit 2023: Shaping the Future of Global Technology Solutions",
    "paragraph": "The Bengaluru Tech Summit (BTS) 2023 returns for its 26th edition from November 19-21, 2023, at Bangalore Palace. This event fosters cross-industry collaborations to solve real-world technology challenges.",
    "image": "/images/blog/bts.png",
    "author": {
      "name": "Nitin",
      "image": "/images/blog/img_1.png",
      "designation": "Event Specialist"
    },
    "tags": ["#Technology", "#Innovation", "#BTS2023"],
    "publishDate": "2023-11-19"
  },

  {
    "id": 2,
    "title": "Prawaas 4.0: Pioneering the Future of India’s Multimodal Transport Sector",
"paragraph": "Prawaas 4.0, hosted by BOCI, marks a historic moment for India's transport sector. With record participation, the event highlights the importance of innovative multimodal transport solutions.",    "image": "/images/blog/prawaas.webp",
    "author": {
      "name": "Nitin",
      "image": "/images/blog/img_1.png",
      "designation": "Event Specialist"
    },
    "tags": ["#Prawaas", "#Mobility", "#Transport"],
    "publishDate": "2024-08-31"
  }

  ,
];
export default blogData;
