import React from 'react'

export default function NPN_FuncDemo(props) {
  return (
    <div>
        <hr/>
        <h2>Function Component Demo</h2>
        <h3>Sử dụng thuộc tinh từ props</h3>
        <p>UserName: {props.userName}</p>
        <p>FullName: {props.fullName}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}
