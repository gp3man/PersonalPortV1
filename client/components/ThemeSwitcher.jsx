// import React, { useState, useEffect } from "react";
// import {
//   MdDarkMode,
//   MdLightMode,
// } from "react-icons/md";
// const moonIcon=(theme)=>{
//   const [iconTheme, setTheme] = useState("")
//   const [iconClass, setClass] = useState("")
//   if (theme == "light"){
//     setClass("hidden")
//   }
//   else setClass("dark")
//   return(
//     <div className={`moon barIcon ${iconClass}`}>
//       <MdDarkMode />
//     </div>
//   )
// }
// const sunIcon=(theme)=>{
//   const [iconTheme, setTheme] = useState("")
//   const [iconClass, setClass] = useState("")
//   if (theme == "dark"){
//     setClass("hidden")
//   }
//   else setClass("dark")
//   return(
//     <div className={`sun barIcon ${iconClass}`}>
//       <MdLightMode />
//     </div>
//   )
// }
// const ThemeSwitch = ()=>{
// // const sunIcon = document.querySelector(".sun")
// // const moonIcon = document.querySelector(".moon")

// const userTheme = localStorage.getItem("theme")
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

// const iconToggle =()=>{
//   sunIcon.classList.toggle("display-none")
//   moonIcon.classList.toggle("display-none")
// }

// const themeCheck =() =>{
//   if (userTheme === "dark" || (!userTheme && systemTheme)){
//     document.documentElement.classList.add("dark")
//     moonIcon.classList.add("display-none")
//     return;
//   }
//   sunIcon.classList.add("display-none")
// }
// //manual switch
// const themeSwitch =() =>{
//   if (document.documentElement.classList.contains("dark")){
//     document.documentElement.classList.remove("dark")
//     localStorage.setItem("theme", "light")
//     iconToggle()
//     return;
//   }
//   document.documentElement.classList.add("dark")
//   localStorage.setItem("theme", "dark")
//   iconToggle()
// }
// sunIcon.addEventListener("click", ()=>{
//   themeSwitch()
// })
// moonIcon.addEventListener("click", ()=>{
//   themeSwitch()
// })
// const [theme, setTheme] = useState('light')
// useEffect(()=>{
//   iconToggle();
// },[theme])
// themeCheck();
//   return(
//     <div>
//       <sunIcon theme={theme}/>
//       <moonIcon theme={theme}/>
//     </div>
//   )
// }
// export default themeSwitch;
