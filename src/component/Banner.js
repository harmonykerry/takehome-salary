import React from "react";

function Banner() {
  return (
    <div className="Jumbutron">
      <div className="title">Take Home Salary Calculator</div>
      {/* If there are subTitle then show if not do not show */}
      <div className="sub-title">
        Use this tool to calculate your take home salary for the tax year
        2021-2022 or 2022-2023
      </div>
    </div>
  );
}

export default Banner;
