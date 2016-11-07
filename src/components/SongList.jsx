import React, { Component } from 'react'
import Table from 'antd/lib/table'

export default class SongList extends Component {
  constructor(props) {
    super(props)
  }

  pagination() {
    let onPageChanged = this.props.onPageChanged
    let result = this.getResult()
    let data = this.getData()
    return {
      total: result.songCount,
      defaultPageSize: data.pageSize,
      current: data.page,
      onChange(current) {
        if(onPageChanged) {
          data.page = current
          onPageChanged(data)
        }
      }
    }
  }

  getData() {
    let data = this.props.data
    return data
  }

  getResult() {
    let result = {}
    let data = this.getData()
    if(data.result) {
      result = data.result
    }
    return result
  }

  genList() {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '专辑',
      dataIndex: 'album',
      render: album => album ? album.name : ''
    }]
    let result = this.getResult()

    return (
      <Table columns={columns} dataSource={result.songs} pagination={this.pagination.call(this)} />
    )
  }

  render() {
    return (
      <div>
        {this.genList()}
      </div>
    )
  }
}
