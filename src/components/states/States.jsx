import React, { useState } from "react";
import { FaPizzaSlice, FaRegLaugh } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./states.css";

const States = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="states">
      <div className="overlay"></div>
      <div className="states-container container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="icon">
                <FaPizzaSlice />
              </div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-box">
                  <h5>
                    {counterOn && (
                      <CountUp start={0} end={100} duration={3} delay={0} />
                    )}
                  </h5>
                  <small>Pizza Branches</small>
                </div>
              </ScrollTrigger>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="icon">
                <BiSolidMedal />
              </div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-box">
                  <h5>
                    {counterOn && (
                      <CountUp start={0} end={85} duration={3} delay={0} />
                    )}
                  </h5>
                  <small>Number of Awards</small>
                </div>
              </ScrollTrigger>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <div className="icon">
                <FaRegLaugh />
              </div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-box">
                  <h5>
                    <h5>
                      {counterOn && (
                        <CountUp start={0} end={10576} duration={3} delay={0} />
                      )}
                    </h5>
                  </h5>
                  <small>Happy Customer</small>
                </div>
              </ScrollTrigger>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <div className="icon">
                <LuChefHat />
              </div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-box">
                  <h5>
                    {counterOn && (
                      <CountUp start={0} end={900} duration={3} delay={0} />
                    )}
                  </h5>
                  <small>Staff</small>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
