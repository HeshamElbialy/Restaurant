import React, { useEffect } from "react";
import Aos from "aos";
import {
  FaPhoneAlt,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import "./info.css";

const Info = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="infoBox d-flex">
      <section className="info">
        <div className="info-container container ">
          <div className="info-box d-flex">
            <div className="">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="text-box">
                  <h5>000 (123) 456 7890</h5>
                  <p>A small river named Duden flows</p>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="icon">
                  <BiCurrentLocation />
                </div>
                <div className="text-box">
                  <h5>198 West 21th Street</h5>
                  <p>Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
              >
                <div className="icon">
                  <FaRegClock />
                </div>
                <div className="text-box">
                  <h5>Open Monday-Friday</h5>
                  <p>8:00am - 9:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-2">
        <div className="info-container container ">
          <div className="social-box w-100 h-100">
            <div
              className="icon"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <IoLogoTwitter />
            </div>
            <div
              className="icon"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <FaFacebookF />
            </div>
            <div
              className="icon"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <FaInstagram />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
