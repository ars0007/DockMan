import * as React from "react";
import "./containers.styles.scss";
import ContainerAPI from "../../api/container.api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

class Containers extends React.Component<any, any> {
  instance: ContainerAPI = new ContainerAPI();

  constructor(props: any) {
    super(props);
    this.state = { containers: [] };
  }

  componentDidMount() {
    document.title = "Conatiners";
    this.instance
      .listContainers(true)
      .then((containers) => this.setState({ containers: containers }));
  }

  rowCard = (container: any) => {
    return (
      <div
        className="containers__table_row"
        onClick={() => this.props.history.push(`/container-details/${container.Id}`)}
      >
        <div className="circle">
          <h3>{container.Names[0][0].toUpperCase()}</h3>
        </div>

        <div className="containers__table_name">
          <h4 className="name">{container.Names[0]}</h4>
        </div>

        <div className="containers__table_other_content">
          <div className="containers__table_image">
            <span className="image">{container.Image}</span>
          </div>

          <div
            className={`containers__table_status ${
              container.State === "running" ? "running" : "stopped"
            }`}
          >
            <h5>{container.State}</h5>
          </div>

          <div className="containers__table_ports">
            <h5>
              {container.Ports.length > 0
                ? container.Ports[0].PublicPort
                : "No Ports"}
            </h5>
            {container.Ports.length > 0 ? (
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="external_link"
              />
            ) : (
              ""
            )}
          </div>

          <div className="containers__table_timestamp">
            <span>{new Date(container.Created).toLocaleString()}</span>
          </div>
        </div>
        <div className="containers__table_open">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="containers">
        <div className="containers__table">
          {this.state.containers.map((container: any) => (
            <div key={container.Id}>{this.rowCard(container)}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Containers;
