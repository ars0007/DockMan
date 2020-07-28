import React from "react";
import "./image.styles.scss";

class ImageContainer extends React.Component {
  render() {
    return (
      <div className="Image">
        <div className="Image__content">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tags</th>
                <th>Size</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              <tr className="spacer"></tr>
              <tr className="one_row">
                <td >111111111111111111111111111</td>
                <td>Domenic</td>
                <td>88,110</td>
                <td>dcode</td>
              </tr>
              <tr className="spacer"></tr>
              <tr className="one_row">
                <td>2</td>
                <td>Sally</td>
                <td>72,400</td>
                <td>Students</td>
              </tr>
              <tr className="spacer"></tr>
              <tr className="one_row">
                <td>3</td>
                <td>Nick</td>
                <td>52,300</td>
                <td>dcode</td>
              </tr>
              <tr className="spacer"></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ImageContainer;
