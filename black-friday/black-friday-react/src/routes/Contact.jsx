import React from 'react';
import "../components/Contact/contact.css"
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact-talks">
             <div class="lets-talk">
                    <h2>Let's Talk</h2>
                </div>
                <div class="shop">
                    <h2>CONTACT US</h2>
                </div>  
        </div>
        <div className="body">
          <div className="personal-details">
            <div className="explain">
              <div className="gt-in-tch">
                <h2>GET IN TOUCH</h2>
              </div>
              <div className="exp">
                <p>
                  Have questions or need assistance? Click the 'Contact Us' icon to get
                  in touch with our friendly and responsive customer support team.
                </p>
              </div>
            </div>

            <div className="detail">
              <div className="dtl1">
                <i className="las la-map-marker">&nbsp;<span>ADDRESS</span></i>
                <div className="idtls">MODEL TOWN, LAHORE, PUNJAB PAKISTAN.</div>
              </div>
              <div className="dtl2">
                <i className="las la-phone-volume">&nbsp;<span>PHONE</span></i>
                <div className="idtls">+923154297874</div>
              </div>
              <div className="dtl3">
                <i className="las la-envelope">&nbsp;<span>EMAIL</span></i>
                <div className="idtls">anas03154297874@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="form">
            <form>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" placeholder="First" />
              <input type="text" placeholder="Last" /><br />

              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" placeholder="Email" /><br />

              <label htmlFor="msg">Message:</label><br />
              <input type="text" id="msg" placeholder="Type Your Message" />

              <div className="btn1">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>

        <div className="sale">
          <div className="sl1">
            <h2>Black Friday Sale</h2>
          </div>
          <div className="sl2">
            <h2>SAVE BIG: UP TO <span>60% OFF</span> ON ALL PRODUCTS</h2>
          </div>
          <div className="sl3">
            <p>
              Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology.
              It’s time to secure the best deals and upgrade your experience — start shopping now!
            </p>
          </div>
          <div className="btn2">
            <button>
              <a href="../shop/shop.html">SHOP NOW</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
