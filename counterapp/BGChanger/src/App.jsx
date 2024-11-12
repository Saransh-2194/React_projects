import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex' }}>
        <button onClick={() => setColor('Red')}>Red</button>
        <button onClick={() => setColor('Green')}>Green</button>
        <button onClick={() => setColor('Blue')}>Blue</button>
        <button onClick={() => setColor('Yellow')}>Yellow</button>
        <button onClick={() => setColor('Grey')}>Grey</button>
        <button onClick={() => setColor('Pink')}>Pink</button>
        <button onClick={() => setColor('Lavender')}>Lavender</button>
        <button onClick={() => setColor('Purple')}>Purple</button>
        <button onClick={() => setColor('White')}>White</button>
        <button onClick={() => setColor('Black')}>Black</button>
      </div>
    </div>
  )
}

export default App
