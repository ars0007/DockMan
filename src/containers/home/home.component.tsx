import React, { Component } from "react";
import Card from "../../components/card/card.component";
import "./home.styles.scss";

import { dashboardAPI } from "../../api/dashboard.api";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: {
        container: { size: 0 },
        image: { size: 0 },
        volume: { size: 0 },
        network: { size: 0 },
      },
    };
  }

  componentDidMount() {
    dashboardAPI().then((res) => {
      this.setState({ data: res });
    });
  }

  render() {
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
          <h1>{this.state.name}</h1>
          <Card
            isContainer={true}
            title="Container"
            container={this.state.data.container}
            size={this.state.data.container.size}
          />
          <Card
            title="Images"
            images={this.state.data.image}
            size={this.state.data.image.size}
          />
        </div>
        <div className="Home__row">
          <Card
            title="Volumes"
            volumes={this.state.data.volume}
            size={this.state.data.volume.size}
          />
          <Card
            title="Networks"
            networks={this.state.data.network}
            size={this.state.data.network.size}
          />
        </div>
      </div>
    );
  }
}

export default Home;
