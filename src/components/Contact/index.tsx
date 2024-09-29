"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


const Contact = () => {

  const [name, setName] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        company_name : company_name,
        email: email,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "response from backend");
        if (res?.status === "success") {
          setNotification(res?.message);
        } else {
          setNotification(res?.message);
        }
      });
  };



  return (
    <section id="contact" className="overflow-hidden py-11 md:py-15 lg:py-25">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full xl:w-full">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Exhibition Stall Enquiry
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team will get back to you ASAP.
              </p>
              {/*<form onSubmit={submitEnquiryForm}>*/}
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  executeRecaptcha("contactFormSubmit").then((gReCaptchaToken) => {
                    submitEnquiryForm(gReCaptchaToken); // Call your submit function with reCAPTCHA token
                  });
                }}
              >
                {/* Company Name */}
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company_name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        value={company_name} // Controlled input value
                        onChange={(e) => setCompanyName(e?.target?.value)}
                        placeholder="Enter your Company Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email} // Controlled input value
                        onChange={(e) => setEmail(e?.target?.value)}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={message} // Controlled input value
                        onChange={(e) => setMessage(e?.target?.value)}
                        placeholder="Enter your message"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </div>

                {notification && <p>{notification}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
