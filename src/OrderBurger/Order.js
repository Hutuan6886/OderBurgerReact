import React, { Component } from 'react'

import { connect } from 'react-redux';
class Order extends Component {
  renderThucAn = () => {
    return this.props.propBurger.map((item, index) => {
      return <tr key={index}>
        <td scope="row">{item.name}</td>
        <td className='d-flex justfi-content-center align-items-center'>
          <button onClick={() => { this.props.tangGiam(item.name, -1) }} style={{ backgroundColor: '#fff' }}>
            <i style={{ color: '#b12e1c' }} class="fa fa-minus-circle"></i>
          </button>
          {item.amount}
          <button onClick={() => { this.props.tangGiam(item.name, 1) }} style={{ backgroundColor: '#fff' }}>
            <i style={{ color: '#20961a' }} class="fa fa-plus-circle"></i>
          </button>
        </td>
        <td>{item.gia.toLocaleString()}</td>
        <td>{(item.gia * item.amount).toLocaleString()}</td>
      </tr>
    })
  }

  renderTongTien = () => {
    return this.props.propBurger.reduce((tongTien, thanhPhan, index) => {
      return tongTien += (thanhPhan.gia * thanhPhan.amount)
    }, 0).toLocaleString()
  }


  render() {
    return (
      <div className='col-6'>
        <h3 className='text-success text-center'>Chọn thức ăn</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số Lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderThucAn()}
          </tbody>
          <tbody>
            <tr>
              <th colspan='3' className='text-right'>Tổng Tiền</th>
              <td>
                {this.renderTongTien()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    propBurger: state.stateBurger.burger,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiam: (name, number) => {
      let action = {
        type: 'TANG_GIAM_SL',
        name, number
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);