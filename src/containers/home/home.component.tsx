import React from "react";
import Card from "../../components/card/card.component";
import "./home.styles.scss";

const Home = (props: any) => {
  return (
    <div className="Home">
      <div className="Home__connection">Connection</div>
      <div className="Home__row">
        <Card />
        <Card />
      </div>
      <div className="Home__row">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
