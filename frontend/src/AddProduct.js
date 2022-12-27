import Header from "./Header"
import react, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function AddProduct() {

    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    async function addProduct() {
        const item = { name, file, description, price }
        //console.warn(item)
        const formData = new FormData
        formData.append("name", name)
        formData.append("file", file)
        formData.append("description", description)
        formData.append("price", price)

        let result = await fetch("http://127.0.0.1:8000/api/addproduct",
            {
                method: "POST",
                body: formData
            }
        )
       
        if (result.ok) {
            alert("Product has been saved");

        }
        else {
            alert("This product can't be upload, please check your inputs");
        }

    }
    return (
        <>
            <Header />
            <h1>Add Product</h1>
            <form className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }}
                    placeholder="Product name" className="form-control is-invalid" />
                <br />
                <input type="file" name="file" onChange={(e) => { setFile(e.target.files[0]) }}
                    className="form-control is-invalid" accept="image/*" />
                <br />
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="description" className="form-control is-invalid" />
                <br />
                <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }}
                    placeholder="0.0" className="form-control is-invalid" />
                <br />
            </form>
            <button onClick={addProduct} className="btn btn-primary">ADD Product</button>
        </>
    )
}

export default AddProduct