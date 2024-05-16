import React from 'react'
import NpnUseState from './components/NpnUseState'
import NpnUseEffect from './components/NpnUseEffect'
import NpnUseContext from './components/NpnUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Nguyễn Phú Nam - Hook</h1>
        <hr/>
        <NpnUseState />
        <hr/>
        <NpnUseEffect/>
        <hr/>
        <NpnUseContext/>
    </div>
  )
}
