import Header from "./Header"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {host} from './config'

function UpdateProduct() {

    const [data,setData] = useState([]);
    let params = useParams();
    //console.warn("props", params.id)

    useEffect(()=>{
        getData()
    },[])

    async function getData()
    {
        let result = await fetch( host + "/product/" + params.id);
        result = await result.json()
        setData(result);
    }

    return (
        <>
            <Header />
            <div>
                <h1>Update Product</h1>
                <form className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" name="name" defaultValue={data.name} className="form-control is-invalid" />
                <br />
                <input type="file" name="file" defaultValue={data.file_path}
                    className="form-control is-invalid" accept="image/*" />
                <br />
                <input type="text" name="description"  defaultValue={data.description}
                className="form-control is-invalid" />
                <br />
                <input type="text" name="price" defaultValue={data.price}
                className="form-control is-invalid" />
                <br />
                <img src={"http://127.0.0.1:8000/"+data.file_path} />
            </form>
            <button  className="btn btn-primary">Update</button>
            </div>
        </>
    )
}

export default UpdateProduct