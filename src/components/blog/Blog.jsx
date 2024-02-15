import React from "react";
import blog1 from "../../assets/image_1.jpg.webp";
import blog2 from "../../assets/image_2.jpg.webp";
import blog3 from "../../assets/pizza-1.jpg.webp";
import SectionHead from "../SectionHead";
import { BsChatLeftTextFill } from "react-icons/bs";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <SectionHead
        title="RECENT FROM BLOG"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        className="blog__head"
      />
      <div className="blog-container container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              class="card"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="image-box">
                <img src={blog1} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <div className="date">
                  <span>Sept 10, 2018</span>
                  <span> Admin</span>
                  <span>
                    {" "}
                    <BsChatLeftTextFill /> 3
                  </span>
                </div>
                <h5 class="card-title">The Delicious Pizza</h5>
                <p class="card-text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              class="card"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="image-box">
                <img src={blog2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <div className="date">
                  <span>Sept 10, 2018</span>
                  <span> Admin</span>
                  <span>
                    {" "}
                    <BsChatLeftTextFill /> 3
                  </span>
                </div>
                <h5 class="card-title">The Delicious Pizza</h5>
                <p class="card-text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              class="card"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <div className="image-box">
                <img src={blog3} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <div className="date">
                  <span>Sept 10, 2018</span>
                  <span> Admin</span>
                  <span>
                    {" "}
                    <BsChatLeftTextFill /> 3
                  </span>
                </div>
                <h5 class="card-title">The Delicious Pizza</h5>
                <p class="card-text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
