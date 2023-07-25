import React from "react";
const BarIcon = (props) => {
  const { icon, tooltip } = props;
  return (
    <div className="bar-icon relative group">
      {icon}
      <span className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] transition delay-75 font-light text-xs text-gray-400 dark:text-slate-50 p-2 mt-2 whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
};
export default BarIcon;
