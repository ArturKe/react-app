import { useState } from 'react'
import './App.css'
import PageLayout from './layouts/Page/PageLayout'
import Header from './components/header/Header'
import ListComponent from './components/lists/list/ListComponent'


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
    <PageLayout
      header={<Header></Header>}
      blocCenter={<ListComponent></ListComponent>}
    ></PageLayout>
  )
}

export default App
