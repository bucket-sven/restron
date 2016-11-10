import React, { Component, PropTypes } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import classNames from 'classnames'

const InputGroup = Input.Group

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      focus: false
    }
  }

  handleSearchChange(e){
    let value = e.target.value
    this.setState({
      value: value
    })
    let onChange = this.props.onChange
    if(onChange) {
      onChange(value)
    }
  }

  handleSearch() {
    // console.log('handle search');
    let callback = this.props.callback
    let data = this.props.data
    data.page = 1
    if(callback) {
      callback(data)
    }
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
          <Input placeholder={placeholder} defaultValue={this.props.data.keyword} onChange={this.handleSearchChange.bind(this)}
            onPressEnter={this.handleSearch.bind(this)} />
          <div className="ant-input-group-wrap">
            <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch.bind(this)}/>
          </div>
        </InputGroup>
      </div>
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func,
  callback: PropTypes.func,
  data: PropTypes.object,
  style: PropTypes.object,
  size: PropTypes.object,
  placeholder: PropTypes.string
}
