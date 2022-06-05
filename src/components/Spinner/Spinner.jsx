import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <SpinnerRoundOutlined style={{ color: "white" }} size={100} />
    </div>
  );
};

export default Spinner;
