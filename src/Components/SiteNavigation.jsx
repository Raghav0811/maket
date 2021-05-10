import React from "react";

const SiteNavigation = (props) => {
  return (
    <div className="site-navigation">
      <ul>
        <li className={props.step === 1 ? "step-bold" : ""}>
          👋 Getting Started
        </li>
        <li className={props.step === 2 ? "step-bold" : ""}>🏠 Our models</li>
        <li className={props.step === 3 ? "step-bold" : ""}>🥳 Thank you</li>
      </ul>
    </div>
  );
};

export default SiteNavigation;
