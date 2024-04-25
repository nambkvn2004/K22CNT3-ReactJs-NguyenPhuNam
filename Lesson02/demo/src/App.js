// import logo from './logo.png';
import './App.css';
import Class_NguyenPhuNam from './components/Class_NguyenPhuNam';
import Func_JSX_NguyenPhuNam from './components/Func_JSX_NguyenPhuNam';
function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo  */}
        <Func_JSX_NguyenPhuNam />
        <Func_JSX_NguyenPhuNam fullName="Nguyen Phu Hung" age="20" />

        <Class_NguyenPhuNam />
        <hr/>
        <Class_NguyenPhuNam info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
