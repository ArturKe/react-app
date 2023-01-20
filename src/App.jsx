import { useState } from 'react'
import './App.css'
import PageLayout from '@/layouts/Page/PageLayout.jsx'
import Header from '@/components/header/Header.jsx'
import ListComponent from '@/components/lists/list/ListComponent.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [data, setData] = useState(0)

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

  console.log(import.meta.env)
  console.log(import.meta.url)
  console.log(new URL('./img.png', import.meta.url).href)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <PageLayout
                    header={<Header></Header>}
                    blocCenter={<ListComponent/>}
                />}
            />
            <Route path="/info" element={
                <PageLayout
                    header={<Header></Header>}
                    blocCenter={<div>Here is some info!</div>}
                />}
            />
        </Routes>

    </BrowserRouter>


    // <Routes>
    //   <Route path="/" element={<ListComponent/>} />
    // </Routes>
  )
}

export default App
