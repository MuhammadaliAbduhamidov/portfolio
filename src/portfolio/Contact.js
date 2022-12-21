import React, { useState } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  MdOutlineMailOutline,
  MdPhoneEnabled,
  MdLocationOn,
} from "react-icons/md";

function Contact() {
  const card = [
    {
      id: 1,
      title: "My Email",
      text1: "abduhamidovmuhammadali81@gmail.com",
      text2: "muhammadaliweb@gmail.com",
      svg: <MdOutlineMailOutline />,
    },
    {
      id: 2,
      title: "My Number",
      text1: "+998 93 258 30 55",
      text2: "+998 90 753 15 77",
      svg: <MdPhoneEnabled />,
    },
    {
      id: 3,
      title: "My Address",
      text1: "Andijon region  ",
      text2: "Baliqchi distric",
      svg: <MdLocationOn />,
    },
  ];
  const [value, serValue] = useState();
  return (
    <div className="wrapper">
      <div></div>
      <div className="contacts" id="contact">
        <div className="text">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-cards">
          {card.map((item) => (
            <div className="contact-card">
              <div className="bg">{item.svg}</div>
              <h2>{item.title}</h2>
              <span>{item.text1}</span>
              <span>{item.text2}</span>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="" required />
              <label htmlFor="">Name</label>
            </div>
            <div className="input-group">
              <input type="text" name="" id="" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-group">
              <PhoneInput
                value={`+${getCountryCallingCode("UZ")}`}
                onChange={() => serValue(value)}
                defaultCountry="UZ"
                limitMaxLength={1}
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20294.440882443792!2d71.95808915257071!3d40.87655526055948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca0b64ef43357%3A0x8d7798d2806477f0!2zQ2hpbm9ib2QsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1669986978010!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
