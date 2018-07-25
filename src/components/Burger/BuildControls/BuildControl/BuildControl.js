import React from "react";

const BuildControl = props => (
  <div className ={classes.BuildControl}>
    <div className ={classes.label}>{props.label}
      <button className = {classes.Less}> Less </button>
      <button className = {classes.More}> More </button>
    </div>
  </div>
);

export default BuildControl;
