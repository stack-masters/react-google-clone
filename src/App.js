import './App.css'
import { useState } from 'react'
import Logo from './img/logo.png'
import Search from './img/search.svg'

function App() {
  
  const [value, setValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/search?q=${value}`
  }

  return (
    <div className='main'>
      <img className='logo' src={Logo} />
      <form className='searchbar' onSubmit={onSubmitHandler}>
        <img className='search' src={Search} />
        <input type="text" placeholder="Search ...."
                value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  )
}

export default App