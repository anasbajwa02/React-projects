import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // ✅ Add this
import "./contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import address from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null); // ✅ For CAPTCHA

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setResult("❌ Please complete the CAPTCHA.");
      return;
    }

    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "88a5569e-10b0-4252-b8db-819eef89bfff");
    formData.append("g-recaptcha-response", captchaToken); // ✅ Add CAPTCHA token

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
      setCaptchaToken(null); // ✅ Reset CAPTCHA token
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="massage-section">
        <h3 className="send-msg">Send us a message <img src={msg} alt="" /></h3>
        <p className="msg-title">
          Feel free to reach out through contact form or find our contact information below. 
          Your feedback, questions, and suggestions are important to us as we strive to provide 
          exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail} alt="" />anas03154297874@gmail.com</li>
          <li><img src={phone} alt="" />+923154297874</li>
          <li><img src={address} alt="" />Lahore Punjab , Pakistan</li>
        </ul>
      </div>
      <div className="form-section">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your Email" required />
          <label>Enter Your Messages here</label>
          <textarea name="text" rows={4} placeholder="Enter Your Message" required></textarea>
          
          {/* ✅ CAPTCHA Component */}
          <ReCAPTCHA
            sitekey="6LfrYzYrAAAAALxxK5UsoAVfiufiqgosBt6RXhSW"  // 🔁 Replace with your real site key
            onChange={(token) => setCaptchaToken(token)}
          />

          <br />
          <button type="submit">Submit Now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
