import React from 'react'
import { IndexLink, Link } from 'react-router' // eslint-disable-line
import PropTypes from 'prop-types'
import Notifier from '../connectors/notifier'
import Background from '../components/Background'

export const CoreLayout = ({ children }) => (
  <div>
    <Background />
    <Notifier />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
