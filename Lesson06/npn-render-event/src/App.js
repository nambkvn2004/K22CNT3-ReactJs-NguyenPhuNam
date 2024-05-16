import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products : [
        { title: 'Nguyễn Phú Nam', id: 2210900047 , status:1},
        { title: 'Cabbage', id: 2 , status:1},
        { title: 'Garlic', id: 3 , status:0},
        { title: 'Apple', id: 4 , status:0},
        { title: 'Samsung', id: 5 , status:1},
      ]
    }
  }

  npnHandleSubmit = (param)=>{
    console.log("App:",param);
    // thêm vào mảng dữ liệu products
    let {products} =this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Phú Nam - Reder Data - Event Form</h1>
        <hr/>
        <NpnProductList renderProducts={this.state.products}/>
        <hr/>
        <NpnProductAdd onSubmit = {this.npnHandleSubmit}/>
      </div>
    )
  }
}
