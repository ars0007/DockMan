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
      <div className="container-details__main dark-card">
        <div className="container-details__main-actions dark-card">
          <div className="actions-header">Actions</div>
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
      </div>
    </div>
  );
};

export default ContainerDetails;
