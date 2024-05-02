import React, { Component } from 'react';

 class NPN_Form3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'Nguyễn Nam',
            age:20,
            course:'ReactJs'
        }
    }
    handleChange = (ev)=>{
    let name=ev.target.name;
    let val = ev.target.value;
    this.setState({
        [name]:val
    })
}
handleSubmit = (ev)=>{
    ev.preventDefault();
    alert(this.state.studentName +"\n" + this.state.age + "\n" + this.state.course)
    let obj ={
        studentName:this.state.studentName,
            age:this.state.age,
            course:this.state.course
    }
    //gửi dữ liệu lên App
    this.props.onSubmit(obj)
}
  render() {
    return (
      <div>
        <form name="npnForm">
        <div>
                    <label>Họ và tên</label>
                    <input name='studentName' 
                    value={this.state.studentName}             
                    onChange={this.handleChange}/>
                </div>
        <div>
                    <label>Tuổi</label>
                    <input name='age' 
                    value={this.state.age}             
                    onChange={this.handleChange}/>
        </div>
        <div>
        <label>
            Khóa học</label>
                <select name="course" 
                    value={this.state.course}
                    onChange={this.handleChange} >
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default NPN_Form3;