import React from "react";

import classes from "./Button.css";

const Button = props => {
  return (
    <div>
      <button className={classes.Button}>{props.val}</button>
    </div>
  );
};

export default Button;
