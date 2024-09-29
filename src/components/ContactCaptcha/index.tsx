"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Contact from "@/components/Contact";
import React from "react";

const ContactCaptcha: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfBYCgqAAAAAGQUzYjeWBbJowGj_ilU76W1M_br">
      <Contact />
    </GoogleReCaptchaProvider>
  );
};

export default ContactCaptcha;
