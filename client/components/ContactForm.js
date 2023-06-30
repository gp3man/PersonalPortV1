import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {AiFillPhone, AiTwotoneMail} from "react-icons/ai"
import emailjs from "emailjs-com"
import BarIcon from "./BarIcon";


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
  // const Navigate = useNavigate();
  const onSubmitHandle = (evt) => {
    evt.preventDefault();
    const messagePac = {
      name:fuserName,
      email:femail,
      message:fmessage
    }

    emailjs.send("service_jdhxbxu", "template_vf2fmw9", messagePac, "Mv1OyjtGmuow8kg_N")
      .then(response =>{
        console.log("SUCCESS!", response)
        setUserName("");
        setEmail("");
        setMessage("");
        setStatus("SUCCESS")
      }, error =>{
        console.log("FAILED!", error)
      })
    // Navigate("/");
  };
  const [fuserName, setUserName] = useState("");
  const [femail, setEmail] = useState("");
  const [fmessage, setMessage] = useState("");
  const [status, setStatus] = useState("")
useEffect(()=>{
  setInterval(() => {
    setStatus('')
  }, 15000);
})
  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="page"
      id="contactForm"
    >
      <h1 className="uppercase text-4xl text-violet-600 m-6">Contact Me</h1>
      <small>Let's get Connected!</small>
      {status && renderAlert()}
      <form className="float-right" onSubmit={onSubmitHandle}>
        <div className="relative mt-12">
          <input
          className="peer m-6 w-[33vw] border-b-2 border-gray-300 focus: outline-none focus:border-violet-600 placeholder-transparent"
            type="text"
            name="userName"
            id="userName"
            value={fuserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name"
            required
          />
          <label
            className="absolute left-3 -top-3 mx-3 text-gray-800 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus: -top-3.5 peer-focus:text-gray-800 peer-focus:text-sm"
            htmlFor="userName"
          >
            Name
          </label>
        </div>
        <div className="relative mt-12">
          <input
          className="peer m-6 w-[33vw] border-b-2 border-gray-300 focus: outline-none focus:border-violet-600 placeholder-transparent"
            type="email"
            name="email"
            id="email"
            value={femail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <label
            className="absolute left-3 -top-3 mx-3 text-gray-800 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus: -top-3.5 peer-focus:text-gray-800 peer-focus:text-sm"
            htmlFor="email"
          >
            Email address
          </label>
        </div>
        <div className="relative mt-12">
          <textarea
          className=" peer m-6 w-[33vw] h-12 border-b-2 border-gray-300 focus: outline-none focus:border-violet-600 placeholder-transparent"
            type="text"
            name="message"
            id="message"
            value={fmessage}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message/Suggestions"
            required
          />
          <label
            className="absolute left-3 -top-3 mx-3 text-gray-800 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus: -top-3.5 peer-focus:text-gray-800 peer-focus:text-sm"
            htmlFor="message"
          >
            Message/Suggestions
          </label>
        </div>
        <input className="bg-violet-500 text-slate-100 rounded-3xl p-2 hover:bg-rose-400 hover:text-slate-800" type="submit" value="Full-Send!" />
      </form>
      <div className="flex-col mt-8 ">
        <div className="left-0">
          <BarIcon icon={<AiFillPhone />} />
          <p className="text-2xl">224-361-6080</p>
        </div>
        <div className="left-0">
         <BarIcon icon={<AiTwotoneMail />} />
         <p className="text-2xl">greg.pounds3@outlook.com</p>
        </div>

      </div>
    </motion.section>
  );
};
const renderAlert = () =>(
  <div className="px-4 py-3 leading-normal text-green-700 bg-green-200 rounded-xl mb-5">
    <p>Your message was sent successfully to Greg!</p>
  </div>
)
export default ContactForm;
//
