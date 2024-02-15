import React, { useEffect } from "react";
import Aos from "aos";
import SectionHead from "../SectionHead";
import Pizza from "../../assets/pizza-1.jpg.webp";
import Pizza2 from "../../assets/pizza-2.jpg.webp";
import Pizza3 from "../../assets/pizza-3.jpg.webp";
import Pizza4 from "../../assets/pizza-4.jpg.webp";
import Pizza5 from "../../assets/pizza-5.jpg.webp";
import Pizza6 from "../../assets/pizza-6.jpg.webp";
import "./meals.css";
import { Link } from "react-router-dom";

const Meals = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="meals">
      <SectionHead
        title="HOT PIZZA MEALS"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
        className="meals__head"
      />
      <div className="meals-container">
        <div className="row">
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="image-box">
                <img src={Pizza} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="image-box">
                <img src={Pizza2} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <div className="image-box">
                <img src={Pizza3} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box box-4"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <div className="image-box">
                <img src={Pizza4} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box box-5"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="image-box">
                <img src={Pizza5} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-0 columnBox">
            <div
              className="box box-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1100"
            >
              <div className="image-box">
                <img src={Pizza6} alt="Pizza" />
              </div>
              <div className="text-box">
                <h4>Italian Pizza</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="button">
                  <h6>$2.90</h6>
                  <Link to="/menu">order</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;
