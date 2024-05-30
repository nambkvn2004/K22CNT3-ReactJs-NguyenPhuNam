import React, { Component } from 'react'

class NpnProductAddOrEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            active: 0,
            flag:true,
        }
    }
    componentWillMount=()=>{
        let {renderProduct} = this.props;
        console.log("renderProduct",renderProduct);
        if(renderProduct !=null ){
            this.setState({
            id: renderProduct.id,
            title: renderProduct.title,
            active: renderProduct.active
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        let {renderProduct} = nextProps;
        console.log("nextProps",nextProps);
        this.setState({
            id: renderProduct.id,
            title: renderProduct.title,
            active: renderProduct.active,
            flag:false
            })
    }
    npnHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    // submit form
    npnHandleSubmit = (ev) => {
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }
    render() {
        let elementButton = "Thêm mới";
        if(this.state.flag === false){
            elementButton="Cập nhật";
        }
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Id</span>
                        <input type="text" class="form-control" placeholder="Id"
                            name='id'
                            value={this.state.id}
                            onChange={this.npnHandleChange}
                            aria-label="Id" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Title</span>
                        <input type="text" class="form-control" placeholder="title"
                            name='title'
                            value={this.state.title}
                            onChange={this.npnHandleChange}
                            aria-label="title" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">Active</span>
                        <select class="form-control"
                             name='active'
                             value={this.state.active}
                             onChange={this.npnHandleChange}>
                            <option value={1}> Hiển thị</option>
                            <option value={0}> Ẩn</option>
                        </select>
                        
                    </div>            
                    <button className='btn btn-success' onClick={this.npnHandleSubmit}>
                        {elementButton}
                    </button>
                </form>
            </div>
        )
    }
}
export default NpnProductAddOrEdit;