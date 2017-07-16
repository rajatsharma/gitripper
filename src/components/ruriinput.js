import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Ruri extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputClass: props.value ? 'input--filled' : ''
    }
  }

  static propTypes = {
    value : PropTypes.string,
    onChange: PropTypes.func
  }

  componentWillReceiveProps (props) {
    if (props.value !== '') {
      this.setState({
        inputClass: 'input--filled'
      })
    } else {
      this.setState({
        inputClass: ''
      })
    }
  }

  render () {
    return <span className={'input input--ruri ' + this.state.inputClass}>
      <input className='input__field input__field--ruri' type='text'
        value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} />
      <label className='input__label input__label--ruri' htmlFor='input-26'>
        <span className='input__label-content input__label-content--ruri'>Username</span>
      </label>
    </span>
  }
}

export default Ruri
