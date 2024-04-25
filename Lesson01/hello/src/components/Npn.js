import React from "react";

export default function Npn(props) {
  return (
    <div>
      <h2>Nguyễn Phú Nam - 2210900047</h2>
      <hr />
      <p>Bài thực hành 1</p>
      <p>Email: {props.email}</p>
      <p>Phone:{props.phone}</p>
    </div>
  );
}
