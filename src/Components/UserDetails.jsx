import React from "react";
import Input from "@material-ui/core/Input";

const UserDetails = ({
  handleNameChange,
  handleEmailChange,
  phone,
  email,
  name,
  handlePhoneChange,
}) => {
  return (
    <div className="user-details">
      <Input
        className="user-details-input"
        value={name}
        type="text"
        onChange={(e) => handleNameChange(e.target.value)}
        placeholder="Enter Name"
      />
      <Input
        className="user-details-input"
        value={email}
        type="text"
        onChange={(e) => handleEmailChange(e.target.value)}
        placeholder="Enter Email"
      />
      <Input
        className="user-details-input"
        value={phone}
        type="text"
        onChange={(e) => handlePhoneChange(e.target.value)}
        placeholder="Enter Phone Number"
      />
    </div>
  );
};

export default UserDetails;
