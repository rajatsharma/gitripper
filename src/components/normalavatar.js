import React from 'react'
import PT from 'prop-types'

const NormalAvatar = ({ url }) =>
  <img className='profile-img'
    src={url}
  />

NormalAvatar.propTypes = {
  url: PT.string
}

export default NormalAvatar
