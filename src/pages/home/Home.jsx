import React from "react";
import Header from "../../components/header/Header";
import Info from "../../components/info/Info";
import Welcome from "../../components/welcome/Welcome";
import Services from "../../components/services/Services";
import Meals from "../../components/meals/Meals";
import Pricing from "../../components/menu/Pricing";
import Gallery from "../../components/gallery/Gallery";
import States from "../../components/states/States";
import Tabs from "../../components/tabs/Tabs";
import Blog from "../../components/blog/Blog";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Info />
      <Welcome />
      <Services />
      <Meals />
      <Pricing />
      <Gallery />
      <States />
      <Tabs />
      <Blog />
    </>
  );
};

export default Home;
