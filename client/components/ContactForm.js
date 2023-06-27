import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

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
  const Navigate = useNavigate();
  const onSubmitHandle = async (evt) => {
    evt.preventDefault();
    console.log(userName);
    setUserName("");
    console.log(email);
    setEmail("");
    console.log(message);
    setMessage("");
    Navigate("/");
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="page"
      id="contactForm"
    >
      <h1>Contact Me</h1>
      <small>If you made it this far, Let's get Connected!</small>

      <form  onSubmit={onSubmitHandle}>
        <div className="relative">
          <input
          className="m-6 w-[33vw]"
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <label
            className="absolute left-0 top-3.5 text-gray-600 text-sm"
            htmlFor="userName"
          >
            Your Name
          </label>
        </div>
        <div>
          <input
          className="m-6 w-[33vw]"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <label
            className="absolute left-0 top-3.5 text-gray-600 text-sm"
            htmlFor="email"
          >
            Your Email
          </label>
        </div>
        <div>
          <input
          className="m-6 w-[33vw] h-12"
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message Or Friendly Project Idea"
            required
          />
          <label
            className="absolute left-0 top-3.5 text-gray-600 text-sm"
            htmlFor="message"
          >
            Message Or Friendly Project Idea
          </label>
        </div>
        <input type="submit" value="Full-Send!" />
      </form>
    </motion.section>
  );
};

export default ContactForm;
