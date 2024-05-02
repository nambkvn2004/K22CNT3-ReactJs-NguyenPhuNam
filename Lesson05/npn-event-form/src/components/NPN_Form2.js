import React, { Component } from 'react';

 class NPN_Form2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            khoaHoc:"ReactJS"
        }
    }
    //hàm xử lý sự kiện
    handleChange=(ev)=>{
        this.setState({
            khoaHoc:ev.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.khoaHoc)
    }
  render() {
    return (
      <div>
            <form>
                <label>Khóa học</label>
                <select value={this.state.khoaHoc} name="khoaHoc" onChange={this.handleChange} >
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
      </div>
    )
  }
}
export default NPN_Form2;
