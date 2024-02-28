import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import Verticle from "../Components/Verticle";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="primary-display">
        <div className="primary-display-left">
          <img src={image1} alt="image" />
        </div>
        <div className="primary-display-right">
          <p>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="list-items">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
            <img src={image2} alt="image" />
            <li>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </li>
          </ul>
        </div>
      </div>
      <div className="secondary-display">
        <p className="secondary-display-header">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={image3} alt="image" />
        <p className="secondary-display-header">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <div className="bottom-text">
          <p>
            CHEMICALS & PROCESS
            <Verticle />
            POWER WATER & WASTE WATER <Verticle /> OILS & GAS <Verticle />
            PHARMA SUGARS & DISTILLERIES
            <Verticle />
            PAPER & PULP <Verticle /> MARINE & DEFENCE <Verticle />
            METAL & MINING <Verticle />
            FOOD & BEVERAGE
            <Verticle />
            PETROCHEMICAL & REFINERIES <Verticle />
            SOLAR <Verticle />
            BUILDING <Verticle /> HVAC <Verticle /> FIRE FIGHTING
            <Verticle />
            AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
