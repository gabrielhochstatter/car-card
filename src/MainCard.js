import React, { Fragment } from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import axios from 'axios'

export default class MainCard extends React.Component {
  state = {
    carData: {},
    finishedLoading: false
  }

  componentDidMount () {
    axios.get('carData2.json')
      .then(res => {
        this.setState({ carData: res.data })
      })
      .then(() => this.setState({ finishedLoading: true }))
      .catch(err => console.log(err))
  }

  render () {
    const finishedLoading = this.state.finishedLoading
    const { make, fuelData, imgUrl, themeColorRGB } = this.state.carData
    return (
      <Fragment>
        <div className='main-card-wrapper'>
          {finishedLoading ? (
            <Fragment>
              <CardHeader
                make={make}
                fuelData={fuelData}
                imgUrl={imgUrl}
                themeColorRGB={themeColorRGB} />
              <CardContent carData={this.state.carData} />
            </Fragment>
          ) : ('Loading...')}
        </div>
      </Fragment>
    )
  }
}
