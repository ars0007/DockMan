import React from "react";
import "./card.styles.scss";

import { ReactComponent as PowerStatus } from "../../assets/container_status.svg";

interface Props {
  title: string;
  container?: any;
  isContainer?: boolean;
  images?: any;
  volumes?: any;
  networks?: any;
  size: number;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="Card">
      <div className="Card__color"></div>
      <div className="Card__main">
        <div className="Card__main-heading">
          <h2>{props.title}</h2>
        </div>

        <div className="Card__main-total_containers">
          <h1>{props.size}</h1>
        </div>

        {props.isContainer === true ? (
          <div className="Card__main_status">
            <div className="Card__main_status-running">
              <PowerStatus className="svg on" />
              <span className="Card__main_status_number">2</span>
              <span className="Card__main_status_quo">running</span>
            </div>

            <div className="Card__main_status-running">
              <PowerStatus className="svg off" />
              <span className="Card__main_status_number">5</span>
              <span className="Card__main_status_quo">stopped</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
