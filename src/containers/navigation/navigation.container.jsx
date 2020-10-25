import React from "react";
import "./navigation.styles.scss";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Conatiner } from "../../assets/server.svg";
import { ReactComponent as Image } from "../../assets/docker-image.svg";
import { ReactComponent as Network } from "../../assets/network.svg";
import { ReactComponent as Volume } from "../../assets/storage.svg";
import { ReactComponent as Stats } from "../../assets/stats.svg";
import { ReactComponent as Ports } from "../../assets/ports.svg";

import { ReactComponent as Dashboard } from "../../assets/dashboard_v2.svg";

import { NavLink, withRouter } from "react-router-dom";

const Navigation = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path
      ? "navigation active"
      : "navigation";
  };

  return (
    <div className="Navigation">
        <h1>Hello</h1>
    </div>
  );
};

export default withRouter(Navigation);
