import React from 'react'

const App = () => {
  const names = ["Emily","Liam","Sophia","Noah","Olivia","Jackson","Emma","Lucas","Ava","Aiden","Isabella","Mason","Mia","Ethan","Harper"];

  return (
    <>
    <div className='text-5xl'>App</div>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    </>
  )
}

export default App