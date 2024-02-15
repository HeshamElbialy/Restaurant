import React, { useEffect } from "react";
import PageHead from "../../components/PageHead";
import "./contact.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="contact">
      <PageHead title="Contact">
        <h6>
          <a href="/">Home</a> Contact
        </h6>
      </PageHead>
      <div className="contact-container container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="info-box">
              <h4
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                Contact Information
              </h4>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Address:{" "}
                <span className="address">
                  198 West 21th Street, Suite 721 New York <br /> NY 10016
                </span>
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
              >
                Phone: <span>+ 1235 2355 98</span>
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                Email: <span> info@yoursite.com</span>
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
              >
                Website: <span> yoursite.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form">
              <div className="div d-flex ">
                <input
                  type="text"
                  placeholder="Your Name"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                />
              </div>
              <div className="div">
                <input
                  type="text"
                  placeholder="Subject"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="700"
                />
              </div>
              <div className="div">
                <textarea
                  type="text"
                  placeholder="Message"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                />
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
