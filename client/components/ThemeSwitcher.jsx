import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeController = () => {
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //check if theme exist
  //manual switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme('light');
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }else{
      setTheme('dark');
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  //handle icon click
  const handleClick=(evt)=>{
    evt.preventDefault()
    themeSwitch()

  }
  //moon icon
  const MoonIcon = () => {
    return (
      <div onClick={(evt)=>handleClick(evt)} className={"bar-icon"}>
        <MdDarkMode />
      </div>
    );
  };
  //sun icon
  const SunIcon = () => {
    return (
      <div onClick={(evt)=>handleClick(evt)} className={"bar-icon"}>
        <MdLightMode />
      </div>
    );
  };
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      !userTheme ?  setTheme('dark') : setTheme(userTheme);
      console.log(userTheme)
    }else{
      !userTheme ? setTheme('light') : setTheme(userTheme);
      console.log(userTheme)
    }
  };
  console.log(userTheme)
  console.log(systemTheme)
  //init
  {themeCheck}
  return (
    <div>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
export default ThemeController;
