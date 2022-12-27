import Header from "./Header"
import react, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { host } from "./config"
function SearchProduct() {

    //store data from fetch
    const [data, setData] = useState([])
    //store previouse search key
    const [key, setKey] = useState("")

    //Search
    async function Search(key) {
        let result = await fetch(host + "/search/" + key);
        result = await result.json();
        setData(result)
        setKey(key)
    }

    //Delete item and update data based on previouse search key
    async function deleteOperation(id) {
        //alert(id)
        let result = await fetch(host + "/delete/" + id,
            {
                method: "DELETE",
            });
        result = await result.json();
        Search(key)
    }


    return (
        <>
            <Header />
            <h1>Search Product</h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" onChange={(e) => Search(e.target.value)} className="form-control" placeholder="Search Product" name="key" />
                <table className='table'>
                    <thead  >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col" colSpan={2}>Operations</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <img style={{ height: '100px' }} src={"http://127.0.0.1:8000/" + item.file_path} />
                                    </td>
                                    {localStorage.getItem("user-info") ?
                                        <>
                                            <td>
                                                <span onClick={() => deleteOperation(item.id)} className='delete'>Delete</span>
                                            </td>
                                            <td>
                                                <Link to={"update/" + item.id}> <span className='update'>Update</span></Link>
                                            </td>
                                        </>
                                        :
                                        <>
                                        </>
                                    }

                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default SearchProduct