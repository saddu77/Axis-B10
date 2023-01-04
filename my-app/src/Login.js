import  { Link } from 'react-router-dom';

function Login(){
    return(
        <>

<div id="signup-div">
            <h2> Login </h2>
            Username: <input type="text"  /> <br /> <br />
            Password: <input type="password"  /> <br /> <br />
            <button ><Link to="/home">  Login </Link></button> <br /> <br />
            
            <Link id="link" to="/signup">  Not Yet Registered ?? Sign Up </Link>
        </div>  

      
         
        
        </>     
    )
}

export default Login

