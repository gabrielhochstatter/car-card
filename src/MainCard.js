import React, { Fragment } from "react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export default class MainCard extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="main-card-wrapper">
          <CardHeader />
          <CardContent />
        </div>
      </Fragment>
    );
  }
}
