import React, { Fragment } from "react";
import { Spring, config } from "react-spring";
import FancyButton from "./FancyButton";
import { MdMoreHoriz, MdClose, MdLocalGasStation } from "react-icons/md";

export default class CardHeader extends React.Component {
  state = {
    isExtraInfoVisible: false,
    overlayOpacity: 0.9
  };

  toggleMoreInfo = () => {
    this.setState({ isExtraInfoVisible: !this.state.isExtraInfoVisible });
  };

  render() {
    const { isExtraInfoVisible, overlayOpacity } = this.state;

    const overlayStyle = {
      backgroundColor: `rgba(187, 10, 48, ${overlayOpacity})`
    };

    const overlayStyleZero = {
      backgroundColor: `rgba(187, 10, 48, 0)`
    };

    return (
      <Fragment>
        <Spring
          to={isExtraInfoVisible ? overlayStyle : overlayStyleZero}
          config={config.fast}
        >
          {props => (
            <div className="top-wrapper">
              <div className="top-section" style={props}>
                <Fragment>
                  <div className="extra-info-content">
                    {isExtraInfoVisible ? (
                      <Fragment>
                        <FancyButton
                          delay={0}
                          label="Range"
                          value="432"
                          unit="mi"
                        />
                        <FancyButton
                          delay={150}
                          label="Fuel Level"
                          value="100"
                          unit="%"
                        />
                        <FancyButton
                          delay={100}
                          label="Avg. Cons."
                          value="42"
                          unit="mpg"
                        />
                      </Fragment>
                    ) : null}
                  </div>
                  <Spring
                    to={!isExtraInfoVisible ? overlayStyle : overlayStyleZero}
                  >
                    {props => (
                      <nav className="navbar" style={props}>
                        <header className="brand">Your Audi</header>
                        <div
                          className="more-info"
                          onClick={this.toggleMoreInfo}
                        >
                          {isExtraInfoVisible ? (
                            <CloseButton />
                          ) : (
                            <MoreButton />
                          )}
                        </div>
                      </nav>
                    )}
                  </Spring>
                </Fragment>
              </div>
            </div>
          )}
        </Spring>
      </Fragment>
    );
  }
}

const CloseButton = props => {
  const springConfig = { tension: 500, friction: 20, clamp: true };
  return (
    <Spring
      to={{ transform: "rotate(0deg)" }}
      from={{ transform: "rotate(45deg)" }}
      config={springConfig}
    >
      {props => <MdClose style={props} />}
    </Spring>
  );
};

const MoreButton = props => {
  const springConfig = { tension: 500, friction: 20, clamp: true };
  return (
    <Spring
      to={{ transform: "scaleX(1)" }}
      from={{ transform: "scaleX(0)" }}
      config={springConfig}
    >
      {props => <MdLocalGasStation style={props} />}
    </Spring>
  );
};
