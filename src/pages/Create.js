import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Create(){
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    const navigate = useNavigate();
    const changeTitle = (event) => {
        let dataInput = event.target.value;
        setTitle(dataInput);
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput);
    }
    const changeDescription = (event) => {
        let dataInput = event.target.value;
        setDescription(dataInput);
    }
    const submit = () => {
        let product = {
            title:title, price: price, description:description
        }
        axios.post("http://localhost:3000/products", product).then(() => {
            alert("Thêm thành công!");
        })
    }
    return(
        <div className="container mt-5">
            <h2>Thêm sản phẩm</h2>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                    <input value={title} onChange={(event) => {
                        changeTitle(event)
                    }} type="text" className="form-control" id="name"
                           placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Giá</label>
                    <input value={price} onChange={(event) => {
                        changePrice(event)
                    }} type="text" className="form-control" id="price"
                           placeholder="Nhập giá sản phẩm"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Mô tả</label>
                    <input value={description} onChange={(event) => {
                        changeDescription(event)
                    }} type="text" className="form-control" id="price"
                           placeholder="Nhập mô tả"/>
                </div>
            </div>
            <button className="btn btn-primary me-2" onClick={()=>{
                submit()
            }}>Thêm</button>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>Trở lại</button>
        </div>
    )
}