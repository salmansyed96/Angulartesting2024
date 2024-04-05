import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur tempore accusantium natus nemo molestiae, aut a repudiandae illo minus?</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia molestias dolore eaque impedit eius sed quis iste suscipit iusto.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem alias accusamus hic fugiat saepe veritatis sapiente magnam repellendus. Minus.</p>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
