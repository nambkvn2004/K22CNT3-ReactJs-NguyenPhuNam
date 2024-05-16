import React, { createContext, useState } from 'react'
import NpnUseContext1 from './NpnUseContext1';
export const ThemeContext = createContext(); // tạo ngữ cảnh để chia sẻ

export default function NpnUseContext() {
    //state
    const [theme,setTheme] = useState('red');

    //hàm thay đổi theme
    const npcHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value ={theme}>
    <div className='alert'>
        <h2>Demo useContext</h2>
        <NpnUseContext1/>
        <button onClick={npcHandleChange}>Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}
