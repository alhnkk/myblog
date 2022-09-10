import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const [sendMessage, setSendMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_r7wxp9n", form.current, "YrY1aAkSfM3Ep6RB9")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 dark:bg-zinc-900">
      <div>
        <div className="lg:flex lg:flex-col h-screen bg-center bg-cover bg-no-repeat">
          <div className="grid place-items-center mx-auto p-20 sm:my-auto rounded-3xl space-y-10">
            <h1 className="text-center text-5xl font-semibold text-blue-500">
              Sosyal Medya Hesaplarım
            </h1>
            <div className="flex items-ce nter justify-center space-x-3">
              <button className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-6 h-6"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M55.04,10.32c-24.65626,0 -44.72,20.06374 -44.72,44.72v61.92c0,24.65626 20.06374,44.72 44.72,44.72h61.92c24.65626,0 44.72,-20.06374 44.72,-44.72v-61.92c0,-24.65626 -20.06374,-44.72 -44.72,-44.72zM55.04,17.2h61.92c20.9375,0 37.84,16.9025 37.84,37.84v61.92c0,20.9375 -16.9025,37.84 -37.84,37.84h-61.92c-20.9375,0 -37.84,-16.9025 -37.84,-37.84v-61.92c0,-20.9375 16.9025,-37.84 37.84,-37.84zM127.28,37.84c-3.79972,0 -6.88,3.08028 -6.88,6.88c0,3.79972 3.08028,6.88 6.88,6.88c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88zM86,48.16c-20.85771,0 -37.84,16.98229 -37.84,37.84c0,20.85771 16.98229,37.84 37.84,37.84c20.85771,0 37.84,-16.98229 37.84,-37.84c0,-20.85771 -16.98229,-37.84 -37.84,-37.84zM86,55.04c17.13948,0 30.96,13.82052 30.96,30.96c0,17.13948 -13.82052,30.96 -30.96,30.96c-17.13948,0 -30.96,-13.82052 -30.96,-30.96c0,-17.13948 13.82052,-30.96 30.96,-30.96z"></path>
                    </g>
                  </g>
                </svg>{" "}
                <a target="blank" href={"//instagram.com/alhnkk"}>
                  <span>Instagram</span>
                </a>
              </button>
              <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <a target="blank" href={"//twitter.com/alhnkk"}>
                  <span>Twitter</span>
                </a>
              </button>
              <button className="bg-slate-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-6 h-6"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path>
                    </g>
                  </g>
                </svg>
                <a target="blank" href={"//github.com/alhnkk"}>
                  <span>Github</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto shadow-lg p-36 rounded-lg  lg:p-8 pb-12 mb-8  mt-36 lg:w-96">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className=" block mb-2 text-sm font-medium text-gray-900">
              İsim
            </label>
            <input
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              type="text"
              placeholder="Adınızı girin..."
              name="fullName"
            />
          </div>
          <div>
            <label
              for="email-address-icon"
              className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mail adresinizi girin..."
              />
            </div>
          </div>
          <div>
            <label
              for="message"
              className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {" "}
              Mesaj
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bir şeyler yazın..."
            ></textarea>
            <input
              className="btn-grad transition duration-500 transform hover:-translate-y-1   cursor-pointer text-lg font-medium rounded-md  px-6 py-3 mt-5"
              type="submit"
              value="Gönder"
              onClick={(e) => setSendMessage(true)}
            />
          </div>
        </form>

        {sendMessage ? (
          <div
            id="alert-1"
            className="flex p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-blue-200"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-green-700 bg-green-100">
              Mesajını aldım. Teşekkür ederim
            </div>
            <button
              onClick={() => setSendMessage(false)}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 text-green-700 bg-green-100 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-green-600 dark:hover:bg-blue-300"
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Kapat</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
