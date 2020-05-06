import React from 'react'
import PropTypes from 'prop-types'
import Ruri from '../../components/ruriinput'
import Credits from '../../components/credits'

const Home = ({ userName, changeUserName, error, ripUser }) =>
  <div className='core-layout-styles'>
    <div className='home-page'>
      <h1 className='hero'>GITRIPPER</h1>
      <Ruri value={userName} onChange={(val) => changeUserName(val)} />
      <button onClick={() => ripUser()}>Rip</button>
    </div>
    <Credits />
  </div>

Home.propTypes = {
  changeUserName: PropTypes.func,
  ripUser: PropTypes.func,
  userName: PropTypes.string,
  error: PropTypes.bool
}

export default Home
