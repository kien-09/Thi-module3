import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const navigate = useNavigate()
    const [list, setList] = useState([])
    const getAll = () => {
        axios.get("http://localhost:3000/products").then(res => {
            let data = res.data;
            setList(data)
        })
    }
    useEffect(() => {
        getAll();
    }, []);
    const remove = (id) => {
        axios.delete(`http://localhost:3000/products/${id.target.getAttribute("data-item")}`).then((res) => {
            navigate('/')
            getAll();
        })
    }
    return (
        <div className="container mt-5">
            <h2>Danh sách sản phẩm</h2>
            <div className="my-3">
                <Link to="/create" className="btn btn-success">Thêm mới</Link>
            </div>
            <table className="table" border={1}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Giá</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => (
                    <>
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>
                                <Link to={"/detail/" + item.id} className="text-decoration-none">{item.title}</Link>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button type="button" className="btn btn-danger me-2" data-toggle="modal"
                                        data-target={`#exampleModal-${item.id}`}>
                                    Xóa
                                </button>
                                <div className="modal fade" id={`exampleModal-${item.id}`}  role="dialog"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                Bạn chắc chắn muốn xóa sản phẩm này?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary" data-dismiss="modal"
                                                        data-item={item.id}
                                                        onClick={(id) => remove(id)}
                                                >Ok
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/update/" + item.id} className="btn btn-primary">Sửa</Link>
                            </td>
                        </tr>
                    </>
                ))}

                </tbody>
            </table>
        </div>
    )
}