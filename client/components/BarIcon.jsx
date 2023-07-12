import React from "react";

const BarIcon = ({ icon, sponsor }) => {
  return(
    <div className="bar-icon peer">{icon}
    <small className="hidden peer-hover:visible">{sponsor}</small>
  </div>
  )
};
export default BarIcon;
