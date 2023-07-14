import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeController = ({initTheme}) => {
  const [theme, setTheme] = useState('');
  const userTheme = localStorage.getItem("theme");
  console.log(userTheme)
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //check if theme exist
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setTheme('dark')
      console.log(theme)
      return;
    }
    setTheme('light')
    console.log(theme)

  };
  //manual switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme('light')
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
    setTheme('dark')
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
  //handle icon click
  const handleClick=(evt)=>{
    evt.preventDefault()
    themeSwitch()
  }
  //moon icon
  const MoonIcon = ({setMoon}) => {
    const [moonTheme, setMoonTheme] = useState(setMoon);
    const toggleMoon = () => {
      if (moonTheme === "hidden") {
        setMoonTheme("");
        return;
      }
      setMoonTheme("hidden");
    };
    useEffect(()=>{
      toggleMoon()
    },[theme])
    return (
      <div onClick={(evt)=>handleClick(evt)} className={`bar-icon visible dark:hidden`}>
        <MdDarkMode />
      </div>
    );
  };
  //sun icon
  const SunIcon = ({setSun}) => {
    const [sunTheme, setSunTheme] = useState(setSun);
    const toggleSun = () => {
      if (sunTheme === "hidden") {
        setSunTheme("");
        return;
      }
      setSunTheme("hidden");
    };
    useEffect(()=>{
      toggleSun()
    },[theme])
    return (
      <div onClick={(evt)=>handleClick(evt)} className={`bar-icon hidden dark:visible`}>
        <MdLightMode />
      </div>
    );
  };
  //init
  themeCheck
  return (
    <div>
      <SunIcon />
      <MoonIcon />
    </div>
  );
};

export default ThemeController;
