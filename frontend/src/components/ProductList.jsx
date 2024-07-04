import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ReactPaginate from "react-paginate";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    };

    const deleteProduct = async(productId) =>{
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    };

  return (
    <div>
        <h1 className="title">Pegawai</h1>
        <h2 className="subtitle">Tabel Pegawai</h2>
        <Link to="/products/add" className="button is-primary mb-2">Tambah</Link>
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mt-2">
            <thead>
                <tr>
                    <th>No</th>
                    <th>NPP</th>
                    <th>Nama</th>
                    <th>TMT Kerja</th>
                    <th>Status</th>
                    <th>Jenis Kelamin</th>
                    <th>Profesi</th>
                    <th>Tanggal Lahir</th>
                    <th>No Telp</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index)=>(
                    <tr key={product.uuid}>
                        <td>{index + 1}</td>
                        <td>{product.npp}</td>
                        <td>{product.name}</td>
                        <td>{product.awal_masuk}</td>
                        <td>{product.status_pegawai}</td>
                        <td>{product.jenis_kelamin}</td>
                        <td>{product.profesi}</td>
                        <td>{product.tanggal_lahir}</td>
                        <td>{product.no_hp}</td>
                        <td>
                            <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
                            <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList;