import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { Link } from 'react-router' //eslint-disable-line
import PropTypes from 'prop-types' //eslint-disable-line
import ParticleConfig from './particleconfig'
import Particles from 'react-particles-js'

const ParticleStyles = {
  zIndex: -2,
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

class Background extends React.Component {
  render () {
    return <Particles param={ParticleConfig} style={ParticleStyles} />
  }
}

export default Background
