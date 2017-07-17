import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GradientButton} from 'gradient-buttons' //eslint-disable-line
import BioCard from '../../components/biocard'

class Profile extends Component {
  componentDidMount () {
    console.log(this.props.location.pathname)
    this.props.getGithubProfile(this.props.location.pathname)
  }

  render () {
    return <div className='core-layout-styles'>
      {this.props.basicProfile && <div className='user-profile'>
        <img src={this.props.basicProfile.avatar} className='profile-img' />
        <h1 className='name'>{this.props.basicProfile.name}</h1>
        {/* <p>{this.props.basicProfile.login}</p> */}
        <div className='stats'>
          <div>
            <p className='numbers'>{this.props.basicProfile.repos}</p>
            <p className='heading'>Repositories</p>
          </div>
          <div>
            <p className='numbers'>{this.props.basicProfile.followers}</p>
            <p className='heading'>Followers</p>
          </div>
          <div>
            <p className='numbers'>{this.props.basicProfile.following}</p>
            <p className='heading'>Following</p>
          </div>
        </div>
        <GradientButton text='Profile'
          clicker={() => window.open(this.props.basicProfile.url)} theme='Scooter' style={{
            marginTop: '30px',
            borderRadius: '0px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            boxShadow: '0 8px 16px 0 rgba(46, 61, 73, 0.24)'
          }} />
        <h1 className='repositories'>Repositories</h1>
        <div className='repos-cycler'>
          {this.props.repos.map((x, i) => <BioCard key={i} repo={x} />)}
        </div>
      </div>}
    </div>
  }
}

Profile.propTypes = {
  getGithubProfile: PropTypes.func,
  location: PropTypes.object,
  basicProfile: PropTypes.object,
  repos: PropTypes.array
}

export default Profile
