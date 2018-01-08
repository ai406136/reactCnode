import React, { Component } from 'react';
import Top from '../ui/header/top.js'
import Nav from '../ui/nav/nav.js'
import Center from '../ui/center/center.js'
import Loadin from '../ui/loadin/loadin.js'
import { getList } from '../api/fetch.js'
class App extends Component {
  state = {
    data: [
      {
        id: "all",
        name: "全部"
      },
      {
        id: "good",
        name: "精华"
      },
      {
        id: "ask",
        name: "问答"
      },
      {
        id: "share",
        name: "分享"
      },
      {
        id: "job",
        name: "招聘"
      }
    ],
    nextText: '加载更多...',
    listQuery: {
      page: 1,
      limit: 20,
      tab: 'all'
    },
    listStatus: '',
    list: [],
    loading: false
  }
  componentDidMount() {
    this.getList()
  }
  navClick(status) {
    this.setState({
      listQuery: {
        page: 1,
        limit: 20,
        tab: status
      },
      loading: false
    })
    this.getList()
  }
  getList() {
    getList(this.state.listQuery).then(res => {
      this.setState({
        list: res,
        loading: true
      })
    })
  }
  render() {
    let { list, loading, nextText } = this.state
    return (
      <div className="App">
        <Top></Top>
        <Nav
          data={this.state.data}
          navClick={this.navClick.bind(this)}>
        </Nav>
        {
          loading === true ?
            <Center list={list} nextText={nextText}></Center>
            : <Loadin></Loadin>
        }
      </div>
    );
  }
}

export default App;
