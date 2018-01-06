import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './body.css'
export default class Body extends Component {
  PropsType = {
    list: PropTypes.array
  }
  render() {
    let { list } = this.props;
    return (
      <div className='cnode-body'>
        <ul className='cnode-body_ul'>
          {
            list.map((item) => {
              return <li key={item.id}>
                <div className='conde-body_header'>
                  <div className='body-header_img'>
                    <img src={item.author.avatar_url} />
                  </div>
                  <div className='body-header_text'>
                    <p>{item.title}</p>
                    <b>{item.tab}</b>
                  </div>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}