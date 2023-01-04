import { useEffect,React, useState } from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'
function Products(){
    const [products,setProducts] = useState([]);
    const url = 'http://localhost:8080/products/fetch';

   useEffect( () => {
        axios.get(url).then( res => {           
            setProducts(res.data);            
        })
   }, []);

    return(
        <div id="products-div">
           <ul  id="horizontal-list">
            <li>  <Link id="link" to="/home">Home</Link>  </li>
            <li>  <Link id="link" to="/products">   Products </Link> </li>
            <li>  <Link id="link" to="/products">   Orders </Link> </li>
            <li>  <Link id="link" to="/products">   Payments </Link> </li>
            <li >  <Link id="logout" to="/login">  Logout </Link> </li>
        </ul>
         <h2> List Products  </h2>
            <table id="products-table">
            <tr>
                <td><th> ID </th></td>
                <td><th> Name </th></td>
                <td><th> Quantity </th></td>
                <td><th> Edit </th></td>
                <td><th> Delete </th></td>
            </tr>
            {products.map( p => <tr><td>{p.productId}</td>
                                    <td>{p.productName}</td>
                                    <td>{p.productQty}</td>
                                    <td><a>Edit</a></td>
                                    <td><a>Delete</a></td></tr>)}

            </table> 
       
         
        </div>     
    )
}

export default Products