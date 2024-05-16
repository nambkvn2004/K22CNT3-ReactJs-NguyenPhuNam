import React, { useContext } from 'react'
import { ThemeContext } from './NpnUseContext'

export default function NpnUseContext2() {
    const theme = useContext(ThemeContext);
    return (
    <div className={theme}>
        <h2>NpnUseContext2</h2>
        <p>
            <b>2210900047</b>
            <b>Nguyễn Phú Nam</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}
