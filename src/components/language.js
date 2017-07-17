import React from 'react'
import PT from 'prop-types'

const LanguageCard = ({ lang }) =>
  <div className='language-card'>
    <h2 className='title'>Favourite Language</h2>
    <p className='content'>{lang}</p>
  </div>

LanguageCard.propTypes = {
  lang: PT.string
}

export default LanguageCard
