import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import BarIcon from "../components/BarIcon.jsx";
const ThemeController = () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme);
  useEffect(() => {
    themeCheck();
  }, []);
  //handle icon click
  const handleClick = (evt) => {
    evt.preventDefault();
    themeSwitch();
  };
  //moon icon
  const MoonIcon = () => {
    return (
      <a onClick={(evt) => handleClick(evt)}>
        <BarIcon icon={<MdDarkMode />} tooltip={"Dark"} />
      </a>
    );
  };
  //sun icon
  const SunIcon = () => {
    return (
      <a onClick={(evt) => handleClick(evt)}>
        <BarIcon icon={<MdLightMode />} tooltip={"Light"} />
      </a>
    );
  };
  //manual switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div className="pl-2">{theme === "dark" ? <SunIcon /> : <MoonIcon />}</div>
  );
};
export default ThemeController;
