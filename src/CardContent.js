import React, { Fragment } from "react";
import { Spring, Trail, config } from "react-spring";

export default class CardContent extends React.Component {
  state = {
    contentLines: [
      {
        title: "Mileage:",
        value: "1,534"
      },
      {
        title: "Reg:",
        value: "LD68 XYZ"
      },
      {
        title: "Next Service Due In:",
        value: "1 year 3 months"
      },
      {
        title: "Next MOT In:",
        value: "2 years 9 months"
      },
      {
        title: "Locked:",
        value: "Yes"
      }
    ]
  };

  render() {
    const contentLines = this.state.contentLines.map((line, i) => (
      <ContentLine
        title={line.title}
        value={line.value}
        delay={200 + 120 * i}
      />
    ));
    return (
      <div className="content-wrapper">
        <Spring
          to={{ transform: "scaleY(1)" }}
          from={{ transform: "scaleY(0)" }}
          config={{ tension: 550, friction: 50, clamp: true }}
        >
          {props => (
            <div className="content-section heading-main" style={props}>
              <span className="content-heading">
                A6 <span className="subheading">Saloon</span>
              </span>
              <span className="subheading">50 TDI quattro</span>
            </div>
          )}
        </Spring>
        <div>{contentLines}</div>
      </div>
    );
  }
}

const ContentLine = ({ title, value, delay }) => {
  return (
    <Spring
      to={{ transform: "scaleY(1)" }}
      from={{ transform: "scaleY(0)" }}
      config={{ tension: 550, friction: 50, clamp: true }}
      delay={delay}
    >
      {props => (
        <div style={props} className="content-section content-line">
          <span className="content-line-title">{title}</span>
          <span className="content-line-value">{value}</span>
        </div>
      )}
    </Spring>
  );
};
