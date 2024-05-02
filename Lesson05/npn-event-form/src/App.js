import React, { Component } from 'react'
import NPN_Form1 from './components/NPN_Form1';
import NPN_Form2 from './components/NPN_Form2';
import NPN_Form3 from './components/NPN_Form3';

 class App extends Component {

  handleSubmit =(param)=>{
    console.log(param);
  }
  render() {
    return (
      <div> 
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <NPN_Form1/>
          <NPN_Form2/>
          <NPN_Form3  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
export default App;