import React from 'react';
import "./navigation.styles.scss";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Conatiner } from "../../assets/server.svg";
import { ReactComponent as Image } from "../../assets/docker-image.svg";
import { ReactComponent as Network } from "../../assets/network.svg";
import { ReactComponent as Volume } from "../../assets/storage.svg";
import { ReactComponent as Stats } from "../../assets/stats.svg";
import { ReactComponent as Ports } from "../../assets/ports.svg";


const Navigation = (props) => {

    return (
        <div className="Navigation">
            <div className="navigation active">
                <div className="item">
                    <Home className="svg" />
                    <h4>Home</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Conatiner className="svg" />
                    <h4>Container</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Image className="svg small-size" />
                    <h4>Images</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Network className="svg" />
                    <h4>Network</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Volume className="svg" />
                    <h4>Volume</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Stats className="svg" />
                    <h4>Stats</h4>
                </div>
            </div>
            <div className="navigation">
                <div className="item">
                    <Ports className="svg" />
                    <h4>Ports</h4>
                </div>
            </div>
        </div>
    );
};


export default Navigation;