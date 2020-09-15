import React from "react";

const About = () => {
  return (
    <div className="box-about">
      <p>
        Since 1994, Ristorante Da Angelo has been bringing authentic Italian
        food to Tomsk.
        <br />
        We offer the menu of tried and true favourites, mainly from the southern
        regions of Italy, where pizza originated and where pasta is king. In
        true Italian fashion just about everything is freshly made on the
        premises.
        <br />
        And if you want to know why the gnocchi, in particular, tastes so
        exceptional — it’s because Angelo’s and Marco’s mothers, Nicolina and
        Rita, come in each and every day to make it.
      </p>
      <img src={require("../../assets/images/team.jpg")} alt="team"></img>
    </div>
  );
};

export default About;
