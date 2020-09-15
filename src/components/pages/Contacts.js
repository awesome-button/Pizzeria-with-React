import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <p>
        <b>Our address:</b>
        <br /> Lenina 26, Tomsk <br />
        <br />
        <b>Phone number:</b> <br />8 (923) 465 32 22
      </p>
      <img src={require("../../assets/images/pizzeria.jpg")} alt="pizzeria" />
    </div>
  );
};

export default Contacts;
