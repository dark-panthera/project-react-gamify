import React, { Component } from "react";

const backdrop = props => {
  return <div className="backdrop" onClick={props.onHideBackdrop}></div>;
};

export default backdrop;
