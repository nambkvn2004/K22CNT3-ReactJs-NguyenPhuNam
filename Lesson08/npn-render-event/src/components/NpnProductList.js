import React, { Component } from 'react';

 class NpnProductList extends Component {

    npnHandleEdit =(product)=>{
        console.log("Edit",product);
        this.props.npnOnEdit(product);
    }
  render() {
        let {renderProducts} = this.props;
  console.log("App:",renderProducts);
    let fnActive = (param)=>{
        if(param==1){
            return 'Hiển thị';
        }
        return 'Ẩn';
    }
    let elementProduct = renderProducts.map((item,index)=>{
        return(
                <>
                <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                       {/* <td>{item.active==1?'Active':'NonActive'}</td>*/}
                    <td>
                       {fnActive(item.active)}
                    </td>
                    <td>
                       <button className='btn btn-success mx-1'
                            name='npnBtnEdit'
                            onClick={()=>this.npnHandleEdit(item)}
                            >
                                <i class="fa-regular fa-pen-to-square"></i>
                                </button>                       
                       <button className='btn btn-danger mx-1'
                            name='npnBtnDelete'
                            >
                                <i class="fa-solid fa-trash-can"></i>
                                </button>
                    </td>
                    </tr>
                </>
        )
    })
    return (
      <div> 
            <h2>Danh sách sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementProduct}
                </tbody>
            </table>
      </div>
    )
  }
}
export default NpnProductList;