import React, { Component } from "react";
import Card from "../../components/card/card.component";
import { ReactComponent as Woman } from "../../assets/characterwoman.svg";
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
        <div className="Home__welcome_card">
          <div className="Home__welcome_card_texts">
            <h1 className="Home__welcome_card-title">Hi, Singh</h1>

            <h4 className="Home__welcome_card-subtitle">
              Welcome to one place to mange all your docker needs.
            </h4>
          </div>

          <Woman className="Home__welcome_card-woman" />
        </div>

        <div className="Home__row">
          <div className="containers box">
            <h4>Containers</h4>
            <h1>{this.state.data.container.size}</h1>
          </div>

          <div className="containers box">
            <h4>Images</h4>
            <h1>{this.state.data.image.size}</h1>
          </div>

          <div className="containers box">
            <h4>Networks</h4>
            <h1>{this.state.data.network.size}</h1>
          </div>

          <div className="containers box">
            <h4>Volumes</h4>
            <h1>{this.state.data.volume.size}</h1>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="Home__row">
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
        </div> */
}

export default Home;
