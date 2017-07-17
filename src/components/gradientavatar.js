import React from 'react'
import PT from 'prop-types'

const GradientAvatar = ({ url }) =>
  <div className='gradient-overlay'
    style={{ backgroundImage: `url(${url})` }}
  />

GradientAvatar.propTypes = {
  url: PT.string
}

export default GradientAvatar
