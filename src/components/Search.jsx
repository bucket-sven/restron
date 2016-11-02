import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import classNames from 'classnames'
const InputGroup = Input.Group

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '123',
      focus: false
    }
  }

  handleSearchChange(){
    console.log('handle search change');
  }
  handleSearch() {
    console.log('handle search');
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
          <Input placeholder={placeholder} value={this.state.value} onChange={this.handleSearchChange}
            onPressEnter={this.handleSearch} />
          <div className="ant-input-group-wrap">
            <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch}/>
          </div>
        </InputGroup>
      </div>
    )
  }
}
