import React from 'react'
import { Spring } from 'react-spring'

const CardContent = ({ carData }) => {
  const contentLines = carData.generalData.map((line, i) => (
    <ContentLine
      key={line.title}
      title={line.title}
      value={line.value}
      delay={100 + 40 * i}
    />
  ))
  const { model, modelBodyStyle, modelVariant } = carData
  return (
    <div className='content-wrapper'>
      <Spring
        to={{ transform: 'scaleY(1)' }}
        from={{ transform: 'scaleY(0)' }}
        config={{ tension: 550, friction: 50, clamp: true }}
      >
        {props => (
          <div className='content-section heading-main' style={props}>
            <span className='content-heading'>
              {model} <span className='subheading'>{modelBodyStyle}</span>
            </span>
            <span className='subheading'>{modelVariant}</span>
          </div>
        )}
      </Spring>
      <div>{contentLines}</div>
    </div>
  )
}

const ContentLine = ({ title, value, delay }) => {
  return (
    <Spring
      to={{ transform: 'scaleY(1)' }}
      from={{ transform: 'scaleY(0)' }}
      config={{ tension: 550, friction: 50, clamp: true }}
      delay={delay}
    >
      {props => (
        <div style={props} className='content-section content-line'>
          <span className='content-line-title'>{title}</span>
          <span className='content-line-value'>{value}</span>
        </div>
      )}
    </Spring>
  )
}

export default CardContent
