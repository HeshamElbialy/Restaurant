import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp, IoPerson } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";
import ImageBlog1 from "../../assets/image_1.jpg.webp";
import ImageBlog2 from "../../assets/image_2.jpg.webp";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="about-col">
              <h6>ABOUT US</h6>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="social-box d-flex">
                <div className="icon">
                  <IoLogoTwitter />
                </div>
                <div className="icon">
                  <FaFacebookF />
                </div>
                <div className="icon">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-col">
              <h6>RECENT BLOG</h6>
              <div className="box">
                <div className="image-box">
                  <img src={ImageBlog1} alt="" />
                </div>
                <div className="details-box">
                  <p>Even the all-powerful Pointing has no control about</p>
                  <div className="date">
                    <span>
                      {" "}
                      <FaCalendarAlt /> Sept 10, 2018
                    </span>
                    <span>
                      {" "}
                      <IoPerson /> Admin
                    </span>
                    <span>
                      {" "}
                      <BsChatLeftTextFill /> 3
                    </span>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="image-box">
                  <img src={ImageBlog2} alt="" />
                </div>
                <div className="details-box">
                  <p>Even the all-powerful Pointing has no control about</p>
                  <div className="date">
                    <span>
                      {" "}
                      <FaCalendarAlt /> Sept 10, 2018
                    </span>
                    <span>
                      {" "}
                      <IoPerson /> Admin
                    </span>
                    <span>
                      {" "}
                      <BsChatLeftTextFill /> 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="serv-box">
              <h6>SERVICES</h6>
              <ul>
                <li>Cooked</li>
                <li>Deliver</li>
                <li>Quality Foods</li>
                <li>Mixed</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="question">
              <h6>HAVE A QUESTIONS?</h6>
              <div className="details-box">
                <ul>
                  <li>
                    <span>
                      <IoLocationSharp />
                    </span>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li>
                    <span>
                      <FaPhone />
                    </span>{" "}
                    +2 392 3929 210
                  </li>
                  <li>
                    <span>
                      <MdEmail />{" "}
                    </span>
                    info@yourdomain.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright ©2024 All rights reserved | This template made by
            <span> Hive Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
