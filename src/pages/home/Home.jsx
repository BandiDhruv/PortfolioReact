import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Themes from "../../componants/Themes";
import ThemeItem from "../../componants/ThemeItem";
import { themes } from "../../data";
import ProfileDark from "../../assets/home-black.jpg";
import "./home.css";
const Home = () => {

  return (
<section className="home section grid">
      <img src={Profile} alt="" className="home__img" />        
      <div className="home__content">
        <div className="home__data">
        <h1 className="home__title">
    <span>I'm Dhruv Bandi.</span><br />{' '}
    Web Designer
</h1>

          <p className="home__description">
          Passionate Frontend Developer and Aspiring Full Stack Engineer, Crafting Seamless User Experiences and Shaping the Digital Frontier with Creativity and Code.
          </p>
          <Link to="/about" className="button">
            More About Me <span className="button__icon">
                <FaArrowRight/>
                </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
