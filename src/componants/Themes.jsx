import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";
import React from "react";
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";

const getStorageColor = () => {
  let color = "hsl(252,35%,51%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = React.useState(false);
  const [color, setColor] = React.useState(getStorageColor());
  const [theme, setTheme] = React.useState(getStorageTheme());
  const [open, setOpen] = React.useState(false);
  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else setTheme("light-theme");
  };

  React.useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const panelHandler = () => {
    setOpen((prev) => {return !prev});
    !open && setShowSwitcher((prev) => {return !prev});
  };
  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div className="btn">
          {!showSwitcher ? <LuPanelLeftOpen onClick={panelHandler}/> : <LuPanelLeftClose onClick={panelHandler}/>}
          <div className={`${open ? "show_icon" : "dont_show"}`}>
          {!showSwitcher && <div
              className="style__switcher-toggler"
              onClick={() => setShowSwitcher(!showSwitcher)}
            >
              <FaCog />
            </div> }
            <div className="theme__toggler" onClick={toggleTheme}>
              {theme === "light-theme" ? <BsMoon /> : <BsSun />}
            </div>
          </div>
        </div>
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-item">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>
        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};
export default Themes;
