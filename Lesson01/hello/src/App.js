import logo from './logo.png';
import './App.css';
import Npn from './components/Npn';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TRƯỜNG ĐẠI HỌC NGUYỄN TRÃI</h2>
      </header>
      <div>
        <Npn email="nguyennam@gmail.com" phone="0902069171"/>
        <Npn email="nambkvn2004@gmail.com" phone="0762446125"/>
      </div>
    </section>
  );
}

export default App;
