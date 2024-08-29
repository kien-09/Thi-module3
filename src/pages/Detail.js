import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Detail() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div className="container mt-5">
            <h2>Chi tiết sản phẩm</h2>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Tên sản phẩm: {data.title}</h2>
                    <h4 className="card-text">Mô tả: {data.description}</h4>
                    <h4 className="card-text">Giá: {data.price} VND</h4>
                    <button className="btn btn-primary" onClick={() => navigate("/")}>Trở lại</button>
                </div>
            </div>
        </div>
    )
}