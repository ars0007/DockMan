import React from "react";
import CustomTable from "../../components/CustomTable/customTable.component";
import "./networks.styles.scss";

const NETWORKS_COLUMS = ["Id", "Name", "Scope", "Driver", "Created"];
const NETWORKS_ITEMS = [
  {
    Id: "123456789",
    Name: "bridge",
    Scope: "local",
    Driver: "bridge",
    Created: "2016-10-19T06:21:00.416543526Z",
  },
];

class Networks extends React.Component {
  render() {
    return (
      <div className="networks">
        <div className="networks__card dark-card">
          <CustomTable columns={NETWORKS_COLUMS} items={NETWORKS_ITEMS} />
        </div>
      </div>
    );
  }
}

export default Networks;
