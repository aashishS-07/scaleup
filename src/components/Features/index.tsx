import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Your event, your way"
            paragraph="Choose us for unparalleled event presence. Our expert stall designs are meticulously crafted to ensure success. With a focus on innovation and customization, we tailor solutions to your unique needs, guaranteeing a standout experience that captivates audiences and drives results."
            center
            width = "800px"
            mb="80px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
