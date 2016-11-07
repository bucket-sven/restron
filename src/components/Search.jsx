import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import classNames from 'classnames'

const http = require('utils/Http')
const Urls = require('constants/Urls')
const InputGroup = Input.Group
const qs = require('querystring')

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      focus: false
    }
  }

  handleSearchChange(e){
    this.setState({
      value: e.target.value
    })
  }
  handleSearch() {
    //console.log('handle search');
    let callback = this.props.callback
    if(callback) {
      callback(this.state.value)
    }
    /*
    let body = {
      s: this.state.value,
      type: 1
    }
    http.post({
      url: Urls.NET_EASE_BASE_URL + Urls.SEARCH_MUSIC_URL,
      headers: Urls.NET_EASE_HEADER,
      data: qs.stringify(body)
    }, function(data) {
      let str = JSON.parse(data.toString())
      if (callback) callback(str)
      else console.log(str.result.songs[0]);
    })
    */
  }

  render() {
    const { style, size, placeholder } = this.props
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim()
    })
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus
    })
    return (
      <div className="ant-search-input-wrapper" style={style} >
        <InputGroup className={searchCls}>
          <Input placeholder={placeholder} value={this.state.value} onChange={this.handleSearchChange.bind(this)}
            onPressEnter={this.handleSearch.bind(this)} />
          <div className="ant-input-group-wrap">
            <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch.bind(this)}/>
          </div>
        </InputGroup>
      </div>
    )
  }
}
