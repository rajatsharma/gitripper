import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BioCard from '../../components/biocard'
import LanguageCard from '../../components/language'
import Credits from '../../components/credits'
import GradientAvatar from '../../components/gradientavatar'
// import NormalAvatar from '../../components/normalavatar'
import LoadingText from '../../components/loadingtext'

class Profile extends Component {
  componentDidMount () {
    console.log(this.props.location.pathname)
    this.props.getGithubProfile(this.props.location.pathname)
  }

  render () {
    return <div className='core-layout-styles'>
      {(this.props.basicProfile && <div className='user-profile'>
        {/* <NormalAvatar url={this.props.basicProfile.avatar} /> */}
        <GradientAvatar url={this.props.basicProfile.avatar} />
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
        <button onClick={() => window.open(this.props.basicProfile.url)}>Profile</button>
        <h1 className='repositories'>Repositories</h1>
        <div className='repos-cycler'>
          {this.props.repos.map((x, i) => <BioCard key={i} repo={x} />)}
        </div>
        <button onClick={() => window.open(this.props.basicProfile.url)}>Explore All</button>
        <LanguageCard lang={this.props.favLanguage} />
        <Credits />
      </div>) || <LoadingText />}
    </div>
  }
}

Profile.propTypes = {
  getGithubProfile: PropTypes.func,
  location: PropTypes.object,
  basicProfile: PropTypes.object,
  repos: PropTypes.array,
  favLanguage: PropTypes.string
}

export default Profile
