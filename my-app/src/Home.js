import  { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css'

function Home(){
    const [count, setCount] = useState(0);
    return(
        <>
        <ul  id="horizontal-list">
            <li> Home </li>
            <li>  <Link id="link" to="/products">   Products </Link> </li>
            <li>  <Link id="link" to="/products">   Orders </Link> </li>
            <li>  <Link id="link" to="/products">   Payments </Link> </li>
            <li >  <Link id="logout" to="/login">  Logout </Link> </li>
        </ul>
        <div id="home-div">
        <h2> Home Page</h2>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>  Click me  </button>
        </div>
        
    
        </>       
    )
}

export default Home