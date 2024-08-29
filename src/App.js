import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import Detail from "./pages/Detail";

function App() {
    return (
        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={'update/:id'} element={<Update/>}/>
            <Route path={'create'} element={<Create/>}/>
            <Route path={'detail/:id'} element={<Detail/>}/>
        </Routes>
    );
}

export default App;
