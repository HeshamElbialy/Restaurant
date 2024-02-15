import React from "react";
import Tabsimage from "../../assets/about.jpg.webp";
import PizzaImage from "../../assets/pizza-1.jpg.webp";
import PizzaImage1 from "../../assets/pizza-2.jpg.webp";
import PizzaImage2 from "../../assets/pizza-3.jpg.webp";
import Drinksmage1 from "../../assets/drink-1.jpg.webp";
import Drinksmage2 from "../../assets/drink-2.jpg.webp";
import DrinksImage3 from "../../assets/drink-3.jpg.webp";
import BurgerImage1 from "../../assets/burger-1.jpg.webp";
import BurgerImage2 from "../../assets/burger-2.jpg.webp";
import BurgerImage3 from "../../assets/burger-3.jpg.webp";
import PastaImage1 from "../../assets/pasta-1.jpg.webp";
import PastaImage2 from "../../assets/pasta-2.jpg.webp";
import PastaImage3 from "../../assets/pasta-3.jpg.webp";
import "./tabs.css";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <section className="tabs">
      <div className="tabs-container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="tabs-left"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="image-box">
                <img src={Tabsimage} alt="Tabsimage" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tabs-right"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Pizza
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Drinks
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Burgers
                  </button>
                  <button
                    className="nav-link"
                    id="nav-pasta-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-pasta"
                    type="button"
                    role="tab"
                    aria-controls="nav-pasta"
                    aria-selected="false"
                  >
                    Pasta
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PizzaImage} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PizzaImage1} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PizzaImage2} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={Drinksmage1} alt="Drinksmage1" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={Drinksmage2} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={DrinksImage3} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={BurgerImage1} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={BurgerImage2} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={BurgerImage3} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-pasta"
                  role="tabpanel"
                  aria-labelledby="nav-pasta-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PastaImage1} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PastaImage2} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="box">
                        <div className="image-box">
                          <img src={PastaImage3} alt="" />
                        </div>
                        <div className="info-box">
                          <h4>Itallian Pizza</h4>
                          <small>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia.
                          </small>
                          <span>$2.90</span>
                          <Link to="/menu">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
