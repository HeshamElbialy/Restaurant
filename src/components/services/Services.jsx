import React, { useEffect } from "react";
import Aos from "aos";
import { IoFastFood } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPizzaSlice } from "react-icons/fa";
import SectionHead from "../SectionHead";
import "./services.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="services">
      <SectionHead
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        title="OUR SERVICES"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
        className="services__head"
      />
      <div className="container services-container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="icon">
                <IoFastFood />
              </div>
              <div className="text-box">
                <h4>HEALTHY FOODS</h4>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="icon">
                <TbTruckDelivery />
              </div>
              <div className="text-box">
                <h4>FASTEST DELIVERY</h4>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <div className="icon">
                <FaPizzaSlice />
              </div>
              <div className="text-box">
                <h4>ORIGINAL RECIPES</h4>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
