import React from 'react'

const EachAttractions = ({text, img, className}) => {
  return (
    <div className={`attractions ${className ? className : ''}`}
        style={ { backgroundImage: `url(${ img })` } }>
        {text}
    </div>
  )
}

export default EachAttractions