import React, { Component } from 'react'
import NpnProductList from './components/NpnProductList';
import NpnProductAddOrEdit from './components/NpnProductAddOrEdit';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products : [
        { title: 'Nguyễn Phú Nam', id: 2210900047 , active:1},
        { title: 'Cabbage', id: 2 , active:1},
        { title: 'Garlic', id: 3 , active:0},
        { title: 'Apple', id: 4 , active:0},
        { title: 'Samsung', id: 5 , active:1},
      ],
      product:"",
      flag:true
    }
  }

  npnHandleSubmit = (param)=>{
    console.log("Param:",param);
    // thêm vào mảng dữ liệu products
    let {products} =this.state;
      if(param.flag === true){
      products.push(param);
      this.setState({
        products:products
      })
  }else{
    for (let index = 0; index < products.length; index++) {
      if(products[index].id === param.id){
        let product = {
          id:param.id,
          title:param.title,
          active:param.active
        }
        products[index] = product;
      }
      }
      this.setState({
        products:products
      })
  }
  }
  npnHandleEdit = (product)=>{
    console.log("App-edit",product);
    this.setState({
      product:product,
      flag:false
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Phú Nam - Reder Data - Event Form</h1>
        <hr/>
        <NpnProductList renderProducts={this.state.products} npnOnEdit={this.npnHandleEdit}/>
        <hr/>
        <NpnProductAddOrEdit onSubmit = {this.npnHandleSubmit}
        renderProduct = {this.state.product} renderflag={this.state.flag}/>
      </div>
    )
  }
}
