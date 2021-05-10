import React from "react";

const FinalStep = ({ name }) => {
  return (
    <div className="final-step">
      <p className="final-step-subheader">
        Congratulations {`${name}`} we have received your project application!
      </p>
      <p className="final-step-content">
        You will receive a confirmation email with further instructions and one
        of our associates will be in touch shortly.
      </p>
    </div>
  );
};

export default FinalStep;
