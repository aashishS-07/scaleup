//'use client';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon, ChartIcon, LightBulbIcon } from "@/components/Icons/Icons";

import { Metadata } from "next";
//api endpoint from 127.0.0.1:8000
 //const API_ENDPOINT = "http://127.0.0.1:8000/api/";

// export const metadata: Metadata = {
//   title: "Error Page | ScaleUP Event and Exhibition",
//   description: "This is Error Page for ScaleUP Event and Exhibition",
//   // other metadata
// };
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
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



const ErrorPage = () => {
  return (
    <>

                <section
                  id="howItWorks"
                  className="container text-center py-10 sm:py-25"
                  style={{ paddingBottom: '0px' }}>
                  <h2 className="text-3xl md:text-4xl font-bold ">
                    Your  {" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          event{" "}
        </span>
                    , your <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          way{" "}
        </span>
                  </h2>
                  <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                    Choose us for unparalleled event presence. Our expert stall designs are meticulously crafted to ensure success. With a focus on innovation and customization, we tailor solutions to your unique needs, guaranteeing a standout experience that captivates audiences and drives results.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map(({ icon, title, description }: FeatureProps) => (
                      <Card
                        key={title}
                        className="bg-muted/50"
                      >
                        <CardHeader>
                          <CardTitle className="grid gap-4 place-items-center ">
                            {icon}
                            {title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                      </Card>
                    ))}
                  </div>
                </section>


    </>
  );
};

export default ErrorPage;
