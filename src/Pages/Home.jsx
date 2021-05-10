import React, { useState } from "react";

import UserDetails from "../Components/UserDetails";
import OurModels from "../Components/OurModels";
import SiteNavigation from "../Components/SiteNavigation";
import FinalStep from "../Components/FinalStep";

import MODEL_DATA from "../modelData";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [modelData, setModelData] = useState(MODEL_DATA);

  const handleModelSelectChange = (index) => {
    const changedModel = MODEL_DATA[index];
    changedModel["isSelected"] = !MODEL_DATA[index]["isSelected"];
    setModelData([
      ...MODEL_DATA.slice(0, index),
      changedModel,
      ...MODEL_DATA.slice(index + 1, MODEL_DATA.length),
    ]);
  };

  const handleModelLikeChange = (index) => {
    const changedModel = MODEL_DATA[index];
    changedModel["isLike"] = !MODEL_DATA[index]["isLike"];
    setModelData([
      ...MODEL_DATA.slice(0, index),
      changedModel,
      ...MODEL_DATA.slice(index + 1, MODEL_DATA.length),
    ]);
  };

  const handleStepChange = (direction) => {
    if (direction === "next" && currentStep < 2)
      setCurrentStep(currentStep + 1);

    if (direction === "prev" && currentStep > 1)
      setCurrentStep(currentStep - 1);

    if (direction === "submit") setCurrentStep(3);
  };

  return (
    <div className="home-container">
      <div className="site-nav">
        <img
          src="https://res.cloudinary.com/dmqiiomnm/image/upload/v1620616772/maket-logo_js5jox.png"
          width={100}
          height={100}
          alt=""
        />
        {name.length > 0 && currentStep > 1 && (
          <p className="user-name">👋 {`${name}`}</p>
        )}
      </div>
      <div className="site-content">
        <SiteNavigation step={currentStep} />
        <div className="site-form">
          {currentStep === 1 ? (
            <h1 className="step-1-header">Getting Started</h1>
          ) : currentStep === 2 ? (
            <h1 className="step-2-header">
              Our models <span>🏠</span>
            </h1>
          ) : (
            <h1 className="step-3-header">Thank you! 🥳</h1>
          )}

          {currentStep === 1 && (
            <UserDetails
              handleNameChange={setName}
              handleEmailChange={setEmail}
              handlePhoneChange={setPhone}
              email={email}
              name={name}
              phone={phone}
            />
          )}

          {currentStep === 2 && (
            <OurModels
              handleModelSelectChange={handleModelSelectChange}
              handleModelLikeChange={handleModelLikeChange}
              modelData={modelData}
            />
          )}

          {currentStep === 3 && <FinalStep name={name} />}
          <div className="cta-buttons">
            {currentStep === 2 && (
              <>
                <button
                  className="button-pill button-nav prev-button"
                  onClick={() => handleStepChange("prev")}
                >
                  Previous
                </button>
                <button
                  className="button-pill button-nav submit-button"
                  onClick={() => handleStepChange("submit")}
                >
                  Submit
                </button>
              </>
            )}
            {currentStep < 2 && (
              <button
                className="button-pill button-nav next-button"
                onClick={() => handleStepChange("next")}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
