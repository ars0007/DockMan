import React from "react";
import CustomTable from "../../components/CustomTable/customTable.component";
import "./image.styles.scss";

const COLUMS = ["Id", "Tags", "Size", "Created"];
const ITEMS = [
  { Id: "1234", Tags: "image", Size: "10", Created: "10-02-1010" },
  { Id: "1234", Tags: "image", Size: "10", Created: "10-02-1010" },
];

class ImageContainer extends React.Component {
  render() {
    return (
      <div className="Image">
        <div className="Image__content">
          <CustomTable columns={COLUMS} items={ITEMS}/>
        </div>
      </div>
    );
  }
}

export default ImageContainer;
