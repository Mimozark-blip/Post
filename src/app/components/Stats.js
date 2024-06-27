import React from "react";

const Stats = (props) => {
  return (
    <div className="flex m-8 px-4 p-4 justify-center md:justify-center lg:justify-end">
      <div className="stats shadow">
        <div className="stat text-center md:text-center lg:text-right">
          <div className="stat-title">Total Post</div>
          <div className="stat-value">{props.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
