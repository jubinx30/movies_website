import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
const [hasLiked, sethasLiked] = useState(false); 

  return(
    <div className ="card">   
    <h1> {title} </h1>
    <button onClick = {() => sethasLiked(true)}>
       Like 
       </button>
    </div>
  );
}

const App  = () => {
  
  return (
    <div className='card-container'>
      <Card title ="Star Wars"  />
      <Card title ="Star Wars" />
      <Card title ="Star Wars" />
    </div>
  );
}

export default App
