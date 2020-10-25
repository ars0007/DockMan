import React from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/logo.svg";

import Navigation from "./containers/navigation/navigation.container";
import ContainerAPI from "./api/container.api";
import Home from "./containers/home/home.component";

import Containers from "./containers/containers/containers.container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageContainer from "./containers/images/image.container";

import { ReactComponent as Dashboard } from "./assets/dashboard_v2.svg";
import { ReactComponent as ContainersSvg } from "./assets/containers_group.svg";
import { ReactComponent as ImagesSvg } from "./assets/images_group.svg";
import { ReactComponent as NetworkSvg } from "./assets/network_group.svg";
import { ReactComponent as StatsSvg } from "./assets/stats_group.svg";


class App extends React.Component {
  containerInstance: ContainerAPI;
  constructor(props: any) {
    super(props);
    this.containerInstance = new ContainerAPI();
  }
  componentDidMount() {
    console.log("Mounted");
    this.containerInstance.listContainers(true).then((cntrs) => console.log(cntrs));
  }

  render() {
    return (
      <div className="App">
        <div className="App__sidebar">
          <div className="App__sidebar__logo">
            <Logo className="App__sidebar__logo-svg" />
            <h3>DockMan</h3>
          </div>
          <div className="App__sidebar__navigation">
            <Dashboard className="svg"/>
            <ContainersSvg className="svg" />
            <ImagesSvg className="svg" />
            <NetworkSvg className="svg" />
            <StatsSvg className="svg" />
          </div>
          <div className="App__sidebar_settings">
            <FontAwesomeIcon icon={faCogs} />
            <FontAwesomeIcon icon={faArrowRight} style={{ float: "right" }} />
          </div>
        </div>
        <div className="App__main">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/containers" component={Containers} />
            <Route path="/images" component={ImageContainer} />
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
