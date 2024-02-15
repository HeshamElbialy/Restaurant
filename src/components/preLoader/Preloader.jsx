import { React } from "react";
import Image1 from "../../assets/burger-1.jpg.webp"
import "./preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-container">
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};

export default Preloader;
