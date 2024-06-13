import React from 'react'

export default function NpnStudentList(renderNpnStudentList) {
    console.log("Data:", renderNpnStudentList);
    let npnElement = renderNpnStudentList.map((npnStudent, index)=>{
        return (
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{npnStudent.npnId}</td>
            <td>{npnStudent.npnName}</td>
            <td>{npnStudent.npnAge}</td>
            <td>{npnStudent.npnPhone}</td>
            <td>{npnStudent.npnEmail}</td>            
            <td>{npnStudent.npnStatus}</td>
            <td>
                Edit / Delete
            </td>
        </tr>

        )
    });
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Diện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {npnElement}
                </tbody>
            </table>

        </div>
    )
}
