import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const slideInUp = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`
const gradientGenerator = (from, to) => `linear-gradient(to right, ${from}, ${to})`

const NotificationWrapper = styled.div`
  background: ${props => props.danger ? gradientGenerator('#F00000', '#DC281E') : gradientGenerator(
    '#43e97b', '#38f9d7')};
  color: black;
  padding: 20px;
  position: absolute;
  top: 50px;
  right: 50px;
  color: #fcfcfc;
  z-index: 1000;
  cursor: pointer;
  animation: ${slideInUp} 2s cubic-bezier(0.24, 1.16, 0, 1.01);
`

const Notification = props =>
  <div>
    {props.toasted &&
      <NotificationWrapper
        onClick={() => props.removeNotification()}
        danger={props.danger}
      >
        {props.content}
      </NotificationWrapper>
    }
  </div>

Notification.propTypes = {
  removeNotification: PropTypes.func,
  danger: PropTypes.bool,
  toasted: PropTypes.bool,
  content: PropTypes.string
}

const mapStateToProps = state => ({
  ...pick(['content', 'danger', 'toasted'], state.notify)
})

const mapDispatchToProps = d => ({
  removeNotification: () => d({ type: 'HIDETOAST' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
