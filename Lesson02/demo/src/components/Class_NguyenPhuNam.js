import React, { Component } from 'react';

class Class_NguyenPhuNam extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Nguyen Phu Nam",
            class:"K22CNT3"
        }
    }
    users = {
        name:"Nguyen Phu Nam",
        age:20
    }

    // Ham xu ly sk
    handleChange = (event)=>{
        this.setState({
            fullName:"Nguyen Phu Hung",
        })
    }
    render() {
        return (
            <div>
                <h2>Class component Demo</h2>
                {this.users.name} - {this.users.age}

                <hr/>
                <h3>info: {this.props.info}</h3>
                <h3>Tine:{this.props.time}</h3>
                <hr/>
                <h3>State:
                    FullName: {this.state.fullName} - 
                    Class: {this.state.class}

                </h3>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        );
    }
}

export default Class_NguyenPhuNam;