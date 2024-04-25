import './App.css';
import NPN_ClassComp from './components/NPN_ClassComp';
import NPN_FuncDemo from './components/NPN_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"abcxyz",
    fistName:"Nguyễn Phú",
    lastName:"Nam"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <NPN_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <NPN_FuncDemo userName="NPN" fullName="Nguyễn Phú Nam" age="20" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <NPN_ClassComp /> 
        {/* Sử dụng props  */}
        <NPN_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <NPN_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <NPN_ClassComp company="Fit-NTU - K22CNT5" course="ReactJs 2" />
        <NPN_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
