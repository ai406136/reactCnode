import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nav.css'
export default class Nav extends Component {
  PropsType = {
    data: PropTypes.array,
    navClick: PropTypes.func
  }
  render() {
    let { data } = this.props;
    return (
      <div className='cnode-nav'>
        <ul className='conde-nav_ul'>
          {
            data.map((item) => {
              return <li
                key={item.id}
                id={item.id}
                onClick={() => {
                  this.props.navClick(item.id)
                }}>
                {item.name}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}