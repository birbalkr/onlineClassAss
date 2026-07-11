import React from 'react'
import Form from './components/Form'
import RHF from './components/RHF'

function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200'>
      {/* <Form/> */}

      <div className='text-2xl text-start'>React Hook Form</div>
      <RHF />
    </div>
  )
}

export default App