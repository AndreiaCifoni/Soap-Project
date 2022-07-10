import React from "react";
import { CameraIcon, ChatIcon, ThumbUpIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <img
        className="contact-img"
        scr="https://res.cloudinary.com/deiacifoni/image/upload/v1657415150/soap_d2hu2m.jpg"
        alt="soap"
      />
      <div className="contact-container2">
        <h1>Contact Us</h1>
        <h2>Let us know...</h2>
        <h3>For any special request, sugestion or feedback:</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea>Leave your message...</textarea>
          <button>Submit</button>
        </form>
        <h2>Come and say Hello to us!</h2>
        <div>
          <p>Phone: (xxx)xxx-xxx</p>
          <p>E-mail: iLoveSoap@gmail.com</p>
          <p>Address: 18 Fake Street - Toronto - Canada</p>
          <div>
            <ThumbUpIcon className="icon" />
            <CameraIcon className="icon" />
            <ChatIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
