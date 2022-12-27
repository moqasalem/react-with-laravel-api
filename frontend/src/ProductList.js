import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { host } from './config'
function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    async function deleteOperation(id) {
        //alert(id)
        let result = await fetch(host + "/delete/" + id,
            {
                method: "DELETE",
            });
        result = await result.json();
        console.warn(result);
        getData()
    }

    async function getData() {
        let result = await fetch(host + "/list");
        result = await result.json()
        setData(result);
    }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-3">
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
        </div>
    )
}

export default ProductList