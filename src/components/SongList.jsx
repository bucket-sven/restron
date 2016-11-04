import React, { Component } from 'react'
import Table from 'antd/lib/table'

export default class SongList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  genList(songs) {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '专辑',
      dataIndex: 'album',
      render: album => album.name 
    }]

    return (
      <Table columns={columns} dataSource={this.props.songs} />
    )
  }

  render() {
    return (
      <div>
        {this.genList(this.props.songs)}
      </div>
    )
  }
}
