import React from 'react'
import Nav from '../components/Nav'
import Zenitsu from '../components/Zenitsu'

const App = () => {
  return (
    <div className=''>
      <Nav />
      <div id="hp-container" className='relative'>
        <div id="hp-content" className=' w-screen max-w-7xl mx-auto text-center pt-10'>
          <Zenitsu />
        </div>
      </div>
    </div >
  )
}

export default App