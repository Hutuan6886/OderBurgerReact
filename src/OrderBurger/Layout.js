import React, { Component } from 'react'
import ThongTin from './ThongTin'
import Order from './Order'

export default class Layout extends Component {
  render() {
    return (
      <div style={{height:'650px'}} className='container-fluid'>
        <div style={{height:'100%'}} className='row'>
            <ThongTin />
            <Order />
        </div>

      </div>
    )
  }
}
