import React, { Fragment } from 'react'
import { Spring, config } from 'react-spring'
import InfoSandwich from './InfoSandwich'
import { MdClose, MdLocalGasStation } from 'react-icons/md'

export default class CardHeader extends React.Component {
  state = {
    isFuelInfoVisible: false
  }

  toggleMoreInfo = () => {
    this.setState({ isFuelInfoVisible: !this.state.isFuelInfoVisible })
  }

  render () {
    const { make, fuelData, imgUrl } = this.props
    const { isFuelInfoVisible } = this.state
    const overlayOpacity = 0.9

    const overlayStyle = {
      backgroundColor: `rgba(187, 10, 48, ${overlayOpacity})`
    }

    const overlayStyleZero = {
      backgroundColor: `rgba(187, 10, 48, 0)`
    }

    return (
      <Fragment>
        <Spring
          to={isFuelInfoVisible ? overlayStyle : overlayStyleZero}
          config={config.fast}
        >
          {props => (
            <div className='top-wrapper' style={{ backgroundImage: `url(${imgUrl})` }}>
              <div className='top-section' style={props}>
                <Fragment>
                  <div className='extra-info-content'>
                    {isFuelInfoVisible ? (
                      <Fragment>
                        <InfoSandwich
                          delay={0}
                          label='Range'
                          value={fuelData.range}
                          unit={fuelData.rangeUnit}
                        />
                        <InfoSandwich
                          delay={150}
                          label='Fuel Level'
                          value={fuelData.fuelLevel}
                          unit='%'
                        />
                        <InfoSandwich
                          delay={100}
                          label='Avg. Cons.'
                          value={fuelData.averageConsumption}
                          unit={fuelData.consumptionUnit}
                        />
                      </Fragment>
                    ) : null}
                  </div>
                  <Spring
                    to={!isFuelInfoVisible ? overlayStyle : overlayStyleZero}
                  >
                    {props => (
                      <nav className='navbar' style={props}>
                        <header className='brand'>Your {make}</header>
                        <div
                          className='more-info'
                          onClick={this.toggleMoreInfo}
                        >
                          {isFuelInfoVisible ? (
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
    )
  }
}

const CloseButton = props => {
  const springConfig = { tension: 500, friction: 20, clamp: true }
  return (
    <Spring
      to={{ transform: 'rotate(0deg)' }}
      from={{ transform: 'rotate(45deg)' }}
      config={springConfig}
    >
      {props => <MdClose style={props} />}
    </Spring>
  )
}

const MoreButton = props => {
  const springConfig = { tension: 500, friction: 20, clamp: true }
  return (
    <Spring
      to={{ transform: 'scaleX(1)' }}
      from={{ transform: 'scaleX(0)' }}
      config={springConfig}
    >
      {props => <MdLocalGasStation style={props} />}
    </Spring>
  )
}
