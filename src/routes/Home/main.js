import React from 'react'
import PropTypes from 'prop-types'
import { GradientButton } from 'gradient-buttons'
import Ruri from '../../components/ruriinput'

const Home = ({ userName, changeUserName, error, ripUser }) =>
  <div className='core-layout-styles'>
    <div className='home-page'>
      <h1 className='hero'>GITRIPPER</h1>
      <Ruri value={userName} onChange={(val) => changeUserName(val)} />
      <GradientButton text='Rip' clicker={() => ripUser()} theme={error ? 'Purple Love' : 'Messenger'} style={{
        marginTop:'30px',
        borderRadius: '0px',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        boxShadow: '0 8px 16px 0 rgba(46, 61, 73, 0.24)'
      }} />
    </div>
  </div>

Home.propTypes = {
  changeUserName: PropTypes.func,
  ripUser: PropTypes.func,
  userName: PropTypes.string,
  error: PropTypes.bool
}

export default Home
