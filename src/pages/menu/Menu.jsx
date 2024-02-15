import React from "react";
import Pricing from "../../components/menu/Pricing";
import Meals from "../../components/meals/Meals";
import Tabs from "../../components/tabs/Tabs";
import PageHead from "../../components/PageHead";
import "./menu.css";

const Menu = () => {
  return (
      <section className="menu">
        <PageHead title="OUR MENU">
          <h6>
            <a href="/">Home</a> / Menu
          </h6>
        </PageHead>
        <div className="menu-container">
          <Pricing />
          <Meals />
          <Tabs />
        </div>
      </section>
  );
};

export default Menu;
