import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemeController = () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme);
  useEffect (()=>{
    themeCheck();
  },[])
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
  //manual switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light")
    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark")
    }
  };
  const themeCheck = () =>{
    if( userTheme === "dark" || ( !userTheme && systemTheme )) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark")
    }else{
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light")
    }
  };
  return (
    <div>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
export default ThemeController;
