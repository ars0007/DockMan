import React from "react";
import "./spinner.styles.scss"

const Spinner = (props: any) => {
  return (
    <div className="spinner__lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
