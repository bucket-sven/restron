import React, { Component } from 'react'
import Table from 'antd/lib/table'

export default class SongList extends Component {
  constructor(props) {
    super(props)
  }

  pagination() {
    return {
      total: this.props.total,
      defaultPageSize: this.props.pageSize
    }
  }

  genList() {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '专辑',
      dataIndex: 'album',
      render: album => album.name
    }]

    return (
      <Table columns={columns} dataSource={this.props.songs} pagination={this.pagination()} />
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
