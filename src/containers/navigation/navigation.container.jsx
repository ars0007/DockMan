import React from 'react';
import "./navigation.styles.scss";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Conatiner } from "../../assets/server.svg";
import { ReactComponent as Image } from "../../assets/docker-image.svg";
import { ReactComponent as Network } from "../../assets/network.svg";
import { ReactComponent as Volume } from "../../assets/storage.svg";
import { ReactComponent as Stats } from "../../assets/stats.svg";
import { ReactComponent as Ports } from "../../assets/ports.svg";

import { NavLink, withRouter } from 'react-router-dom';


const Navigation = (props) => {

    const getNavLinkClass = path => {
        return props.location.pathname === path
            ? "navigation active"
            : "navigation";
    };

    return (
        <div className="Navigation">
            <div className={getNavLinkClass("/home")}>
                <NavLink to="/home">
                    <div className="item">
                        <Home className="svg" />
                        <h4>Home</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/containers")}>
                <NavLink to="/containers">
                    <div className="item">
                        <Conatiner className="svg" />
                        <h4>Container</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/images")}>
                <NavLink to="/images">
                    <div className="item">
                        <Image className="svg small-size" />
                        <h4>Images</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/networks")}>
                <NavLink to="/networks">
                    <div className="item">
                        <Network className="svg" />
                        <h4>Network</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/volumes")}>
                <NavLink to="/volumes">
                    <div className="item">
                        <Volume className="svg" />
                        <h4>Volume</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/stats")}>
                <NavLink to="/stats">
                    <div className="item">
                        <Stats className="svg" />
                        <h4>Stats</h4>
                    </div>
                </NavLink>
            </div>
            <div className={getNavLinkClass("/ports")}>
                <NavLink to="/ports">
                    <div className="item">
                        <Ports className="svg" />
                        <h4>Ports</h4>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};


export default withRouter(Navigation);