import React,{useState} from 'react'

export default function NpnUseState
() {
    const [count, setCount] = useState(0);
    // Mảng
    const [list, setList]=useState([]);

    //Hàm xử lý sự kiện "thêm ngẫu nhiên"
    const npnHandleList = ()=>{
      // sinh ngẫu nhiên một giá trị số
      let num = parseInt(Math.random()*100);
      //cập nhật lại state list
       setList([
         ...list,
         num
       ])

    }
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <hr/>
          <h3>List: {list.toString()}</h3>
          <button onClick={npnHandleList}>Thêm ngẫu nhiên</button>
        </div>
      );
}
