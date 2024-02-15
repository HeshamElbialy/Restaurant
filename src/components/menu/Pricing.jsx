import React from "react";
import SectionHead from "../SectionHead";
import Pizza1 from "../../assets/pizza-1.jpg.webp";
import Pizza2 from "../../assets/pizza-2.jpg.webp";
import Pizza3 from "../../assets/pizza-3.jpg.webp";
import Pizza4 from "../../assets/pizza-4.jpg.webp";
import Pizza5 from "../../assets/pizza-5.jpg.webp";
import Pizza6 from "../../assets/pizza-6.jpg.webp";
import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <SectionHead
        title="OUR MENU PRICING
        "
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        className="pricing__head"
      />
      <div className="pricing-container container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="pricing-left">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
              >
                <div className="image-box">
                  <img src={Pizza1} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="image-box">
                  <img src={Pizza2} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
              >
                <div className="image-box">
                  <img src={Pizza3} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <div className="image-box">
                  <img src={Pizza4} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="pricing-right">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
              >
                <div className="image-box">
                  <img src={Pizza3} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="image-box">
                  <img src={Pizza4} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1100"
              >
                <div className="image-box">
                  <img src={Pizza5} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
              >
                <div className="image-box">
                  <img src={Pizza6} alt="" />
                </div>
                <div className="info-box">
                  <div className="price-box">
                    <h6>Italian Pizza</h6>
                    <h5>$20.00</h5>
                  </div>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
