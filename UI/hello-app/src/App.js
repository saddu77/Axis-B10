import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';

function formatName(user){
  return user.firstName + " " + user.lastName;
}


function App() {
  const name = "John";
  const age = 23;
  const element = <h2> Hello , {name}</h2>
  const user = {
    firstName : 'John',
    lastName : 'Doe'
  }
  return (
    <div >
      <h2> Welcome to React</h2>
      <h3> Learning Web App Develpment</h3>
      <h4> Name is : {name}</h4>
      <h4> Age is : {age}</h4>
      <h4>  Welcome {formatName(user)}</h4> 
      
    <Welcome name="Albert"/>
    <Clock />
    <Toggle />
    <Greeting isLoggedIn = {true}/>
    </div>
  );
}

export default App;
