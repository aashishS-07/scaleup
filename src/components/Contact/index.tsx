"use client"
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please verify you are not a robot');
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Enquiry sent successfully!');
      } else {
        alert('Failed to send enquiry.');
      }
    } catch (error) {
      alert('Error submitting enquiry.');
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full xl:w-full">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Exhibition Stall Enquiry
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team will get back to you ASAP.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Your form fields here */}
                <div className="-mx-4 flex flex-wrap">
                  {/* Company Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="company_name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Enter your Company Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  {/* Other fields as necessary */}
                  {/* reCAPTCHA */}
                  <div className="w-full px-4">
                    <ReCAPTCHA
                      sitekey="6LdIcyQqAAAAABmeaiKawqCW40Q7C8yXY9-dP8NA" // Replace with your site key
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  </div>
                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
