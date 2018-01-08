import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './body.css'
import { setDate } from '../../assets/index.js'
export default class Body extends Component {
  PropsType = {
    list: PropTypes.array,
    nextText: PropTypes.string
  }
  render() {
    let { list, nextText } = this.props;
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
                  <p className='body-header_title'>{item.title}</p>
                  <b className='body-header_tab'>{item.tab}</b>
                </div>
                <div className='conde-body_bottom'>
                  <div className='body-bottom_name'>{item.author.loginname}</div>
                  <div className='body-bottom_date'>{setDate(item.create_at)}</div>
                  <div className='body-bottom_icon'>
                    <div className='bottom-icon_look'>
                      <i className='icon iconfont icon-BAI-shenpi'></i>
                      <span>{item.visit_count}</span>
                    </div>
                    <div className='bottom-icon_praise'>
                      <i className='icon iconfont icon-BAI-zan'></i>
                      <span>{item.reply_count}</span>
                    </div>
                  </div>
                </div>
              </li>
            })
          }
          <button className='cnode-next'>{nextText}</button>
        </ul>
      </div>
    )
  }
}