import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import BarIcon from "./BarIcon.jsx";
import Me1 from "../../src/assets/Mymeme1.png";

const ContactForm = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    console.log("ContactPage, inView =", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", bounce: 0.4, duration: 3 },
      });
    }
    if (!inView) {
      animation.start({ x: -100 });
    }
  }, [inView]);
  const onSubmitHandle = (evt) => {
    evt.preventDefault();
    const messagePac = {
      name: fuserName,
      email: femail,
      message: fmessage,
    };

    emailjs
      .send(
        "service_jdhxbxu",
        "template_vf2fmw9",
        messagePac,
        "Mv1OyjtGmuow8kg_N"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setUserName("");
          setEmail("");
          setMessage("");
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED!", error);
        }
      );
  };
  const [fuserName, setUserName] = useState("");
  const [femail, setEmail] = useState("");
  const [fmessage, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const copyNumber = () => {
    navigator.clipboard.writeText("2243616080");
  };
  const copyEmail = () => {
    navigator.clipboard.writeText("greg.pounds3@outlook.com");
  };
  useEffect(() => {
    setInterval(() => {
      setStatus("");
    }, 15000);
  });
  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="page snap-start"
      id="contactForm"
    >
      <h1 className="uppercase text-4xl text-violet-600 m-6">Contact Me</h1>
      <img className="w-[20%] h-[20%] " src={Me1} />
      <p className="font-light pt-8 text-lg dark:text-slate-50 pb-5">
        Let's get Connected!
      </p>
      {status && renderAlert()}
      <div className="float-left">
        <div className="shadow-md shadow-violet-500 pb-7 float-left">
          <form onSubmit={onSubmitHandle}>
            <div className="relative mt-12">
              <input
                className="peer relative -top-3.5 m-6 w-[33vw] rounded-md border-b-2 border-slate-900 focus: outline-none focus:border-violet-600 dark:focus:border-blue-600 placeholder-transparent"
                type="text"
                name="userName"
                id="userName"
                value={fuserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Name"
                required
              />
              <label
                className="absolute left-3 -top-3 mx-3 text-slate-950 dark:text-slate-50 text-sm transition-all peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus:-top-3.5 peer-focus:text-slate-950 dark:peer-focus:text-slate-50 peer-focus:text-sm"
                htmlFor="userName"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                className="peer relative -top-3.5 m-6 w-[33vw] rounded-md border-b-2 border-slate-900 focus:outline-none focus:border-violet-600
          dark:focus:border-blue-600 placeholder-transparent"
                type="email"
                name="email"
                id="email"
                value={femail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
              <label
                className="absolute left-3 -top-3 mx-3 text-slate-950 dark:text-slate-50 text-sm transition-all peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus:-top-3.5 peer-focus:text-slate-950 dark:peer-focus:text-slate-50 peer-focus:text-sm"
                htmlFor="email"
              >
                Email address
              </label>
            </div>
            <div className="relative">
              <textarea
                className="peer relative -top-3.5 m-6 w-[33vw] h-12 rounded-md border-b-2 border-slate-900 focus:outline-none focus:border-violet-600 dark:focus:border-blue-600 placeholder-transparent"
                type="text"
                name="message"
                id="message"
                value={fmessage}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message/Suggestions"
                required
              />
              <label
                className="absolute left-3 -top-3 mx-3 text-slate-950 dark:text-slate-50 text-sm transition-all peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus:-top-3.5 peer-focus:text-slate-950 dark:peer-focus:text-slate-50 peer-focus:text-sm"
                htmlFor="message"
              >
                Message/Suggestions
              </label>
            </div>
            <input
              className="bg-violet-500 text-slate-100 rounded-3xl p-2 hover:bg-blue-500 hover:text-slate-50 dark:hover:bg-blue-700 dark:hover:text-slate-50"
              type="submit"
              value="Full-Send!"
            />
          </form>
        </div>
        <div className="mt-8 items-center dark:text-slate-50 float-right pl-8">
          <div className="pb-8">
            <a onClick={copyNumber}>
              {" "}
              <BarIcon icon={<AiFillPhone />} />
            </a>
            <p className="text-2xl">224-361-6080</p>
          </div>
          <div>
            <a onClick={copyEmail}>
              <BarIcon icon={<AiTwotoneMail />} />
            </a>
            <p className="text-2xl">greg.pounds3@outlook.com</p>
          </div>
        </div>
        <div className="relative -z-10">
          <div className="absolute top-0 -left-4 w-32 h-32 bg-violet-600 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-2000"></div>
          <div className="absolute top-0 -right-4 h-32 w-32 bg-blue-300 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-8000"></div>
          <div className="absolute -bottom-8 left-4 h-32 w-32 bg-violet-800 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-4000"></div>
          <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-violet-400 rounded-full mix-blend-multiply blur-xl opacity-50 animate-blob animate-delay-6000"></div>
        </div>
      </div>
    </motion.section>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-500 bg-blue-200 rounded-xl mb-5">
    <p>Your message was sent successfully to Greg!</p>
  </div>
);
export default ContactForm;
