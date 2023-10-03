import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FiMail,FiGithub } from "react-icons/fi";

const Contact = () => {

   const [data,setData] = useState({name: "",email: "", message: ""});

  const getName = (e)=>{
    setData({
      name: e.target.value,
      email: data.email,
      message: data.message
    })
  }

  const getEmail = (e)=>{
    setData({
      name: data.name,
      email: e.target.value,
      message: data.message
    })
  }

  const getMessage = (e)=>{
    setData({
      name: data.name,
      email: data.email,
      message: e.target.value
    })
  }

  /**submit form function */
  const sendContactInfo = (e)=>{
    e.preventDefault();
    console.log(data);
    setData({name: "",email: "", message: ""});


  }


  return (
    <div className="flex w-full mt-[120px] mb-[30px] justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gray-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white ">
        <div className="flex flex-col space-y-8 items-center">
          <div>
            <h1 className="text-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-sm">
              College Road, Dharmsinh Desai University, Nadiad, Gujarat 387001,
              IN
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.3149380604814!2d72.87960568068712!3d22.679495582060824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5adf2c171355%3A0xe1e974ce083657fb!2sDHARMSINH%20DESAI%20UNIVERSITY!5e1!3m2!1sen!2sin!4v1696327578230!5m2!1sen!2sin"
              title="map"
              width="300"
              height="250"
              style={{ border: "0", borderRadius: "25px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 text-center">
              <FiMail size={"22px"} />
              <span>techtribeddu@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a
              target="_blank"
              href="https://www.instagram.com/the_techtribe/"
              rel="noreferrer"
              className="hover:text-slate-300"
            >
              <BsInstagram size={"22px"} />
            </a>
            <a
              target="_blank"
              href="https://github.com/ISF-DDU"
              rel="noreferrer"
              className="hover:text-slate-300"
            >
              <FiGithub size={"26px"} />
            </a>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg text-gray-600 md:w-67">
          <form className="flex flex-col space-y-4" onSubmit={sendContactInfo}>
            <div>
              <label className="text-sm">Your name</label>
              <input
                type="text"
                placeholder="Your name"
                className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                 onChange={getName}
                 value={data.name}
                required
              />
            </div>
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                 onChange={getEmail}
                 value={data.email}
                required
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                placeholder="Enter Message"
                rows="4"
                className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                 onChange={getMessage}
                 value={data.message}
                required
              ></textarea>
            </div>
            <button className="inline-block self-start bg-gray-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
