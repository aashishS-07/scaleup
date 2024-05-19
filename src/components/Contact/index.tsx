import NewsLatterBox from "./NewsLatterBox";
import React, { useState } from 'react';


const Contact = () => {
  
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Exhibition Stall Enquiry
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team will get back to you ASAP.
              </p>
              <form>
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
                        placeholder="Enter your Company Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
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
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Floor plan 
                      </label>
                      <input
                        type="file"
                        placeholder="Upload your Floor Plan File"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/*<div className="w-full px-4 md:w-1/2">*/}
                  {/*  <div className="mb-8">*/}
                  {/*    <label*/}
                  {/*      htmlFor="stall"*/}
                  {/*      className="mb-3 block text-sm font-medium text-dark dark:text-white"*/}
                  {/*    >*/}
                  {/*      Stall  Number  */}
                  {/*    </label>*/}
                  {/*    <input*/}
                  {/*      type="text"*/}
                  {/*      placeholder="Enter your Stall Number"*/}
                  {/*      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"*/}
                  {/*    />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="size"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Enter Stall Size in Sqmtr
                      </label>
                      <input
                        type="text"
                        placeholder="  Enter Stall Size in Sqmtr"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/* yes no option for Side Open */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="side_open"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Side Open
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="side_open"
                          id="side_open_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="side_open_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="side_open"
                          id="side_open_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="side_open_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* yes no option for Product display */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="product_display"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Product Display
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="product_display"
                          id="product_display_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="product_display_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="product_display"
                          id="product_display_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="product_display_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* yes no option for Pantary Room */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="pantary_room"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Pantary Room
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="pantary_room"
                          id="pantary_room_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="pantary_room_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="pantary_room"
                          id="pantary_room_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="pantary_room_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* yes no option for Sofa Seating */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="sofa_seating"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Sofa Seating
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="sofa_seating"
                          id="sofa_seating_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="sofa_seating_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="sofa_seating"
                          id="sofa_seating_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="sofa_seating_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* yes no option for Chair & Round Seating   */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="chair_round_seating"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Chair & Round Seating
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="chair_round_seating"
                          id="chair_round_seating_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="chair_round_seating_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="chair_round_seating"
                          id="chair_round_seating_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="chair_round_seating_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* yes no option for Register  */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="register"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Register
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="register"
                          id="register_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="register_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="register"
                          id="register_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="register_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Water dispenser */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="water_dispenser"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Water Dispenser
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="water_dispenser"
                          id="water_dispenser_yes"
                          className="mr-2"
                        />
                        <label
                          htmlFor="water_dispenser_yes"
                          className="mr-6 text-sm text-dark dark:text-white"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="water_dispenser"
                          id="water_dispenser_no"
                          className="mr-2"
                        />
                        <label
                          htmlFor="water_dispenser_no"
                          className="text-sm text-dark dark:text-white"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    </div>
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
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                     Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
