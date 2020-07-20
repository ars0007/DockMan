import React from "react";
import "./App.scss";

import { ReactComponent as Logo } from "./assets/logo.svg";

import Navigation from "./containers/navigation/navigation.container";
import { listContainers } from "./api/container.api";

class App extends React.Component {
  componentDidMount() {
    // console.log(listContainers());
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
        <div className="App_main">Main</div>
      </div>
    );
  }
}

export default App;
