import React, { Component } from 'react';
import logo from '../../assets/logo.svg'
import './top.css'


export default class top extends Component {
  render () {
    return (
      <div className='cnode-top'>
        <div className='cnode-top_logo'>
          <img src={logo} />
        </div>
        <div className='conde-top_btn'>
          <span>发布</span>
        </div>
      </div>
    )
  }
}
