import React, { Component } from 'react'
import Table from 'antd/lib/table'

export default class SongList extends Component {
  constructor(props) {
    super(props)
  }

  pagination() {
    let onChanged = this.props.onChanged
    let self = this
    return {
      total: this.props.total,
      defaultPageSize: this.props.pageSize,
      current: self.props.data.page,
      onChange(current) {
        if(onChanged) {
          let data = self.props.data
          data.page = current
          onChanged(data)
        }
      }
    }
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

    return (
      <Table columns={columns} dataSource={this.props.songs} pagination={this.pagination.call(this)} />
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
