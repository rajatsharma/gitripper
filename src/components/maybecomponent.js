import React from 'react'

const MaybeComponent = ({ children, condition }) => { condition() && <span>{children}</span> || null }

export default MaybeComponent
