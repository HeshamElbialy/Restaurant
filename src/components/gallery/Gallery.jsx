import React from "react";
import GalleyImage1 from "../../assets/gallery-1.jpg.webp";
import GalleyImage2 from "../../assets/gallery-2.jpg.webp";
import GalleyImage3 from "../../assets/gallery-3.jpg.webp";
import GalleyImage4 from "../../assets/gallery-4.jpg.webp";
import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 m-0">
            <div
              className="image-box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <img src={GalleyImage1} alt="GalleyImage" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 m-0">
            <div
              className="image-box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img src={GalleyImage2} alt="GalleyImage" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 m-0">
            <div
              className="image-box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <img src={GalleyImage3} alt="GalleyImage" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 m-0">
            <div
              className="image-box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <img src={GalleyImage4} alt="GalleyImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
