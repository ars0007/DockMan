import React from "react";
import Card from "../../components/card/card.component";
import "./home.styles.scss";

const Home = (props: any) => {
  return (
    <div className="Home">
      <div className="Home__connection">
        <div className="Home__connection-heading">
          <h3>Connection</h3>
        </div>

        <div className="Home__connection-main">
          <span>
            Endpoint: <strong>Local</strong>
          </span>
          <span>
            URL: <strong>/var/run/docker.sock</strong>
          </span>
        </div>
      </div>
      <div className="Home__row">
        <Card isContainer={true} size={7} title="Container" />
        <Card size={19} title="Images" />
      </div>
      <div className="Home__row">
        <Card size={13} title="Volumes" />
        <Card size={2} title="Networks" />
      </div>
    </div>
  );
};

export default Home;
