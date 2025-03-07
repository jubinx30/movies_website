import React, { useState } from 'react'
import Search  from './components/Search.jsx'

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
    
      <div className="pattern" />
      <div className= "wrapper"> 
      <header>
        <img src ='./hero.svg' alt = "hero_banner"/>
       <h1><span className='text-gradient1'>Your</span><span className='text-gradient2'>Movie</span><span className='text-gradient3'>Universe.com</span></h1>
      </header>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <h1 className='text-white'> {searchTerm}</h1>
    </div>
    </main>
  )
}

export default App;
