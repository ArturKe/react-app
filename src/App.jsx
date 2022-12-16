import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button/button'
import Header from './layouts/header/Header'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ivan')
  const [data, setData] = useState(0)
  const minus = () => setCount((count) => count - 1)
  const plus = () => setCount((count) => count + 1)

  const fetchData = async () => {
    setData(data + 25)
    const link = `http://127.0.0.1:3000/api/json/${data}`
    const link2 = 'http://127.0.0.1:3000/api/user/100500'
    // const headers = [
    //   ['Content-Type', 'text/html', 'extra'],
    //   ['Accept'],
    // ]
    const config = {
      method: 'GET'
      // mode: 'no-cors'
    }
    try {
      // fetch(link, config).then((res) => console.log(res)).then(data => console.log(data))
      const response = await fetch(link, config)
      console.log(await response.json())
    } catch (error) {
      console.log('No Data')
    }
  }

  const fromChild = () => {console.log("Hello from Child")}

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Header>
          <Button event={plus}>
            Plus count is {count}
          </Button>
          <Button event={minus}>
            Minus count is {count} 
          </Button>
          <Button event={fetchData}>
            Fetch data {data}
          </Button>
        </Header>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Count is: {count}</p>
        <Button event={fromChild} name="hello"></Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
