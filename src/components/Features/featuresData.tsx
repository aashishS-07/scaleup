import { Feature } from "@/types/feature";
import { ChartIcon, GiftIcon, LightBulbIcon, MapIcon, MedalIcon, PlaneIcon } from "@/components/Icons/Icons";

const featuresData: ({ icon: JSX.Element; description: string; title: string })[] = [
  {
    icon: <ChartIcon />,
    title: "Quality Projection",
    description:
      "At ScaleUP, we specialize in crafting exceptional event designs that captivate and engage. " +
      "Our meticulous attention to detail ensures your stall stands out, leaving a lasting impression on attendees. " +
      "Trust us to deliver unparalleled quality and creativity, making your event truly memorable.",
  },
  {
    icon: <MapIcon />,
    title: "Precision in Service",
    description:
      "Our meticulous approach guarantees precision in every aspect of our services." +
      " We prioritize accuracy and attention to detail, ensuring flawless execution from start to finish." +
      " Trust ScaleUP to deliver impeccable results, tailored to meet your specific needs with the highest standards of quality.",
  },
  {
    icon: <PlaneIcon />,
    title: "Customer Commitment",
    description:
      "We prioritize your satisfaction, ensuring a seamless experience from start to finish. " +
      "At ScaleUP , our commitment to excellence means we go above and beyond to meet your needs," +
      " providing personalized service and support every step of the way. " +
      "Your success is our top priority.",
  },
  {
    icon: <GiftIcon />,
    title: "Timely Delivery",
    description:
      "Count on us for prompt and efficient service, meeting your deadlines without compromise." +
      " At ScaleUP, we understand the importance of timeliness and are dedicated to delivering high-quality results on schedule," +
      " ensuring your project’s success every time.",
  },
  {
    icon: <MedalIcon />,
    title: "Innovative Creations",
    description:
      "Our team brings fresh and innovative ideas to the table, ensuring your stall captivates attention. " +
      "At ScaleUP, we combine creativity with expertise to design unique and engaging displays that stand out," +
      " making a memorable impact on your audience.",
  },{
    icon: <LightBulbIcon />,
    title: "Unique Concepts",
    description:
      "We specialize in crafting unique and original designs tailored to your brand and event needs." +
      " At ScaleUP, our innovative approach ensures your stall stands out," +
      " leaving a lasting impression and perfectly aligning with your vision and objectives.",
  },
];
export default featuresData;
