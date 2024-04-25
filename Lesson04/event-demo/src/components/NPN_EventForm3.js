import React, { Component } from 'react'
// Xử lý sự kiện với props, state
 class NPN_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tạo đối tượng dữ liệu thông qua state
        this.state ={
            name:"Nguyễn Phú Nam",
            job:"Dev soft"
        }
    }
    //Hàm xử lý sự kiện
    handleChangeName = (event)=>{
        this.setState({
            name:"K22CNT3-ReactJs"
        })
    }
    handleChangeJob =(event)=>{
        this.setState({
            job:"SV"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
            <h2>Thay đổi dữ liệu trong state</h2>
            <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
            <button onClick={this.handleChangeName}>Thay đổi name</button>
            <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
export default NPN_EventForm3;