import './App.css';
import {React, useEffect, useState } from 'react'
import axios from 'axios';
import NpnStudentList from './components/NpnStudentList';

function NpnApp() {
    
  //Sử dụng hàm useState của hook
   const [npnStudentList, setNpnStudentList] = useState([]);
  //Get data from api
  const npnGetStudent = async () => {
    try {
      const response = await axios.get("https://666a60c47013419182cf0cd7.mockapi.io/api/npnv1/npnStudent");
      setNpnStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    npnGetStudent();
  }, []);
 
    return (
      <div className='container border mt-5 p-3'>
        <h1 className='text-center my-3'>Nguyễn Phú Nam - Xử lý chức năng CRUD - Hook - API</h1>
        <hr/>
        <NpnStudentList renderNpnStudentList = {npnStudentList} />
      </div>
    )
}
export default NpnApp;