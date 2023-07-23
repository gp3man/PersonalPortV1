import React from "react";

const BarIcon = (props) => {
  const {icon, tooltip} = props
  return(
    <div className="bar-icon relative">{icon}
    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition text-blue-700 dark:text-slate-50 p-1 rounded absolute top-full mt-2 whitespace-nowrap">{tooltip}</span>
  </div>
  )
};
export default BarIcon;
