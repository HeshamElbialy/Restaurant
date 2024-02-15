import React, { useEffect } from "react";
import PageHead from "../../components/PageHead";
import Services from "../../components/services/Services";
import PizzaImage from "../../assets/pizza-1.jpg.webp";
import PizzaImage1 from "../../assets/pizza-2.jpg.webp";
import PizzaImage2 from "../../assets/pizza-3.jpg.webp";
import Aos from "aos";
import "./servicesPage.css";

const ServicesPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="servicesPage">
      <PageHead title="Services">
        <h6>
          <a href="/">Home</a> services
        </h6>
      </PageHead>
      <Services />
      <div className="services-container container">
        <div className="row">
          <div className="col-lg-3">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="image-box">
                <img src={PizzaImage} alt="" />
              </div>
              <div className="info-box">
                <h4>Itallian Pizza</h4>
                <small>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </small>
                <span>$2.90</span>
                <a href="/#">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="image-box">
                <img src={PizzaImage1} alt="" />
              </div>
              <div className="info-box">
                <h4>Itallian Pizza</h4>
                <small>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </small>
                <span>$2.90</span>
                <a href="/#">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <div className="image-box">
                <img src={PizzaImage2} alt="" />
              </div>
              <div className="info-box">
                <h4>Itallian Pizza</h4>
                <small>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </small>
                <span>$2.90</span>
                <a href="/#">Add to cart</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <div className="image-box">
                <img src={PizzaImage2} alt="" />
              </div>
              <div className="info-box">
                <h4>Itallian Pizza</h4>
                <small>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </small>
                <span>$2.90</span>
                <a href="/#">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
