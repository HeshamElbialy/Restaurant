import React from "react";
import PageHead from "../../components/PageHead";
import Info from "../../components/info/Info";
import Welcome from "../../components/welcome/Welcome";
import States from "../../components/states/States";
import "./about.css";

const About = () => {
  return (
    <div className="aboutPage">
      <PageHead title="ABOUT">
        <h6>
          <a href="/">Home</a> ABOUT
        </h6>
      </PageHead>
      <Info />
      <Welcome />
      <States />
    </div>
  );
};

export default About;
