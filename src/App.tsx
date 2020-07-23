import React from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/logo.svg";

import Navigation from "./containers/navigation/navigation.container";
import ContainerAPI from "./api/container.api";
import Home from "./containers/home/home.component";

import Containers from "./containers/containers/containers.container";

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
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/containers" component={Containers}/>
            <Route path="/images" render={() => <h1>Images</h1>} />
            <Route path="/networks" render={() => <h1>Networks</h1>} />
            <Route path="/volumes" render={() => <h1>Volumes</h1>} />
            <Route path="/stats" render={() => <h1>Stats</h1>} />
            <Route path="/ports" render={() => <h1>Ports</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
