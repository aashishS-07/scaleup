import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import ContactCaptcha from "@/components/ContactCaptcha";



import { Metadata } from "next";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const metadata: Metadata = {
  title: "Contact Page | ScaleUP Event and Exhibition",
  description: "This is Contact Page for ScaleUP Event and Exhibition",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch with ScaleUP"
        description=""
        //description="We're here to help you elevate your next event or exhibition. Whether you're interested in learning more about our services, have specific project requirements, or simply want to explore how we can collaborate, we'd love to hear from you! At ScaleUP, we believe that great events begin with great conversations. Reach out to us today, and let's start planning something extraordinary together."
      />
      <p className="text-lg text-body-color dark:text-body-color-dark my-12 px-12">
        We're here to help you elevate your next event or exhibition. Whether
        you're interested in learning more about our services, have specific
        project requirements, or simply want to explore how we can collaborate,
        we'd love to hear from you! At ScaleUP, we believe that great events
        begin with great conversations. Reach out to us today, and let's start
        planning something extraordinary together.
      </p>
      {/*<GoogleReCaptchaProvider*/}
      {/*  reCaptchaKey="6LfBYCgqAAAAAGQUzYjeWBbJowGj_ilU76W1M_br"*/}
      {/*  scriptProps={{*/}
      {/*    async: false,*/}
      {/*    defer: false,*/}
      {/*    appendTo: "head",*/}
      {/*    nonce: undefined,*/}
      {/*  }}*/}
      {/*>*/}
      <ContactCaptcha />
      {/*</GoogleReCaptchaProvider>*/}
    </>
  );
};

export default ContactPage;
