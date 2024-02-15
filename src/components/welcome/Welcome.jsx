import React, { useEffect } from "react";
import Aos from "aos";
import WelcomeImage from "../../assets/about.jpg.webp";
import { GiFullPizza } from "react-icons/gi";
import "./welcome.css";

const Welcome = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="welcome">
      <div className="welcome-container ">
        <div className="row g-5">
          <div className="col-lg-6 col-md-6">
            <div className="left-side">
              <div className="image-box">
                <img src={WelcomeImage} alt="Welcome" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="right-side">
              <div className="text-box">
                <h2
                  className="box"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                >
                  WELCOME TO{" "}
                  <span>
                    {" "}
                    <GiFullPizza /> PIZZA
                  </span>{" "}
                  A RESTAURANT
                </h2>
                <p
                  className="box"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
