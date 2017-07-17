import React from 'react'
import PT from 'prop-types'
import languageColors from '../constants/languagecolors'

const BioCard = ({ repo }) =>
  <div className='bio-card' style={{ borderBottomColor:languageColors[repo.language] }}>
    <p className='heading'>{repo.name}</p>
    <div className='stats'>
      <div>
        <p className='numbers'>{repo.forks}</p>
        <p className='heading'>Forks</p>
      </div>
      <div>
        <p className='numbers'>{repo.stargazers_count}</p>
        <p className='heading'>Stars</p>
      </div>
    </div>
  </div>

BioCard.propTypes = {
  repo: PT.object
}

export default BioCard
