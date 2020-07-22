import React from "react";
import "./App.scss";

import { ReactComponent as Logo } from "./assets/logo.svg";

import Navigation from "./containers/navigation/navigation.container";
import ContainerAPI from "./api/container.api";
import Home from "./containers/home/home.component";

class App extends React.Component {
  containerInstance: ContainerAPI;
  constructor(props: any) {
    super(props);
    this.containerInstance = new ContainerAPI();
  }
  componentDidMount() {
    this.containerInstance.listContainers().then((containers) => {
      console.log(containers);
    });
    // listContainers();
  }

  render() {
    return (
      <div className="App">
        <div className="App__sidebar">
          <div className="App__sidebar__logo">
            <Logo className="App__sidebar__logo-svg" />
            <h3>DockMan</h3>
          </div>
          <div className="App__sidebar__thin_line"></div>
          <div className="App__sidebar__navigation">
            <Navigation />
          </div>
        </div>
        <div className="App_main">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
