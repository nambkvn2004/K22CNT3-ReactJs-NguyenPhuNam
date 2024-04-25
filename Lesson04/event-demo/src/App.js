import React, { Component } from 'react'
import NPN_EventForm1 from './components/NPN_EventForm1';
import NPN_EventForm2 from './components/NPN_EventForm2';
import NPN_EventForm3 from './components/NPN_EventForm3';
import NPN_EventForm4 from './components/NPN_EventForm4';

 class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event From Demo</h1>
        <NPN_EventForm1/>
        <NPN_EventForm2/>
        <NPN_EventForm3/>
        <NPN_EventForm4 name="Nguyễn Phú Nam" />
      </div>
    )
  }
}
export default App;