import React, { useEffect, useState } from "react";
import "./container-details.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRecycle,
  faStop,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../../components/spinner/spinner.component";

const ACTIONS_ITEMS = [
  { id: "1a", title: "Start", icon: faPlay, className: "start" },
  { id: "2a", title: "Pause", icon: faPause, className: "pause" },
  { id: "3a", title: "Resume", icon: faRecycle, className: "pause" },
  { id: "4a", title: "Stop", icon: faStop, className: "stop" },
  { id: "5a", title: "Remove", icon: faTrash, className: "stop" },
];

type ACTION_TYPE = {
  id: string;
  title: string;
  icon: any;
  className: string;
};

const ContainerDetails = (props: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Container Details";
    console.log(props.match?.params.containerId);
  }, []);

  const buildTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ten">ID</td>

            <td className="id-column">
              <h4 className="id-value">
                c41dd312b9b15aeb52c5d4034e793c8d95a800892079c0fc0eb51bb4afa8ec34
              </h4>
            </td>
          </tr>

          <tr>
            <td>Name</td>
            <td>Poratiner</td>
          </tr>

          <tr>
            <td>IP Address</td>
            <td>172.0.0.1</td>
          </tr>

          <tr>
            <td>Status</td>
            <td>Running</td>
          </tr>

          <tr>
            <td>Created</td>
            <td>2020-11-17 09:43:02</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const buildActionItem = (actionItem: ACTION_TYPE) => {
    return (
      <div
        key={actionItem.id}
        className={`${actionItem.className} action-item`}
      >
        <FontAwesomeIcon icon={actionItem.icon} />
        <span>{actionItem.title}</span>
      </div>
    );
  };

  return (
    <div className="container-details">
      <div className="container-details__main">
        <div className="container-details__main-actions dark-card">
          <div className="container-details__main-header">Actions</div>
          <div className="actions-content">
            {loading ? (
              <div className="container-details__spinner">
                <Spinner />
              </div>
            ) : (
              ACTIONS_ITEMS.map((actionItem) => buildActionItem(actionItem))
            )}
          </div>
        </div>
        <div className="container-details__main-status dark-card">
          <div className="container-details__main-header">Status</div>
          <div className="container-details__main-status-content">
            {buildTable()}
          </div>
        </div>
        <div className="container-details__main-info dark-card">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                <td>portainer/portainer</td>
              </tr>

              <tr>
                <td>Port</td>
                <td>0.0.0.0:8000 === 8000/tcp </td>
              </tr>

              <tr>
                <td>Volume</td>
                <td>portainer_data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
