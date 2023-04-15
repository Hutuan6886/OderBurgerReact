import React, { Component } from 'react'
import '../css/burger.css'

import { connect } from 'react-redux';
class ThongTin extends Component {



  renderBurgerImg = () => {
    let arrayHtml = [];
    this.props.propBurger.map((item, index) => {

      for (let i = 0; i < item.amount; i++) {
            arrayHtml.push(<div className={item.name}></div>)
          }
          return arrayHtml;
    })
    return arrayHtml;
  }

  render() {
    return (
      <div className='col-6'>
        <h3 className='text-danger text-center'>BÁNH BURGER CỦA BẠN</h3>
        <div>
          <div className='breadTop'></div>
          {this.renderBurgerImg()}
          <div className='breadBottom'></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    propBurger: state.stateBurger.burger,
  }
}
export default connect(mapStateToProps)(ThongTin)