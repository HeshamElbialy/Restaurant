import React, { useEffect } from "react";
import Aos from "aos";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-container container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="text-wrapper"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <h3>Welcome</h3>
              <h2>
                we cooked your <br /> desired pizza recipe
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="btn-box">
                <Link to="/contact">
                  <button>Order Now</button>
                </Link>
                <Link to="/menu" className="btn-2">
                  <button>View Menu</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
